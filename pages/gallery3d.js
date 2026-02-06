import { useRouter } from 'next/router';
import Gallery3D from '../components/Gallery3D';
import Head from 'next/head';
import styles from '../styles/Gallery3DPage.module.css';

export default function Gallery3DPage() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/?mode=dark');
  };

  return (
    <>
      <Head>
        <title>Projects - 3D Gallery | Arul Vendhan</title>
        <meta name="description" content="Explore my projects in an immersive 3D gallery experience" />
      </Head>
      
      <div className={styles.pageContainer}>
        <button onClick={handleBack} className={styles.backButton}>
          <span className={styles.backArrow}>←</span>
          <span className={styles.backText}>Back to Portfolio</span>
        </button>
        
        <Gallery3D />
      </div>
    </>
  );
}
