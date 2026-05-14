import { ChevronLeft, ChevronRight, Play, Pause, Sparkles, Image as ImageIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DashboardScreen } from './interactive-screens/DashboardScreen.tsx';
import { AnalyticsScreen } from './interactive-screens/AnalyticsScreen.tsx';
import { LeadDetailsScreen } from './interactive-screens/LeadDetailsScreen.tsx';
import { AIScoringScreen } from './interactive-screens/AIScoringScreen.tsx';
import { CalculatorScreen } from './interactive-screens/CalculatorScreen.tsx';
import { imageUrl } from '../lib/assets';

const screens = [
  {
    title: 'Dashboard Overview',
    component: DashboardScreen,
    screenshot: imageUrl('Simulator_Screenshot_-_iPhone_17_Pro_-_2026-05-07_at_13.25.04-1.png')
  },
  {
    title: 'Lead Analytics',
    component: AnalyticsScreen,
    screenshot: imageUrl('Simulator_Screenshot_-_iPhone_17_Pro_-_2026-05-07_at_13.25.15-1.png')
  },
  {
    title: 'Lead Details',
    component: LeadDetailsScreen,
    screenshot: imageUrl('Simulator_Screenshot_-_iPhone_17_Pro_-_2026-05-07_at_13.25.26-1.png')
  },
  {
    title: 'AI-Powered Scoring',
    component: AIScoringScreen,
    screenshot: imageUrl('Simulator_Screenshot_-_iPhone_17_Pro_-_2026-05-07_at_13.25.36-1.png')
  },
  {
    title: 'Loan Calculator',
    component: CalculatorScreen,
    screenshot: imageUrl('Simulator_Screenshot_-_iPhone_17_Pro_-_2026-05-07_at_13.26.04-1.png')
  },
  {
    title: 'Admin Panel',
    screenshot: imageUrl('Simulator_Screenshot_-_iPhone_17_Pro_-_2026-05-07_at_13.26.12-1.png')
  },
  {
    title: 'User Profile',
    screenshot: imageUrl('Simulator_Screenshot_-_iPhone_17_Pro_-_2026-05-07_at_13.26.17-1.png')
  }
];

export function PhoneMockup() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isInteractive, setIsInteractive] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || isInteractive) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screens.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isInteractive]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + screens.length) % screens.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % screens.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const toggleMode = () => {
    setIsInteractive(!isInteractive);
    setIsAutoPlaying(false);
  };

  const CurrentScreen = screens[currentIndex].component;

  return (
    <div className="relative">
      {/* Mode Toggle - Above Phone */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex gap-2 bg-white rounded-full p-1 shadow-lg">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleMode}
          className={`px-4 py-2 rounded-full flex items-center gap-2 text-sm transition-colors ${
            isInteractive
              ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Live Demo</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleMode}
          className={`px-4 py-2 rounded-full flex items-center gap-2 text-sm transition-colors ${
            !isInteractive
              ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <ImageIcon className="w-4 h-4" />
          <span>Screenshots</span>
        </motion.button>
      </div>

      {/* iPhone Frame */}
      <div className="relative w-[320px] h-[650px] bg-black rounded-[50px] p-3 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10"></div>

        {/* Screen */}
        <div className="relative w-full h-full bg-white rounded-[42px] overflow-hidden">
          <AnimatePresence mode="wait">
            {isInteractive && CurrentScreen ? (
              <motion.div
                key={`interactive-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full relative"
              >
                <CurrentScreen />

                {/* Navigation Arrows for Interactive Mode */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex items-center justify-between px-2 pointer-events-none">
                  <motion.button
                    whileHover={{ scale: 1.1, x: -2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={goToPrevious}
                    className="w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg pointer-events-auto"
                    aria-label="Previous screen"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1, x: 2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={goToNext}
                    className="w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg pointer-events-auto"
                    aria-label="Next screen"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={`screenshot-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <img
                  src={screens[currentIndex].screenshot}
                  alt={screens[currentIndex].title}
                  className="w-full h-full object-cover"
                />

                {/* Navigation Overlay (Screenshots Only) */}
                <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 hover:opacity-100 transition-opacity">
                  <button
                    onClick={goToPrevious}
                    className="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Play/Pause Button (Screenshots Only) */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <button
                    onClick={toggleAutoPlay}
                    className="px-4 py-1.5 bg-black/60 hover:bg-black/80 rounded-full flex items-center gap-2 transition-colors"
                  >
                    {isAutoPlaying ? (
                      <>
                        <Pause className="w-3 h-3 text-white" fill="white" />
                        <span className="text-xs text-white">Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 text-white" fill="white" />
                        <span className="text-xs text-white">Play</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Screen Title (Screenshots Only) */}
                <div className="absolute top-4 left-4 right-4">
                  <div className="bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 text-center">
                    <p className="text-white text-xs">
                      {screens[currentIndex].title}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Navigation Dots */}
          <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-1.5 z-20">
            {screens.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-6 bg-white shadow-lg'
                    : 'w-1.5 bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to screen ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Side Buttons */}
        <div className="absolute right-0 top-32 w-1 h-16 bg-gray-800 rounded-l"></div>
        <div className="absolute left-0 top-24 w-1 h-8 bg-gray-800 rounded-r"></div>
        <div className="absolute left-0 top-36 w-1 h-12 bg-gray-800 rounded-r"></div>
        <div className="absolute left-0 top-52 w-1 h-12 bg-gray-800 rounded-r"></div>
      </div>

      {/* Screen Counter & Mode Info */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-center">
        <p className="text-sm text-gray-600">
          {currentIndex + 1} / {screens.length}
        </p>
        {isInteractive && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-purple-600 mt-1 flex items-center gap-1 justify-center"
          >
            <Sparkles className="w-3 h-3" />
            Interactive Mode
          </motion.p>
        )}
      </div>
    </div>
  );
}
