"use client";

import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Code, Zap } from 'lucide-react';

// Optimized floating particles for cyber effect - reduced for better scroll performance
function CyberParticles() {
  const particles = Array.from({ length: 4 }, (_, i) => i);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-mist rounded-full opacity-40"
          style={{
            left: `${20 + i * 20}%`,
            top: `${30 + i * 15}%`,
          }}
          animate={{
            y: [0, -60, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Optimized floating code symbols - reduced for better performance
function FloatingCodeSymbols() {
  const symbols = ['</>', '{ }', '=>', 'npm'];
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {symbols.map((symbol, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-sm font-bold opacity-20"
          style={{
            left: `${25 + i * 25}%`,
            top: `${20 + i * 20}%`,
            color: 'rgba(255, 62, 92, 0.2)',
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut",
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </div>
  );
}

// Optimized holographic background effect - simplified for better performance
function HolographicBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ willChange: 'background' }}
        animate={{
          background: [
            "radial-gradient(circle at 30% 40%, rgba(255,62,92,0.08), transparent 50%)",
            "radial-gradient(circle at 70% 60%, rgba(137,255,240,0.08), transparent 50%)",
            "radial-gradient(circle at 30% 40%, rgba(255,62,92,0.08), transparent 50%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <motion.section 
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pb-24"
      style={{ backgroundColor: 'var(--obsidian-black)', y }}
    >
      {/* Background Effects */}
      <HolographicBackground />
      <CyberParticles />
      <FloatingCodeSymbols />
      
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Mouse Follow Glow */}
          <motion.div
        className="absolute w-96 h-96 bg-electric-coral/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
            <motion.div
          className="space-y-6 sm:space-y-8"
          initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Name with Cyber Glow */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold relative"
            style={{ color: 'var(--snow-white)' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span
              className="cyber-gradient-text text-glow"
              animate={{
                textShadow: [
                  "0 0 20px var(--electric-coral)",
                  "0 0 40px var(--electric-coral), 0 0 60px var(--electric-coral)",
                  "0 0 20px var(--electric-coral)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Muhammad Taimoor
            </motion.span>
          </motion.h1>

          {/* Subtitle with Holographic Effect */}
          <motion.div
            className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background: "linear-gradient(90deg, var(--electric-coral), var(--cyan-mist), var(--holographic-silver), var(--electric-coral))",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
                  Full Stack Web Developer
            </motion.span>
            
            {/* Animated Underline */}
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-electric-coral via-cyan-mist to-electric-coral rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
              style={{
                boxShadow: "0 0 20px var(--electric-coral)",
              }}
            />
          </motion.div>

          {/* Description */}
              <motion.p
            className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: 'var(--slate-gray)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              >
            Crafting digital experiences with cutting-edge technologies. 
            Specialized in React, Next.js, Laravel, WordPress, and Shopify development.
              </motion.p>

          {/* CTA Buttons */}
            <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            >
              <motion.a
              href="#contact"
              className="cyber-button group flex items-center gap-2 px-8 py-4 text-lg font-semibold"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 40px var(--electric-coral)"
              }}
                whileTap={{ scale: 0.95 }}
              >
              Let&apos;s Connect
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
              href="#projects"
              className="cyber-glass px-8 py-4 text-lg font-semibold transition-colors group flex items-center gap-2 rounded-full"
              style={{ color: 'var(--snow-white)' }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px var(--cyan-mist)"
              }}
                whileTap={{ scale: 0.95 }}
              >
              View My Work
              <Code size={20} className="group-hover:rotate-12 transition-transform" />
              </motion.a>
            </motion.div>

          {/* Tech Badges */}
            <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
            >
            {['React', 'Next.js', 'Laravel', 'WordPress', 'Shopify'].map((tech, i) => (
                <motion.div
                key={tech}
                className="cyber-glass px-4 py-2 rounded-full text-sm font-medium transition-colors"
                style={{ color: 'rgba(249, 250, 251, 0.8)' }}
                  whileHover={{
                    scale: 1.1,
                  boxShadow: "0 0 20px var(--cyan-mist)"
                  }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                >
                {tech}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
          <motion.div
          className="w-6 h-10 border-2 rounded-full flex justify-center"
          style={{ borderColor: 'var(--electric-coral)' }}
          animate={{ 
            boxShadow: [
              "0 0 10px var(--electric-coral)",
              "0 0 20px var(--electric-coral)",
              "0 0 10px var(--electric-coral)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 rounded-full mt-2"
            style={{ backgroundColor: 'var(--electric-coral)' }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
          </motion.div>
    </motion.section>
  );
}