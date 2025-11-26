import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import styles from '../styles/TechnicalArsenal.module.css';

export default function TechnicalArsenal({ mode }) {
  const router = useRouter();

  const handleClick = () => {
    router.push('/technical-arsenal');
  };

  return (
    <motion.div
      className={styles.buttonContainer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <button
        className={`${styles.arsenalButton} ${styles[mode]}`}
        onClick={handleClick}
      >
        <span className={styles.buttonIcon}>⚡</span>
        <span className={styles.buttonText}>Technical Arsenal</span>
        <span className={styles.buttonArrow}>→</span>
      </button>
    </motion.div>
  );
}
