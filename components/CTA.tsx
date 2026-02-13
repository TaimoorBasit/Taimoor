"use client";

import { motion } from 'framer-motion';
import { Rocket, Send, ArrowRight } from 'lucide-react';

export function CTA() {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-coral/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="cyber-glass p-8 sm:p-16 rounded-[3rem] text-center border-white/10 relative overflow-hidden group"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
                >
                    {/* Animated background lines */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        {[...Array(20)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-px h-20 bg-gradient-to-t from-transparent via-cyan-mist to-transparent"
                                style={{
                                    left: `${i * 5}%`,
                                    top: '-20%',
                                    animation: `rain ${2 + Math.random() * 2}s linear infinite`,
                                    animationDelay: `${Math.random() * 2}s`
                                }}
                            />
                        ))}
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        <motion.div
                            className="w-20 h-20 bg-gradient-to-br from-electric-coral to-cyan-mist rounded-2xl flex items-center justify-center mb-8 rotate-12 group-hover:rotate-0 transition-transform duration-500 shadow-2xl shadow-electric-coral/20"
                            whileHover={{ scale: 1.1 }}
                        >
                            <Rocket className="text-obsidian-black" size={40} />
                        </motion.div>

                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 text-snow-white leading-tight">
                            Ready to <span className="cyber-gradient-text">Transcend</span> <br /> Digital Boundaries?
                        </h2>

                        <p className="text-slate-gray text-lg sm:text-xl max-w-2xl mx-auto mb-6">
                            Whether you have a groundbreaking idea or a complex problem to solve, I&apos;m here to build your next digital masterpiece.
                        </p>

                        <motion.div
                            className="text-cyber-coral text-sm font-bold tracking-wider mb-10 flex items-center gap-2"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <div className="w-2 h-2 rounded-full bg-electric-coral shadow-[0_0_10px_var(--electric-coral)]" />
                            Limited freelance slots available for this month
                        </motion.div>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <motion.a
                                href="#contact"
                                className="cyber-button px-10 py-5 text-lg font-bold flex items-center gap-2 group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Book Free Consultation
                                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </motion.a>

                            <motion.a
                                href="mailto:mohammad.taimoor850@gmail.com"
                                className="cyber-glass px-10 py-5 text-lg font-bold flex items-center gap-2 rounded-full border border-white/10 hover:bg-white/5 transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get in Touch
                                <ArrowRight size={20} className="text-slate-gray" />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
        @keyframes rain {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
        </section>
    );
}
