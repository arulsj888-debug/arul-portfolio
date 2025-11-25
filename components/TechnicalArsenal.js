import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/TechnicalArsenal.module.css';

export default function TechnicalArsenal({ mode }) {
  const [isOpen, setIsOpen] = useState(false);

  const skills = [
    {
      category: 'Deep Learning Frameworks',
      icon: '🧠',
      items: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'Hugging Face Transformers']
    },
    {
      category: 'Model Architectures & Training',
      icon: '🏗️',
      items: ['YOLO', 'ResNet-50', 'Vision Transformers (ViT)', 'Custom Model Fine-Tuning', 'Transfer Learning', 'Dataset Curation & Balancing']
    },
    {
      category: 'Computer Vision Libraries',
      icon: '👁️',
      items: ['OpenCV', 'MediaPipe', 'InsightFace', 'Ultralytics YOLO', 'Dlib']
    },
    {
      category: 'Agentic AI & LLM Frameworks',
      icon: '🤖',
      items: ['LangGraph', 'CrewAI', 'LangChain', 'OpenAI', 'Model Context Protocol (MCP)', 'RAG Pipelines']
    },
    {
      category: 'Backend & Deployment',
      icon: '⚙️',
      items: ['FastAPI', 'Flask', 'Uvicorn', 'Socket.IO (WebSockets)', 'AsyncIO']
    },
    {
      category: 'Databases',
      icon: '💾',
      items: ['MongoDB', 'PostgreSQL']
    },
    {
      category: 'Languages',
      icon: '💻',
      items: ['Python', 'JavaScript', 'C++']
    }
  ];

  return (
    <>
      {/* Button */}
      {!isOpen && (
        <motion.div
          className={styles.buttonContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <button
            className={`${styles.arsenalButton} ${styles[mode]}`}
            onClick={() => setIsOpen(true)}
          >
            <span className={styles.buttonIcon}>⚡</span>
            <span className={styles.buttonText}>Technical Arsenal</span>
            <span className={styles.buttonArrow}>→</span>
          </button>
        </motion.div>
      )}

      {/* Overlay Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className={`${styles.modal} ${styles[mode]}`}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>
                  <span className={styles.titleIcon}>⚡</span>
                  Technical Arsenal
                </h2>
                <button
                  className={styles.closeButton}
                  onClick={() => setIsOpen(false)}
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              {/* Skills Grid */}
              <div className={styles.skillsGrid}>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.category}
                    className={styles.skillCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={styles.cardHeader}>
                      <span className={styles.cardIcon}>{skill.icon}</span>
                      <h3 className={styles.cardTitle}>{skill.category}</h3>
                    </div>
                    <div className={styles.cardItems}>
                      {skill.items.map((item, i) => (
                        <motion.span
                          key={item}
                          className={styles.skillTag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
