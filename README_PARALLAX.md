# Parallax Scrolling Background for Portfolio

This implementation adds a beautiful parallax scrolling animation to your Next.js portfolio that responds to scroll events.

## What's Included

- **ParallaxBackground.js** - Main component with GSAP scroll animations
- **ParallaxSVG.js** - SVG artwork with multiple scenes (sunrise to night)
- **ParallaxBackground.module.css** - Styling for the parallax effect

## Features

- 🌅 **Scene 1**: Sunrise with moving hills and clouds
- 🌆 **Scene 2**: Daytime with animated landscape
- 🌙 **Scene 3**: Night sky with twinkling stars
- 📱 **Responsive**: Works on mobile and desktop
- ⚡ **Performant**: Uses GSAP ScrollTrigger for smooth animations
- 🎨 **Customizable**: Easy to modify colors and timing

## How It Works

The animation is triggered by scrolling:
- **0-45%**: Hills and clouds move at different speeds (parallax effect)
- **15-40%**: Second scene fades in
- **60-100%**: Transitions to night scene with stars
- Sun moves across the sky throughout the scroll

## Installation

The required dependencies are already in your package.json:
```json
{
  "gsap": "^3.13.0",
  "framer-motion": "^11.11.0"
}
```

If you need to install them:
```bash
npm install gsap framer-motion
```

## Usage

The component is already integrated into your `pages/index.js`:

```jsx
import ParallaxBackground from "../components/ParallaxBackground";

export default function Home() {
  return (
    <>
      <ParallaxBackground />
      <main className="container">
        {/* Your content here */}
      </main>
    </>
  );
}
```

## Customization

### Adjust Scroll Speed
In `ParallaxBackground.js`, modify the `speed` variable:
```javascript
let speed = 100; // Increase for faster movement
```

### Change Colors
Edit the gradient stops in `ParallaxSVG.js`:
```jsx
<stop offset="0.1" stopColor="#F5C54E" id="sun" />
```

### Modify Animation Timing
Adjust ScrollTrigger settings:
```javascript
ScrollTrigger.create({
  start: "top top",    // When animation starts
  end: "45% 100%",     // When animation ends
  scrub: 3             // Smoothness (higher = smoother)
});
```

### Adjust Content Height
In `styles/globals.css`, change the container height:
```css
.container {
  min-height: 6000px; /* Total scroll distance */
}
```

## Performance Tips

1. The SVG is simplified for better performance
2. Animations use GSAP's optimized engine
3. ScrollTrigger only animates visible elements
4. Background is fixed position (no repaints)

## Troubleshooting

**Animation not working?**
- Check browser console for errors
- Ensure GSAP is installed: `npm list gsap`
- Verify the scrollElement has height

**Content not visible?**
- Check z-index values in globals.css
- Ensure container has `position: relative`
- Verify backdrop-filter support in your browser

**Performance issues?**
- Reduce the number of animated elements
- Increase scrub value for less frequent updates
- Simplify SVG paths

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support (iOS 9+)
- IE11: ❌ Not supported (use fallback)

## Credits

Original animation concept from [isladjan.com](https://isladjan.com/work/4/)
Adapted for Next.js with simplified implementation.
