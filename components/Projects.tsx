"use client";

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState, useRef, memo } from 'react';
import { ExternalLink, X, Zap, Code, Sparkles, MapPin, Gamepad2, GraduationCap, ArrowRight } from 'lucide-react';
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
    case 'Prisma': return <Zap className="text-[#2D3748]" size={14} />;
    case 'MySQL': return <Code className="text-[#00758F]" size={14} />;
    default: return <Code size={14} className="text-slate-400" />;
  }
};

const projects = [
  {
    id: 0,
    title: 'WebFindLead',
    description: 'A professional lead generation platform that discovers local businesses lacking professional websites, providing freelancers with validated contact data and digital status reports.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'MySQL', 'Tailwind CSS'],
    image: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fwebfindlead.vercel.app%3Fv%3D1?w=1024',
    category: 'SaaS / B2B',
    link: 'https://webfindlead.vercel.app',
    github: '#',
    logo: '🔍',
    animatedIcon: '⚡',
    gradient: 'var(--electric-coral)',
    accent: 'var(--cyan-mist)',
    client: 'Founding Product',
    featured: true,
  },
  {
    id: 1,
    title: 'CustConnect',
    description: 'A full-stack campus ecosystem serving 15+ modules. Engineered with real-time Socket.io notifications, distributed TiDB Cloud database, and secure JWT/OTP authentication workflows.',
    tech: ['Next.js', 'Node.js', 'Express', 'TiDB Cloud', 'Prisma', 'Socket.io'],
    image: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fcustconnect.vercel.app%3Fv%3D1?w=1024',
    category: 'Full Stack / EdTech',
    link: 'https://custconnect.vercel.app',
    github: '#',
    logo: '🎓',
    animatedIcon: '✨',
    gradient: 'var(--cyan-mist)',
    accent: 'var(--electric-coral)',
    client: 'Founding Product',
    featured: true,
  },
  {
    id: 2,
    title: 'Seven Koncepts',
    description: 'An exceptional corporate website that perfectly represents the brand, featuring a modern design and seamless user experience.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    image: '/sevenkoncepts1.png',
    category: 'Corporate',
    link: 'https://sevenkoncepts.com',
    github: '#',
    logo: '🏢',
    animatedIcon: '⚡',
    gradient: 'var(--electric-coral)',
    accent: 'var(--cyan-mist)',
    client: 'Mir Shehryar Khan',
  },
  {
    id: 3,
    title: 'Elysia Distribution',
    description: 'A beautiful, functional business website that transforms a vision into reality, streamlining operations and digital presence.',
    tech: ['WordPress', 'PHP', 'SCSS', 'JavaScript'],
    image: '/elysiadistribution.png',
    category: 'Business',
    link: 'https://elysiadistribution.com',
    github: '#',
    logo: '🏭',
    animatedIcon: '📊',
    gradient: 'var(--cyan-mist)',
    accent: 'var(--electric-coral)',
    client: 'Syed Qammar',
  },
  {
    id: 4,
    title: 'DellNux Electronics',
    description: 'A stunning Shopify e-commerce store optimized for sales and mobile users, delivering a significant boost in revenue.',
    tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS3'],
    image: '/Dellnux.png',
    category: 'E-Commerce',
    link: 'https://dellnux.com',
    github: '#',
    logo: '🎧',
    animatedIcon: '🛍️',
    gradient: 'var(--electric-coral)',
    accent: 'var(--cyan-mist)',
    client: 'Muhammad Bilal',
  },
  {
    id: 5,
    title: 'Prime Seller Store',
    description: 'A robust Shopify store with perfect functionality and modern design, creating an outstanding shopping experience for customers.',
    tech: ['Shopify', 'Liquid', 'Theme Dev', 'SEO'],
    image: '/primesellerstore.png',
    category: 'E-Commerce',
    link: 'https://primeseller.store',
    github: '#',
    logo: '🛒',
    animatedIcon: '✨',
    gradient: 'var(--cyan-mist)',
    accent: 'var(--electric-coral)',
    client: 'Muhammad Kawish',
  },
  {
    id: 6,
    title: 'Imya UK Fashion',
    description: 'A beautiful WordPress e-commerce site that is fast, responsive, and user-friendly, perfectly matching the brand identity.',
    tech: ['WordPress', 'WooCommerce', 'PHP', 'MySQL'],
    image: '/imya1.png',
    category: 'Fashion',
    link: 'https://imya.uk',
    github: '#',
    logo: '👗',
    animatedIcon: '💳',
    gradient: 'var(--electric-coral)',
    accent: 'var(--cyan-mist)',
    client: 'Imaya',
  },
  {
    id: 7,
    title: 'Eternal Aspirants',
    description: 'Professional WordPress development delivering a clean, modern company website that meets exact business requirements. ',
    tech: ['WordPress', 'PHP', 'JavaScript', 'CSS3'],
    image: '/eternalaspirants.png',
    category: 'Corporate',
    link: 'https://eternalaspirants.com',
    github: '#',
    logo: '📑',
    animatedIcon: '🚀',
    gradient: 'var(--cyan-mist)',
    accent: 'var(--electric-coral)',
    client: 'Company Client',
  },
  {
    id: 8,
    title: 'Fast Food Express',
    description: 'An ultra-fast ordering system designed for volume and speed, handling real-time traffic with zero lag.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/fastfoodexpress1.png',
    category: 'Full Stack',
    link: 'https://fastfoodexpress.vercel.app',
    github: '#',
    logo: '🍔',
    animatedIcon: '🔥',
    gradient: 'var(--electric-coral)',
    accent: 'var(--cyan-mist)',
    client: 'Personal Project',
  },
  {
    id: 9,
    title: 'Moan Sale Market',
    description: 'A feature-rich e-commerce infrastructure with secure Stripe integration and a smooth, intuitive checkout experience.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/Moan1.png',
    category: 'Full Stack',
    link: 'https://moan.sale',
    github: '#',
    logo: '🥩',
    animatedIcon: '🛒',
    gradient: 'var(--cyan-mist)',
    accent: 'var(--electric-coral)',
    client: 'Personal Project',
  },
];

const CyberProjectCard = memo(function CyberProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      className="group relative flex flex-col h-full bg-[#0C0C0D] border border-white/10 rounded-2xl overflow-hidden hover:border-electric-coral/50 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(255,62,92,0.2)]"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.05,
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      {/* Mockup / Browser Frame */}
      <div className="relative border-b border-white/5 bg-black/50">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>

        <div className="relative aspect-[16/10] overflow-hidden group-hover:opacity-90 transition-opacity">
          <Image
            src={project.image}
            alt={`Screenshot of project ${project.title} - ${project.category}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized={project.image.startsWith('http')}
            loading="lazy"
          />
          {/* Featured Badge */}
          {('featured' in project && project.featured) && (
            <div className="absolute top-4 right-4 z-20">
              <div className="px-3 py-1 rounded-full bg-electric-coral text-white text-[10px] font-bold uppercase tracking-tighter shadow-lg flex items-center gap-1 animate-pulse" role="status">
                <Sparkles size={10} aria-hidden="true" />
                Featured Tool
              </div>
            </div>
          )}
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-black/80 via-transparent to-transparent opacity-60" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6 sm:p-8 relative">

        {/* Category & Title */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-bold text-electric-coral tracking-widest uppercase">
              {project.category}
            </div>
            <div className="p-2 rounded-full bg-white/5 border border-white/10 text-xl" aria-hidden="true">
              {project.logo}
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white group-hover:text-electric-coral transition-colors duration-300 font-orbitron">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow border-l-2 border-white/5 pl-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-md bg-white/5 text-slate-300 border border-white/10 group-hover:border-white/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions - Premium Buttons */}
        <div className="mt-auto">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white text-obsidian-black font-bold text-sm hover:bg-electric-coral hover:text-white transition-all duration-300 shadow-[0_0_15px_-5px_rgba(255,255,255,0.3)] w-full"
            aria-label={`View live site for ${project.title}`}
          >
            View Site
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.div>
  );
});

CyberProjectCard.displayName = 'CyberProjectCard';

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden bg-obsidian-black/95">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-[0.02]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/5 pb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
              Selected <span className="cyber-gradient-text">Works</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-xl border-l-4 border-electric-coral pl-6 py-1">
              High-impact digital solutions engineered for performance and scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="https://github.com/taimoor-awan"
              target='_blank'
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 hover:border-electric-coral text-white transition-all font-medium group"
            >
              View Full Portfolio <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
