import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/QuickActions.module.css';

export default function QuickActions({ mode, onProjectsClick, onContactClick }) {
  const [isVisible, setIsVisible] = useState(true);
  const buttonRefs = {
    mail: useRef(null),
    contact: useRef(null),
    projects: useRef(null)
  };

  useEffect(() => {
    const handleScroll = () => {
      // Hide buttons when scrolled past 100px
      setIsVisible(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (type) => {
    if (type === 'projects') {
      onProjectsClick();
    } else {
      onContactClick();
    }
  };

  const handleMouseMove = (e, type) => {
    const button = buttonRefs[type].current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    button.style.setProperty('--mouse-x', `${x}px`);
    button.style.setProperty('--mouse-y', `${y}px`);
  };

  const actions = [
    {
      id: 'mail',
      icon: '✉',
      label: 'Email'
    },
    {
      id: 'contact',
      icon: '☎',
      label: 'Phone'
    },
    {
      id: 'projects',
      icon: '📂',
      label: 'Projects'
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className={styles.container}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {actions.map((action, index) => (
            <motion.button
              key={action.id}
              ref={buttonRefs[action.id]}
              className={`${styles.actionButton} ${styles[mode]}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              onClick={() => handleClick(action.id)}
              onMouseMove={(e) => handleMouseMove(e, action.id)}
            >
              <span className={styles.icon}>{action.icon}</span>
              <span className={styles.label}>{action.label}</span>
              
              {/* Glow effect */}
              <div className={styles.glow}></div>
            </motion.button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
