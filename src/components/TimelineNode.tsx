import React, { useRef, useEffect, useState } from 'react';
import { Lock, Play, Image as ImageIcon, FileText } from 'lucide-react';
import type { Memory } from '../types';
import styles from './TimelineNode.module.css';

interface TimelineNodeProps {
    memory: Memory;
    index: number;
    onOpen: (memory: Memory) => void;
}

const TimelineNode: React.FC<TimelineNodeProps> = ({ memory, index, onOpen }) => {
    const nodeRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const isLeft = index % 2 === 0;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2, rootMargin: '0px' }
        );

        if (nodeRef.current) {
            observer.observe(nodeRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleClick = () => {
        if (!memory.locked) {
            onOpen(memory);
        }
    };

    return (
        <div
            ref={nodeRef}
            className={`${styles.nodeWrapper} ${isLeft ? styles.left : styles.right} ${isVisible ? styles.visible : ''}`}
        >
            <div className={styles.connector} />

            <div className={styles.dateLabel}>
                {memory.date}
            </div>

            <div
                className={`${styles.card} ${memory.locked ? styles.locked : ''}`}
                onClick={handleClick}
            >
                {memory.locked ? (
                    <div className={styles.lockedContent}>
                        <Lock size={20} className={styles.icon} />
                        <span>Kilitli Anı</span>
                    </div>
                ) : (
                    <>
                        <div className={styles.mediaPreview}>
                            {memory.type === 'photo' && (
                                <div
                                    className={styles.imagePlaceholder}
                                    style={{ backgroundImage: `url(${memory.content})` }}
                                >
                                    <div className={styles.overlay}>
                                        <ImageIcon size={24} />
                                    </div>
                                </div>
                            )}

                            {memory.type === 'video' && (
                                <div className={styles.videoPlaceholder}>
                                    {/* Thumbnail implementation would go here */}
                                    <div className={styles.overlay}>
                                        <Play size={24} />
                                    </div>
                                </div>
                            )}

                            {memory.type === 'text' && (
                                <div className={styles.textPreview}>
                                    <FileText size={24} className={styles.textIcon} />
                                    <p>{memory.title || "Anıyı Oku"}</p>
                                </div>
                            )}
                        </div>

                        <div className={styles.cardFooter}>
                            <span className={styles.viewLabel}>
                                {memory.type === 'text' ? 'Oku' : 'İncele'}
                            </span>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default TimelineNode;
