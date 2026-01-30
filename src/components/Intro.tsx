import React, { useState, useEffect } from 'react';
import styles from './Intro.module.css';

interface IntroProps {
    onStart: () => void;
}

const Intro: React.FC<IntroProps> = ({ onStart }) => {
    const [visible, setVisible] = useState(false);
    const [fadingOut, setFadingOut] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState('');

    useEffect(() => {
        const startDate = new Date('2024-02-03T00:00:00');

        const updateTimer = () => {
            const now = new Date();
            const diff = now.getTime() - startDate.getTime();

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setTimeElapsed(`${days} Gün ${hours} Saat ${minutes} Dakika ${seconds} Saniye`);
        };

        const timerInterval = setInterval(updateTimer, 1000);
        updateTimer(); // Initial call

        // Trigger entrance animation
        const timer = setTimeout(() => setVisible(true), 100);

        return () => {
            clearTimeout(timer);
            clearInterval(timerInterval);
        };
    }, []);

    const handleStart = () => {
        setFadingOut(true);
        setTimeout(() => {
            onStart();
        }, 1000); // Wait for transition to finish
    };

    return (
        <div className={`${styles.container} ${fadingOut ? styles.fadeOut : ''}`}>
            <div className={`${styles.content} ${visible ? styles.visible : ''}`}>
                <h1 className={styles.date}>03 · 02 · 2024</h1>

                <div className={styles.counterContainer}>
                    <p className={styles.counterLabel}>Birlikte yürüdüğümüz zaman</p>
                    <p className={styles.counterValue}>{timeElapsed}</p>
                </div>

                <p className={styles.subtitle}>Bu sayfa, sana anlatamadığım ama her gün hissettiğim her şey için.</p>
                <button
                    className={styles.startButton}
                    onClick={handleStart}
                    aria-label="Start the experience"
                >
                    Başla
                </button>
            </div>
        </div>
    );
};

export default Intro;
