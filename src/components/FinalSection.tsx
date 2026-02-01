import React, { useState, useEffect, useRef } from 'react';
import styles from './FinalSection.module.css';
import { Lock, Volume2, Play, Pause } from 'lucide-react';
import sarki from '../assets/memories/seni bana katsam.mp3';

const FinalSection: React.FC = () => {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [timeLeft, setTimeLeft] = useState('');
    const [showVolumeWarning, setShowVolumeWarning] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const checkDate = () => {
            const now = new Date();
            // Target: Feb 3, 2026 at 00:00:00
            const targetDate = new Date(2026, 1, 3, 0, 0, 0);

            if (now >= targetDate) {
                setIsUnlocked(true);
            } else {
                const diffTime = targetDate.getTime() - now.getTime();
                const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((diffTime / (1000 * 60)) % 60);
                const seconds = Math.floor((diffTime / 1000) % 60);

                // More granular countdown for short durations
                if (days === 0 && hours === 0) {
                    setTimeLeft(`${minutes} dakika ${seconds} saniye`);
                } else {
                    setTimeLeft(`${days} gün ${hours} saat ${minutes} dakika`);
                }
            }
        };

        checkDate();
        const interval = setInterval(checkDate, 60000); // Check every minute
        return () => clearInterval(interval);
    }, []);

    const handleVolumeConfirm = () => {
        setShowVolumeWarning(false);
        setIsPlaying(true);
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
            audioRef.current.play().catch(e => console.log("Autoplay prevented:", e));
        }

        // Auto-scroll to content
        setTimeout(() => {
            contentRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className={styles.container}>
            {!isUnlocked ? (
                <div className={styles.lockedState}>
                    <Lock size={40} className={styles.lockIcon} />
                    <p className={styles.lockedText}>
                        3 Şubat'ı bekle
                    </p>
                    <span className={styles.countdown}>{timeLeft} kaldı</span>
                </div>
            ) : (
                <>
                    {showVolumeWarning && (
                        <div className={styles.volumeOverlay}>
                            <div className={styles.volumeModal}>
                                <Volume2 size={48} className={styles.volumeIcon} />
                                <h3>Özel Bir An</h3>
                                <p>Lütfen daha iyi bir deneyim için cihazınızın sesini açın.</p>
                                <button onClick={handleVolumeConfirm} className={styles.confirmButton}>
                                    Hazırım
                                </button>
                            </div>
                        </div>
                    )}

                    <div ref={contentRef} className={styles.unlockedState}>
                        <div className={styles.content}>

                            <div className={styles.audioPlayer}>
                                <audio ref={audioRef} src={sarki} loop />
                                <div className={styles.playerControls}>
                                    <button onClick={togglePlay} className={styles.playButton}>
                                        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                                    </button>
                                    <div className={styles.songInfo}>
                                        <span className={styles.songTitle}>Seni Bana Katsam</span>
                                        <div className={styles.visualizer}>
                                            <div className={`${styles.bar} ${isPlaying ? styles.animating : ''}`}></div>
                                            <div className={`${styles.bar} ${isPlaying ? styles.animating : ''}`}></div>
                                            <div className={`${styles.bar} ${isPlaying ? styles.animating : ''}`}></div>
                                            <div className={`${styles.bar} ${isPlaying ? styles.animating : ''}`}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.letterContainer}>
                                <div className={styles.letterContent}>
                                    <p className={styles.salutation}>Sevgilim,</p>
                                    <p className={styles.date}>3 Şubat.</p>
                                    <p>İki yıl.</p>
                                    <p>Bazı tarihler vardır, insanın hayatını ikiye böler. Öncesi ve sonrası diye. 3 Şubat benim için tam olarak böyle bir gün. Çünkü o gün, sadece bir ilişkiye başlamadım; hayatımın en doğru yerini buldum.</p>
                                    <p>Samsun’a ilk geldiğin günü hatırlıyorum. Seni ilk kez gördüğüm anı. O anın çok büyük bir sahnesi yoktu belki ama benim içimde büyük bir şey oldu. Sana bakınca belli etmemeye çalıştım. Ama insan duyguları ufacık da olsa saklamayı ne kadar başarabiliyor ki? Sen fark ettin. Bakışlarımı kaçırdım, belli etmemeye çalıştım. Ama sen anladın. Hiçbir şey demedin. Ben de demedim. Ve o sessizlik, aslında bizim ilk cümlemiz oldu.</p>
                                    <p>Bir yıl boyunca belki de zamanı bekledik. Ama şimdi geriye dönüp baktığımda anlıyorum ki, o bir yıl, fark etmeden birbirimizi seçtiğimiz zamandı ve o bekleyiş bizim temelimizmiş.. Belki de en güzel başlangıçlar böyle oluyor; yüksek sesle değil, kalpten kalbe.</p>
                                    <p>Ezgim, senin yüzünde beni en çok etkileyen şey güzelliğinden önce masumiyetin. Gözlerin… Fotoğraflarda bile bakınca insanın içini sakinleştiren bir şey var. Sanki bir yere ait hissettiriyor. Sanki “buradasın, tamam” diyor.</p>
                                    <p>Saçlarını bağladığın o doğal halin… Hiç çabalamadan güzel olmayı başarıyorsun. Belki bunun farkında bile değilsin. Ama ben farkındayım. Gülüşün gösterişli değil, abartılı değil. Sade. Ama tam da bu yüzden gerçek.</p>
                                    <p>Askere gittiğimde benden bir mektup istemiştin ve hatta ilk günümüzden beri istiyordun. İçimde sana ait bir cümle vardı ama henüz tamamlanmamıştı. Belki cesaretim eksikti, belki kelimelerim yetersizdi, belki duygularımı tam anlatamıyordum. Ve ben sana o mektubu yazamadım. İçimde kaldı. O zaman yazamadığım her kelime bugün bu satırlara dönüştü. Belki geç kaldım ama eksik kalalım istemedim. Şimdi anlıyorum ki geç kalmış değilim. Olgunlaşmışım.</p>
                                    <p>Uzak mesafe… İnsanlara göre zor. Evet zor. Sarılamadığımız yüzlerce geceler oldu. Yan yana susamadığımız günler oldu. Ama mesafe sevgiyi azaltmadı. Aksine büyüttü. Çünkü biz birbirimizi sadece yan yana olduğumuzda değil, ayrı ayrı hayatlarımızın içinde de sevdik.</p>
                                    <p>Orhan Pamuk, Masumiyet Müzesi’nde “Mutlu bir hayat yaşadım diyebilmek için insanın hatıralarına ihtiyacı vardır.” der gibi yaşatır o hikâyeyi. Ben seninle hatıra biriktiriyorum sevgilim. Bazen bir mesaj, bazen bir görüntülü konuşma, bazen sadece “iyi geceler” deyişin… Küçük gibi görünen ama benim içimde sakladığım şeyler bunlar.</p>
                                    <p>Kemal, Füsun’un eşyalarına tutunarak aşkını yaşattı. Benim müzemde ise senin sesin var. Mesajların var. Gece attığın bir “iyi geceler” var. Samsun’daki o anlamaman için kendimi zorladığım dakikalar var. Ve 3 Şubat var.</p>
                                    <p>Nazım, “Seni düşünmek güzel şey” der ya… Seni düşünmek, uzun bir yolculuktan sonra ışığı yanan eve varmak gibi. Ve ben o evin kapısında her defasında sana yeniden âşık oluyorum. Çünkü sen benim varmak istediğim bir son değil, kalmak istediğim yer oldun. Ne mesafe bunu azaltabiliyor ne zaman eskitebiliyor. Aksine, her bekleyiş seni kalbimde biraz daha derinleştiriyor.</p>
                                    <p>Ezgim, sen benim hayatımda rastgele olmuş bir güzel tesadüf değilsin. Sen benim sabırla büyüyen hikâyemsin. İki yıl geçti. Belki fiziksel olarak hep yan yana değildik ama kalbim hiçbir gün senden uzak olmadı.</p>
                                    <p>Bazen gece düşünürken şunu fark ediyorum: Ben seninle sadece bugünümü değil, yarınlarımı da hayal ediyorum. Yanında rahat olmak istiyorum. Senin de benim yanımda rahat olmanı istiyorum. Hayatı sakin, huzurlu, güvenli bir yer haline getirelim istiyorum.</p>
                                    <p>Seninle bağırarak değil, derinleşerek sevmek istiyorum.</p>
                                    <p>İki yıl… Belki bazılarına kısa gelir. Ama biz o iki yıla mesafeyi, özlemi, sabrı, beklemeyi, ayrılığı, kavuşma anlarını sığdırdık.</p>
                                    <p>Ezgim, iyi ki Samsun’a geldin.<br />İyi ki karşılaştık.<br />İyi ki bir yıl sonra “evet” olduk.<br />İyi ki hayatımda varsın.</p>
                                    <p>Bu mektup, askerde yazamadığım mektubun geç kalmış hali değil. Bu, iki yılın olgunlaşmış hali.</p>
                                    <p>Gözlerin dolarsa bil ki ben o gözyaşının sebebi olmak için değil, o kalpte kalıcı olmak için yazdım bunu.</p>
                                    <p>Seni seviyorum.<br />Hem de acele etmeden.<br />Derin derin.</p>
                                    <p className={styles.closing}>Ve bil ki sevgilim, hayatımın en doğru cümlesi sensin.</p>
                                </div>
                            </div>

                            <div className={styles.infinityContainer}>
                                <span className={styles.infinity}>∞</span>
                                <span className={styles.infinityLabel}>Sonsuza dek</span>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default FinalSection;
