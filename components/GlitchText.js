import { useState, useEffect, useRef } from 'react';
import styles from '../styles/GlitchText.module.css';

const characters = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export default function GlitchText({ text, className = '', autoPlay = true }) {
  const [displayText, setDisplayText] = useState(text);
  const [isDecoding, setIsDecoding] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const decode = () => {
    if (isDecoding) return;
    
    setIsDecoding(true);
    let iteration = 0;
    const targetText = text;
    
    clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDisplayText(
        targetText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            
            if (index < iteration) {
              return targetText[index];
            }
            
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );
      
      if (iteration >= targetText.length) {
        clearInterval(intervalRef.current);
        setIsDecoding(false);
      }
      
      iteration += 1 / 3; // Slower decode for smoother effect
    }, 30);
  };

  useEffect(() => {
    if (autoPlay) {
      // Initial decode on mount
      timeoutRef.current = setTimeout(() => {
        decode();
      }, 500);
    }

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    decode();
  };

  return (
    <span 
      className={`${styles.glitchText} ${className}`}
      onMouseEnter={handleMouseEnter}
      data-text={text}
    >
      {displayText}
    </span>
  );
}
