import type { Memory } from '../types';
import firstIly from '../assets/memories/first_ily.jpg';
import silentFeeling from '../assets/memories/silent_feeling.jpg';

export const memories: Memory[] = [
    {
        id: '-1',
        date: '9 Ocak 2023',
        type: 'photo',
        content: silentFeeling,
        description: 'O an bilmiyordun belki… Ama içimde, bir gün ‘biz’ olacağımızı sessizce hissetmiştim.',
        locked: false,
    },
    {
        id: '0',
        date: '5 Şubat 2024',
        type: 'photo',
        content: firstIly,
        description: 'Ankara Gençlik Parkı. Bana ilk defa "seni seviyorum" dediğin o büyülü an.',
        locked: false,
    },
    {
        id: '1',
        date: '15 Temmuz 2018',
        type: 'photo',
        content: 'https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=1000&auto=format&fit=crop',
        description: 'Kahve dükkanında ilk tanıştığımız gün.',
        locked: false,
    },
    {
        id: '2',
        date: '2 Ağustos 2019',
        type: 'text',
        content: '',
        title: 'Küçük Bir Not',
        description: 'O gün nasıl güldüğünü hala hatırlıyorum.',
        locked: false,
    },
    {
        id: '3',
        date: '20 Aralık 2020',
        type: 'video',
        content: 'https://www.w3schools.com/html/mov_bbb.mp4',
        thumbnail: 'https://via.placeholder.com/300',
        description: 'Birlikte ilk yolculuğumuz.',
        locked: false,
    },
    {
        id: '4',
        date: '3 Şubat 2021',
        type: 'photo',
        content: 'https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=1000&auto=format&fit=crop',
        description: 'Kilitli anı testi.',
        locked: true,
    },
];
