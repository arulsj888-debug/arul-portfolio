import styles from '../styles/StarsBackground.module.css';

export default function StarsBackground() {
  // Generate random stars
  const generateStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const cx = Math.round(Math.random() * 10000) / 100 + '%';
      const cy = Math.round(Math.random() * 10000) / 100 + '%';
      const r = Math.round((Math.random() + 0.5) * 10) / 10;
      stars.push({ cx, cy, r, key: i });
    }
    return stars;
  };

  const starLayers = [
    generateStars(200),
    generateStars(200),
    generateStars(200)
  ];

  return (
    <div className={styles.starsWrapper}>
      {starLayers.map((stars, layerIndex) => (
        <svg
          key={layerIndex}
          className={styles.stars}
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        >
          {stars.map((star) => (
            <circle
              key={star.key}
              className={styles.star}
              cx={star.cx}
              cy={star.cy}
              r={star.r}
            />
          ))}
        </svg>
      ))}
      
      <svg
        className={styles.extras}
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="comet-gradient" cx="0" cy=".5" r="0.5">
            <stop offset="0%" stopColor="rgba(255,255,255,.8)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        
        <g transform="rotate(-135)">
          <ellipse
            className={`${styles.comet} ${styles.cometA}`}
            fill="url(#comet-gradient)"
            cx="0"
            cy="0"
            rx="150"
            ry="2"
          />
        </g>
        
        <g transform="rotate(20)">
          <ellipse
            className={`${styles.comet} ${styles.cometB}`}
            fill="url(#comet-gradient)"
            cx="100%"
            cy="0"
            rx="150"
            ry="2"
          />
        </g>
        
        <g transform="rotate(300)">
          <ellipse
            className={`${styles.comet} ${styles.cometC}`}
            fill="url(#comet-gradient)"
            cx="40%"
            cy="100%"
            rx="150"
            ry="2"
          />
        </g>
      </svg>
    </div>
  );
}
