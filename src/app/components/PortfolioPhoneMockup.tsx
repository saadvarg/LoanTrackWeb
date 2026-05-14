import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const screenshots = [
  '/src/imports/Simulator_Screenshot_-_iPhone_17_Pro_-_2026-05-07_at_13.25.04-1.png',
  '/src/imports/Simulator_Screenshot_-_iPhone_17_Pro_-_2026-05-07_at_13.25.15-1.png',
  '/src/imports/Simulator_Screenshot_-_iPhone_17_Pro_-_2026-05-07_at_13.25.26-1.png',
  '/src/imports/Simulator_Screenshot_-_iPhone_17_Pro_-_2026-05-07_at_13.25.36-1.png',
  '/src/imports/Simulator_Screenshot_-_iPhone_17_Pro_-_2026-05-07_at_13.26.04-1.png'
];

export function PortfolioPhoneMockup() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Glow Effect */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 blur-3xl rounded-full"
      />

      {/* Phone Frame */}
      <div className="relative">
        <motion.div
          initial={{ rotateY: -30, rotateX: 10 }}
          animate={{ rotateY: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative w-[340px] h-[680px] bg-gradient-to-br from-gray-900 to-black rounded-[60px] p-4 shadow-2xl border border-white/10"
        >
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-black rounded-b-3xl z-20" />

          {/* Screen */}
          <div className="relative w-full h-full bg-black rounded-[50px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={screenshots[currentIndex]}
                alt={`Screenshot ${currentIndex + 1}`}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Reflection Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Side Buttons */}
          <div className="absolute right-0 top-[140px] w-[3px] h-[60px] bg-gray-700 rounded-l-sm" />
          <div className="absolute left-0 top-[120px] w-[3px] h-[30px] bg-gray-700 rounded-r-sm" />
          <div className="absolute left-0 top-[160px] w-[3px] h-[50px] bg-gray-700 rounded-r-sm" />
        </motion.div>

        {/* Floating Indicators */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {screenshots.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              animate={{
                scale: index === currentIndex ? 1.2 : 1,
                backgroundColor: index === currentIndex ? '#a855f7' : '#ffffff40'
              }}
              whileHover={{ scale: 1.3 }}
              className="w-2 h-2 rounded-full cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
