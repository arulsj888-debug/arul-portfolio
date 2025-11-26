import Head from "next/head";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import ParallaxBackground from "../components/ParallaxBackground";
import ProjectCarousel from "../components/ProjectCarousel";
import HelloAnimation from "../components/HelloAnimation";
import DarkModeToggle from "../components/DarkModeToggle";
import StarsBackground from "../components/StarsBackground";
import VideoBackground from "../components/VideoBackground";
import ModelTerminal from "../components/ModelTerminal";
import GlitchText from "../components/GlitchText";
import GlowButton from "../components/GlowButton";
import QuickActions from "../components/QuickActions";
import TechnicalArsenal from "../components/TechnicalArsenal";

import Script from "next/script";

export default function Home() {
  const router = useRouter();
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [hideHello, setHideHello] = useState(false);
  const [shouldShowHello, setShouldShowHello] = useState(null); // null = checking, true = show, false = skip
  const [backgroundMode, setBackgroundMode] = useState('neutral');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const projectsRef = useRef(null);
  const labsRef = useRef(null);
  const contactRef = useRef(null);
  const technicalArsenalRef = useRef(null);

  // Map lab names to project indices
  const projectMap = {
    'Proctoring': 0, // AI Automated Proctoring System
    'AgroScan': 1,   // AgroScan AI: Crop Disease Detection & Treatment
    'SOS': 2,        // SOS (Smart Observation System) Attendance
    'Emotion': 3,    // Real-Time Classroom Emotion Detection & Feedback System
    'Quiz': 4,       // AI Gesture-Based Quiz Platform
    'KQuiz': 5,      // K-Quiz Gamified Learning Platform
    'AITutor': 6,    // AI Tutor & Real-Time Conversation Manager
    'VSQuiz': 7,     // VS Quiz: AR Holographic Trivia
    'VirtualMouse': 8, // AI Virtual Mouse: Contactless Computer Control
    'SmartAnnotation': 9 // Smart Annotation Tool: Multi-Modal Speaker Diarization
  };

  const scrollToProject = (projectKey) => {
    const projectIndex = projectMap[projectKey];
    if (projectIndex !== undefined) {
      // Scroll to projects section with offset
      if (projectsRef.current) {
        const elementPosition = projectsRef.current.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 100; // 100px offset from top
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      // Update carousel to show the project
      setTimeout(() => {
        setCarouselIndex(projectIndex);
      }, 500);
    }
  };

  const scrollToLabs = () => {
    if (labsRef.current) {
      const elementPosition = labsRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 100;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      const elementPosition = contactRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 100;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    // Check if user is returning from another page or has seen hello before
    const hasSeenHello = localStorage.getItem('hasSeenHello');
    const fromOtherPage = router.query.from;
    const isReturning = hasSeenHello || fromOtherPage;
    
    if (isReturning) {
      // Skip hello animation completely
      setShouldShowHello(false);
      setHideHello(true);
      setShowPortfolio(true);
    } else {
      // First time visitor - show hello animation
      setShouldShowHello(true);
      const portfolioTimer = setTimeout(() => {
        setShowPortfolio(true);
        localStorage.setItem('hasSeenHello', 'true');
      }, 5800);

      return () => clearTimeout(portfolioTimer);
    }
  }, [router.query]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll(".fade-in, .project-item, .lab-item");
    fadeElements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

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

  return (
    <div>
      <Head>
        <title>Arul Vendhan - AI/ML & Computer Vision Engineer</title>
        <meta
          name="description"
          content="Arul Vendhan is an AI/ML Engineer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/CustomEase.min.js" strategy="beforeInteractive" />

      {shouldShowHello && !hideHello && (
        <HelloAnimation 
          onComplete={() => setHideHello(true)} 
        />
      )}

      {showPortfolio && (
        <>
          <QuickActions 
            mode={backgroundMode}
            onProjectsClick={scrollToLabs}
            onContactClick={scrollToContact}
          />
          <DarkModeToggle 
            mode={backgroundMode} 
            onToggle={handleToggle} 
          />
        </>
      )}

      <motion.div
        initial={{ opacity: shouldShowHello === false ? 1 : 0, scale: shouldShowHello === false ? 1 : 0.95 }}
        animate={{ opacity: showPortfolio ? 1 : 0, scale: showPortfolio ? 1 : 0.95 }}
        transition={{ duration: shouldShowHello === false ? 0 : 1, ease: "easeOut" }}
        style={{ pointerEvents: showPortfolio ? 'auto' : 'none' }}
      >
        {backgroundMode === 'dark' ? (
          <motion.div key="dark" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}><StarsBackground /></motion.div>
        ) : backgroundMode === 'light' ? (
          <motion.div key="light" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}><ParallaxBackground mode="light" /></motion.div>
        ) : (
          <motion.div key="neutral" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}><VideoBackground /></motion.div>
        )}

        {/* CHANGED: Removed 'container' class from main to allow full width sections */}
        <main>
          
          {/* Top Section - Centered */}
          <div className="container">
            <section className="hero">
              <motion.h1 className="hero-intro" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                Hey, I&apos;m <GlitchText text="Arul Vendhan" />,
              </motion.h1>
              <motion.p className="hero-role" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                an AI/ML & Computer Vision Engineer
              </motion.p>
              <motion.p className="hero-description" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                who builds intelligent systems that see, understand, and interact with the world in real-time.
              </motion.p>
            </section>



            <section className="section fade-in">
              <h2 className="section-title">A Little History</h2>
              <div className="about-text">
                <p>
                  I&apos;m a 24-year-old engineer from Chennai, Tamil Nadu, India, specializing in computer vision and machine learning. 
                  Currently, I work as an AI/ML Engineer at DataSpark AI Solutions in Chennai.
                </p>
                <p style={{ marginTop: "1.5rem" }}>
                  My core strength lies in the end-to-end machine learning lifecycle. I have moved beyond simply consuming APIs to 
                  building and fine-tuning custom models from scratch. I specialize in curating complex datasets, handling class 
                  imbalances, and optimizing high-performance architectures—such as ResNet-50 and YOLO—to achieve production-grade 
                  accuracy in challenging real-world scenarios.
                </p>
                <p style={{ marginTop: "1.5rem" }}>
                  Beyond model training, I engineer the full-stack systems that bring these models to life. I architect high-concurrency 
                  pipelines where Computer Vision models collaborate with autonomous agents (built with LangGraph and CrewAI) to observe, 
                  reason, and interact with users in real-time. My work combines deep learning, real-time vision, and agentic workflows 
                  to create intelligent systems that don&apos;t just predict—they observe, react, and collaborate.
                </p>
              </div>

              <div ref={technicalArsenalRef}>
                <TechnicalArsenal mode={backgroundMode} />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ModelTerminal />
              </motion.div>
            </section>
          </div>

          {/* Projects Section - FULL WIDTH (Left Aligned) */}
          <section
            className="section"
            style={{
              position: "relative",
              zIndex: 5,
              width: "100%",
              maxWidth: "100%", /* Allows full screen width */
              padding: "0",     /* Handle padding in component */
            }}
          >
            {/* Align title to the left (approx 4vw margin to match carousel) */}
            <h2 
              className="section-title" 
              style={{ marginLeft: "4vw", marginBottom: "3rem", marginTop: "2rem" }}
              ref={projectsRef}
            >
              Projects
            </h2>
            <ProjectCarousel 
              externalIndex={carouselIndex}
              onIndexChange={setCarouselIndex}
            />
          </section>

          {/* AI & Vision Systems Section - FULL WIDTH */}
          <section className="section" ref={labsRef} style={{ 
            width: '100%', 
            maxWidth: '100%', 
            padding: '4rem 0',
            margin: '0',
            position: 'relative',
            zIndex: 10
          }}>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 10 }}>AI & Vision Systems</h2>
            <div className="labs-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '1.5rem', 
              width: '100%',
              maxWidth: 'none',
              margin: '0',
              padding: '0 3vw',
              position: 'relative',
              zIndex: 10
            }}>
              <GlowButton title="AI Automated Proctoring System" onClick={() => scrollToProject('Proctoring')} mode={backgroundMode} />
              <GlowButton title="Classroom Emotion Detection System" onClick={() => scrollToProject('Emotion')} mode={backgroundMode} />
              <GlowButton title="SOS Attendance System" onClick={() => scrollToProject('SOS')} mode={backgroundMode} />
              <GlowButton title="K-Quiz Gamified Learning" onClick={() => scrollToProject('KQuiz')} mode={backgroundMode} />
              <GlowButton title="AI Gesture-Based Quiz Platform" onClick={() => scrollToProject('Quiz')} mode={backgroundMode} />
              <GlowButton title="AI Tutor System" onClick={() => scrollToProject('AITutor')} mode={backgroundMode} />
              <GlowButton title="AgroScan AI Crop Disease Detection" onClick={() => scrollToProject('AgroScan')} mode={backgroundMode} />
              <GlowButton title="VS Quiz AR Holographic Trivia" onClick={() => scrollToProject('VSQuiz')} mode={backgroundMode} />
              <GlowButton title="AI Virtual Mouse Control" onClick={() => scrollToProject('VirtualMouse')} mode={backgroundMode} />
              <GlowButton title="Smart Annotation Tool" onClick={() => scrollToProject('SmartAnnotation')} mode={backgroundMode} />
            </div>
          </section>

          {/* Bottom Section - Centered */}
          <div className="container">

            <section className="section" ref={contactRef}>
              <h2 className="section-title">Get in Touch</h2>
              <div className="contact-info">
                <p>I&apos;m open to roles as an AI/ML Engineer, Computer Vision Engineer, or AI Engineer.</p>
                <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "1rem",
                      padding: "1rem 2rem",
                      background: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "15px",
                      border: "1px solid rgba(255, 255, 255, 0.1)"
                    }}
                  >
                    <span style={{ fontSize: "1.5rem" }}>✉</span>
                    <a href="mailto:arulvendhan.s@dsparkai.com" className="contact-link" style={{ fontSize: "1.1rem" }}>arulvendhan.s@dsparkai.com</a>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "1rem",
                      padding: "1rem 2rem",
                      background: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "15px",
                      border: "1px solid rgba(255, 255, 255, 0.1)"
                    }}
                  >
                    <span style={{ fontSize: "1.5rem" }}>☎</span>
                    <a href="tel:+918237564364" className="contact-link" style={{ fontSize: "1.1rem" }}>+91 8237564364</a>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ 
                      display: "flex", 
                      gap: "1.5rem",
                      marginTop: "1rem"
                    }}
                  >
                    <a href="https://github.com/arulsj888-debug" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
                    <span>·</span>
                    <a href="https://www.linkedin.com/in/arul-vendhan-8a9828326/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
                  </motion.div>
                </div>
              </div>
            </section>



            <footer className="footer">
              <p>© {new Date().getFullYear()} Arul Vendhan · Tamil Nadu, India</p>
            </footer>
          </div>
        </main>
      </motion.div>
    </div>
  );
}