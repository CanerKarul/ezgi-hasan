import React, { useState, useEffect } from 'react';
import styles from './Intro.module.css';

interface IntroProps {
    onStart: () => void;
}

const Intro: React.FC<IntroProps> = ({ onStart }) => {
    const [visible, setVisible] = useState(false);
    const [fadingOut, setFadingOut] = useState(false);

    useEffect(() => {
        // Trigger entrance animation
        const timer = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timer);
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
                <h1 className={styles.date}>03 · 02 · 20XX</h1>
                <p className={styles.subtitle}>Some moments open only when you touch them.</p>
                <button
                    className={styles.startButton}
                    onClick={handleStart}
                    aria-label="Start the experience"
                >
                    Start
                </button>
            </div>
        </div>
    );
};

export default Intro;
