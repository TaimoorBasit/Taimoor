"use client";

import { motion } from 'framer-motion';

// Optimized cyber floating orbs - reduced from 6 to 2 for better performance
function CyberFloatingOrbs() {
  const orbs = [
    { id: 0, color: 'rgba(255,62,92,0.15)', size: 150, duration: 20 },
    { id: 1, color: 'rgba(137,255,240,0.15)', size: 200, duration: 25 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full blur-2xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${30 + orb.id * 40}%`,
            top: `${20 + orb.id * 30}%`,
            background: `radial-gradient(circle, ${orb.color}, transparent)`,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 35, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Optimized particles - reduced from 15 to 8 for better scroll performance
function OptimizedParticles() {
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    color: i % 2 === 0 ? 'var(--electric-coral)' : 'var(--cyan-mist)',
    duration: 8 + Math.random() * 4,
    delay: i * 0.8,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: particle.color,
            opacity: 0.3,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.random() * 15 - 7.5, 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}

// Simplified floating code symbols - reduced for performance
function FloatingCodeSymbols() {
  const symbols = ['</>', '{ }', '=>'];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {symbols.map((symbol, i) => (
        <motion.div
          key={symbol}
          className="absolute text-xl font-mono opacity-5"
          style={{
            left: `${25 + i * 35}%`,
            top: `${30 + i * 20}%`,
            color: 'var(--cyan-mist)',
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.05, 0.2, 0.05],
          }}
          transition={{
            duration: 12 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </div>
  );
}

// Simplified scan line effect - slower for better performance
function ScanLine() {
  return (
    <motion.div
      className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-electric-coral/20 to-transparent"
      animate={{
        top: ['0%', '100%'],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

// Main background effects component - optimized
export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(137, 255, 240, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(137, 255, 240, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* All animations removed for maximum smoothness */}

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-obsidian-black/20" />
    </div>
  );
}
