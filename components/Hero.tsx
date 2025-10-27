"use client";

import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Code } from 'lucide-react';

// Removed particles for better performance

// Removed holographic background for better performance

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <motion.section 
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pb-24"
      style={{ backgroundColor: 'var(--obsidian-black)', y }}
    >
      {/* Background Effects */}
      
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Mouse Follow Glow - Removed for better performance */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
            <motion.div
          className="space-y-6 sm:space-y-8"
          initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Name */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold relative"
            style={{ color: 'var(--snow-white)' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="cyber-gradient-text">
              Muhammad Taimoor
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium cyber-gradient-text">
              Full Stack Web Developer
            </span>
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

      {/* Scroll Indicator - Removed for better performance */}
    </motion.section>
  );
}