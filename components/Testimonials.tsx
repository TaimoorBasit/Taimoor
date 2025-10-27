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

// Cyber testimonial card with holographic effects
function CyberTestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut", 
        delay: index * 0.1 
      }}
      whileHover={{ y: -5 }}
    >
      {/* Holographic Border */}
      <div className="absolute inset-0 rounded-2xl p-1">
        <motion.div
          className="w-full h-full rounded-2xl"
          style={{
            background: 'linear-gradient(45deg, var(--electric-coral), var(--cyan-mist), var(--electric-coral))',
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
      <div className="relative p-6 sm:p-8 rounded-2xl backdrop-blur-md group-hover:border-electric-coral/50 transition-all duration-300"
           style={{
             backgroundColor: 'rgba(12, 12, 13, 0.9)',
             borderColor: 'rgba(255, 62, 92, 0.3)',
             borderWidth: '1px',
             borderStyle: 'solid',
           }}>
        
        {/* Floating Quote Icon */}
        <motion.div
          className="absolute top-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity"
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Quote size={24} style={{ color: 'var(--electric-coral)' }} />
        </motion.div>

        {/* Cyber Rating Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <Star 
                size={16} 
                className="text-electric-coral drop-shadow-lg" 
                style={{
                  fill: 'var(--electric-coral)',
                  color: 'var(--electric-coral)',
                  filter: 'drop-shadow(0 0 4px var(--electric-coral))',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Testimonial Content */}
        <motion.blockquote
          className="text-sm sm:text-base leading-relaxed mb-6 italic relative"
          style={{ color: 'var(--snow-white)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {testimonial.content}
        </motion.blockquote>

        {/* Client Info */}
        <div className="flex items-center gap-3">
          {/* Cyber Avatar */}
          <motion.div
            className="w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, var(--electric-coral), var(--cyan-mist))',
              color: 'var(--obsidian-black)',
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            animate={{
              boxShadow: [
                '0 0 10px var(--electric-coral)',
                '0 0 20px var(--electric-coral)',
                '0 0 10px var(--electric-coral)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {testimonial.avatar}
            
            {/* Simplified Floating Particles - reduced from 2 to 1 */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background: 'var(--snow-white)',
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
          </motion.div>
          
          {/* Name and Role */}
          <div>
            <motion.h4
              className="font-semibold text-sm sm:text-base"
              style={{ color: 'var(--snow-white)' }}
              whileHover={{ color: 'var(--cyan-mist)' }}
            >
              {testimonial.name}
            </motion.h4>
            <motion.p
              className="text-xs sm:text-sm"
              style={{ color: 'var(--slate-gray)' }}
              whileHover={{ color: 'var(--electric-coral)' }}
            >
              {testimonial.role} at {testimonial.company}
            </motion.p>
          </div>
        </div>

        {/* Cyber Scan Lines */}
        <motion.div
          className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {Array.from({ length: 2 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-px"
              style={{
                background: 'linear-gradient(90deg, transparent, var(--electric-coral), transparent)',
                top: `${30 + i * 40}%`,
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

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--electric-coral), transparent)',
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
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      {/* Optimized Floating Cyber Orbs - reduced from 5 to 2 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 2 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-2xl"
            style={{
              width: 180 + i * 40,
              height: 180 + i * 40,
              left: `${30 + i * 40}%`,
              top: `${25 + i * 50}%`,
              background: i % 2 === 0 
                ? 'radial-gradient(circle, rgba(255,62,92,0.1), transparent)' 
                : 'radial-gradient(circle, rgba(137,255,240,0.1), transparent)',
            }}
            animate={{
              x: [0, 25, -15, 0],
              y: [0, -20, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
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
            Client <span className="cyber-gradient-text">Testimonials</span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--slate-gray)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Don&apos;t just take my word for it. Here&apos;s what clients have to say about working with me.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <CyberTestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <motion.p
            className="text-sm sm:text-base mb-4"
            style={{ color: 'var(--slate-gray)' }}
          >
            Ready to join these satisfied clients?
          </motion.p>
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
            Let&apos;s Connect
            <Zap size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}