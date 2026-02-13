"use client";

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState, useRef, memo } from 'react';
import { ExternalLink, Github, X, Zap, Code, Sparkles, MapPin, Gamepad2, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiTypescript,
  SiMongodb, SiStripe, SiWordpress, SiPhp, SiJavascript, SiCss3,
  SiSass, SiWoocommerce, SiShopify, SiHtml5, SiPython, SiSelenium
} from 'react-icons/si';

// Helper to map tech names to icons
const getTechIcon = (techName: string) => {
  switch (techName) {
    case 'React': return <SiReact className="text-[#61DAFB]" />;
    case 'Next.js': return <SiNextdotjs className="text-white" />;
    case 'Tailwind CSS': return <SiTailwindcss className="text-[#06B6D4]" />;
    case 'Node.js': return <SiNodedotjs className="text-[#339933]" />;
    case 'TypeScript': return <SiTypescript className="text-[#3178C6]" />;
    case 'MongoDB': return <SiMongodb className="text-[#47A248]" />;
    case 'Stripe': return <SiStripe className="text-[#008CDD]" />;
    case 'WordPress': return <SiWordpress className="text-[#21759B]" />;
    case 'PHP': return <SiPhp className="text-[#777BB4]" />;
    case 'JavaScript': return <SiJavascript className="text-[#F7DF1E]" />;
    case 'CSS3': return <SiCss3 className="text-[#1572B6]" />;
    case 'SCSS': return <SiSass className="text-[#CC6699]" />;
    case 'WooCommerce': return <SiWoocommerce className="text-[#96588A]" />;
    case 'Shopify': return <SiShopify className="text-[#7AB55C]" />;
    case 'Liquid': return <Code className="text-[#95BF47]" size={14} />;
    case 'HTML5': return <SiHtml5 className="text-[#E34F26]" />;
    case 'Python': return <SiPython className="text-[#3776AB]" />;
    case 'Selenium': return <SiSelenium className="text-[#43B02A]" />;
    default: return <Code size={14} className="text-slate-400" />;
  }
};

const projects = [
  {
    id: 1,
    title: 'University Dashboard System',
    description: 'A comprehensive, full-fledged academic management system streamlining administrative workflows, student data, and course management.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    image: '/sevenkoncepts1.png', // Placeholder, needs user image
    category: 'Full Stack',
    link: '#',
    github: '#',
    logo: '🎓',
    animatedIcon: '📚',
    gradient: 'var(--electric-coral)',
    accent: 'var(--cyan-mist)',
    client: 'University Project',
  },
  {
    id: 2,
    title: 'Freelancer Lead Scraper',
    description: 'A powerful tool for freelancers to extract leads from Google Maps. Features business name using automation/city filtering to find businesses without websites or social media presence.',
    tech: ['Python', 'Selenium', 'Automation', 'Data Mining'],
    image: '/fastfoodexpress1.png', // Placeholder
    category: 'Automation Tool',
    link: '#',
    github: '#',
    logo: '🔍',
    animatedIcon: '🤖',
    gradient: 'var(--cyan-mist)',
    accent: 'var(--electric-coral)',
    client: 'Freelance Tool',
  },
  {
    id: 3,
    title: 'Warden of Hades',
    description: 'A AAA-quality Soul-like action RPG developed in Unreal Engine 5. Features advanced combat mechanics, stunning 3D environments, and AI-driven enemy behavior inspired by Elden Ring & Sekiro.',
    tech: ['Unreal Engine 5', 'C++', 'Blueprints', '3D Modeling'],
    image: '/Moan1.png', // Placeholder
    category: 'Game Dev',
    link: '#',
    github: '#',
    logo: '⚔️',
    animatedIcon: '🔥',
    gradient: 'var(--electric-coral)',
    accent: 'var(--cyan-mist)',
    client: 'FYP Project',
  },
  {
    id: 4,
    title: 'Seven Koncepts Corporate Deck',
    description: 'A robust, high-performance corporate platform built to bridge the gap between complex backend logic and a seamless user interface.',
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
    id: 5,
    title: 'Fast Food Express Hub',
    description: 'An ultra-fast ordering system that handles real-time traffic with zero lag. Designed for volume and speed.',
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
    id: 6,
    title: 'Moan Sale Digital Market',
    description: 'A feature-rich e-commerce infrastructure with secure Stripe integration and a smooth, intuitive checkout experience.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/Moan1.png',
    category: 'E-Commerce',
    link: 'https://moan.sale',
    github: '#',
    logo: '🥩',
    animatedIcon: '🛒',
    gradient: 'var(--electric-coral)',
    accent: 'var(--cyan-mist)',
    client: 'Personal Project',
  },
  {
    id: 7,
    title: 'Eternal Aspirants Portal',
    description: 'A professional WordPress ecosystem built for high authority and search engine dominance, tailored for growth.',
    tech: ['WordPress', 'PHP', 'JavaScript', 'CSS3'],
    image: '/eternalaspirants.png',
    category: 'WordPress',
    link: 'https://eternalaspirants.com',
    github: '#',
    logo: '📑',
    animatedIcon: '✨',
    gradient: 'var(--cyan-mist)',
    accent: 'var(--electric-coral)',
    client: 'Company Client',
  },
  {
    id: 8,
    title: 'Elysia Business Matrix',
    description: 'Custom distribution management interface that streamlines operations and visualizes data for better decision making.',
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
    id: 9,
    title: 'Imya UK Fashion Hub',
    description: 'A modern, high-converting retail store with a custom WooCommerce checkout and advanced product filtering.',
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
    id: 10,
    title: 'DellNux Electronics Arc',
    description: 'A sleek Shopify storefront optimized for mobile users, featuring custom Liquid templates for a unique brand feel.',
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
];

const CyberProjectCard = memo(function CyberProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      className="group relative flex flex-col h-full bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      }}
    >
      {/* Image Container - Aspect Ratio 16:9 */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-obsidian-black/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6 sm:p-8">

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-xs font-medium text-electric-coral mb-2 tracking-wider uppercase">
              {project.category}
            </div>
            <h3 className="text-2xl font-bold text-white group-hover:text-electric-coral transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          <a href={project.github} target="_blank" rel="noopener" className="text-slate-500 hover:text-white transition-colors">
            <Github size={20} />
          </a>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack - Minimal Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/5 text-slate-300 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer Action */}
        <div className="mt-auto">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white group/link"
          >
            <span className="border-b border-transparent group-hover/link:border-electric-coral transition-all">View Project</span>
            <ExternalLink size={16} className="text-electric-coral transform transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
});

CyberProjectCard.displayName = 'CyberProjectCard';

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden bg-obsidian-black">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-[0.03]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
              Selected <span className="cyber-gradient-text">Works</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-xl">
              A curated selection of projects demonstrating high-performance engineering and design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 hover:bg-white/5 text-white transition-all font-medium"
            >
              View GitHub <Github size={18} />
            </a>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <CyberProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
