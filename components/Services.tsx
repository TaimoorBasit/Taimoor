"use client";

import { motion } from 'framer-motion';
import { Code2, Palette, ShoppingCart, Zap, Smartphone, Search, Sparkles, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Building complete web applications from frontend to backend with modern technologies and best practices.',
    features: ['React & Next.js', 'Node.js APIs', 'Database Design', 'Cloud Deployment'],
    gradient: 'var(--electric-coral)',
    accent: 'var(--cyan-mist)',
  },
  {
    icon: Palette,
    title: 'WordPress Customization',
    description: 'Custom WordPress themes and plugins tailored to your brand and business requirements.',
    features: ['Custom Themes', 'Plugin Development', 'Gutenberg Blocks', 'WooCommerce'],
    gradient: 'var(--cyan-mist)',
    accent: 'var(--electric-coral)',
  },
  {
    icon: ShoppingCart,
    title: 'Shopify Store Setup',
    description: 'Professional e-commerce stores with custom features and optimized for conversions.',
    features: ['Custom Themes', 'App Integration', 'Payment Setup', 'SEO Optimization'],
    gradient: 'var(--electric-coral)',
    accent: 'var(--cyan-mist)',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed up your website and improve user experience with advanced optimization techniques.',
    features: ['Page Speed', 'Code Optimization', 'Caching Strategy', 'Image Optimization'],
    gradient: 'var(--cyan-mist)',
    accent: 'var(--electric-coral)',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Pixel-perfect, mobile-first designs that work beautifully across all devices and screen sizes.',
    features: ['Mobile-First', 'Cross-Browser', 'Touch Optimized', 'Accessibility'],
    gradient: 'var(--electric-coral)',
    accent: 'var(--cyan-mist)',
  },
  {
    icon: Search,
    title: 'SEO & Analytics',
    description: 'Improve your search rankings and track your website performance with comprehensive SEO and analytics.',
    features: ['Technical SEO', 'Google Analytics', 'Search Console', 'Performance Reports'],
    gradient: 'var(--cyan-mist)',
    accent: 'var(--electric-coral)',
  },
];

// Cyber service card with holographic effects
function CyberServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = service.icon;

  return (
    <motion.div
      className="group relative cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        type: 'spring',
        stiffness: 120,
        damping: 18,
      }}
      whileHover={{ y: -8 }}
    >
      {/* Holographic Border */}
      <div className="absolute inset-0 rounded-2xl p-1">
        <motion.div
          className="w-full h-full rounded-2xl"
          style={{
            background: `linear-gradient(45deg, ${service.gradient}, ${service.accent}, ${service.gradient})`,
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
      <div className="relative p-8 rounded-2xl backdrop-blur-md group-hover:border-electric-coral/50 transition-all duration-300"
           style={{
             backgroundColor: 'rgba(12, 12, 13, 0.9)',
             borderColor: 'rgba(255, 62, 92, 0.3)',
             borderWidth: '1px',
             borderStyle: 'solid',
           }}>
        
        {/* Cyber Icon */}
      <motion.div
          className="mb-6 relative"
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${service.gradient}, ${service.accent})`,
              boxShadow: `0 0 20px ${service.gradient}`,
            }}
          >
            <Icon size={32} style={{ color: 'var(--obsidian-black)' }} />
            
            {/* Simplified Floating Particles - reduced from 3 to 1 */}
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
        </div>
      </motion.div>

        {/* Title */}
        <motion.h3
          className="text-2xl mb-3 font-bold"
          style={{ color: 'var(--snow-white)' }}
          whileHover={{ color: service.gradient }}
          transition={{ duration: 0.3 }}
        >
          {service.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="mb-6 leading-relaxed"
          style={{ color: 'var(--slate-gray)' }}
        >
          {service.description}
        </motion.p>

        {/* Features List */}
        <ul className="space-y-3 mb-6">
        {service.features.map((feature, i) => (
          <motion.li
            key={feature}
              className="flex items-center gap-3 text-sm"
              style={{ color: 'var(--snow-white)' }}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + i * 0.05 }}
              whileHover={{ color: service.gradient, x: 5 }}
            >
              <motion.div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${service.gradient}, ${service.accent})`,
                  boxShadow: `0 0 8px ${service.gradient}`,
                }}
                whileHover={{ scale: 1.2 }}
              />
            {feature}
          </motion.li>
        ))}
      </ul>

        {/* CTA Link */}
      <motion.div
          className="mt-6 pt-6 border-t opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ borderColor: 'rgba(217, 227, 242, 0.2)' }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
          <motion.a
          href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300"
            style={{ color: 'var(--cyan-mist)' }}
            whileHover={{
              color: service.gradient,
              scale: 1.05,
            }}
          >
            Let&apos;s Connect
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

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
                background: `linear-gradient(90deg, transparent, ${service.gradient}, transparent)`,
                top: `${25 + i * 50}%`,
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
            background: `radial-gradient(circle, ${service.gradient}, transparent)`,
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

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      {/* Optimized Floating Cyber Orbs - reduced from 6 to 2 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 2 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: 200 + i * 80,
              height: 200 + i * 80,
              left: `${20 + i * 60}%`,
              top: `${15 + i * 70}%`,
              background: i % 2 === 0 
                ? 'radial-gradient(circle, rgba(255,62,92,0.1), transparent)' 
                : 'radial-gradient(circle, rgba(137,255,240,0.1), transparent)',
            }}
            animate={{
              x: [0, 35, -25, 0],
              y: [0, -30, 40, 0],
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
            What I <span className="cyber-gradient-text">Offer</span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl max-w-2xl mx-auto"
            style={{ color: 'var(--slate-gray)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Comprehensive web development services to bring your ideas to life
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
              scale: 1.05,
              boxShadow: "0 0 40px var(--electric-coral)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles size={20} />
            Start a Project
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}