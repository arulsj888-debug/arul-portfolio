/**
 * SVG to React Converter
 * 
 * This script helps convert HTML SVG attributes to React-compatible format
 * 
 * Usage:
 * 1. Copy your SVG content
 * 2. Paste it into the 'svgContent' variable below
 * 3. Run: node scripts/convert-svg-to-react.js
 * 4. Copy the output and paste into your React component
 */

const fs = require('fs');
const path = require('path');

// Paste your SVG content here (or read from a file)
const svgContent = `
<!-- PASTE YOUR SVG CONTENT HERE -->
`;

function convertSVGToReact(svg) {
  let converted = svg;

  // Convert hyphenated attributes to camelCase
  const attributeMap = {
    'stop-color': 'stopColor',
    'stop-opacity': 'stopOpacity',
    'stroke-width': 'strokeWidth',
    'stroke-miterlimit': 'strokeMiterlimit',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'stroke-dasharray': 'strokeDasharray',
    'stroke-dashoffset': 'strokeDashoffset',
    'fill-rule': 'fillRule',
    'fill-opacity': 'fillOpacity',
    'clip-path': 'clipPath',
    'clip-rule': 'clipRule',
    'font-family': 'fontFamily',
    'font-size': 'fontSize',
    'font-weight': 'fontWeight',
    'text-anchor': 'textAnchor',
    'text-decoration': 'textDecoration',
    'xlink:href': 'xlinkHref',
    'xml:space': 'xmlSpace',
    'xmlns:xlink': 'xmlnsXlink'
  };

  // Replace each attribute
  Object.entries(attributeMap).forEach(([html, react]) => {
    const regex = new RegExp(html, 'g');
    converted = converted.replace(regex, react);
  });

  // Convert class to className
  converted = converted.replace(/class="/g, 'className="');
  converted = converted.replace(/class='/g, "className='");

  // Convert style strings to objects (if any inline styles exist)
  // This is more complex and might need manual adjustment

  return converted;
}

// Convert the SVG
const reactSVG = convertSVGToReact(svgContent);

// Output to console
console.log('='.repeat(80));
console.log('CONVERTED SVG (React Format)');
console.log('='.repeat(80));
console.log(reactSVG);
console.log('='.repeat(80));

// Optionally save to file
const outputPath = path.join(__dirname, '..', 'public', 'converted-svg.txt');
fs.writeFileSync(outputPath, reactSVG, 'utf8');
console.log(`\n✅ Converted SVG saved to: ${outputPath}`);
console.log('\nNext steps:');
console.log('1. Copy the converted SVG from above or from the file');
console.log('2. Paste it into components/ParallaxSVGDayNight.js');
console.log('3. Test in your browser with light mode enabled');
