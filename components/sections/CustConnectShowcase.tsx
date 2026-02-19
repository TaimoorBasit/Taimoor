"use client";

import { motion } from 'framer-motion';
import {
    Users, Zap, Bus, Coffee, BookOpen,
    MessageSquare, Layout, Shield, ExternalLink, Sparkles
} from 'lucide-react';
import Image from 'next/image';

const features = [
    {
        icon: Users,
        title: "Social Ecosystem",
        description: "Real-time social networking with dynamic feeds, follower systems, and secure campus-wide moderation."
    },
    {
        icon: Bus,
        title: "Smart Logistics",
        description: "Live bus tracking with instant route updates and a full 'Food-Tech' module for cafe order management."
    },
    {
        icon: BookOpen,
        title: "Academic Hub",
        description: "Centralized repository for course materials, past papers, and an integrated GPA tracker for students."
    },
    {
        icon: MessageSquare,
        title: "Real-Time Comms",
        description: "Low-latency P2P chat powered by Socket.io and a unified notification center for campus updates."
    }
];

export function CustConnectShowcase() {
    return (
        <section className="py-24 sm:py-32 relative overflow-hidden bg-black/30">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full cyber-grid opacity-[0.03] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-mist/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">

                    {/* Content Side */}
                    <div className="flex-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-mist/30 bg-cyan-mist/10 text-cyan-mist text-[10px] font-bold uppercase tracking-widest"
                            role="status"
                            aria-label="Product Type"
                        >
                            <Sparkles size={12} aria-hidden="true" />
                            Full-Stack Student Hub
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight uppercase font-orbitron"
                        >
                            CUST<span className="cyber-gradient-text">CONNECT</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-400 max-w-xl leading-relaxed border-l-2 border-cyan-mist/50 pl-6"
                        >
                            CustConnect is a centralized digital ecosystem designed to bridge the gap between students, administration, and vendors. It replaces fragmented communication with a single, real-time platform for campus life.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index }}
                                    className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-mist/30 transition-colors group"
                                >
                                    <div className="shrink-0 p-2 rounded-lg bg-cyan-mist/10 text-cyan-mist group-hover:scale-110 transition-transform">
                                        <feature.icon size={20} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm mb-1">{feature.title}</h4>
                                        <p className="text-slate-400 text-xs leading-relaxed">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="pt-8 flex flex-wrap gap-4"
                        >
                            <a
                                href="https://custconnect.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cyber-button px-8 py-4 flex items-center gap-2 font-bold uppercase tracking-wider text-sm !border-cyan-mist/50 hover:!bg-cyan-mist/20"
                                aria-label="Launch CustConnect (opens in new tab)"
                            >
                                Launch Product <ExternalLink size={18} aria-hidden="true" />
                            </a>

                        </motion.div>
                    </div>

                    {/* Visualization Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="flex-1 relative w-full aspect-square max-w-[500px] lg:max-w-none perspective-[1000px]"
                    >
                        {/* Mockup Frame */}
                        <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_-12px_rgba(6,182,212,0.3)] bg-obsidian-black">
                            <div className="h-8 w-full bg-white/5 border-b border-white/5 flex items-center px-4 gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                <div className="ml-4 px-3 py-1 rounded bg-white/5 text-[10px] text-slate-500 font-mono flex-1">
                                    custconnect.vercel.app
                                </div>
                            </div>
                            <div className="relative w-full h-[calc(100%-32px)]">
                                <Image
                                    src="https://s0.wp.com/mshots/v1/https%3A%2F%2Fcustconnect.vercel.app%3Fv%3D1?w=1024"
                                    alt="Custodian Connect Dashboard"
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-mist/5 to-transparent pointer-events-none" />
                            </div>
                        </div>

                        {/* Decorative underlays */}
                        <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl border border-cyan-mist/10 -z-10 -rotate-3" />
                        <div className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl border border-electric-coral/10 -z-10 rotate-3" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
