import Head from "next/head";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ParallaxBackground from "../components/ParallaxBackground";
import DarkModeToggle from "../components/DarkModeToggle";
import StarsBackground from "../components/StarsBackground";
import VideoBackground from "../components/VideoBackground";
import TechStackAnimation from "../components/TechStackAnimation";
import Script from "next/script";

export default function TechnicalArsenal() {
  const [backgroundMode, setBackgroundMode] = useState('neutral');
  const router = useRouter();

  useEffect(() => {
    document.body.classList.remove('dark-mode', 'light-mode', 'neutral-mode');
    if (backgroundMode === 'dark') {
      document.body.classList.add('dark-mode');
    } else if (backgroundMode === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.add('neutral-mode');
    }
  }, [backgroundMode]);

  const handleToggle = () => {
    if (backgroundMode === 'neutral') {
      setBackgroundMode('light');
    } else if (backgroundMode === 'light') {
      setBackgroundMode('dark');
    } else {
      setBackgroundMode('neutral');
    }
  };

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
    <div>
      <Head>
        <title>Technical Arsenal - Arul Vendhan</title>
        <meta
          name="description"
          content="Technical skills and expertise of Arul Vendhan - AI/ML Engineer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/CustomEase.min.js" strategy="beforeInteractive" />

      <DarkModeToggle 
        mode={backgroundMode} 
        onToggle={handleToggle} 
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {backgroundMode === 'dark' ? (
          <motion.div key="dark" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}><StarsBackground /></motion.div>
        ) : backgroundMode === 'light' ? (
          <motion.div key="light" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}><ParallaxBackground mode="light" /></motion.div>
        ) : (
          <motion.div key="neutral" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}><VideoBackground /></motion.div>
        )}

        <main className="container">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <button
              onClick={() => router.push('/?from=technical-arsenal')}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.8rem 1.5rem",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "25px",
                color: "white",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "500",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.2)";
                e.target.style.transform = "translateX(-5px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.1)";
                e.target.style.transform = "translateX(0)";
              }}
            >
              ← Back to Home
            </button>
          </motion.div>

          {/* Header */}
          <section className="hero">
            <motion.h1 
              className="hero-intro" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ textAlign: "center", marginBottom: "1rem" }}
            >
              <span style={{ fontSize: "2.5rem" }}>⚡</span> Technical Arsenal
            </motion.h1>
            <motion.p 
              className="hero-description" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ textAlign: "center", marginBottom: "3rem" }}
            >
              A comprehensive overview of my technical skills and expertise in AI/ML and Computer Vision
            </motion.p>
          </section>

          {/* Tech Stack Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TechStackAnimation />
          </motion.div>

          {/* Skills Grid */}
          <section className="section" style={{ marginTop: "4rem" }}>
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ textAlign: "center", marginBottom: "3rem" }}
            >
              Skills & Technologies
            </motion.h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3rem'
            }}>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    padding: '1.5rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.borderColor = 'rgba(0, 150, 255, 0.5)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 150, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    marginBottom: '1rem'
                  }}>
                    <span style={{ fontSize: '2rem' }}>{skill.icon}</span>
                    <h3 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      margin: '0',
                      color: '#ffffff'
                    }}>{skill.category}</h3>
                  </div>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.6rem'
                  }}>
                    {skill.items.map((item, i) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 + i * 0.05 }}
                        style={{
                          padding: '0.5rem 1rem',
                          background: 'rgba(0, 150, 255, 0.15)',
                          border: '1px solid rgba(0, 150, 255, 0.3)',
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          fontWeight: '500',
                          color: '#00aaff',
                          transition: 'all 0.3s ease',
                          cursor: 'default'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'rgba(0, 150, 255, 0.25)';
                          e.target.style.borderColor = 'rgba(0, 150, 255, 0.5)';
                          e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'rgba(0, 150, 255, 0.15)';
                          e.target.style.borderColor = 'rgba(0, 150, 255, 0.3)';
                          e.target.style.transform = 'translateY(0)';
                        }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Contact Links */}
          <section className="section" style={{ marginTop: "4rem", textAlign: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              style={{ 
                display: "flex", 
                gap: "2rem",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap"
              }}
            >
              <a 
                href="https://github.com/arulsj888-debug" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.8rem 1.5rem",
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "25px",
                  color: "white",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: "500",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(255, 255, 255, 0.2)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(255, 255, 255, 0.1)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                <span>📂</span> GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/arul-vendhan-8a9828326/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.8rem 1.5rem",
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "25px",
                  color: "white",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: "500",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(255, 255, 255, 0.2)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(255, 255, 255, 0.1)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                <span>💼</span> LinkedIn
              </a>
            </motion.div>
          </section>

          <footer className="footer" style={{ marginTop: "4rem" }}>
            <p>© {new Date().getFullYear()} Arul Vendhan · Tamil Nadu, India</p>
          </footer>
        </main>
      </motion.div>
    </div>
  );
}