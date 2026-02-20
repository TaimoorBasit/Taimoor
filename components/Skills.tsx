"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiNodedotjs,
  SiHtml5, SiCss3, SiTailwindcss, SiWordpress, SiShopify,
  SiPhp, SiMysql, SiMongodb, SiGit, SiAmazon, SiDocker,
  SiFirebase, SiVercel, SiGraphql, SiRedux, SiPython, SiLinux
} from 'react-icons/si';
import { Workflow } from 'lucide-react';

const techIcons = [
  { name: 'React', icon: <SiReact />, color: '#61DAFB' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
  { name: 'Python', icon: <SiPython />, color: '#3776AB' },
  { name: 'n8n', icon: <Workflow />, color: '#EA4B71' },
  { name: 'Kali Linux', icon: <SiLinux />, color: '#557C94' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
  { name: 'Shopify', icon: <SiShopify />, color: '#7AB55C' },
  { name: 'Amazon FBA', icon: <SiAmazon />, color: '#FF9900' },
  { name: 'WordPress', icon: <SiWordpress />, color: '#21759B' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
];

// Holographic tech icon with cyber effects
function CyberTechIcon({ tech, index }: { tech: typeof techIcons[0]; index: number }) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.02, duration: 0.3 }}
      whileHover={{
        scale: 1.1,
        y: -5,
      }}
    >
      {/* Holographic Container */}
      <div
        className="relative p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 min-w-[120px] sm:min-w-[140px] h-[120px] sm:h-[140px] mx-2 flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-white/[0.08] group-hover:border-white/20"
      >
        {/* Icon */}
        <div className="text-4xl sm:text-5xl mb-2 relative z-10" style={{ color: tech.color }}>
          {tech.icon}
        </div>

        {/* Tech Name */}
        <span
          className="text-xs sm:text-sm font-medium text-center relative z-10 text-snow-white"
        >
          {tech.name}
        </span>
      </div>
    </motion.div>
  );
}

// Transcendent carousel with holographic effects
function TranscendentCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const duplicatedIcons = [...techIcons, ...techIcons];

  return (
    <div
      className="overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Holographic Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-obsidian-black via-obsidian-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-obsidian-black via-obsidian-black/80 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex will-change-transform"
        animate={{
          x: [0, -150 * techIcons.length]
        }}
        transition={{
          duration: 45,
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
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
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
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden bg-obsidian-black/50">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-[0.03]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />


      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
            style={{ color: 'var(--snow-white)' }}
          >
            Technological <span className="cyber-gradient-text">Mastery</span>
          </motion.h2>
          <motion.p
            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            I leverage an advanced arsenal of frameworks and tools to engineer scalable, high-performance digital ecosystems.
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
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 group transition-colors duration-300 hover:bg-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.05, duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
              whileHover={{
                scale: 1.05,
                y: -4,
                borderColor: tech.color,
                boxShadow: `0 0 15px -3px ${tech.color}`
              }}
            >
              <div className="text-2xl mb-1 group-hover:scale-110 transition-transform" style={{ color: tech.color }}>{tech.icon}</div>
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
            {
              title: 'Dev & Algorithms',
              skills: ['Full Stack', 'MERN', 'AI Integration', 'Unreal Engine 5', 'Three.js', 'Next.js']
            },
            {
              title: 'Cybersecurity',
              skills: ['Kali Linux', 'Autopsy', 'OS Forensics', 'Penetration Testing', 'Network Security']
            },
            {
              title: 'AI & Automation',
              skills: ['n8n Workflows', 'Chatbot Integration', 'Lead Gen Tools', 'Auto-Appointment', 'Process Automation']
            },
            {
              title: 'E-commerce Business',
              skills: ['Amazon Wholesale', 'Private Label', 'Retail Arbitrage', 'Dropshipping', 'Shopify Growth', 'SEO', 'Digital Marketing']
            }
          ].map((category, i) => (
            <motion.div
              key={category.title}
              className="w-full max-w-sm cyber-glass p-6 rounded-3xl border-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-6 cyber-gradient-text uppercase tracking-widest">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, si) => (
                  <CyberSkillBadge key={skill} skill={skill} index={si} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
