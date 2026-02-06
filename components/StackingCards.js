import { useRouter } from 'next/router';
import styles from '../styles/StackingCards.module.css';

const projects = [
  {
    id: 1,
    number: "01",
    name: "AI Automated Proctoring System",
    description: "Automated remote proctoring system that replaces human proctors with an intelligent AI agent monitoring student behavior in real-time through webcam, flagging suspicious activities instantly.",
    tech: "YOLOv12 · MediaPipe · Flask · Socket.IO · MongoDB"
  },
  {
    id: 2,
    number: "02",
    name: "AgroScan AI: Crop Disease Detection",
    description: "Comprehensive agricultural diagnostic tool deployed at plants.zentrixnexus.in. Empowers farmers to instantly identify crop diseases by uploading a photo of an affected plant.",
    tech: "PyTorch · ResNet-50 · OpenAI API · Flask · Bootstrap 5"
  },
  {
    id: 3,
    number: "03",
    name: "SOS Attendance System",
    description: "Automated attendance tracking system using multi-camera arrays for large classrooms. Eliminates blind spots with three-camera coverage, processes live video feeds for facial recognition.",
    tech: "InsightFace · FastAPI · WebSocket · MongoDB · PostgreSQL"
  },
  {
    id: 4,
    number: "04",
    name: "Classroom Emotion Detection System",
    description: "Advanced affective computing system providing teachers with real-time insights into student engagement and emotional well-being. Utilizes dual-camera setup or CCTV feeds.",
    tech: "PyTorch · Transformers · InsightFace · OpenCV · FastAPI"
  },
  {
    id: 5,
    number: "05",
    name: "AI Gesture-Based Quiz Platform",
    description: "Smart classroom solution that eliminates physical clickers and smartphones. Students answer multiple-choice questions by simply raising their hands—the camera identifies who raised their hand.",
    tech: "InsightFace · OpenCV · CVZone · Flask · Socket.IO · GPT-4o"
  },
  {
    id: 6,
    number: "06",
    name: "K-Quiz Gamified Learning",
    description: "Real-time educational gaming platform deployed at zentrixnexus.in. Features 7 game modes including Rapid Fire, Team Battle, and Survival Mode with AI-generated questions.",
    tech: "FastAPI · WebSockets · React · MongoDB · OpenAI API"
  },
  {
    id: 7,
    number: "07",
    name: "AI Tutor & Conversation Manager",
    description: "Unified conversation service acting as an intelligent teaching assistant inside the classroom. Manages voice-based interactions between students and an AI tutor.",
    tech: "FastAPI · OpenAI API · WebSockets · MongoDB · PostgreSQL"
  },
  {
    id: 8,
    number: "08",
    name: "VS Quiz: AR Holographic Trivia",
    description: "Immersive, gesture-controlled multiplayer trivia game that transforms a simple webcam feed into a futuristic Augmented Reality experience with floating holographic buttons.",
    tech: "Python · OpenCV · MediaPipe · OpenAI API · Pygame · NumPy"
  },
  {
    id: 9,
    number: "09",
    name: "AI Virtual Mouse Control",
    description: "Robust, gesture-based virtual mouse system that allows users to control their entire computer interface—cursor movement, clicks, scrolling, and window switching—using only hand gestures.",
    tech: "Python · OpenCV · MediaPipe · PyAutoGUI · NumPy"
  },
  {
    id: 10,
    number: "10",
    name: "Smart Annotation Tool",
    description: "Advanced, multi-modal annotation tool for analyzing video content in real-time. Integrates Face Recognition, Voice Biometrics, and Gesture Control into a unified interface.",
    tech: "PyTorch · SpeechBrain · Silero VAD · InsightFace · MediaPipe"
  }
];

export default function StackingCards() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/?mode=light');
  };

  return (
    <div className={styles.container}>
      <button onClick={handleBack} className={styles.backButton}>
        <span className={styles.backArrow}>←</span>
        <span className={styles.backText}>Back to Portfolio</span>
      </button>

      <header className={styles.header}>
        <h1 className={styles.title}>
          Vision<br />Meets<br />Innovation
        </h1>
      </header>

      <ul className={styles.cards}>
        {projects.map((project, index) => (
          <li 
            key={project.id} 
            className={styles.card}
            style={{ '--index': index + 1 }}
          >
            <div className={styles.cardContent}>
              <span className={styles.number}>{project.number}</span>
              <h2 className={styles.projectName}>{project.name}</h2>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.tech}>{project.tech}</div>
            </div>
          </li>
        ))}
      </ul>

      {/* Circular Progress Indicator */}
      <svg className={styles.progressCircle} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" />
      </svg>

      <header className={styles.footerHeader}>
        <h1 className={styles.title}>The End.</h1>
      </header>
    </div>
  );
}
