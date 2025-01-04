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
    // Genereer willekeurige startposities verspreid over de beperkte breedte en hoogte
    const generatedPositions = floatingItems.map(() => ({
      initialX: getRandomValue(0, window.innerWidth), // Volledige breedte van het scherm
      initialY: getRandomValue(window.innerHeight / 4, (window.innerHeight / 4) * 3), // Gecentreerde verticale zone
    }));
    setPositions(generatedPositions);
  }, []);

  if (positions.length === 0) {
    // Wacht totdat de posities zijn geladen
    return null;
  }

  return (
    <div
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/images/Me.svg')",
        backgroundSize: 'contain', // Zorg dat de afbeelding de hele achtergrond vult
        backgroundPosition: 'center', // Centreer de achtergrondafbeelding
        backgroundRepeat: 'no-repeat', // Voorkom dat de afbeelding herhaald wordt
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Wrapper met beperkte breedte */}
        <div className="relative w-[80%] max-w-4xl h-full">
          {floatingItems.map((item, index) => {
            const { initialX, initialY } = positions[index];
            return (
              <motion.div
                key={index}
                className="absolute px-4 py-2 bg-orange-500 text-black font-semibold rounded-full"
                initial={{
                  x: initialX, // Willekeurige X-positie
                  y: initialY, // Willekeurige Y-positie
                }}
                animate={{
                  x: [
                    initialX,
                    initialX + getRandomValue(-100, 100),
                    initialX - getRandomValue(-100, 100),
                  ],
                  y: [
                    initialY,
                    initialY - getRandomValue(-50, 50),
                    initialY + getRandomValue(-50, 50),
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
                {item}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
