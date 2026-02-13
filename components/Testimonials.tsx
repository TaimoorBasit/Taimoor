"use client";

import { motion } from 'framer-motion';
import { Star, Quote, Sparkles, Zap } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Mir Shehryar Khan",
    role: "CEO",
    company: "Seven Koncepts",
    content: "Muhammad delivered an exceptional company website that perfectly represents our brand. His attention to detail and modern design approach exceeded our expectations.",
    rating: 5,
    avatar: "MS",
    project: "sevenkoncepts.com"
  },
  {
    id: 2,
    name: "Syed Qammar",
    role: "Business Owner",
    company: "Elysia Distribution",
    content: "Working with Muhammad was a game-changer. He transformed our business vision into a beautiful, functional website. Highly professional and reliable.",
    rating: 5,
    avatar: "SQ",
    project: "elysiadistribution.com"
  },
  {
    id: 3,
    name: "Muhammad Bilal",
    role: "E-commerce Manager",
    company: "DellNux",
    content: "Muhammad's expertise in Shopify helped us create a stunning e-commerce store. Our sales increased significantly after the launch. Fast delivery and excellent communication.",
    rating: 5,
    avatar: "MB",
    project: "dellnux.com"
  },
  {
    id: 4,
    name: "Muhammad Kawish",
    role: "Store Owner",
    company: "Prime Seller",
    content: "Outstanding work! Muhammad built our Shopify store with perfect functionality and modern design. Our customers love the shopping experience.",
    rating: 5,
    avatar: "MK",
    project: "primeseller.store"
  },
  {
    id: 5,
    name: "Imaya",
    role: "Business Owner",
    company: "Imya UK",
    content: "Muhammad created a beautiful WordPress e-commerce site that perfectly matches our brand. The site is fast, responsive, and user-friendly.",
    rating: 5,
    avatar: "IM",
    project: "imya.uk"
  },
  {
    id: 6,
    name: "Client",
    role: "Company Representative",
    company: "Eternal Aspirants",
    content: "Professional WordPress development with clean code and modern design. Muhammad delivered exactly what we needed for our company website.",
    rating: 5,
    avatar: "EA",
    project: "eternalaspirants.com"
  }
];

function CyberTestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) {
  return (
    <motion.div
      className="group relative h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
        delay: index * 0.1
      }}
    >
      <div
        className="relative h-full p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04] hover:border-white/10 flex flex-col"
      >
        {/* Quote Icon */}
        <div className="mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
          <Quote size={32} className="text-electric-coral" />
        </div>

        {/* Content */}
        <blockquote className="text-slate-300 leading-relaxed mb-8 flex-grow text-lg font-light">
          &quot;{testimonial.content}&quot;
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-electric-coral to-cyan-mist p-[1px]">
            <div className="w-full h-full rounded-full bg-obsidian-black flex items-center justify-center text-white font-bold text-sm">
              {testimonial.avatar}
            </div>
          </div>
          <div>
            <div className="font-bold text-white group-hover:text-electric-coral transition-colors">{testimonial.name}</div>
            <div className="text-sm text-slate-500">{testimonial.role}, {testimonial.company}</div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 relative overflow-hidden bg-obsidian-black/50">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-[0.02]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Trusted by <span className="cyber-gradient-text">Industry Leaders</span>
          </motion.h2>
          <motion.p
            className="text-lg text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Delivering impact and ROI for businesses across the globe.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <CyberTestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
