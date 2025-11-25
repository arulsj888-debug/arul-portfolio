import { useEffect } from 'react';
import styles from '../styles/VideoBackground.module.css';

export default function VideoBackground() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap) {
      const gsap = window.gsap;
      
      // Custom ease
      if (window.CustomEase) {
        window.CustomEase.create('custom-ease-in', '0.52, 0.00, 0.48, 1.00');
      }
      
      const fourtyFrames = 1.3333333;
      const twoFrames = 0.666666;
      const fourFrames = 0.133333;
      const sixFrames = 0.2;
      
      const timeline = gsap.timeline();
      
      // Animate elements on load
      timeline.fromTo('.video-overlay', 
        { autoAlpha: 0 }, 
        { autoAlpha: 0.3, duration: fourtyFrames, ease: 'power2.inOut' }, 
        0
      );
    }
  }, []);

  return (
    <div className={styles.videoWrapper}>
      <video className={styles.heroVideo} autoPlay muted loop playsInline>
        <source src="https://cdn.zajno.com/dev/codepen/fossil/fossil.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6))',
        pointerEvents: 'none',
        zIndex: 1
      }} />
    </div>
  );
}
