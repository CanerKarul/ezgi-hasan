import React, { useState, useEffect } from 'react';
import styles from './FinalSection.module.css';
import { Lock } from 'lucide-react';

const FinalSection: React.FC = () => {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const checkDate = () => {
            const now = new Date();
            // Target: Feb 3, 2026 at 00:00:00
            const targetDate = new Date(2026, 1, 3, 0, 0, 0);

            // If it's already past target date, unlock
            if (now >= targetDate) {
                setIsUnlocked(true);
            } else {
                // Calculate time left
                const diffTime = targetDate.getTime() - now.getTime();

                const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((diffTime / (1000 * 60)) % 60);

                setTimeLeft(`${days} gün ${hours} saat ${minutes} dakika`);
            }
        };

        checkDate();
        // Check every minute
        const interval = setInterval(checkDate, 60000);
        return () => clearInterval(interval);
    }, []);

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
                <div className={styles.unlockedState}>
                    <div className={styles.content}>
                        <div className={styles.finalMedia}>
                            {/* Placeholder for Final Photo/Video */}
                            <div className={styles.mediaPlaceholder}>
                                <span>Yıldönümü Anı</span>
                            </div>
                        </div>

                        <div className={styles.message}>
                            <p>Bu sadece bir yıldönümü değil.</p>
                            <p>Birbirimizi seçtiğimiz gün.</p>
                        </div>

                        <div className={styles.infinityContainer}>
                            <span className={styles.infinity}>∞</span>
                            <span className={styles.infinityLabel}>Sonsuza dek</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FinalSection;
