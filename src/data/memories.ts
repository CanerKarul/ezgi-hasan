import type { Memory } from '../types';
import silentFeeling from '../assets/memories/silent_feeling.jpg';
import firstIly from '../assets/memories/first_ily.jpg';
import feb4_2024 from '../assets/memories/feb_4_2024.png';
import mar30_2024 from '../assets/memories/mar_30_2024.png';
import jun8_2024 from '../assets/memories/jun_8_2024.png';
import jul27_2024 from '../assets/memories/jul_27_2024.png';
import sep25_2024 from '../assets/memories/sep_25_2024.png';
import sep23_2024 from '../assets/memories/sep_23_2024.png';
import feb24_2025 from '../assets/memories/feb_24_2025.png';
import mar9_2024 from '../assets/memories/mar_9_2024.png';
import jun10_2024 from '../assets/memories/jun_10_2024.png';
import jan24_2026 from '../assets/memories/jan_24_2026.png';

export const memories: Memory[] = [
    {
        id: '1',
        date: '9 Ocak 2023',
        type: 'photo',
        content: silentFeeling,
        description: 'O an bilmiyordun belki… Ama içimde, bir gün ‘biz’ olacağımızı sessizce hissetmiştim.',
        locked: false,
    },
    {
        id: '2',
        date: '4 Şubat 2024',
        type: 'photo',
        content: feb4_2024,
        description: 'Sevgililiğimizin 2. günü… O an, bu ilişkinin sıradan değil, anlamlı olacağını hissetmiştim.',
        locked: false,
    },
    {
        id: '3',
        date: '5 Şubat 2024',
        type: 'photo',
        content: firstIly,
        description: 'Ankara Gençlik Parkı. Bana ilk defa "seni seviyorum" dediğin o büyülü an.',
        locked: false,
    },
    {
        id: '4',
        date: '9 Mart 2024',
        type: 'photo',
        content: mar9_2024,
        title: 'Eskişehir',
        description: '',
        locked: false,
    },
    {
        id: '5',
        date: '30 Mart 2024',
        type: 'photo',
        content: mar30_2024,
        description: 'Sen arabaya doğru gelirken gülümsemeni gördüm. O an anladım; bu yol seninle anlamlı.',
        locked: false,
    },
    {
        id: '6',
        date: '8 Haziran 2024',
        type: 'photo',
        content: jun8_2024,
        description: 'Bu fotoğraftaki günde artık daha rahat hissettiğini gördüm ve aramızdaki bağın gerçekten güçlendiğini anladım.',
        locked: false,
    },
    {
        id: '7',
        date: '10 Haziran 2024',
        type: 'photo',
        content: jun10_2024,
        title: 'Ankara',
        description: '',
        locked: false,
    },
    {
        id: '8',
        date: '27 Temmuz 2024',
        type: 'photo',
        content: jul27_2024,
        description: 'Doğum gününde, o yoğunluğun ve baskının arasında yüzünü biraz olsun güldürebilmek için geldim. Çünkü en zor zamanlarında yanında olmak, seni sevmenin en gerçek hali.',
        locked: false,
    },
    {
        id: '9',
        date: '23 Eylül 2024',
        type: 'photo',
        content: sep23_2024,
        description: 'Adalar’da birbirimize bakıp güldüğümüz o an… Ne poz verdik ne plan yaptık. Belki de en sevdiğim halimiz buydu.',
        locked: false,
    },
    {
        id: '10',
        date: '25 Eylül 2024',
        type: 'photo',
        content: sep25_2024,
        description: 'İlk tatilimiz, İstanbul… Balat’ta gülüşünü yakaladığım o an, o sokakların en güzel rengi sendin.',
        locked: false,
    },
    {
        id: '11',
        date: '24 Şubat 2025',
        type: 'photo',
        content: feb24_2025,
        description: 'Kapadokya’da bu fotoğrafı annene gönderdiğimiz an… Hayatına gerçekten dahil olduğumu ilk kez hissettiğim andı.',
        locked: false,
    },
    {
        id: '12',
        date: '24 Ocak 2026',
        type: 'photo',
        content: jan24_2026,
        description: 'Kolay gelmedik bu güne. Ve şimdi annenle tanışacak noktaya geldiysek, bu sadece sevgi değil; emek verdiğimiz bir ‘biz’ demek.',
        locked: false,
    }
];
