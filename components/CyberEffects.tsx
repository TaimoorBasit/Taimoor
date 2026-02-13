"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Optimized cyber cursor trail component
export function CyberCursorTrail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Cursor - simplified and optimized */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-50"
        style={{
          background: 'var(--electric-coral)',
          left: mousePosition.x - 6,
          top: mousePosition.y - 6,
          willChange: 'transform',
        }}
      />
    </>
  );
}

// Page transition wrapper
export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      style={{ pointerEvents: 'auto' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Cyber loading screen
export function CyberLoadingScreen() {
  return (
    <motion.div
      style={{ pointerEvents: 'none' }}
      className="fixed inset-0 bg-obsidian-black flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <div className="text-center">
        {/* Cyber Logo */}
        <motion.div
          className="w-20 h-20 mx-auto mb-8 rounded-full"
          style={{
            background: 'linear-gradient(135deg, var(--electric-coral), var(--cyan-mist))',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-2xl font-bold" style={{ color: 'var(--obsidian-black)' }}>
              MT
            </span>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.h1
          className="text-2xl font-bold mb-4"
          style={{ color: 'var(--snow-white)' }}
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          M Taimoor Awan
        </motion.h1>

        {/* Loading Bar */}
        <div className="w-64 h-1 bg-slate-gray/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, var(--electric-coral), var(--cyan-mist))',
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Loading Text */}
        <motion.p
          className="mt-4 text-sm"
          style={{ color: 'var(--slate-gray)' }}
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          Loading Cyber Experience...
        </motion.p>
      </div>
    </motion.div>
  );
}

