"use client";

import { motion } from 'framer-motion';
import { Search, Globe, Shield, Zap, ArrowRight, ExternalLink, BarChart3, Users } from 'lucide-react';
import Image from 'next/image';

const features = [
    {
        icon: Globe,
        title: "Real-Time Data Extraction",
        description: "Directly queries Google Maps to find local businesses with outdated or missing digital footprints."
    },
    {
        icon: BarChart3,
        title: "Advanced Lead Filtering",
        description: "Sort and organize prospects by niche, city, and website status (Missing vs. Low Quality)."
    },
    {
        icon: Shield,
        title: "Secure Auth & Access",
        description: "Robust NextAuth.js implementation with role-based security for Users and Administrators."
    },
    {
        icon: Zap,
        title: "98% Data Accuracy",
        description: "Real-time API integration ensures you get exact phone numbers, ratings, and social links."
    }
];

export function WebFindLeadShowcase() {
    return (
        <section className="py-24 sm:py-32 relative overflow-hidden bg-black/50">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full cyber-grid opacity-[0.03] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-coral/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Content Side */}
                    <div className="flex-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric-coral/30 bg-electric-coral/10 text-electric-coral text-[10px] font-bold uppercase tracking-widest"
                            role="status"
                            aria-label="Flagship SaaS Product Status"
                        >
                            <Zap size={12} aria-hidden="true" />
                            Flagship SaaS Product
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight uppercase font-orbitron"
                        >
                            WEBFIND<span className="cyber-gradient-text">LEAD</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-400 max-w-xl leading-relaxed border-l-2 border-electric-coral/50 pl-6"
                        >
                            WebFindLead is built for marketing agencies and web developers to discover and contact local businesses that lack a professional website. It turns missing digital footprints into high-value sales opportunities.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index }}
                                    className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-electric-coral/30 transition-colors group"
                                >
                                    <div className="shrink-0 p-2 rounded-lg bg-electric-coral/10 text-electric-coral group-hover:scale-110 transition-transform">
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
                                href="https://webfindlead.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cyber-button px-8 py-4 flex items-center gap-2 font-bold uppercase tracking-wider text-sm"
                                aria-label="Launch WebFindLead Tool (opens in new tab)"
                            >
                                Launch Tool <ExternalLink size={18} aria-hidden="true" />
                            </a>
                            <div className="flex items-center gap-3 px-6 py-4 rounded-lg bg-white/5 border border-white/10 text-slate-400 text-sm font-medium">
                                <Users size={18} className="text-cyan-mist" />
                                <span>Used by 50+ Modern Agencies</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visualization Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="flex-1 relative w-full aspect-square max-w-[500px] lg:max-w-none perspective-[1000px]"
                    >
                        {/* Mockup Frame */}
                        <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_-12px_rgba(255,62,92,0.3)] bg-obsidian-black">
                            <div className="h-8 w-full bg-white/5 border-b border-white/5 flex items-center px-4 gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                <div className="ml-4 px-3 py-1 rounded bg-white/5 text-[10px] text-slate-500 font-mono flex-1">
                                    webfindlead.vercel.app
                                </div>
                            </div>
                            <div className="relative w-full h-[calc(100%-32px)]">
                                <Image
                                    src="https://s0.wp.com/mshots/v1/https%3A%2F%2Fwebfindlead.vercel.app%3Fv%3D1?w=1024"
                                    alt="Official dashboard preview of WebFindLead showing the local business scanning interface"
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-electric-coral/5 to-transparent pointer-events-none" />
                            </div>
                        </div>

                        {/* Decorative underlays */}
                        <div className="absolute -top-6 -right-6 w-full h-full rounded-3xl border border-electric-coral/10 -z-10 rotate-3" />
                        <div className="absolute -bottom-6 -left-6 w-full h-full rounded-3xl border border-cyan-mist/10 -z-10 -rotate-3" />
                    </motion.div>

                </div>
            </div>

            <style jsx>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
        </section>
    );
}
