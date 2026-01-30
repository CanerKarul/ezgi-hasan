import React, { useEffect, useState } from 'react';
import { X, Play } from 'lucide-react';
import type { Memory } from '../types';
import styles from './Modal.module.css';

interface ModalProps {
    memory: Memory;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ memory, onClose }) => {
    const [visible, setVisible] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = React.useRef<HTMLVideoElement>(null);

    useEffect(() => {
        setVisible(true);
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleClose = () => {
        setVisible(false);
        setTimeout(onClose, 500); // Wait for exit animation
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className={`${styles.overlay} ${visible ? styles.visible : ''}`}>
            <button className={styles.closeButton} onClick={handleClose}>
                <X size={32} />
            </button>

            <div className={styles.contentWrapper}>
                {memory.type === 'photo' && (
                    <div className={styles.mediaContainer}>
                        <img src={memory.content} alt="Memory" className={styles.image} />
                    </div>
                )}

                {memory.type === 'video' && (
                    <div className={styles.mediaContainer} onClick={togglePlay}>
                        <video
                            ref={videoRef}
                            src={memory.content}
                            className={styles.video}
                            loop
                            onEnded={() => setIsPlaying(false)}
                        />
                        {!isPlaying && (
                            <div className={styles.playButtonOverlay}>
                                <Play size={48} fill="white" />
                            </div>
                        )}
                    </div>
                )}

                {memory.type === 'text' && (
                    <div className={styles.textContainer}>
                        <h2 className={styles.title}>{memory.title}</h2>
                        <p className={styles.text}>{memory.description}</p>
                    </div>
                )}

                {memory.description && memory.type !== 'text' && (
                    <p className={styles.caption}>{memory.description}</p>
                )}
            </div>
        </div>
    );
};

export default Modal;
