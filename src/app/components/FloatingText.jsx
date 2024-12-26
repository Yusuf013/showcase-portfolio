'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const floatingItems = [
  'UX/UI',
  'Photoshop',
  'Javascript',
  'Swift',
  'React',
  'Typescript',
  'Illustrator',
  'Figma',
  'Tailwind',
];

function getRandomValue(min, max) {
  return Math.random() * (max - min) + min;
}

export default function FloatingText() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    // Genereer willekeurige start- en animatieposities op de client
    const generatedPositions = floatingItems.map(() => ({
      initialX: getRandomValue(-200, 200),
      initialY: getRandomValue(-200, 200),
      targetX: getRandomValue(-50, 50),
      targetY: getRandomValue(-50, 50),
    }));
    setPositions(generatedPositions);
  }, []);

  if (positions.length === 0) {
    // Wacht totdat de posities zijn gegenereerd
    return null;
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gray-800">
      <div className="relative w-[80%] h-[80%] border border-dashed border-orange-500 overflow-hidden">
        {floatingItems.map((item, index) => {
          const { initialX, initialY, targetX, targetY } = positions[index];
          return (
            <motion.div
              key={index}
              className="absolute px-4 py-2 bg-orange-500 text-black font-semibold rounded-full"
              initial={{
                x: initialX,
                y: initialY,
              }}
              animate={{
                x: [initialX, initialX + targetX, initialX - targetX, initialX],
                y: [initialY, initialY - targetY, initialY + targetY, initialY],
              }}
              transition={{
                duration: getRandomValue(4, 8),
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {item}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
