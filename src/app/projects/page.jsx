import Link from 'next/link';
import { motion } from 'framer-motion';
import Shape from '../public/images/shape.svg';

export default function MyComponent() {
  return (
    <Link href="/target-page">
      <a>
        <motion.div
          style={{
            WebkitMaskImage: 'url(/images/Polygon 9.svg)',
            maskImage: 'url(/images/Polygon 9.svg)',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
            backgroundColor: 'blue', // Achtergrondkleur van het gemaskerde element
            width: '200px',
            height: '200px',
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {/* Je kunt hier extra content toevoegen die in de mask valt */}
        </motion.div>
      </a>
    </Link>
  );
}
