'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const names = [
  "Yusuf Taşçı",
  "ユスフタスチ",
  "يوسف تاشجي",
  "Юсуф Тасчи",
  "유수프 타스치",
  "Γιουσούφ Τάσκι",
  "Yusuf Taşçı",
]

export default function NameAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length)
    }, 2000) // Verander de naam elke 2 seconden

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center py-[200px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-9xl font-bold text-[#F47519]"
        >
          {"{"} {names[currentIndex]} {"}"}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
