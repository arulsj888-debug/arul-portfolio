import { useState, useEffect, useRef } from 'react';
import styles from '../styles/ModelTerminal.module.css';

const trainingLogs = [
  { text: '$ python train_model.py --epochs 50 --batch-size 32', delay: 100 },
  { text: 'Initializing Neural Network...', delay: 800 },
  { text: 'Loading CUDA device: Tesla V100', delay: 600 },
  { text: 'Dataset: 50,000 images loaded', delay: 500 },
  { text: 'Model: ResNet-50 (25.6M parameters)', delay: 700 },
  { text: '', delay: 300 },
  { text: 'Starting training...', delay: 500 },
  { text: '', delay: 200 },
  { text: 'Epoch 1/50: loss=2.3045 acc=0.1234 val_loss=2.2891 val_acc=0.1456', delay: 1000 },
  { text: 'Epoch 2/50: loss=1.8923 acc=0.3421 val_loss=1.8234 val_acc=0.3678', delay: 900 },
  { text: 'Epoch 3/50: loss=1.4567 acc=0.5234 val_loss=1.4123 val_acc=0.5456', delay: 900 },
  { text: 'Epoch 4/50: loss=1.1234 acc=0.6543 val_loss=1.0987 val_acc=0.6712', delay: 900 },
  { text: 'Epoch 5/50: loss=0.8901 acc=0.7456 val_loss=0.8654 val_acc=0.7589', delay: 900 },
  { text: '', delay: 300 },
  { text: 'Optimizing weights...', delay: 600 },
  { text: 'Applying batch normalization...', delay: 500 },
  { text: 'Dropout rate: 0.5', delay: 400 },
  { text: '', delay: 300 },
  { text: 'Epoch 6/50: loss=0.7123 acc=0.8012 val_loss=0.6987 val_acc=0.8134', delay: 900 },
  { text: 'Epoch 7/50: loss=0.5678 acc=0.8456 val_loss=0.5543 val_acc=0.8523', delay: 900 },
  { text: 'Epoch 8/50: loss=0.4567 acc=0.8789 val_loss=0.4456 val_acc=0.8812', delay: 900 },
  { text: '', delay: 300 },
  { text: 'Learning rate adjusted: 0.001 → 0.0001', delay: 600 },
  { text: '', delay: 200 },
  { text: 'Epoch 9/50: loss=0.3456 acc=0.9012 val_loss=0.3389 val_acc=0.9045', delay: 900 },
  { text: 'Epoch 10/50: loss=0.2789 acc=0.9234 val_loss=0.2712 val_acc=0.9267', delay: 900 },
  { text: '', delay: 300 },
  { text: 'Checkpoint saved: model_epoch_10.pth', delay: 700 },
  { text: 'Best validation accuracy: 92.67%', delay: 800 },
  { text: '', delay: 500 },
  { text: 'Training complete! 🎉', delay: 1000 },
  { text: '', delay: 2000 }
];

export default function ModelTerminal() {
  const [lines, setLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const terminalRef = useRef(null);

  useEffect(() => {
    if (currentLineIndex >= trainingLogs.length) {
      // Reset after completion
      const resetTimer = setTimeout(() => {
        setLines([]);
        setCurrentLineIndex(0);
        setCurrentText('');
        setCharIndex(0);
      }, 2000);
      return () => clearTimeout(resetTimer);
    }

    const currentLog = trainingLogs[currentLineIndex];
    
    if (charIndex < currentLog.text.length) {
      // Type character by character
      const typeTimer = setTimeout(() => {
        setCurrentText(prev => prev + currentLog.text[charIndex]);
        setCharIndex(charIndex + 1);
      }, 30); // Typing speed
      return () => clearTimeout(typeTimer);
    } else {
      // Line complete, move to next line
      const nextLineTimer = setTimeout(() => {
        setLines(prev => [...prev, currentLog.text]);
        setCurrentText('');
        setCharIndex(0);
        setCurrentLineIndex(currentLineIndex + 1);
      }, currentLog.delay);
      return () => clearTimeout(nextLineTimer);
    }
  }, [currentLineIndex, charIndex]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines, currentText]);

  return (
    <div className={styles.terminalContainer}>
      <div className={styles.terminalHeader}>
        <div className={styles.terminalButtons}>
          <span className={styles.btnClose}></span>
          <span className={styles.btnMinimize}></span>
          <span className={styles.btnMaximize}></span>
        </div>
        <div className={styles.terminalTitle}>model_training.sh</div>
      </div>
      <div className={styles.terminalBody}>
        <div className={styles.terminalContent} ref={terminalRef}>
        {lines.map((line, index) => (
          <div key={index} className={styles.terminalLine}>
            {line.startsWith('Epoch') ? (
              <span className={styles.epochLine}>{line}</span>
            ) : line.startsWith('$') ? (
              <span className={styles.commandLine}>{line}</span>
            ) : line.includes('✓') || line.includes('🎉') ? (
              <span className={styles.successLine}>{line}</span>
            ) : line.includes('error') || line.includes('Error') ? (
              <span className={styles.errorLine}>{line}</span>
            ) : (
              <span>{line}</span>
            )}
          </div>
        ))}
        {currentText && (
          <div className={styles.terminalLine}>
            {currentText.startsWith('Epoch') ? (
              <span className={styles.epochLine}>{currentText}<span className={styles.cursor}>▊</span></span>
            ) : currentText.startsWith('$') ? (
              <span className={styles.commandLine}>{currentText}<span className={styles.cursor}>▊</span></span>
            ) : (
              <span>{currentText}<span className={styles.cursor}>▊</span></span>
            )}
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
