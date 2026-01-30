export type MemoryType = 'photo' | 'video' | 'text';

export interface Memory {
    id: string;
    date: string;
    type: MemoryType;
    title?: string;
    content: string; // URL for media, text for text type
    thumbnail?: string; // For video
    description?: string;
    locked?: boolean;
}
