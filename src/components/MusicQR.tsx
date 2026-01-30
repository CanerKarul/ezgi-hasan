import React, { useState } from 'react';
import { Music, X } from 'lucide-react';
import styles from './MusicQR.module.css';
import qrImage from '../assets/memories/sarki.jpeg';

const MusicQR: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.container}>
            {isOpen && (
                <div className={styles.popup}>
                    <img src={qrImage} alt="Song QR Code" className={styles.qrImage} />
                    <span className={styles.label}>Şarkımız için dinle</span>
                </div>
            )}

            <button
                className={styles.button}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle QR Code"
            >
                {isOpen ? <X size={24} /> : <Music size={24} />}
            </button>
        </div>
    );
};

export default MusicQR;
