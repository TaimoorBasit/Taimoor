"use client";

import { motion } from 'framer-motion';
import { FaLayerGroup, FaCheckDouble, FaClock, FaBullseye } from 'react-icons/fa6';
import { SiReact, SiJavascript, SiCss3 } from 'react-icons/si';
import Image from 'next/image';

import { useRef, useEffect } from 'react';
import { useInView, useSpring, useTransform } from 'framer-motion';

const stats = [
  { icon: FaLayerGroup, label: 'Systems Architected', value: 27, suffix: '', color: '#61DAFB' },
  { icon: FaCheckDouble, label: 'Active Clients', value: 12, suffix: '+', color: '#777BB4' },
  { icon: FaClock, label: 'Years Experience', value: 5, suffix: '+', color: '#F7DF1E' },
  { icon: FaBullseye, label: 'Delivery Rate', value: 100, suffix: '%', color: '#E34F26' },
];

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });

  const displayValue = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

function StatCard({ stat, index }: { stat: typeof stats[0], index: number }) {
  return (
    <motion.div
      className="cyber-glass p-6 rounded-xl text-center group transition-all duration-300"
      style={{ borderColor: 'rgba(255, 62, 92, 0.5)' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
      whileHover={{
        scale: 1.05
      }}
    >
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300"
          style={{ background: 'rgba(255, 255, 255, 0.05)', border: `1px solid ${stat.color}` }}>
          <stat.icon size={20} style={{ color: stat.color }} />
        </div>
      </div>
      <div className="text-2xl sm:text-3xl font-bold mb-2 cyber-gradient-text"
        style={{ color: 'var(--snow-white)' }}>
        <AnimatedNumber value={stat.value} />{stat.suffix}
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
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden bg-obsidian-black">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-[0.05]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            className="flex-shrink-0 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0.0, 0.2, 1] }}
          >
            <div className="relative group w-72 sm:w-80 lg:w-[400px]">
              {/* Image Frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-electric-coral/20 to-cyan-mist/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl">
                <Image
                  src="/My.jpg"
                  alt="Taimoor Awan"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />

                {/* Modern Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-black/60 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Bridging the Gap Between <br />
                <span className="cyber-gradient-text">Business & Technology</span>
              </h2>

              <div className="h-1 w-20 bg-electric-coral/50 rounded-full" />

              <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-light">
                <p>
                  <strong className="text-white font-medium">The Problem:</strong> Most developers write code. They don't understand business. This leads to beautiful products that don't sell, or complex systems that don't scale.
                </p>
                <p>
                  <strong className="text-white font-medium">My Approach:</strong> With a background in <span className="text-electric-coral">7-figure E-commerce</span> scaling and a Computer Science degree, I don't just build features—I architect growth engines.
                </p>
                <p>
                  From <strong>University Dashboards</strong> to <strong>Autonomous AI Agents</strong> and <strong className="text-cyan-mist">AAA Unreal Engine implementations</strong>, I merge deep technical engineering with aggressive business strategy.
                </p>
              </div>
            </div>

            {/* Stats Grid - Integrated */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-3xl font-bold text-white flex items-baseline gap-1">
                    <AnimatedNumber value={stat.value} />
                    <span style={{ color: stat.color }}>{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
