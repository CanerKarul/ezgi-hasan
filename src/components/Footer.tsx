import React from 'react';
import styles from './Footer.module.css';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <a href="https://www.apricodi.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                <span className={styles.text}>Sevgiyle tasarlandı</span>
                <Heart size={14} className={styles.heart} />
                <span className={styles.brand}>Apricodi</span>
            </a>
        </footer>
    );
};

export default Footer;
