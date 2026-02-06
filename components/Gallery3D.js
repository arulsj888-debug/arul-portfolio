import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from '../styles/Gallery3D.module.css';

const projects = [
  {
    id: 1,
    name: "AI Automated Proctoring System",
    role: "Computer Vision · Backend",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    description: "Automated remote proctoring system that replaces human proctors with an intelligent AI agent monitoring student behavior in real-time through webcam, flagging suspicious activities instantly.",
    year: "2025",
    tech: "YOLOv12 · MediaPipe · Flask · Socket.IO"
  },
  {
    id: 2,
    name: "AgroScan AI: Crop Disease Detection",
    role: "AI Researcher · Full-Stack",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
    description: "Comprehensive agricultural diagnostic tool deployed at plants.zentrixnexus.in. Empowers farmers to instantly identify crop diseases by uploading a photo of an affected plant.",
    year: "2025",
    tech: "PyTorch · ResNet-50 · OpenAI API · Flask"
  },
  {
    id: 3,
    name: "SOS Attendance System",
    role: "AI Architect · Backend Engineer",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
    description: "Automated attendance tracking system using multi-camera arrays for large classrooms. Eliminates blind spots with three-camera coverage, processes live video feeds for facial recognition.",
    year: "2025",
    tech: "InsightFace · FastAPI · WebSocket · MongoDB"
  },
  {
    id: 4,
    name: "Classroom Emotion Detection System",
    role: "AI Engineer · Backend Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    description: "Advanced affective computing system providing teachers with real-time insights into student engagement and emotional well-being. Utilizes dual-camera setup or CCTV feeds to continuously monitor classrooms.",
    year: "2024",
    tech: "PyTorch · Transformers · InsightFace · OpenCV"
  },
  {
    id: 5,
    name: "AI Gesture-Based Quiz Platform",
    role: "Computer Vision · Backend",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    description: "Smart classroom solution that eliminates physical clickers and smartphones. Students answer multiple-choice questions by simply raising their hands—the camera identifies who raised their hand.",
    year: "2025",
    tech: "InsightFace · OpenCV · CVZone · Flask · GPT-4o"
  },
  {
    id: 6,
    name: "K-Quiz Gamified Learning",
    role: "Full-Stack · Game Logic",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    description: "Real-time educational gaming platform deployed at zentrixnexus.in. Features 7 game modes including Rapid Fire, Team Battle, and Survival Mode with AI-generated questions.",
    year: "2025",
    tech: "FastAPI · WebSockets · React · MongoDB · OpenAI"
  },
  {
    id: 7,
    name: "AI Tutor & Conversation Manager",
    role: "Backend Architect · AI Engineer",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    description: "Unified conversation service acting as an intelligent teaching assistant inside the classroom. Manages voice-based interactions between students and an AI tutor, processes student speech to determine intent.",
    year: "2025",
    tech: "FastAPI · OpenAI API · WebSockets · MongoDB"
  },
  {
    id: 8,
    name: "VS Quiz: AR Holographic Trivia",
    role: "Creative Technologist · CV Engineer",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80",
    description: "Immersive, gesture-controlled multiplayer trivia game that transforms a simple webcam feed into a futuristic Augmented Reality experience. Players interact with floating holographic buttons using hand gestures.",
    year: "2025",
    tech: "Python · OpenCV · MediaPipe · OpenAI API · Pygame"
  },
  {
    id: 9,
    name: "AI Virtual Mouse Control",
    role: "Computer Vision Engineer",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
    description: "Robust, gesture-based virtual mouse system that allows users to control their entire computer interface—cursor movement, clicks, scrolling, and window switching—using only hand gestures captured by webcam.",
    year: "2025",
    tech: "Python · OpenCV · MediaPipe · PyAutoGUI · NumPy"
  },
  {
    id: 10,
    name: "Smart Annotation Tool",
    role: "AI/ML Engineer · Computer Vision",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
    description: "Advanced, multi-modal annotation tool for analyzing video content in real-time. Integrates Face Recognition, Voice Biometrics, and Gesture Control into a unified interface.",
    year: "2025",
    tech: "PyTorch · SpeechBrain · InsightFace · MediaPipe"
  }
];

const Gallery3D = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const currentScrollRef = useRef(0);
  const targetScrollRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const paintingGroupsRef = useRef([]);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Configuration
    const CONFIG = {
      slideCount: projects.length,
      spacingX: 45,
      pWidth: 14,
      pHeight: 18,
      camZ: 30,
      wallAngleY: -0.25,
      snapDelay: 200,
      lerpSpeed: 0.06
    };

    const totalGalleryWidth = CONFIG.slideCount * CONFIG.spacingX;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0d1f2b);
    scene.fog = new THREE.Fog(0x0d1f2b, 10, 110);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, CONFIG.camZ);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
    dirLight.position.set(10, 20, 10);
    scene.add(dirLight);

    // Gallery group
    const galleryGroup = new THREE.Group();
    scene.add(galleryGroup);

    // Create paintings
    const textureLoader = new THREE.TextureLoader();
    const planeGeo = new THREE.PlaneGeometry(CONFIG.pWidth, CONFIG.pHeight);
    const paintingGroups = [];

    projects.forEach((project, i) => {
      const group = new THREE.Group();
      group.position.set(i * CONFIG.spacingX, 0, 0);

      // Painting mesh
      const mat = new THREE.MeshBasicMaterial({
        map: textureLoader.load(project.image)
      });
      const mesh = new THREE.Mesh(planeGeo, mat);

      // Frame outline
      const edges = new THREE.EdgesGeometry(planeGeo);
      const outline = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: 0x00aaff })
      );

      // Shadow
      const shadowGeo = new THREE.PlaneGeometry(CONFIG.pWidth, CONFIG.pHeight);
      const shadowMat = new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.3
      });
      const shadow = new THREE.Mesh(shadowGeo, shadowMat);
      shadow.position.set(0.8, -0.8, -0.5);

      // Grid lines
      const lineZ = -1;
      const lineLen = CONFIG.spacingX;
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-lineLen / 2, 14, lineZ),
        new THREE.Vector3(lineLen / 2, 14, lineZ),
        new THREE.Vector3(-lineLen / 2, -14, lineZ),
        new THREE.Vector3(lineLen / 2, -14, lineZ)
      ]);
      const lines = new THREE.LineSegments(
        lineGeo,
        new THREE.LineBasicMaterial({ color: 0x1a3a4a })
      );

      group.add(shadow);
      group.add(mesh);
      group.add(outline);
      group.add(lines);
      galleryGroup.add(group);
      paintingGroups.push(group);
    });

    paintingGroupsRef.current = paintingGroups;
    galleryGroup.rotation.y = CONFIG.wallAngleY;
    galleryGroup.position.x = 8;

    // Scroll handling
    let snapTimer = null;

    const snapToNearest = () => {
      const index = Math.round(targetScrollRef.current / CONFIG.spacingX);
      targetScrollRef.current = index * CONFIG.spacingX;
    };

    const handleWheel = (e) => {
      targetScrollRef.current += e.deltaY * 0.1;
      if (snapTimer) clearTimeout(snapTimer);
      snapTimer = setTimeout(snapToNearest, CONFIG.snapDelay);
    };

    // Touch handling
    let touchStart = 0;

    const handleTouchStart = (e) => {
      touchStart = e.touches[0].clientX;
      if (snapTimer) clearTimeout(snapTimer);
    };

    const handleTouchMove = (e) => {
      const diff = touchStart - e.touches[0].clientX;
      targetScrollRef.current += diff * 0.6;
      touchStart = e.touches[0].clientX;
      if (snapTimer) clearTimeout(snapTimer);
    };

    const handleTouchEnd = () => {
      snapToNearest();
    };

    // Mouse movement
    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    // Update UI
    const updateUI = (scrollX) => {
      const rawIndex = Math.round(scrollX / CONFIG.spacingX);
      const safeIndex = ((rawIndex % CONFIG.slideCount) + CONFIG.slideCount) % CONFIG.slideCount;

      for (let i = 0; i < CONFIG.slideCount; i++) {
        const el = document.getElementById(`gallery-slide-${i}`);
        if (el) {
          if (i === safeIndex) el.classList.add(styles.active);
          else el.classList.remove(styles.active);
        }
      }
    };

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      currentScrollRef.current +=
        (targetScrollRef.current - currentScrollRef.current) * CONFIG.lerpSpeed;

      const xMove = currentScrollRef.current * Math.cos(CONFIG.wallAngleY);
      const zMove = currentScrollRef.current * Math.sin(CONFIG.wallAngleY);

      camera.position.x = xMove;
      camera.position.z = CONFIG.camZ - zMove;

      paintingGroups.forEach((group, i) => {
        const originalX = i * CONFIG.spacingX;
        const distFromCam = currentScrollRef.current - originalX;
        const shift = Math.round(distFromCam / totalGalleryWidth) * totalGalleryWidth;
        group.position.x = originalX + shift;
      });

      camera.rotation.x = mouseRef.current.y * 0.05;
      camera.rotation.y = -mouseRef.current.x * 0.05;

      updateUI(currentScrollRef.current);
      renderer.render(scene, camera);
    };

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    // Add event listeners
    window.addEventListener('wheel', handleWheel);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Start animation
    animate();

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.canvasContainer} ref={containerRef} />
      
      <div className={styles.uiLayer}>
        <div className={styles.logo}>ARUL VENDHAN</div>
        
        {projects.map((project, index) => (
          <div
            key={project.id}
            id={`gallery-slide-${index}`}
            className={styles.slideContent}
          >
            <span className={styles.catalogueNumber}>
              {String(index + 1).padStart(2, '0')} / Projects
            </span>
            <h1 className={styles.projectTitle}>{project.name}</h1>
            <div className={styles.description}>{project.description}</div>
            <div className={styles.metaGrid}>
              <span className={styles.metaLabel}>Role</span>
              <span className={styles.metaValue}>{project.role}</span>
              <span className={styles.metaLabel}>Year</span>
              <span className={styles.metaValue}>{project.year}</span>
              <span className={styles.metaLabel}>Tech</span>
              <span className={styles.metaValue}>{project.tech}</span>
            </div>
          </div>
        ))}
        
        <div className={styles.scrollHint}>Scroll to explore</div>
      </div>
    </div>
  );
};

export default Gallery3D;
