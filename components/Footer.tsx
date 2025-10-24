"use client";

import { motion } from 'framer-motion';
import { Linkedin, Instagram, Code, Zap, Sparkles } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, url: 'https://www.linkedin.com/in/mohammad-taimoor', label: 'LinkedIn' },
  { icon: Instagram, url: 'https://www.instagram.com/tamouriii?igsh=cmx3YW00am4wdTNx', label: 'Instagram' },
];

// Floating cyber particles for footer
function FooterParticles() {
  const particles = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: Math.random() > 0.5 ? 'var(--electric-coral)' : 'var(--cyan-mist)',
            opacity: Math.random() * 0.4 + 0.2,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
            </div>
  );
}

// Cyber scan line effect
function CyberScanLine() {
  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-px"
      style={{
        background: 'linear-gradient(90deg, transparent, var(--electric-coral), transparent)',
      }}
      animate={{
        x: ['-100%', '100%'],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      }}
    />
  );
}

// Holographic border effect
function HolographicBorder() {
  return (
    <div className="absolute inset-0 rounded-t-3xl overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(45deg, var(--electric-coral), var(--cyan-mist), var(--holographic-silver), var(--electric-coral))',
          backgroundSize: '400% 400%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div 
        className="absolute inset-px rounded-t-3xl"
        style={{ backgroundColor: 'var(--obsidian-black)' }}
      />
          </div>
  );
}

export function Footer() {
  return (
    <footer className="relative py-8 sm:py-12 overflow-hidden">
      {/* Background Effects */}
      <HolographicBorder />
      <FooterParticles />
      <CyberScanLine />
      
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Social Links */}
            <motion.div
          className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="flex justify-center gap-6 mb-6"
            style={{ zIndex: 1001, position: 'relative' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group cursor-pointer inline-block"
                  style={{ 
                    pointerEvents: 'auto',
                    zIndex: 1000,
                    textDecoration: 'none',
                    position: 'relative'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(social.url, '_blank', 'noopener,noreferrer');
                  }}
                >
                  {/* Simplified Background */}
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: 'rgba(12, 12, 13, 0.8)',
                      border: '1px solid rgba(255, 62, 92, 0.3)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <social.icon 
                      size={24} 
                      style={{ color: 'var(--snow-white)' }}
                      className="transition-all duration-300"
                    />
                  </div>
                  
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle, var(--electric-coral), transparent)',
                      filter: 'blur(10px)',
                      zIndex: -1,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.a>
              ))}
          </motion.div>

          {/* Transcendent Text */}
            <motion.div
            className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <motion.h3
              className="text-lg sm:text-xl font-bold cyber-gradient-text"
              animate={{
                textShadow: [
                  "0 0 10px var(--electric-coral)",
                  "0 0 20px var(--electric-coral), 0 0 30px var(--cyan-mist)",
                  "0 0 10px var(--electric-coral)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Let's Build the Future Together
            </motion.h3>
            <motion.p
              className="text-sm sm:text-base"
              style={{ color: 'var(--slate-gray)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Ready to transcend digital boundaries?
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Bottom Section - Contact & Copyright */}
        <motion.div
          className="border-t border-holographic-silver/20 pt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Contact Info */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.a
                href="mailto:mohammad.taimoor850@gmail.com"
                className="flex items-center gap-2 text-xs sm:text-sm transition-colors group"
                style={{ color: 'var(--slate-gray)' }}
                whileHover={{ 
                  scale: 1.05,
                  color: 'var(--cyan-mist)'
                }}
              >
                <Code size={14} className="group-hover:rotate-12 transition-transform" />
                mohammad.taimoor850@gmail.com
              </motion.a>
              
              <motion.a
                href="tel:+923485552644"
                className="flex items-center gap-2 text-xs sm:text-sm transition-colors group"
                style={{ color: 'var(--slate-gray)' }}
                whileHover={{ 
                  scale: 1.05,
                  color: 'var(--cyan-mist)'
                }}
              >
                <Zap size={14} className="group-hover:scale-110 transition-transform" />
                +92 348 5552644
              </motion.a>
            </motion.div>

            {/* Copyright & Links */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.p
                className="text-xs sm:text-sm flex items-center gap-2"
                style={{ color: 'var(--slate-gray)' }}
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles size={12} className="cyber-pulse" />
                © {new Date().getFullYear()} Muhammad Taimoor
              </motion.p>
        </motion.div>
          </div>
        </motion.div>

        {/* Bottom Glow Effect */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent, var(--electric-coral), var(--cyan-mist), var(--electric-coral), transparent)',
          }}
          animate={{
            scaleX: [0.5, 1, 0.5],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </footer>
  );
}