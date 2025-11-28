import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/ProjectCarousel.module.css';

const projects = [
  {
    id: 1,
    name: "AI Automated Proctoring System",
    role: "Computer Vision · Backend",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    description: "Automated remote proctoring system that replaces human proctors with an intelligent AI agent monitoring student behavior in real-time through webcam, flagging suspicious activities instantly.",
    tech: ["YOLOv12", "MediaPipe", "Flask", "Socket.IO", "MongoDB", "SMTP"],
    details: "Engineered multi-model AI pipeline running YOLOv12 for object detection (phones, unauthorized items) and MediaPipe for face mesh and eye tracking concurrently on every frame. Implemented gaze tracking using Eye Aspect Ratio (EAR) to detect prolonged eye closure or looking away. Built real-time violation detection for multiple persons and banned objects. Created live proctor dashboard for supervisors to monitor all active students with real-time alerts. Automated violation logging to MongoDB with timestamped evidence screenshots and email reports via SMTP.",
    year: "2025",
    confidence: "0.98"
  },
  {
    id: 2,
    name: "AgroScan AI: Crop Disease Detection & Treatment",
    role: "AI Researcher · Full-Stack Developer",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
    description: "Comprehensive agricultural diagnostic tool deployed at plants.zentrixnexus.in. Empowers farmers to instantly identify crop diseases by uploading a photo of an affected plant. Acts as a digital agronomist, providing immediate, actionable treatment advice covering both chemical fungicides and organic/cultural remedies.",
    tech: ["PyTorch", "ResNet-50", "Flask", "OpenAI API", "scikit-learn", "Bootstrap 5"],
    details: `HOW IT WORKS

• Instant Diagnosis: Users upload an image of a leaf or plant via the web interface. The backend processes this image using a custom-trained deep learning model to predict the specific disease (e.g., "Corn Common Rust," "Tomato Early Blight") with high confidence.

• AI-Powered Consultation: Once the disease is identified, the system queries OpenAI (GPT-4o Mini) with a specialized prompt. It acts as an expert pathologist to generate a structured treatment plan, including a description of the disease, recommended chemical treatments (with active ingredients), and organic control methods.

• User-Friendly Report: The user receives a clean, easy-to-read report that combines the visual prediction confidence with the text-based advice, making complex agricultural data understandable for anyone.

KEY TECHNICAL FEATURES

• Custom ResNet-50 Architecture: Fine-tuned a ResNet-50 model on a massive dataset of crop images. Implemented a custom training loop with mixed-precision training (autocast, GradScaler) and a cosine annealing learning rate scheduler to achieve optimal convergence and accuracy across 41 different crop disease classes.

• Robust Dataset Engineering: Built a rigorous data preparation pipeline that balances the dataset by sampling an equal number of images per class, cleaning class names (removing noise like "Healthy 200"), and splitting data into Train/Val/Test sets to ensure the model generalizes well to real-world photos.

• Hybrid AI Integration: Seamlessly combined traditional Computer Vision (PyTorch) for visual classification with Large Language Models (OpenAI API) for semantic reasoning and advice generation.

• Modern Web Deployment: Built the frontend with a responsive, glassmorphism-inspired UI using Bootstrap 5 and deployed the Flask backend on a scalable cloud infrastructure.`,
    year: "2025",
    confidence: "0.96",
    link: "https://plants.zentrixnexus.in/"
  },
  {
    id: 3,
    name: "SOS (Smart Observation System) Attendance",
    role: "AI Architect · Backend Engineer",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
    description: "Automated attendance tracking system using multi-camera arrays for large classrooms. Eliminates blind spots with three-camera coverage, processes live video feeds for facial recognition, and automatically marks attendance per subject period throughout the school day.",
    tech: ["InsightFace", "FastAPI", "WebSocket", "MongoDB", "PostgreSQL", "OpenCV", "AsyncIO"],
    details: `HOW IT WORKS

• Multi-Angle Capture: Aggregates video streams from three cameras positioned around the classroom, eliminating blind spots and ensuring students in back rows are accurately detected.

• Fully Automated Daily Workflow: Pulls timetable from PostgreSQL at day start, automatically wakes detection engine when periods begin, stops when periods end, and waits for next period—completely hands-off for teachers.

• End-of-Day Consolidation: Automatically compiles comprehensive Day Summary after final period, aggregating attendance across all subjects.

KEY TECHNICAL FEATURES

• Robust Face Recognition Pipeline: Implemented InsightFace with CPU optimization (CPUExecutionProvider) to detect and match student faces against pre-loaded embedding database in MongoDB.

• Concurrency & Locking: Designed thread-safe AttendanceSessionManager using asyncio.Lock to prevent race conditions when multiple cameras update database simultaneously.

• Resilient Architecture: Handles network instabilities gracefully with EOD Grace Periods to force-finalize attendance reports even if connection drops.

• Hybrid Database Strategy: PostgreSQL for structured relational data (Timetables, School Metadata) and MongoDB for high-volume attendance logs and face embeddings.

UNIQUE INNOVATIONS

• Zero-Touch Automation: No Start/Stop buttons needed—system runs autonomously based on bell schedule.

• Period-Wise Granularity: Tracks presence per period to identify students skipping specific classes while attending others.

• Multi-Camera Fusion: Creates unified attendance record from disjointed video feeds, solving occlusion problem in crowded classrooms.`,
    year: "2025",
    confidence: "0.95"
  },
  {
    id: 4,
    name: "Real-Time Classroom Emotion Detection & Feedback System",
    role: "AI Engineer · Backend Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    description: "Advanced affective computing system providing teachers with real-time insights into student engagement and emotional well-being. Utilizes dual-camera setup or CCTV feeds to continuously monitor classrooms, detecting and analyzing student emotions without requiring any active input, offering period-wise insights based on school timetable.",
    tech: ["PyTorch", "Transformers", "InsightFace", "OpenCV", "FastAPI", "MongoDB", "PostgreSQL"],
    details: `HOW IT WORKS

• Multi-Source Video Input: Highly versatile system supporting both Dual-Webcam setups (for wide coverage) and existing CCTV cameras via RTSP URLs, allowing effective coverage of large classrooms and minimizing blind spots.

• Granular Emotion Recognition: Using locally hosted Vision Transformer (ViT) model, the system detects and classifies facial expressions into six distinct categories: Happy, Sad, Disgust, Angry, Neutral, and Surprise.

• Automated Period-Wise Tracking: System syncs with school's PostgreSQL timetable. When a new period starts (e.g., "Maths"), it automatically attributes emotional data collected during that time window to that specific subject, helping distinguish between general student mood and subject-specific engagement.

• Identity-Linked Analysis: Before detecting emotions, the system identifies who the student is using InsightFace, building a personalized emotional profile for each student throughout the day rather than just a generic class average.

KEY TECHNICAL FEATURES

• Local Model Deployment: Successfully deployed Hugging Face ViT model locally (motheecreator--vit-Facial-Expression-Recognition), ensuring the system runs entirely on-premise with zero API costs and high data privacy.

• Hybrid AI Pipeline: Engineered pipeline that combines InsightFace (Buffalo_L) for robust identity verification with custom ViT model for emotion detection.

• Daily & Period Reports: At end of day, system generates comprehensive reports showing dominant emotions for every student across every period, helping educators identify trends like "Post-lunch lethargy" or "High engagement in Science."`,
    year: "2024",
    confidence: "0.98"
  },
  {
    id: 5,
    name: "AI Gesture-Based Quiz Platform",
    role: "Computer Vision · Backend",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    description: "Smart classroom solution that eliminates physical clickers and smartphones. Students answer multiple-choice questions by simply raising their hands—the camera identifies who raised their hand and records their response instantly.",
    tech: ["InsightFace", "OpenCV", "CVZone", "Flask", "Socket.IO", "GPT-4o-mini", "PostgreSQL", "MongoDB"],
    details: "Built identity-aware gesture tracking by combining InsightFace facial embeddings with OpenCV hand landmarks to attribute gestures to specific students in crowded frames. Engineered multi-threaded Flask + Socket.IO backend with sub-second latency for real-time video processing. Integrated GPT-4o-mini to dynamically generate unique quiz questions from teaching plans. Automated post-quiz analytics dashboard visualizing student accuracy, response times, and class-wide comprehension trends.",
    year: "2025",
    confidence: "0.97"
  },
  {
    id: 6,
    name: "K-Quiz (Gamified Learning Platform)",
    role: "Full-Stack · Game Logic",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    description: "Real-time educational gaming platform deployed at zentrixnexus.in...",
    tech: ["FastAPI", "WebSockets", "React", "MongoDB", "OpenAI API", "Google OAuth"],
    details: "Built comprehensive platform with 7 game modes...",
    year: "2025",
    confidence: "0.96",
    link: "https://zentrixnexus.in/",
    isPrivate: true, // <--- ADD THIS LINE
    repoLink: "https://github.com/arulsj888-debug/k-quiz-platform" // Keep this for reference
  },
  {
    id: 7,
    name: "AI Tutor & Real-Time Conversation Manager",
    role: "Backend Architect · AI Engineer",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    description: "Unified conversation service acting as an intelligent teaching assistant inside the classroom. Manages voice-based interactions between students and an AI tutor, processes student speech to determine intent, and generates context-aware responses using LLMs while intelligently queuing questions to maintain class flow.",
    tech: ["FastAPI", "OpenAI API", "WebSockets", "MongoDB", "PostgreSQL", "AsyncIO", "Pydantic"],
    details: `HOW IT WORKS

• Intent Classification: When a student speaks, the system uses OpenAI (GPT-4o Mini) to instantly classify their intent into categories like ask_question, request_restroom, or emergency.

• Context-Aware Responses: If the student asks a question, the backend fetches the current Lesson Plan (Subject, Chapter, Topic) from PostgreSQL using the process_selector_id, then generates an accurate, curriculum-aligned answer.

• Language Adaptation: Critical "Mirror Language" rule—if a student asks a doubt in Malayalam or Tamil, the AI detects this and strictly responds in the same language to ensure comprehension.

• Intelligent Queuing: System allows only a set number of live interactions (e.g., 3 questions per session). Any further questions are automatically added to a "Pending Queue."

• After-Class Resolution: Once the class ends, the AI calls up queued students one by one ("Hi [Name], thanks for waiting. What was your doubt?"), ensuring every student gets personal attention.

KEY TECHNICAL FEATURES

• Hybrid Database Architecture: MongoDB (Motor) stores high-speed conversation logs, session states, and pending queues asynchronously. PostgreSQL (AsyncPG) stores structured student data (Names, IDs) and lesson metadata (Topics, Chapters).

• Asynchronous WebSocket Pipeline: Built with FastAPI and Python asyncio, the server handles multiple concurrent WebSocket connections for real-time voice interaction with minimal latency.

• Robust ID Validation: Implemented rigorous UUID validation and error handling to ensure stability even when receiving malformed data from frontend sensors.

• Dynamic Session Management: System automatically creates or retrieves session documents on-the-fly, tracking "Live Interactions," "Student Activities" (like restroom breaks), and "After-Class Conversations" separately.`,
    year: "2025",
    confidence: "0.97"
  },
  {
    id: 8,
    name: "VS Quiz: AR Holographic Trivia",
    role: "Creative Technologist · Computer Vision Engineer",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80",
    description: "Immersive, gesture-controlled multiplayer trivia game that transforms a simple webcam feed into a futuristic Augmented Reality experience. Players interact with floating holographic buttons using hand gestures to answer AI-generated questions in real-time, combining physical movement with digital gaming.",
    tech: ["Python", "OpenCV", "MediaPipe", "OpenAI API", "Pygame", "NumPy"],
    details: `HOW IT WORKS

• Gesture Control: The game uses MediaPipe to track hand landmarks with high precision. Players control a virtual cursor on the screen by moving their hand in the air. To select an answer, they simply "hover" their cursor over a floating button, triggering a visual fill animation.

• Holographic AR Interface: Implemented a custom rendering engine using OpenCV. It segments the player from the background (SelfieSegmentation) and layers a dynamic, parallax-scrolling sci-fi grid behind them.

• Immersive Audio-Visual Feedback: The game provides immediate sensory feedback. Correct answers trigger a "Power Up" sound effect and a visual screen shake. Building a winning streak unlocks special abilities, accompanied by intense "Lightning" visual effects drawn procedurally between the player's hands and the UI. Incorrect answers trigger a "Power Down" sound, adding weight to every decision.

• AI-Generated Content: The game never runs out of questions. It integrates with OpenAI (GPT-4o Mini) to fetch new, relevant multiple-choice questions on the fly, ensuring infinite replayability.

KEY TECHNICAL FEATURES

• Advanced Computer Vision Pipeline: Engineered a robust loop that handles video capture, segmentation mask generation, hand tracking, and complex AR compositing at high frame rates (30+ FPS).

• Custom VFX Engine: Built a visual effects system from scratch in Python using NumPy and OpenCV. This includes algorithms for Chromatic Aberration (glitch effects), Camera Shake, and procedural Lightning Generation that renders crackling energy bolts in real-time.

• Low-Latency Audio System: Integrated pygame.mixer with a custom low-latency buffer configuration. This ensures that sound effects—like the "Game Finish" anthem or the "Blast" sound—sync perfectly with the visual frames, preventing the audio lag common in Python multimedia apps.

• Multiplayer Logic: Designed a state machine that manages independent game states for two simultaneous players on a split screen, handling distinct scores, streaks, and power-up inventories.`,
    year: "2025",
    confidence: "0.99"
  },
  {
    id: 9,
    name: "AI Virtual Mouse: Contactless Computer Control",
    role: "Computer Vision Engineer",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
    description: "Robust, gesture-based virtual mouse system that allows users to control their entire computer interface—cursor movement, clicks, scrolling, and window switching—using only hand gestures captured by a standard webcam. Eliminates the need for physical hardware, offering a futuristic and hygienic alternative for human-computer interaction.",
    tech: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI", "NumPy"],
    details: `HOW IT WORKS

• Advanced Hand Tracking: Utilizing MediaPipe Hands, the system detects 21 precise landmarks on the user's hand in real-time. It calculates the geometry between specific fingers (like the distance between the index and thumb) to trigger actions.

• Cursor Control: The system maps the movement of the index finger to the screen coordinates. Implemented a smoothing algorithm (Exponential Moving Average) to eliminate the natural "jitter" of hand movements, ensuring the cursor glides smoothly and precisely across the desktop.

• Gesture Recognition Engine: Left Click/Drag—Pinching the index finger and thumb together simulates a mouse down event. Holding the pinch allows for dragging files or selecting text. Right Click—Extending the index and middle fingers in a "Peace" sign triggers a context menu. Scrolling—Raising three fingers activates "Scroll Mode." Moving the hand up or down crosses virtual "trigger lines" overlayed on the camera feed, scrolling the active window accordingly. Task Switching—A specific combination (Thumb + Pinky extended) executes the Alt+Tab command to switch between applications.

KEY TECHNICAL FEATURES

• Adaptive Frame Reduction: Implemented a "Safe Zone" (Frame Reduction) logic. Since webcams have a wider field of view than a monitor, this feature maps a smaller, central portion of the camera feed to the full screen, allowing the user to reach screen corners comfortably without overextending their arm.

• State Management: Built a robust state machine to handle complex actions like "Drag and Drop." It differentiates between a quick pinch (Click) and a sustained pinch (Drag) based on time thresholds, preventing accidental clicks during movement.

• Optimized Performance: The system runs efficiently on CPU at high frame rates by processing frames at a lower resolution (640x480) while mapping coordinates to high-resolution displays (1920x1080), ensuring minimal latency.`,
    year: "2025",
    confidence: "0.98"
  },
  {
    id: 10,
    name: "Smart Annotation Tool: Multi-Modal Speaker Diarization",
    role: "AI/ML Engineer · Computer Vision ",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
    description: "Advanced, multi-modal annotation tool for analyzing video content in real-time. Integrates Face Recognition, Voice Biometrics, and Gesture Control into a unified interface. Automatically identifies who is speaking, zooms in on their face, and allows annotation using hand gestures—all without touching a keyboard or mouse.",
    tech: ["Python", "PyTorch", "SpeechBrain", "Silero VAD", "InsightFace", "MediaPipe", "OpenCV", "MongoDB", "Tkinter"],
    details: `HOW IT WORKS

• Active Speaker Tracking: The system continuously analyzes the audio stream using a locally hosted Silero VAD (Voice Activity Detection) model to detect speech segments. When speech is detected, it extracts voice embeddings using a local SpeechBrain ECAPA-TDNN model and matches them against a registered user database to identify the speaker by name.

• Smart Auto-Zoom: Once a speaker is identified via voice, the visual pipeline uses InsightFace to locate their face in the video feed. The UI then smoothly zooms in on the active speaker, centering them in the frame for detailed observation.

• Gesture-Based Annotation: Users can "Lock" the view on a specific subject and then use hand gestures (detected via MediaPipe) to draw on the screen. Pinching the index finger and thumb activates the "Pen" mode, allowing for intuitive highlighting and note-taking directly on the live video feed.

KEY TECHNICAL FEATURES

• Fully Offline Model Stack: Engineered the entire AI pipeline to run locally for privacy and zero-latency performance. Manually managed model weights for SpeechBrain (spkrec-ecapa-voxceleb), Silero VAD, and InsightFace, ensuring no data leaves the local machine.

• Multi-Modal Identity Fusion: Created a robust identity verification system that combines facial features (visual embeddings) and voice characteristics (audio embeddings). This dual-modality approach significantly reduces false positives compared to using face or voice alone.

• Concurrency & Performance: Built a multi-threaded architecture using Python's threading and queue modules. Audio capture, VAD processing, voice embedding extraction, and video rendering run in parallel, maintaining a responsive UI even during heavy inference.

• Registration Workflow: Designed a guided CLI-based registration flow where users capture their face angles (Front, Left, Right) and voice samples to build a personalized biometric profile stored in MongoDB.`,
    year: "2025",
    confidence: "0.97"
  }
];

export default function ProjectCarousel({ onIndexChange, externalIndex }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef(null);

  // Update carousel when external index changes
  useEffect(() => {
    if (externalIndex !== undefined && externalIndex !== currentIndex) {
      updateCarousel(externalIndex);
    }
  }, [externalIndex]);

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    const nextIndex = (newIndex + projects.length) % projects.length;
    setCurrentIndex(nextIndex);
    
    if (onIndexChange) {
      onIndexChange(nextIndex);
    }
    
    setTimeout(() => setIsAnimating(false), 800);
  };

  // Handle wheel event inside carousel - prevent page scroll
  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (!carouselElement) return;

    const handleWheel = (e) => {
      // Prevent page scroll
      e.preventDefault();
      e.stopPropagation();
      
      if (isAnimating) return;
      
      // Scroll carousel based on wheel direction
      if (e.deltaY > 0) {
        updateCarousel(currentIndex + 1);
      } else if (e.deltaY < 0) {
        updateCarousel(currentIndex - 1);
      }
    };

    // Add event listener with passive: false to allow preventDefault
    carouselElement.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      carouselElement.removeEventListener('wheel', handleWheel);
    };
  }, [currentIndex, isAnimating]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        updateCarousel(currentIndex - 1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        updateCarousel(currentIndex + 1);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isAnimating]);

  const getCardClass = (index) => {
    const offset = (index - currentIndex + projects.length) % projects.length;
    if (offset === 0) return styles.center;
    if (offset === 1) return styles.down1;
    if (offset === 2) return styles.down2;
    if (offset === projects.length - 1) return styles.up1;
    if (offset === projects.length - 2) return styles.up2;
    return styles.hidden;
  };

  return (
    <div className={styles.mainContainer}>
      <div 
        ref={carouselRef}
        className={styles.carouselSection}
      >
        <div className={styles.carouselContainer}>
          <button 
            className={`${styles.navArrow} ${styles.up}`}
            onClick={() => updateCarousel(currentIndex - 1)}
            aria-label="Previous project"
          >
            ↑
          </button>
          
          <div className={styles.carouselTrack}>
            {projects.map((project, index) => {
              return (
                <div
                  key={project.id}
                  className={`${styles.card} ${getCardClass(index)}`}
                  onClick={() => updateCarousel(index)}
                >
                  <img src={project.image} alt={project.name} />
                  <div className={styles.detectionBox}>
                    <div className={styles.detectionLabel}>
                      <span className={styles.detectionText}>PROJECT_DETECTED</span>
                      <span className={styles.confidenceScore}>{project.confidence}</span>
                    </div>
                    <div className={styles.cornerTL}></div>
                    <div className={styles.cornerTR}></div>
                    <div className={styles.cornerBL}></div>
                    <div className={styles.cornerBR}></div>
                  </div>
                  <div className={styles.cardOverlay}>
                    <h3>{project.name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          
          <button 
            className={`${styles.navArrow} ${styles.down}`}
            onClick={() => updateCarousel(currentIndex + 1)}
            aria-label="Next project"
          >
            ↓
          </button>
        </div>
      </div>

      <div className={styles.detailsSection}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100, rotateY: -20 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: -100, rotateY: 20 }}
            transition={{ 
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className={styles.projectDetails}
          >
            <motion.div 
              className={styles.projectHeader}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2>{projects[currentIndex].name}</h2>
              <p className={styles.role}>{projects[currentIndex].role}</p>
            </motion.div>

            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {projects[currentIndex].description}
            </motion.p>

            <motion.div 
              className={styles.techStack}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {projects[currentIndex].tech.map((tech, i) => (
                <motion.span 
                  key={tech}
                  className={styles.techTag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.p 
              className={styles.details}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {projects[currentIndex].details}
            </motion.p>

            <motion.div 
              className={styles.projectFooter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className={styles.year}>{projects[currentIndex].year}</span>
              
              <div style={{ display: 'flex', gap: '10px' }}>
                {/* 1. Live Site Link */}
                {projects[currentIndex].link && (
                  <a 
                    href={projects[currentIndex].link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    Live Site →
                  </a>
                )}

                {/* 2. Private Repo Logic */}
                {projects[currentIndex].isPrivate ? (
                  <a 
                    href={`mailto:arulsj888@gmail.com?subject=Request Access to K-Quiz Repo&body=Hi Arul,%0D%0A%0D%0AI am interested in reviewing the architecture for the K-Quiz platform.%0D%0A%0D%0AMy GitHub Username is: `}
                    className={styles.projectLink}
                    style={{ 
                      background: "rgba(255, 165, 0, 0.15)", 
                      borderColor: "#ffae00", 
                      color: "#ffae00",
                      boxShadow: "0 0 10px rgba(255, 165, 0, 0.2)"
                    }}
                  >
                    🔒 Request Code
                  </a>
                ) : projects[currentIndex].repoLink && (
                  <a 
                    href={projects[currentIndex].repoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    View Code
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className={styles.dots}>
          {projects.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => updateCarousel(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
