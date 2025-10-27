"use client";

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { ExternalLink, Github, X, Zap, Code, Sparkles } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Seven Koncepts - Company Website',
    description: 'Full-stack company website with modern design and responsive layout',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'],
    image: '/sevenkoncepts1.png',
    category: 'Full Stack',
    link: 'https://sevenkoncepts.com',
    github: '#',
    logo: '🏢',
    animatedIcon: '⚡',
    gradient: 'var(--electric-coral)',
    accent: 'var(--cyan-mist)',
    client: 'Mir Shehryar Khan',
  },
  {
    id: 2,
    title: 'Fast Food Express',
    description: 'Modern fast food ordering platform with real-time features',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/fastfoodexpress1.png',
    category: 'Full Stack',
    link: 'https://fastfoodexpress.vercel.app',
    github: '#',
    logo: '🍔',
    animatedIcon: '🚀',
    gradient: 'var(--cyan-mist)',
    accent: 'var(--electric-coral)',
    client: 'Personal Project',
  },
  {
    id: 3,
    title: 'Moan Sale - E-commerce Platform',
    description: 'Fruits and vegetables e-commerce platform with advanced features',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/Moan1.png',
    category: 'E-Commerce',
    link: 'https://moan.sale',
    github: '#',
    logo: '🥬',
    animatedIcon: '🛒',
    gradient: 'var(--electric-coral)',
    accent: 'var(--cyan-mist)',
    client: 'Personal Project',
  },
  {
    id: 4,
    title: 'Eternal Aspirants - Company Website',
    description: 'Professional company website built with WordPress',
    tech: ['WordPress', 'PHP', 'JavaScript', 'CSS3'],
    image: '/eternalaspirants.png',
    category: 'WordPress',
    link: 'https://eternalaspirants.com',
    github: '#',
    logo: '📝',
    animatedIcon: '✨',
    gradient: 'var(--cyan-mist)',
    accent: 'var(--electric-coral)',
    client: 'Company Client',
  },
  {
    id: 5,
    title: 'Elysia Distribution - Business Website',
    description: 'Professional distribution company website with modern design',
    tech: ['WordPress', 'PHP', 'JavaScript', 'SCSS'],
    image: '/elysiadistribution.png',
    category: 'WordPress',
    link: 'https://elysiadistribution.com',
    github: '#',
    logo: '🏭',
    animatedIcon: '📊',
    gradient: 'var(--electric-coral)',
    accent: 'var(--cyan-mist)',
    client: 'Syed Qammar',
  },
  {
    id: 6,
    title: 'Imya UK - E-commerce Store',
    description: 'Modern e-commerce website with advanced shopping features',
    tech: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript'],
    image: '/imya1.png',
    category: 'WordPress',
    link: 'https://imya.uk',
    github: '#',
    logo: '🛍️',
    animatedIcon: '💳',
    gradient: 'var(--cyan-mist)',
    accent: 'var(--electric-coral)',
    client: 'Imaya',
  },
  {
    id: 7,
    title: 'DellNux - Electronics Store',
    description: 'E-commerce store specializing in earbuds and watches',
    tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS3'],
    image: '/Dellnux.png',
    category: 'Shopify',
    link: 'https://dellnux.com',
    github: '#',
    logo: '🎧',
    animatedIcon: '⌚',
    gradient: 'var(--electric-coral)',
    accent: 'var(--cyan-mist)',
    client: 'Muhammad Bilal',
  },
  {
    id: 8,
    title: 'Prime Seller Store',
    description: 'Professional e-commerce platform with modern design',
    tech: ['Shopify', 'Liquid', 'JavaScript', 'HTML5'],
    image: '/primesellerstore.png',
    category: 'Shopify',
    link: 'https://primeseller.store',
    github: '#',
    logo: '🏪',
    animatedIcon: '⭐',
    gradient: 'var(--cyan-mist)',
    accent: 'var(--electric-coral)',
    client: 'Muhammad Kawish',
  },
];

// Cyber project card with neon effects
function CyberProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
  const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
        setIsHovered(false);
      }}
      style={{ perspective: 1000 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        type: 'spring',
        stiffness: 120,
        damping: 18,
      }}
    >
      {/* Holographic Border */}
      <div className="absolute inset-0 rounded-2xl p-1">
        <motion.div
          className="w-full h-full rounded-2xl"
          style={{
            background: `linear-gradient(45deg, ${project.gradient}, ${project.accent}, ${project.gradient})`,
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
      </div>

      {/* Main Card */}
      <motion.div
        className="relative rounded-2xl overflow-hidden cyber-glass backdrop-blur-md"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          backgroundColor: 'rgba(12, 12, 13, 0.8)',
          borderColor: 'rgba(217, 227, 242, 0.2)',
        }}
        whileHover={{ 
          scale: 1.03,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={256}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Cyber Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-obsidian-black/80 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Cyber Scan Lines */}
          <motion.div
            className="absolute inset-0 overflow-hidden"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {Array.from({ length: 3 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${project.gradient}, transparent)`,
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

          {/* Simplified Floating Particles - reduced from 4 to 1 */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: project.gradient,
                left: '50%',
                top: '50%',
              }}
              animate={{
                y: [0, -20, 0],
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

        {/* Content */}
        <div className="p-6">
          {/* Category Badge & Client Info */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
            <motion.div
              className="inline-block px-3 py-1 rounded-full text-xs font-medium"
              style={{
                background: `linear-gradient(135deg, ${project.gradient}, ${project.accent})`,
                color: 'var(--obsidian-black)',
              }}
              whileHover={{ scale: 1.05 }}
            >
              {project.category}
            </motion.div>
            <motion.div
              className="text-xs px-2 py-1 rounded-full cyber-glass"
              style={{ color: 'var(--slate-gray)' }}
              whileHover={{ color: 'var(--cyan-mist)' }}
            >
              Client: {project.client}
            </motion.div>
          </div>

          {/* Title */}
          <motion.h3
            className="text-xl font-bold mb-2"
            style={{ color: 'var(--snow-white)' }}
            whileHover={{ color: project.gradient }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-sm mb-4 leading-relaxed"
            style={{ color: 'var(--slate-gray)' }}
          >
            {project.description}
          </motion.p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, i) => (
              <motion.span
                key={tech}
                className="px-2 py-1 rounded text-xs font-medium cyber-glass"
                style={{ color: 'var(--snow-white)' }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  color: project.gradient,
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex justify-center">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${project.gradient}, ${project.accent})`,
                color: 'var(--obsidian-black)',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 20px ${project.gradient}`,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={18} />
              View Website
            </motion.a>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${project.gradient}, transparent)`,
            filter: 'blur(20px)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      {/* Optimized Floating Cyber Orbs - reduced from 6 to 2 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 2 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: 200 + i * 100,
              height: 200 + i * 100,
              left: `${25 + i * 50}%`,
              top: `${20 + i * 60}%`,
              background: i % 2 === 0 
                ? 'radial-gradient(circle, rgba(255,62,92,0.1), transparent)' 
                : 'radial-gradient(circle, rgba(137,255,240,0.1), transparent)',
            }}
            animate={{
              x: [0, 40, -30, 0],
              y: [0, -35, 45, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 4,
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
            Featured <span className="cyber-gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl max-w-2xl mx-auto"
            style={{ color: 'var(--slate-gray)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Showcasing innovative solutions and cutting-edge development
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <CyberProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
          <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 cyber-button text-lg font-semibold"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 40px var(--electric-coral)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles size={20} />
            View All Projects
            <Zap size={20} />
          </motion.a>
          </motion.div>
      </div>
    </section>
  );
}
