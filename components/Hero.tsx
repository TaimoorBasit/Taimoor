"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Code } from 'lucide-react';
import { SiReact, SiNextdotjs, SiLaravel, SiWordpress, SiShopify } from 'react-icons/si';

// Removed particles for better performance

// Removed holographic background for better performance

export function Hero() {
    return (
        <motion.section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pb-24"
            style={{ backgroundColor: 'var(--obsidian-black)' }}
        >
            {/* Background Effects */}

            {/* Cyber Grid Background */}
            <div className="absolute inset-0 cyber-grid opacity-30" />

            {/* Mouse Follow Glow - Removed for better performance */}

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Main Content */}
                <motion.div
                    className="space-y-6 sm:space-y-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                >
                    {/* Name */}
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold relative"
                        style={{ color: 'var(--snow-white)' }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                    >
                        <motion.span
                            className="cyber-gradient-text"
                            animate={{
                                textShadow: [
                                    "0 0 10px var(--electric-coral)",
                                    "0 0 20px var(--electric-coral), 0 0 30px var(--electric-coral)",
                                    "0 0 10px var(--electric-coral)"
                                ]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            Taimoor Awan
                        </motion.span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
                    >
                        <motion.span
                            className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium cyber-gradient-text"
                            animate={{
                                textShadow: [
                                    "0 0 8px var(--electric-coral)",
                                    "0 0 16px var(--electric-coral), 0 0 24px var(--electric-coral)",
                                    "0 0 8px var(--electric-coral)"
                                ]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            I Build High-Performance Digital Solutions
                        </motion.span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
                        style={{ color: 'var(--slate-gray)' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                    >
                        I don&apos;t just write code; I craft digital experiences that solve real business problems.
                        From custom SaaS platforms to high-converting e-commerce stores, I bring your vision to life with precision and speed.
                    </motion.p>

                    <motion.div
                        className="text-xs sm:text-sm font-bold tracking-widest text-cyan-mist/80 uppercase"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        ● 50+ Projects Completed Successfully
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                    >
                        <motion.a
                            href="#contact"
                            className="cyber-button group flex items-center gap-2 px-8 py-4 text-lg font-semibold"
                            whileHover={{
                                scale: 1.05
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Let&apos;s Connect
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </motion.a>

                        <motion.a
                            href="#projects"
                            className="cyber-glass px-8 py-4 text-lg font-semibold transition-colors group flex items-center gap-2 rounded-full"
                            style={{ color: 'var(--snow-white)' }}
                            whileHover={{
                                scale: 1.05
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                            <Code size={20} className="group-hover:rotate-12 transition-transform" />
                        </motion.a>
                    </motion.div>

                    {/* Tech Badges */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-4 pt-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                    >
                        {[
                            { Icon: SiReact, name: 'React', color: '#61DAFB' },
                            { Icon: SiNextdotjs, name: 'Next.js', color: '#ffffff' },
                            { Icon: SiLaravel, name: 'Laravel', color: '#FF2D20' },
                            { Icon: SiWordpress, name: 'WordPress', color: '#21759B' },
                            { Icon: SiShopify, name: 'Shopify', color: '#7AB55C' }
                        ].map((tech, i) => (
                            <motion.div
                                key={tech.name}
                                className="group relative"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md transition-colors group-hover:border-[color:var(--hover-color)]"
                                    style={{ '--hover-color': tech.color } as React.CSSProperties}>
                                    <tech.Icon size={24} style={{ color: tech.color }} />
                                </div>
                                {/* Tooltip */}
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    {tech.name}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator - Removed for better performance */}
        </motion.section >
    );
}
