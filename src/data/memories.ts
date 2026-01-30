import type { Memory } from '../types';

export const memories: Memory[] = [
    {
        id: '1',
        date: 'July 15, 2018',
        type: 'photo',
        content: 'https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=1000&auto=format&fit=crop',
        description: 'The day we first met at the coffee shop.',
        locked: false,
    },
    {
        id: '2',
        date: 'August 2, 2019',
        type: 'text',
        content: '',
        title: 'A Little Note',
        description: 'I remember how you laughed that day.',
        locked: false,
    },
    {
        id: '3',
        date: 'December 20, 2020',
        type: 'video',
        content: 'https://www.w3schools.com/html/mov_bbb.mp4',
        thumbnail: 'https://via.placeholder.com/300',
        description: 'Our first trip together.',
        locked: false,
    },
    {
        id: '4',
        date: 'February 3, 2021',
        type: 'photo',
        content: 'https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=1000&auto=format&fit=crop',
        description: 'Locked memory test.',
        locked: true,
    },
];
