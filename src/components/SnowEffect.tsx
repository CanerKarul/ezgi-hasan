import React, { useEffect, useState } from 'react';
import styles from './SnowEffect.module.css';

interface Snowflake {
    id: number;
    left: number;
    animationDuration: number;
    opacity: number;
    size: number;
}

const SnowEffect: React.FC = () => {
    const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

    useEffect(() => {
        // Create initial snowflakes
        const flakes = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            animationDuration: Math.random() * 3 + 2, // 2-5s
            opacity: Math.random(),
            size: Math.random() * 10 + 10,
        }));
        setSnowflakes(flakes);
    }, []);

    return (
        <div className={styles.snowContainer}>
            {snowflakes.map((flake) => (
                <div
                    key={flake.id}
                    className={styles.snowflake}
                    style={{
                        left: `${flake.left}%`,
                        animationDuration: `${flake.animationDuration}s`,
                        opacity: flake.opacity,
                        fontSize: `${flake.size}px`,
                        animationDelay: `${Math.random() * 5}s`
                    }}
                >
                    ❄
                </div>
            ))}
        </div>
    );
};

export default SnowEffect;
