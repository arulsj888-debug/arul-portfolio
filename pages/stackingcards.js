import Head from 'next/head';
import StackingCards from '../components/StackingCards';

export default function StackingCardsPage() {
  return (
    <>
      <Head>
        <title>Projects - Stacking Cards | Arul Vendhan</title>
        <meta name="description" content="Explore my projects in a beautiful stacking cards experience" />
      </Head>
      
      <StackingCards />
    </>
  );
}
