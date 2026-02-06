import { useEffect, useRef, useState } from 'react';
import styles from '../styles/GalleryCarousel.module.css';

export default function GalleryCarousel({ projects }) {
  const canvasContainerRef = useRef(null);
  const sceneRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Dynamically import Three.js
    import('three').then((THREE) => {
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

      const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(0, 0, CONFIG.camZ);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      
      if (canvasContainerRef.current) {
        canvasContainerRef.current.innerHTML = '';
        canvasContainerRef.current.appendChild(renderer.domElement);
      }

      // Lighting
      const ambient = new THREE.AmbientLight(0xffffff, 0.4);
      scene.add(ambient);

      const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
      dirLight.position.set(10, 20, 10);
      scene.add(dirLight);

      const galleryGroup = new THREE.Group();
      scene.add(galleryGroup);

      const textureLoader = new THREE.TextureLoader();
      const planeGeo = new THREE.PlaneGeometry(CONFIG.pWidth, CONFIG.pHeight);

      const paintingGroups = [];

      // Create paintings
      for (let i = 0; i < CONFIG.slideCount; i++) {
        const group = new THREE.Group();
        group.position.set(i * CONFIG.spacingX, 0, 0);

        const mat = new THREE.MeshBasicMaterial({
          map: textureLoader.load(projects[i].image)
        });
        const mesh = new THREE.Mesh(planeGeo, mat);

        const edges = new THREE.EdgesGeometry(planeGeo);
        const outline = new THREE.LineSegments(
          edges,
          new THREE.LineBasicMaterial({ color: 0x00aaff })
        );

        const shadowGeo = new THREE.PlaneGeometry(CONFIG.pWidth, CONFIG.pHeight);
        const shadowMat = new THREE.MeshBasicMaterial({
          color: 0x000000,
          transparent: true,
          opacity: 0.3
        });
        const shadow = new THREE.Mesh(shadowGeo, shadowMat);
        shadow.position.set(0.8, -0.8, -0.5);

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
      }

      galleryGroup.rotation.y = CONFIG.wallAngleY;
      galleryGroup.position.x = 8;

      let currentScroll = 0;
      let targetScroll = 0;
      let snapTimer = null;
      let mouse = { x: 0, y: 0 };

      function snapToNearest() {
        const index = Math.round(targetScroll / CONFIG.spacingX);
        targetScroll = index * CONFIG.spacingX;
      }

      const handleWheel = (e) => {
        targetScroll += e.deltaY * 0.1;
        if (snapTimer) clearTimeout(snapTimer);
        snapTimer = setTimeout(snapToNearest, CONFIG.snapDelay);
      };

      let touchStart = 0;
      const handleTouchStart = (e) => {
        touchStart = e.touches[0].clientX;
        if (snapTimer) clearTimeout(snapTimer);
      };

      const handleTouchMove = (e) => {
        const diff = touchStart - e.touches[0].clientX;
        targetScroll += diff * 0.6;
        touchStart = e.touches[0].clientX;
        if (snapTimer) clearTimeout(snapTimer);
      };

      const handleTouchEnd = () => {
        snapToNearest();
      };

      const handleMouseMove = (e) => {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      };

      function updateUI(scrollX) {
        const rawIndex = Math.round(scrollX / CONFIG.spacingX);
        const safeIndex =
          ((rawIndex % CONFIG.slideCount) + CONFIG.slideCount) % CONFIG.slideCount;
        setCurrentIndex(safeIndex);
      }

      function animate() {
        sceneRef.current = requestAnimationFrame(animate);

        currentScroll += (targetScroll - currentScroll) * CONFIG.lerpSpeed;

        const xMove = currentScroll * Math.cos(CONFIG.wallAngleY);
        const zMove = currentScroll * Math.sin(CONFIG.wallAngleY);

        camera.position.x = xMove;
        camera.position.z = CONFIG.camZ - zMove;

        paintingGroups.forEach((group, i) => {
          const originalX = i * CONFIG.spacingX;
          const distFromCam = currentScroll - originalX;
          const shift =
            Math.round(distFromCam / totalGalleryWidth) * totalGalleryWidth;
          group.position.x = originalX + shift;
        });

        camera.rotation.x = mouse.y * 0.05;
        camera.rotation.y = -mouse.x * 0.05;

        updateUI(currentScroll);
        renderer.render(scene, camera);
      }

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('wheel', handleWheel);
      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('resize', handleResize);

      animate();

      // Cleanup
      return () => {
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        
        if (sceneRef.current) {
          cancelAnimationFrame(sceneRef.current);
        }
        
        if (canvasContainerRef.current) {
          canvasContainerRef.current.innerHTML = '';
        }
      };
    });
  }, [projects]);

  const currentProject = projects[currentIndex];

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.logo}>PORTFOLIO</div>
      
      <div ref={canvasContainerRef} className={styles.canvasContainer} />
      
      <div className={styles.uiLayer}>
        <div className={styles.slideContent}>
          <span className={styles.catalogueNumber}>
            {String(currentIndex + 1).padStart(2, '0')} / {projects.length}
          </span>
          <h1 className={styles.title}>{currentProject.title}</h1>
          <div className={styles.description}>{currentProject.description}</div>
          <div className={styles.metaGrid}>
            <span className={styles.metaLabel}>Role</span>
            <span className={styles.metaValue}>{currentProject.role}</span>
            <span className={styles.metaLabel}>Year</span>
            <span className={styles.metaValue}>{currentProject.year}</span>
            <span className={styles.metaLabel}>Tech Stack</span>
            <span className={styles.metaValue}>{currentProject.tech}</span>
          </div>
          {currentProject.link && (
            <a href={currentProject.link} target="_blank" rel="noopener noreferrer" className={styles.visitLink}>
              Visit Live Site →
            </a>
          )}
        </div>
      </div>
      
      <div className={styles.scrollHint}>Scroll to explore</div>
    </div>
  );
}
