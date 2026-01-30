import React, { useState, useEffect } from 'react';
import styles from './FinalSection.module.css';
import { Lock } from 'lucide-react';

const FinalSection: React.FC = () => {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const checkDate = () => {
            const now = new Date();
            const currentYear = now.getFullYear();
            // Locked until Feb 3rd of current year
            const targetDate = new Date(currentYear, 1, 3); // Month is 0-indexed (Jan=0, Feb=1)

            // If it's already past Feb 3rd, unlock
            if (now >= targetDate) {
                setIsUnlocked(true);
            } else {
                // Calculate days left
                const diffTime = Math.abs(targetDate.getTime() - now.getTime());
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                setTimeLeft(`${diffDays} day${diffDays > 1 ? 's' : ''}`);
            }
        };

        checkDate();
        // Optional: Check every minute if user keeps site open on the night of
        const interval = setInterval(checkDate, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.container}>
            {!isUnlocked ? (
                <div className={styles.lockedState}>
                    <Lock size={40} className={styles.lockIcon} />
                    <p className={styles.lockedText}>
                        Wait until February 3rd
                    </p>
                    <span className={styles.countdown}>{timeLeft} remaining</span>
                </div>
            ) : (
                <div className={styles.unlockedState}>
                    <div className={styles.content}>
                        <div className={styles.finalMedia}>
                            {/* Placeholder for Final Photo/Video */}
                            <div className={styles.mediaPlaceholder}>
                                <span>Anniversary Moment</span>
                            </div>
                        </div>

                        <div className={styles.message}>
                            <p>This isn’t just an anniversary.</p>
                            <p>It’s time we chose each other.</p>
                        </div>

                        <div className={styles.infinityContainer}>
                            <span className={styles.infinity}>∞</span>
                            <span className={styles.infinityLabel}>Still continuing</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FinalSection;
