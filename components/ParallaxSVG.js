// This file contains the complete SVG markup for the parallax background
export default function ParallaxSVG() {
  return (
    <svg className="parallax" viewBox="0 0 750 500" preserveAspectRatio="xMidYMax slice">
      <defs>
        <linearGradient id="grad1" x1="-154.32" y1="263.27" x2="-154.32" y2="374.3" gradientTransform="matrix(-1, 0, 0, 1.36, 231.36, -100.14)" gradientUnits="userSpaceOnUse">
          <stop offset="0.07" stopColor="#9c536b" />
          <stop offset="0.98" stopColor="#d98981" />
        </linearGradient>
        <radialGradient id="bg_grad" cx="375" cy="-30" r="318.69" gradientUnits="userSpaceOnUse">
          <stop offset="0.1" stopColor="#F5C54E" id="sun" />
          <stop offset="0.1" stopColor="#FFDBA6" />
          <stop offset="0.0" stopColor="#F7BB93" />
          <stop offset="0.0" stopColor="#F2995E" />
          <stop offset="0.0" stopColor="#f07560" />
          <stop offset="0.8" stopColor="#FFAB93" />
        </radialGradient>
        <linearGradient id="grad2" x1="242.5" y1="356.25" x2="750" y2="356.25" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fbbd93" />
          <stop offset="0.98" stopColor="#c46976" />
        </linearGradient>
        <linearGradient id="grad3" x1="467.26" y1="500" x2="467.26" y2="225.47" gradientUnits="userSpaceOnUse">
          <stop offset="0.01" stopColor="#ffb8bd" />
          <stop offset="1" stopColor="#914d64" />
        </linearGradient>
        <linearGradient id="grad4" x1="216.56" y1="227.64" x2="191.14" y2="600.82" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#70375a" />
          <stop offset="0.96" stopColor="#8a6e95" />
        </linearGradient>
        <linearGradient id="grad5" x1="1" y1="413.12" x2="340.58" y2="413.12" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#433d6c" />
          <stop offset="1" stopColor="#392e54" />
        </linearGradient>
        <linearGradient id="grad6" x1="454.13" y1="295.96" x2="454.13" y2="498.93" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2b2850" />
          <stop offset="0.99" stopColor="#563a6a" />
        </linearGradient>
        <linearGradient id="grad7" x1="434.38" y1="391.96" x2="474.27" y2="516.33" gradientUnits="userSpaceOnUse">
          <stop offset="0.3" stopColor="#1c1b38" />
          <stop offset="0.38" stopColor="#201e3e" />
          <stop offset="0.9" stopColor="#383263" />
        </linearGradient>
        <linearGradient id="grad8" x1="259.18" y1="335.54" x2="213.65" y2="500.39" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0e0a1a" />
          <stop offset="0.3" stopColor="#100d1f" />
          <stop offset="0.64" stopColor="#17142c" />
          <stop offset="0.95" stopColor="#201f3f" />
        </linearGradient>
        <linearGradient id="grad9" x1="508.16" y1="321.39" x2="726.97" y2="623.69" gradientUnits="userSpaceOnUse">
          <stop offset="0.01" stopColor="#120e22" />
          <stop offset="1" stopColor="#221d42" />
        </linearGradient>
        <linearGradient id="lg4" x1="641.98" y1="274.9" x2="638.02" y2="334.36" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2c2c50" />
          <stop offset="1" stopColor="#434375" />
        </linearGradient>
        <radialGradient id="bg2-grad" cx="365.22" cy="500" r="631.74" gradientTransform="translate(750 552.6) rotate(180) scale(1 1.11)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3b2f4a" />
          <stop offset="0.12" stopColor="#342a42" />
          <stop offset="0.18" stopColor="#2d253a" />
          <stop offset="0.33" stopColor="#262035" />
          <stop offset="0.41" stopColor="#221c30" />
          <stop offset="0.45" stopColor="#1f1a2d" />
          <stop offset="0.55" stopColor="#1c1828" />
          <stop offset="0.64" stopColor="#191624" />
          <stop offset="0.72" stopColor="#17141f" />
          <stop offset="0.78" stopColor="#16161d" />
        </radialGradient>
      </defs>

      <rect id="bg" width="750" height="500" opacity="0.8" fill="url(#bg_grad)" />

      <g id="clouds" fill="#fefefe">
        <path id="cloud4" transform='translate(600 0)' d="M402.34,341.68c9.9-10.24,23.76-7.43,36.05-5.48C448,332,458.88,329,468.9,334c-.95-7.91,8.65-14.92,15.9-11.61-3.34-11.77,13-13.9,20.53-8.34A13.53,13.53,0,0,1,522,310.16c2.64-18.11,27.85-24.13,38.38-9.17,3.54-5.51,12.12-6.88,17.2-2.74,6.59-43.22,70.78-27.93,65.83,12.62,14.7-4.43,32,6.72,34.08,21.93,5.76-2.23,29.28,1,21.76,9.26" />
        <path id="cloud3" transform='translate(600 0)' d="M382.94,363.16c-7-10.5-18.72-9.06-28.19-4.53-12.19-6.71-26.73-11.74-39.62-3.13,1-15.45-18-25.51-28-12.41-14.59-29.67-56.68-34.41-72-3.09-1.41,4-4.73,6.07-8.1,2.88-23.13-25.66-57.12-30.25-67.73,8.21-13.05-1.88-33.42-9.15-37.47,10.07a38.08,38.08,0,0,0-36.36,2.11" />
        <path id="cloud2" transform='translate(-600 0)' d="M506.86,233.56c9.62-3.21,23.27-4,33.88-2.17,0-5.7,10.4-6.68,14-3.58,10.32-12.45,29.93-5.12,40.08,0,10.06-6.52,27.67-9.72,33.93,2.42,5.53-.13,15.88-3.23,18.8,2.94a31.53,31.53,0,0,1,18.21.64" />
        <path id="cloud1" transform='translate(-600 0)' d="M402.18,271.3c-7.57-7.46-18.46-7.52-28.05-5.3-6.75-8.79-20.54-13.18-27.24-1.45-10.4-11.06-30.66-24.20-37.74-2.24a13.1,13.1,0,0,0-17.76,1.47c-11.23-25.69-58.46-41.29-64.24-4.06-9-8.26-20.15-2.62-27.47,4.4-11-2.87-22.18-7.58-31.72,2.7-8.44-.75-18.1-2.8-24.71,4.57" />
      </g>

      {/* Scene 1 - Hills */}
      <g id="scene1">
        <g id="hills1">
          <path id="h1-9" d="M696.36,409H75V335.47c10.19-.52,20.5-.36,30.05-3.65,8.11-2.8,15.84-8.49,23.78-11.33s18.18,1.84,25.36-4.85C165,305.56,172,289.79,186.71,292.8c6.21,1.27,12.09,3.66,18.43.84,6-2.65,9.73-9.46,14.69-13.54,2.87-2.35,6.42-3.2,9.35-5.49,1.65-1.28,5.45-6.37,7-6.92,7.94-2.93,10.34,2.69,18.56-3.47,6.45-4.84,8.52-8.21,15.45-5,5,2.35,11.89,10.09,16,15.37C294.9,286,302,297.77,312.71,307.53c11.62,10.63,21.59,9.37,34.67,5.83,16.12-4.37,18.32,9.06,32.24,15.28,7.45,3.32,13.23-1.7,19.6-2.08,3.64-.22,5.85,2.12,9.37,1.82,3.12-.27,4.08-4.44,8.33-3,7.32,12.31,15.75,20,28.21,20.59,14.32.7,27.12.76,39.73-4.94A145.24,145.24,0,0,0,502.11,332c8.71-5.36,11.22-2.82,19.35,1.5,11.66,6.21,25.31,1.08,36.56,9.18,5.53,4,8.36,12.23,14.64,14.79,4.86,2,15.59.38,20.4-1.18,13.47-4.38,21.52-16.59,36.56-17.33,13.57-.67,25.19-4.17,39.11-2.31,10.91,1.46,18.72-.1,27.63-2.61Z" fill="url(#grad1)" />
          <path id="h1-8" d="M750,500V212.49a19.09,19.09,0,0,0-11.54,8.17c-2.21,3.35-4.39,7.9-7.92,7.69-1.44-.08-2.78-1-4.23-1.08-5.12-.2-7.87,10.11-12.84,8.66a2.7,2.7,0,0,0-2.57-3.34c-1.49.1-2.72,1.38-3.77,2.67a46.94,46.94,0,0,0-7.7,14c-1.76-6-8.53-7.93-13.43-5.51s-8.31,7.76-11.48,12.87l-17.31,27.92c-4.54,7.33-11.47,15.57-18.52,12.15-3.38-1.64-5.76-5.76-9.32-6.73s-7.55,1.64-11.18.48c-5.45-1.76-8.37-11.36-14-10.4-3.13.54-5.93,4.55-8.87,3.14-1.52-.73-2.44-2.76-4-3.36s-3.32.52-5,1.13c-7.4,2.73-14.16-5.41-21.27-9.08-12.35-6.38-26.85,1.31-36.59,12.45-3.1,3.54-6,7.5-9.78,9.89-3.22,2-6.88,2.8-10.48,3.54L480,303.58c-15,3.07-30.14,6.2-44.07,13.54-6.63,3.48-13,7.91-19.94,10.16-10.83,3.5-22.26,1.5-33.47,1.18-9.18-.27-102.2,122.09-140,171.54Z" fill="url(#grad2)" />
        </g>
      </g>

      {/* Scene 2 */}
      <g id="scene2">
        <g id="hills2">
          <path id="h2-1" d="M524.28,418.82c6.36,0,80.19-14.81,103.12-36.53S655.28,345.8,679,359.64s33.69,18.54,46.63,18.82a158.62,158.62,0,0,1,23.88,2.4V447L632,458.92Z" fill="url(#lg4)" />
        </g>
      </g>

      {/* Scene 3 */}
      <g id="scene3" style={{visibility: 'hidden'}}>
        <rect id="bg2" x="0" y="0" width="750" height="500" fill="url(#bg2-grad)" />
        <g id="stars" fill="#fff" style={{opacity: 0}}>
          <path d="M699.71,128.24a1,1,0,1,1-1-1A1,1,0,0,1,699.71,128.24Z" />
          <path d="M643.78,37.74a1,1,0,1,1-1-1A1,1,0,0,1,643.78,37.74Z" />
          <path d="M666.33,139.16a1.46,1.46,0,1,1-1.46-1.45A1.46,1.46,0,0,1,666.33,139.16Z" />
          <circle cx="636.11" cy="77.24" r="1.46" />
          <path d="M714.4,31.27a1.46,1.46,0,1,1-1.46-1.45A1.46,1.46,0,0,1,714.4,31.27Z" />
          <path d="M725,27.36a1.46,1.46,0,1,1-1.46-1.46A1.46,1.46,0,0,1,725,27.36Z" />
          <path d="M468.41,65.4A1.46,1.46,0,1,1,467,63.94,1.46,1.46,0,0,1,468.41,65.4Z" />
          <path d="M710,97.11a1.46,1.46,0,1,1-1.46-1.46A1.45,1.45,0,0,1,710,97.11Z" />
          <circle cx="711.49" cy="170.22" r="1.46" />
          <path d="M677.73,260.6a1.46,1.46,0,1,1-1.46-1.45A1.46,1.46,0,0,1,677.73,260.6Z" />
          <path d="M731.11,208.78a1.46,1.46,0,1,1-1.46-1.45A1.46,1.46,0,0,1,731.11,208.78Z" />
          <path d="M447.4,234.79a1.46,1.46,0,1,1-1.46-1.45A1.46,1.46,0,0,1,447.4,234.79Z" />
          <path d="M523.16,200.18a1.46,1.46,0,1,1-1.45-1.46A1.45,1.45,0,0,1,523.16,200.18Z" />
          <path d="M624.94,167.77a1.46,1.46,0,1,1-1.45-1.45A1.45,1.45,0,0,1,624.94,167.77Z" />
          <path d="M562.88,139.31a1.46,1.46,0,1,1-1.46-1.45A1.46,1.46,0,0,1,562.88,139.31Z" />
          <path d="M372,86.87a1.46,1.46,0,1,1-1.45-1.45A1.45,1.45,0,0,1,372,86.87Z" />
          <circle cx="473.23" cy="34.67" r="1.46" />
          <path d="M398.74,28.36a1.46,1.46,0,1,1-1.46-1.46A1.46,1.46,0,0,1,398.74,28.36Z" />
        </g>
      </g>
    </svg>
  );
}
