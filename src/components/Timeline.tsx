import React, { useRef, useState } from 'react';
import styles from './Timeline.module.css';
import TimelineNode from './TimelineNode';
import Modal from './Modal';
import type { Memory } from '../types';

import FinalSection from './FinalSection';

interface TimelineProps {
    memories: Memory[];
}

const Timeline: React.FC<TimelineProps> = ({ memories }) => {
    const lineRef = useRef<HTMLDivElement>(null);
    const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
    const [unlockedIds, setUnlockedIds] = useState<string[]>([]);

    const handleOpenMemory = (memory: Memory) => {
        setSelectedMemory(memory);

        // Dynamic unlock logic: Viewing a memory unlocks the next one
        const index = memories.findIndex(m => m.id === memory.id);
        if (index >= 0 && index < memories.length - 1) {
            const nextMemory = memories[index + 1];
            if (!unlockedIds.includes(nextMemory.id)) {
                setUnlockedIds(prev => [...prev, nextMemory.id]);
            }
        }
    };

    const handleCloseModal = () => {
        setSelectedMemory(null);
    };

    return (
        <div className={styles.scaffold}>
            <div className={styles.line} ref={lineRef} />

            <div className={styles.nodesContainer}>
                {memories.map((mem, i) => {
                    // Check if memory is natively locked in data, 
                    // AND not yet unlocked by user interaction
                    const isLocked = mem.locked && !unlockedIds.includes(mem.id);

                    return (
                        <TimelineNode
                            key={mem.id}
                            memory={{ ...mem, locked: isLocked }}
                            index={i}
                            onOpen={handleOpenMemory}
                        />
                    );
                })}

                <FinalSection />
            </div>

            {selectedMemory && (
                <Modal memory={selectedMemory} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default Timeline;
