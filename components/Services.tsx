"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import {
  SiNextdotjs, SiShopify, SiGoogleanalytics,
  SiN8N, SiGooglemaps, SiUnrealengine
} from 'react-icons/si';

const services = [
  {
    icon: SiN8N,
    title: 'AI & Automation',
    description: 'Automate your business workflows with n8n and AI chatbots. I build custom solutions that save hours of manual work.',
    features: ['Custom Chatbots', 'Workflow Automation', 'Lead Scoring', 'Auto-Appointment'],
    gradient: '#FF6D5A',
    accent: 'var(--cyan-mist)',
  },
  {
    icon: SiNextdotjs,
    title: 'Full Stack Apps',
    description: 'Enterprise-grade web applications like University Dashboards and CRM systems tailored to your specific operational needs.',
    features: ['React & Next.js', 'Secure Database', 'User Management', 'Scalable Architecture'],
    gradient: '#FFFFFF',
    accent: 'var(--electric-coral)',
  },
  {
    icon: SiShopify,
    title: 'E-commerce Mastery',
    description: 'Comprehensive store setup and scaling. From Amazon FBA strategy to high-converting Shopify & WooCommerce stores.',
    features: ['Store Optimization', 'SEO & Marketing', 'Private Label Ops', 'Dropshipping Setup'],
    gradient: '#96BF48',
    accent: 'var(--cyan-mist)',
  },
  {
    icon: SiGooglemaps,
    title: 'Lead Generation',
    description: 'Custom tools to scrape Google Maps and gather targeted business leads by city and niche, with or without websites.',
    features: ['Google Maps Scraper', 'Targeted Data', 'Email Extraction', 'Competitor Analysis'],
    gradient: '#4285F4',
    accent: 'var(--electric-coral)',
  },
  {
    icon: SiUnrealengine,
    title: 'Game Development',
    description: 'Engaging AAA-quality games (Soul-like, Action RPG) using Unreal Engine 5. I bring immersive worlds and advanced mechanics to life.',
    features: ['Unreal Engine 5', 'C++ & Blueprints', 'AI Enemy Logic', '3D Environments'],
    gradient: '#FFFFFF',
    accent: 'var(--cyan-mist)',
  },
  {
    icon: SiGoogleanalytics,
    title: 'SEO & Forensics',
    description: 'Advanced technical SEO to rank #1, plus digital forensics insights to secure your business data and infrastructure.',
    features: ['Technical SEO', 'Keyword Dominance', 'Security Audit', 'Data Recovery'],
    gradient: '#E37400',
    accent: 'var(--electric-coral)',
  },
];

// Cyber service card with holographic effects
function CyberServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = service.icon;

  return (
    <motion.div
      className="group relative h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      }}
    >
      <div
        className="relative h-full p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-500 group-hover:bg-white/[0.06] group-hover:border-white/20 overflow-hidden flex flex-col"
      >
        {/* Hover Gradient Bloom */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(800px circle at 50% 0%, ${service.gradient}, transparent 40%)`
          }}
        />

        {/* Icon Header */}
        <div className="mb-8 relative z-10 flex items-start justify-between">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500">
            <Icon
              size={32}
              style={{ color: service.gradient }}
              className="transition-colors duration-300"
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex-grow">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
            {service.title}
          </h3>
          <p className="text-slate-400 leading-relaxed mb-8 text-sm md:text-base">
            {service.description}
          </p>

          <div className="space-y-4 mb-8">
            <div className="h-px w-full bg-white/5" />
            <ul className="space-y-3">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-coral/50 group-hover:bg-electric-coral transition-colors" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Action */}
        <div className="relative z-10 mt-auto pt-4">
          <motion.a
            href="#contact"
            className="flex items-center gap-2 text-sm font-semibold text-white group/link"
          >
            <span className="border-b border-transparent group-hover/link:border-electric-coral transition-all">Get Started</span>
            <ArrowRight size={16} className="text-electric-coral transform transition-transform group-hover/link:translate-x-1" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 relative overflow-hidden bg-obsidian-black/50">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-[0.02]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white leading-[1.1]"
          >
            Engineering <span className="cyber-gradient-text">Excellence</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            I deliver high-ticket digital infrastructure designed for scale, security, and speed.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <CyberServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.p
            className="mb-6"
            style={{ color: 'var(--slate-gray)' }}
          >
            Don&apos;t see what you&apos;re looking for? Let&apos;s discuss your custom requirements.
          </motion.p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 cyber-button text-lg font-semibold"
            whileHover={{
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-5 h-5 relative">
              <Image
                src="/favicon/android-chrome-192x192.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            Start a Project
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
