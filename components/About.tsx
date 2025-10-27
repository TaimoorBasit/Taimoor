"use client";

import { motion } from 'framer-motion';
import { Code, Star, Clock, Target } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { icon: Code, label: 'Technologies Mastered', value: 12, suffix: '+' },
  { icon: Star, label: 'Code Quality', value: 100, suffix: '%' },
  { icon: Clock, label: 'Learning Hours', value: 500, suffix: '+' },
  { icon: Target, label: 'Success Rate', value: 95, suffix: '%' },
];

function StatCard({ stat, index }: { stat: typeof stats[0], index: number }) {
  return (
    <motion.div
      className="cyber-glass p-6 rounded-xl text-center group transition-all duration-300"
      style={{ borderColor: 'rgba(255, 62, 92, 0.5)' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 0 30px var(--electric-coral)"
      }}
    >
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300"
             style={{ background: 'linear-gradient(135deg, var(--electric-coral), var(--cyan-mist))' }}>
          <stat.icon size={24} style={{ color: 'var(--obsidian-black)' }} />
        </div>
      </div>
      <div className="text-2xl sm:text-3xl font-bold mb-2 cyber-gradient-text"
           style={{ color: 'var(--snow-white)' }}>
        {stat.value}{stat.suffix}
      </div>
      <div className="text-sm transition-colors"
           style={{ color: 'var(--slate-gray)' }}>
        {stat.label}
      </div>
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: 'var(--snow-white)' }}>
            About <span className="cyber-gradient-text">Me</span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto"
             style={{ color: 'var(--slate-gray)' }}>
            Passionate developer crafting digital experiences with cutting-edge technology
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
          {/* Left: Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Image Container */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl holographic-border p-1 w-80 h-96">
                <div className="relative overflow-hidden rounded-xl w-full h-full">
                  <Image
                    src="/My.jpg"
                  alt="Muhammad Taimoor"
                    width={320}
                    height={384}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-electric-coral/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating Tech Icons */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    {['React', 'JS', 'CSS'].map((tech, i) => (
                      <motion.div
                        key={tech}
                        className="px-2 py-1 bg-electric-coral/90 text-obsidian-black text-xs font-bold rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl shadow-2xl shadow-electric-coral/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </motion.div>

          {/* Right: Description */}
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: 'var(--snow-white)' }}>Muhammad Taimoor</h3>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--slate-gray)' }}>
                Specialized in creating modern, performant web applications. 
                From concept to deployment, I bring ideas to life with clean code and elegant design.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}