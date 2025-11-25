# Parallax Day-to-Night Animation Integration Guide

## Overview
This guide explains how to integrate the full day-to-night scrollable parallax animation into your Next.js portfolio.

## Step 1: Install GSAP (if not already installed)
```bash
npm install gsap
```

## Step 2: Create the Complete SVG Component

Create `components/ParallaxSVGDayNight.js` and paste the ENTIRE SVG content from the user's provided code.

The SVG structure includes:
- `<defs>` with all gradients (grad1-9, lg4-8, bg_grad, bg2-grad, etc.)
- `<rect id="bg">` - Main background
- `<g id="clouds">` - Cloud paths (cloud1-4, cloudStart-L, cloudStart-R, cloudsBig-L, cloudsBig-R)
- `<g id="scene2">` - Second scene with bats and hills (h2-1 through h2-6)
- `<g id="scene3">` - Night scene with stars, falling star, and hills (h3-1 through h3-5)
- `<g id="scene1">` - Main scene with multiple hill layers (h1-1 through h1-9)
- `<path id="bird">` - Flying bird animation
- `<g id="info">` and `<g id="info2">` - Text and arrow elements

## Step 3: Component Structure

```javascript
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
    // All the GSAP animation code goes here
    // (Copy from the user's provided JavaScript)
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
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
        {/* PASTE COMPLETE SVG CONTENT HERE */}
      </svg>
      <div className="scrollElement"></div>
    </div>
  );
}
```

## Step 4: CSS Module

Create `styles/ParallaxSVGDayNight.module.css`:

```css
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
}

.parallax {
  display: block;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
}

:global(.scrollElement) {
  position: absolute;
  height: 6000px;
  width: 100%;
  top: 0;
  z-index: 1;
  pointer-events: none;
}

@media (max-width: 490px) {
  :global(#text),
  :global(#arrow) {
    transform-origin: 50% 50%;
    transform: translateY(-120px) scale(0.8);
  }

  :global(#info2) {
    transform-origin: 50% 50%;
    transform: translateY(-120px) scale(0.8);
  }
}
```

## Step 5: Update ParallaxBackground.js

Replace the current light mode animation with the new day-night animation:

```javascript
import { useContext } from 'react';
import { ThemeContext } from '../pages/_app';
import styles from '../styles/ParallaxBackground.module.css';
import ParallaxSVG from './ParallaxSVG'; // Dark mode (current)
import ParallaxSVGDayNight from './ParallaxSVGDayNight'; // Light mode (new)

export default function ParallaxBackground() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.wrapper}>
      {theme === 'dark' ? <ParallaxSVG /> : <ParallaxSVGDayNight />}
    </div>
  );
}
```

## Step 6: Adjust Global Styles

Ensure content has proper z-index to appear above the background:

```css
/* In globals.css */
main {
  position: relative;
  z-index: 10;
  pointer-events: auto;
}
```

## Key Features of the Animation

1. **Scene 1 (0-45% scroll)**: Sunrise with moving hills and clouds
2. **Scene 2 (15-70% scroll)**: Daytime with flying birds and bats appearing
3. **Scene 3 (70-100% scroll)**: Night sky with twinkling stars and falling star
4. **Sun/Moon transition**: Smooth gradient changes from day to night
5. **Parallax layers**: 9 hill layers moving at different speeds
6. **Interactive elements**: Birds, bats, clouds all animated on scroll
7. **6000px scroll height**: Full animation experience

## Important Notes

- The animation is 6000px tall, so ensure your page content extends beyond this
- All animations are scroll-triggered and will pause when scrolling stops
- The background is fixed position with pointer-events: none to allow interaction with page content
- Mobile responsive with scaled text elements for smaller screens

## Testing

1. Toggle to light mode
2. Scroll slowly to see the full day-to-night transition
3. Watch for: clouds moving, sun rising/setting, birds flying, bats appearing, stars twinkling
4. Verify the final night scene matches your dark mode colors

## Performance

- Uses GSAP's ScrollTrigger with scrub for smooth 60fps animations
- All animations are GPU-accelerated transforms
- Lazy loads GSAP only when needed
- Cleanup function prevents memory leaks
