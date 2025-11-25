import { useRef } from 'react';
import styles from '../styles/GlowButton.module.css';

export default function GlowButton({ title, onClick, mode = 'neutral' }) {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    buttonRef.current.style.setProperty('--x', `${x}px`);
    buttonRef.current.style.setProperty('--y', `${y}px`);
  };

  return (
    <button
      ref={buttonRef}
      className={`${styles.button} ${styles[mode]}`}
      onMouseMove={handleMouseMove}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
