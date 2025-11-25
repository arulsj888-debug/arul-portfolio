# SVG Content Template

## What to Paste

From your original code, copy the SVG content that looks like this structure:

```xml
<defs>
  <!-- All gradients -->
  <linearGradient id="grad1" ...>
    <stop offset="0.07" stopColor="#9c536b" />
    <stop offset="0.98" stopColor="#d98981" />
  </linearGradient>
  
  <radialGradient id="bg_grad" ...>
    <stop offset="0.1" stopColor="#F5C54E" id="sun" />
    <!-- more stops -->
  </radialGradient>
  
  <!-- All other gradients: grad2-9, lg4-8, bg2-grad, etc. -->
</defs>

<rect id="bg" width="750" height="500" opacity="0.8" fill="url(#bg_grad)" />

<g id="clouds" fill="#fefefe">
  <path id="cloud4" transform='translate(600 0)' d="..." />
  <path id="cloud3" transform='translate(600 0)' d="..." />
  <path id="cloud2" transform='translate(-600 0)' d="..." />
  <path id="cloud1" transform='translate(-600 0)' d="..." />
</g>

<g id="cloudStart-L" style={{fill: '#fff', opacity: 0}}>
  <!-- Cloud paths -->
</g>

<g id="cloudStart-R" style={{fill: '#fff', opacity: 0}}>
  <!-- Cloud paths -->
</g>

<path id="cloudsBig-L" d="..." style={{fill: '#fff', opacity: 0.5}} />
<path id="cloudsBig-R" d="..." style={{fill: '#fff', opacity: 0.5}} />

<!-- SCENE 2 -->
<g id="scene2">
  <g id="bats" style={{opacity: 0}}>
    <!-- Bat paths -->
  </g>
  <g id="hills2">
    <path id="h2-6" d="..." fill="url(#lg4)" />
    <path id="h2-5" d="..." fill="url(#lg5)" />
    <path id="h2-4" d="..." fill="url(#lg6)" />
    <path id="h2-3" d="..." fill="url(#lg7)" />
    <path id="h2-2" d="..." fill="url(#lg8)" />
    <path id="h2-1" style={{opacity: 0}} d="..." />
  </g>
</g>

<!-- SCENE 3 -->
<g id="scene3" style={{visibility: 'hidden'}}>
  <rect id="bg2" y="-59.8" width="750" height="612.4" fill="url(#bg2-grad)" />
  
  <g id="fstar">
    <!-- Falling star -->
  </g>
  
  <g id="stars" fill="#fff" style={{opacity: 0}}>
    <!-- All star paths and circles -->
  </g>
  
  <g id="hills3" transform="translate(0, -110)">
    <g id="info2">
      <!-- Arrow and text -->
    </g>
    <polygon id="h3-5" points="..." style={{fill: 'url(#linear-gradient)'}} />
    <path id="h3-4" d="..." style={{fill: 'url(#linear-gradient-2)'}} />
    <path id="h3-3" d="..." style={{fill: 'url(#linear-gradient-3)'}} />
    <path id="h3-2" d="..." style={{fill: 'url(#linear-gradient-4)'}} />
    <g id="h3-1">
      <!-- Dinosaurs and other elements -->
    </g>
  </g>
</g>

<!-- SCENE 1 -->
<g id="scene1">
  <g id="hills1">
    <path id="h1-9" d="..." fill="url(#grad1)" />
    <path id="h1-8" d="..." fill="url(#grad2)" />
    <path id="h1-7" d="..." fill="url(#grad3)" />
    <path id="h1-6" d="..." fill="url(#grad4)" />
    <path id="h1-5" d="..." fill="url(#grad5)" />
    <path id="h1-4" d="..." fill="url(#grad6)" />
    <path id="h1-3" d="..." fill="url(#grad7)" />
    <path id="h1-2" d="..." fill="url(#grad8)" />
    <path id="h1-1" d="..." fill="url(#grad9)" />
    
    <g id="info">
      <!-- Arrow and text -->
    </g>
    
    <path id="bird" style={{opacity: 0}} d="..." fill="#16122b" />
  </g>
</g>
```

## Important Notes:

1. **Convert all HTML attributes to React**:
   - `stop-color` → `stopColor`
   - `stop-opacity` → `stopOpacity`
   - `stroke-width` → `strokeWidth`
   - `fill-rule` → `fillRule`
   - `xlink:href` → `xlinkHref`
   - `style="..."` → `style={{...}}`

2. **Style attributes must be objects**:
   ```jsx
   // Wrong (HTML)
   style="opacity: 0; fill: #fff"
   
   // Right (React)
   style={{opacity: 0, fill: '#fff'}}
   ```

3. **Keep all IDs exactly as shown** - the GSAP animations reference these IDs

4. **Paste between the `<svg>` tags** in `components/ParallaxSVGDayNight.js`

## Where to Paste:

```jsx
<svg 
  ref={svgRef} 
  className={styles.parallax} 
  viewBox="0 0 750 500" 
  preserveAspectRatio="xMidYMax slice"
>
  {/* PASTE ALL THE ABOVE CONTENT HERE */}
</svg>
```

## Verification:

After pasting, check that you have all these key elements:
- [ ] `<defs>` with all gradients
- [ ] `<rect id="bg">`
- [ ] `<g id="clouds">`
- [ ] `<g id="scene1">` with h1-1 through h1-9
- [ ] `<g id="scene2">` with h2-1 through h2-6 and bats
- [ ] `<g id="scene3">` with h3-1 through h3-5 and stars
- [ ] `<path id="bird">`
- [ ] `<g id="info">` and `<g id="info2">`

That's it! Once pasted, your animation will be complete! 🎉
