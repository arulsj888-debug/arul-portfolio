import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from '../styles/ParallaxSVGDayNight.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ParallaxSVGDayNight() {
  const svgRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const speed = 100;
    const svg = svgRef.current;
    if (!svg) return;

    // Initial setup
    gsap.set("#h2-1", { opacity: 0 });
    gsap.set("#bg_grad", { attr: { cy: "-50" } });
    gsap.set(["#dinoL", "#dinoR"], { y: 80 });
    gsap.set("#dinoL", { x: -10 });

    const mm = gsap.matchMedia();
    mm.add("(max-width: 1922px)", () => {
      gsap.set(["#cloudStart-L", "#cloudStart-R"], { x: 10, opacity: 1 });
    });

    /*  SCENE 1 - Day with Hills and Clouds */
    let scene1 = gsap.timeline();
    ScrollTrigger.create({
      animation: scene1,
      trigger: ".scrollElement",
      start: "top top",
      end: "45% 100%",
      scrub: 3
    });

    // Hills animation - parallax effect
    scene1.to("#h1-1", { y: 3 * speed, x: 1 * speed, scale: 0.9, ease: "power1.in" }, 0);
    scene1.to("#h1-2", { y: 2.6 * speed, x: -0.6 * speed, ease: "power1.in" }, 0);
    scene1.to("#h1-3", { y: 1.7 * speed, x: 1.2 * speed }, 0.03);
    scene1.to("#h1-4", { y: 3 * speed, x: 1 * speed }, 0.03);
    scene1.to("#h1-5", { y: 2 * speed, x: 1 * speed }, 0.03);
    scene1.to("#h1-6", { y: 2.3 * speed, x: -2.5 * speed }, 0);
    scene1.to("#h1-7", { y: 5 * speed, x: 1.6 * speed }, 0);
    scene1.to("#h1-8", { y: 3.5 * speed, x: 0.2 * speed }, 0);
    scene1.to("#h1-9", { y: 3.5 * speed, x: -0.2 * speed }, 0);
    scene1.to("#cloudsBig-L", { y: 4.5 * speed, x: -0.2 * speed }, 0);
    scene1.to("#cloudsBig-R", { y: 4.5 * speed, x: -0.2 * speed }, 0);
    scene1.to("#cloudStart-L", { x: -300 }, 0);
    scene1.to("#cloudStart-R", { x: 300 }, 0);
    scene1.to("#info", { y: 8 * speed }, 0);

    /*   Bird Animation   */
    gsap.fromTo("#bird", { opacity: 1 }, {
      y: -250,
      x: 800,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "15% top",
        end: "60% 100%",
        scrub: 4,
        onEnter: () => gsap.to("#bird", { scaleX: 1, rotation: 0 }),
        onLeave: () => gsap.to("#bird", { scaleX: -1, rotation: -15 })
      }
    });

    /* Clouds Movement */
    let clouds = gsap.timeline();
    ScrollTrigger.create({
      animation: clouds,
      trigger: ".scrollElement",
      start: "top top",
      end: "70% 100%",
      scrub: 1
    });
    clouds.to("#cloud1", { x: 500 }, 0);
    clouds.to("#cloud2", { x: 1000 }, 0);
    clouds.to("#cloud3", { x: -1000 }, 0);
    clouds.to("#cloud4", { x: -700, y: 25 }, 0);

    /* Sun Motion - Rising */
    let sun = gsap.timeline();
    ScrollTrigger.create({
      animation: sun,
      trigger: ".scrollElement",
      start: "1% top",
      end: "2150 100%",
      scrub: 2
    });

    sun.fromTo("#bg_grad", { attr: { cy: "-50" } }, { attr: { cy: "330" } }, 0);
    sun.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.15" } }, 0);
    sun.to("#bg_grad stop:nth-child(3)", { attr: { offset: "0.18" } }, 0);
    sun.to("#bg_grad stop:nth-child(4)", { attr: { offset: "0.25" } }, 0);
    sun.to("#bg_grad stop:nth-child(5)", { attr: { offset: "0.46" } }, 0);
    sun.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#FF9171" } }, 0);

    /*   SCENE 2 - Afternoon/Evening  */
    let scene2 = gsap.timeline();
    ScrollTrigger.create({
      animation: scene2,
      trigger: ".scrollElement",
      start: "15% top",
      end: "40% 100%",
      scrub: 3
    });

    scene2.fromTo("#h2-1", { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0);
    scene2.fromTo("#h2-2", { y: 500 }, { y: 0 }, 0.1);
    scene2.fromTo("#h2-3", { y: 700 }, { y: 0 }, 0.1);
    scene2.fromTo("#h2-4", { y: 700 }, { y: 0 }, 0.2);
    scene2.fromTo("#h2-5", { y: 800 }, { y: 0 }, 0.3);
    scene2.fromTo("#h2-6", { y: 900 }, { y: 0 }, 0.3);

    /* Bats Animation */
    gsap.set("#bats", { transformOrigin: "50% 50%" });
    gsap.fromTo("#bats", { opacity: 1, y: 400, scale: 0 }, {
      y: 20,
      scale: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "40% top",
        end: "70% 100%",
        scrub: 3,
        onEnter: () => {
          gsap.utils.toArray("#bats path").forEach((item, i) => {
            gsap.to(item, {
              scaleX: 0.5,
              yoyo: true,
              repeat: 9,
              transformOrigin: "50% 50%",
              duration: 0.15,
              delay: 0.7 + i / 10
            });
          });
          gsap.set("#bats", { opacity: 1 });
        }
      }
    });

    /* Sun to Moon Transition */
    let sun2 = gsap.timeline();
    ScrollTrigger.create({
      animation: sun2,
      trigger: ".scrollElement",
      start: "2000 top",
      end: "5000 100%",
      scrub: 2
    });

    sun2.to("#sun", { attr: { offset: "1.4" } }, 0);
    sun2.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.7" } }, 0);
    sun2.to("#sun", { attr: { "stop-color": "#ffff00" } }, 0);
    sun2.to("#lg4 stop:nth-child(1)", { attr: { "stop-color": "#623951" } }, 0);
    sun2.to("#lg4 stop:nth-child(2)", { attr: { "stop-color": "#261F36" } }, 0);
    sun2.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#45224A" } }, 0);

    /* Transition to Night Scene */
    const height = svg.getBBox().height;
    gsap.set("#scene3", { y: height - 40, visibility: "visible" });
    
    let sceneTransition = gsap.timeline();
    ScrollTrigger.create({
      animation: sceneTransition,
      trigger: ".scrollElement",
      start: "60% top",
      end: "bottom 100%",
      scrub: 3
    });

    sceneTransition.to("#h2-1", { y: -height - 100, scale: 1.5, transformOrigin: "50% 50%" }, 0);
    sceneTransition.to("#bg_grad", { attr: { cy: "-80" } }, 0.0);
    sceneTransition.to("#bg2", { y: 0 }, 0);

    /* Scene 3 - Night Sky */
    let scene3 = gsap.timeline();
    ScrollTrigger.create({
      animation: scene3,
      trigger: ".scrollElement",
      start: "70% 50%",
      end: "bottom 100%",
      scrub: 3
    });

    scene3.fromTo("#h3-1", { y: 300 }, { y: -550 }, 0);
    scene3.fromTo("#h3-2", { y: 800 }, { y: -550 }, 0.03);
    scene3.fromTo("#h3-3", { y: 600 }, { y: -550 }, 0.06);
    scene3.fromTo("#h3-4", { y: 800 }, { y: -550 }, 0.09);
    scene3.fromTo("#h3-5", { y: 1000 }, { y: -550 }, 0.12);
    scene3.fromTo("#stars", { opacity: 0 }, { opacity: 0.5, y: -500 }, 0);
    scene3.fromTo("#arrow2", { opacity: 0 }, { opacity: 0.7, y: -710 }, 0.25);
    scene3.fromTo("#text2", { opacity: 0 }, { opacity: 0.7, y: -710 }, 0.3);
    scene3.to("#bg2-grad", { attr: { cy: 600 } }, 0);
    scene3.to("#bg2-grad", { attr: { r: 500 } }, 0);

    /*   Falling Star   */
    gsap.set("#fstar", { y: -400 });
    let fstarTL = gsap.timeline();
    ScrollTrigger.create({
      animation: fstarTL,
      trigger: ".scrollElement",
      start: "4200 top",
      end: "6000 bottom",
      scrub: 2,
      onEnter: () => gsap.set("#fstar", { opacity: 1 }),
      onLeave: () => gsap.set("#fstar", { opacity: 0 })
    });
    fstarTL.to("#fstar", { x: -700, y: -250, ease: "power2.out" }, 0);

    // Star twinkling animations
    const starAnimations = [1, 3, 5, 8, 11, 15, 17, 18, 25, 28, 30, 35, 40, 45, 48];
    const delays = [0.8, 1.8, 1, 1.2, 0.5, 2, 1.1, 1.4, 1.1, 0.9, 1.3, 2, 0.8, 1.8, 1];
    
    starAnimations.forEach((n, i) => {
      gsap.fromTo(`#stars path:nth-of-type(${n})`, 
        { opacity: 0.3 }, 
        { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: delays[i] }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      mm.revert();
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <svg 
        ref={svgRef} 
        className={styles.parallax} 
        viewBox="0 0 750 500" 
        preserveAspectRatio="xMidYMax slice"
      >
        {/* 
          ⚠️ IMPORTANT: Paste the complete SVG content here from the user's provided code
          
          The SVG includes:
          - <defs> with all gradients (grad1-9, bg_grad, bg2-grad, lg4-8, linear-gradient, etc.)
          - <rect id="bg"> - Main background
          - <g id="clouds"> - All cloud elements
          - <g id="scene2"> - Bats and hills
          - <g id="scene3"> - Night scene with stars
          - <g id="scene1"> - Main hills (h1-1 through h1-9)
          - <path id="bird"> - Flying bird
          - <g id="info"> and <g id="info2"> - Text elements
          
          Due to the massive size (6000+ lines), the complete SVG markup
          needs to be pasted here from the original source code provided by the user.
        */}
      </svg>
      <div className="scrollElement"></div>
    </div>
  );
}
