'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const floatingItems = [
  'UX/UI',
  'Photoshop',
  'Javascript',
  'Next.js',
  'React',
  'CMS',
  'Illustrator',
  'Figma',
  'Tailwind',
];

function getRandomValue(min, max) {
  return Math.random() * (max - min) + min;
}

export default function FloatingText() {
  const [positions, setPositions] = useState([]);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const updatePositions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setContainerSize({ width, height });

        const centerX = width / 2;
        const centerY = height / 2;
        const rangeX = width * 0.9; // Verhoogd van 0.7 naar 0.9
        const rangeY = height * 0.7; // Verhoogd van 0.4 naar 0.7

        const generatedPositions = floatingItems.map(() => ({
          initialX: getRandomValue(centerX - rangeX / 2, centerX + rangeX / 2),
          initialY: getRandomValue(centerY - rangeY / 2, centerY + rangeY / 2),
        }));
        setPositions(generatedPositions);
      }
    };

    updatePositions();
    window.addEventListener('resize', updatePositions);

    return () => window.removeEventListener('resize', updatePositions);
  }, []);

  // Verwijder de controle die de component niet rendert als er geen posities zijn
  // if (positions.length === 0) {
  //   return null;
  // }

  return (
    <div
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/images/Me.svg')",
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div 
        ref={containerRef}
        className="relative w-[80%] max-w-4xl h-[80vh]"
      >
        {positions.map((position, index) => {
          const { initialX, initialY } = position;
          return (
            <motion.div
              key={index}
              className="absolute px-4 py-2 bg-orange-500 text-black font-semibold rounded-full"
              initial={{
                x: initialX,
                y: initialY,
              }}
              animate={{
                x: [
                  initialX,
                  initialX + getRandomValue(-containerSize.width * 0.2, containerSize.width * 0.2), // Verhoogd van 0.15 naar 0.2
                  initialX - getRandomValue(-containerSize.width * 0.2, containerSize.width * 0.2), // Verhoogd van 0.15 naar 0.2
                ],
                y: [
                  initialY,
                  initialY - getRandomValue(-containerSize.height * 0.15, containerSize.height * 0.15),
                  initialY + getRandomValue(-containerSize.height * 0.15, containerSize.height * 0.15),
                ],
              }}
              transition={{
                duration: getRandomValue(4, 8),
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                transform: `translate(-50%, -50%)`,
              }}
            >
              {floatingItems[index]}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

