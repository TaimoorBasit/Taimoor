"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const techIcons = [
  { name: 'React', icon: '⚛️', color: 'var(--electric-coral)' },
  { name: 'Next.js', icon: '▲', color: 'var(--cyan-mist)' },
  { name: 'TypeScript', icon: '📘', color: 'var(--electric-coral)' },
  { name: 'JavaScript', icon: '🟨', color: 'var(--cyan-mist)' },
  { name: 'Node.js', icon: '🟢', color: 'var(--electric-coral)' },
  { name: 'HTML5', icon: '🧡', color: 'var(--cyan-mist)' },
  { name: 'CSS3', icon: '💙', color: 'var(--electric-coral)' },
  { name: 'Tailwind', icon: '🎨', color: 'var(--cyan-mist)' },
  { name: 'WordPress', icon: '📝', color: 'var(--electric-coral)' },
  { name: 'Shopify', icon: '🛒', color: 'var(--cyan-mist)' },
  { name: 'PHP', icon: '🐘', color: 'var(--electric-coral)' },
  { name: 'MySQL', icon: '🗄️', color: 'var(--cyan-mist)' },
  { name: 'MongoDB', icon: '🍃', color: 'var(--electric-coral)' },
  { name: 'Git', icon: '🌿', color: 'var(--cyan-mist)' },
  { name: 'AWS', icon: '☁️', color: 'var(--electric-coral)' },
  { name: 'Docker', icon: '🐳', color: 'var(--cyan-mist)' },
  { name: 'Firebase', icon: '🔥', color: 'var(--electric-coral)' },
  { name: 'Vercel', icon: '▲', color: 'var(--cyan-mist)' },
  { name: 'GraphQL', icon: '🔮', color: 'var(--electric-coral)' },
  { name: 'Redux', icon: '🔄', color: 'var(--cyan-mist)' },
];

// Holographic tech icon with cyber effects
function CyberTechIcon({ tech, index }: { tech: typeof techIcons[0]; index: number }) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, type: 'spring', stiffness: 120, damping: 18 }}
      whileHover={{ 
        scale: 1.15, 
        y: -12,
      }}
    >
      {/* Holographic Container */}
      <div className="relative p-4 sm:p-6 rounded-2xl cyber-glass min-w-[120px] sm:min-w-[140px] h-[120px] sm:h-[140px] mx-2 flex flex-col items-center justify-center group-hover:border-electric-coral/50 transition-all duration-300">
        
        {/* Floating Icon */}
        <motion.div
          className="text-4xl sm:text-5xl mb-2 relative z-10"
          animate={{
            y: [0, -5, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.1,
          }}
        >
          {tech.icon}
        </motion.div>
        
        {/* Tech Name */}
        <motion.span
          className="text-xs sm:text-sm font-medium text-center relative z-10"
          style={{ color: 'var(--snow-white)' }}
          animate={{
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.1,
          }}
        >
          {tech.name}
        </motion.span>

        {/* Holographic Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle, ${tech.color}, transparent)`,
            filter: 'blur(15px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Cyber Scan Lines */}
        <motion.div
          className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {Array.from({ length: 3 }, (_, i) => (
          <motion.div
              key={i}
              className="absolute w-full h-px"
              style={{
                background: `linear-gradient(90deg, transparent, ${tech.color}, transparent)`,
                top: `${25 + i * 25}%`,
              }}
            animate={{
                x: ['-100%', '100%'],
                opacity: [0, 1, 0],
            }}
            transition={{
                duration: 1.5,
              repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
            }}
          />
          ))}
        </motion.div>

        {/* Simplified Floating Particles - reduced from 3 to 1 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: tech.color,
              left: '50%',
              top: '50%',
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

// Transcendent carousel with holographic effects
function TranscendentCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const duplicatedIcons = [...techIcons, ...techIcons, ...techIcons];
  
  return (
    <div 
      className="overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Holographic Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-obsidian-black via-obsidian-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-obsidian-black via-obsidian-black/80 to-transparent z-10 pointer-events-none" />
      
      {/* Cyber Scan Lines */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px z-20"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--electric-coral), var(--cyan-mist), var(--electric-coral), transparent)',
        }}
        animate={{
          x: ['-100%', '100%'],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="flex"
        animate={{ 
          x: [0, -150 * techIcons.length] 
        }}
        transition={{ 
          duration: 35, 
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop'
        }}
        style={{
          animationPlayState: isPaused ? 'paused' : 'running'
        }}
      >
        {duplicatedIcons.map((tech, index) => (
          <CyberTechIcon key={`${tech.name}-${index}`} tech={tech} index={index} />
        ))}
      </motion.div>
    </div>
  );
}

// Cyber skill badges
function CyberSkillBadge({ skill, index }: { skill: string; index: number }) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.7 + index * 0.05,
        type: 'spring',
        stiffness: 150,
        damping: 15,
      }}
      whileHover={{
        scale: 1.1,
        y: -6,
      }}
    >
      <div className="px-4 sm:px-6 py-3 cyber-glass rounded-full cursor-pointer group-hover:border-electric-coral/50 transition-all duration-300">
        <motion.span
          className="text-xs sm:text-sm font-medium"
          style={{ color: 'var(--snow-white)' }}
          whileHover={{ color: 'var(--cyan-mist)' }}
          transition={{ duration: 0.3 }}
        >
          {skill}
        </motion.span>
        
        {/* Hover Glow */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle, var(--electric-coral), transparent)',
            filter: 'blur(8px)',
          }}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      {/* Optimized Floating Cyber Orbs - reduced from 4 to 2 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 2 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-2xl"
            style={{
              width: 150 + i * 50,
              height: 150 + i * 50,
              left: `${20 + i * 60}%`,
              top: `${30 + i * 40}%`,
              background: i % 2 === 0 
                ? 'radial-gradient(circle, rgba(255,62,92,0.1), transparent)' 
                : 'radial-gradient(circle, rgba(137,255,240,0.1), transparent)',
            }}
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -25, 35, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold"
            style={{ color: 'var(--snow-white)' }}
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
            Technical <span className="cyber-gradient-text">Skills</span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl max-w-2xl mx-auto"
            style={{ color: 'var(--slate-gray)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Technologies and tools I transcend with
          </motion.p>
        </motion.div>

        {/* Transcendent Carousel */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <TranscendentCarousel />
        </motion.div>

        {/* Static Grid for Mobile */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:hidden mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {techIcons.slice(0, 12).map((tech, i) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center justify-center p-3 rounded-xl cyber-glass group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.05, type: 'spring', stiffness: 120, damping: 18 }}
              whileHover={{ 
                scale: 1.05, 
                y: -4,
              }}
            >
              <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">{tech.icon}</div>
              <span className="text-xs font-medium text-center" style={{ color: 'var(--snow-white)' }}>{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {[
            'Responsive Design',
            'UI/UX',
            'Performance Optimization',
            'SEO',
            'Accessibility',
            'REST API',
            'SASS',
            'PostgreSQL',
          ].map((skill, i) => (
            <CyberSkillBadge key={skill} skill={skill} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}