"use client";

import { motion } from 'framer-motion';
import {
    Globe, Shield, Zap, ExternalLink, BarChart3,
    Users, Bus, BookOpen, MessageSquare, Sparkles
} from 'lucide-react';
import Image from 'next/image';

const webFindLeadFeatures = [
    { icon: Globe, title: "Real-Time Data", description: "Directly queries Google Maps for local business footprints." },
    { icon: BarChart3, title: "Lead Filtering", description: "Sort prospects by niche, city, and website status." },
    { icon: Shield, title: "Secure Auth", description: "Robust NextAuth.js with role-based security." },
    { icon: Zap, title: "98% Accuracy", description: "Real-time API integration for exact business data." }
];

const custConnectFeatures = [
    { icon: Users, title: "Social Ecosystem", description: "Real-time feeds, follower systems, and campus moderation." },
    { icon: Bus, title: "Smart Logistics", description: "Live bus tracking and Food-Tech cafe management." },
    { icon: BookOpen, title: "Academic Hub", description: "Centralized repository for course materials and GPA." },
    { icon: MessageSquare, title: "Real-Time Comms", description: "P2P chat powered by Socket.io and notifications." }
];

export function FlagshipProducts() {
    return (
        <section className="py-24 sm:py-32 relative overflow-hidden bg-black/40">
            {/* Background Decorative Elements - Shared */}
            <div className="absolute top-0 left-0 w-full h-full cyber-grid opacity-[0.03] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 space-y-32">

                {/* Section Header */}
                <div className="text-center space-y-4 mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase font-orbitron"
                    >
                        Flagship <span className="cyber-gradient-text">Products</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto"
                    >
                        Pioneering digital solutions built for automation, real-time connectivity, and high-impact performance.
                    </motion.p>
                </div>

                {/* WebFindLead Project */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric-coral/30 bg-electric-coral/10 text-electric-coral text-[10px] font-bold uppercase tracking-widest">
                            <Zap size={12} /> Flagship SaaS Product
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-black text-white uppercase font-orbitron">
                            WEBFIND<span className="text-electric-coral">LEAD</span>
                        </h3>
                        <p className="text-slate-400 leading-relaxed border-l-2 border-electric-coral/50 pl-6">
                            WebFindLead is built for marketing agencies and web developers to discover and contact local businesses that lack a professional website.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {webFindLeadFeatures.map((f, i) => (
                                <div key={i} className="flex gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-electric-coral/30 transition-all group">
                                    <div className="shrink-0 p-2 rounded-lg bg-electric-coral/10 text-electric-coral group-hover:scale-110 transition-transform">
                                        <f.icon size={18} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-xs mb-1">{f.title}</h4>
                                        <p className="text-slate-400 text-[10px] leading-tight opacity-70">{f.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="pt-4">
                            <a href="https://webfindlead.vercel.app" target="_blank" className="cyber-button px-8 py-4 flex items-center gap-2 font-bold uppercase tracking-wider text-xs">
                                Launch Tool <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 relative w-full aspect-video group">
                        {/* Mockup Frame */}
                        <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_-12px_rgba(255,62,92,0.3)] bg-obsidian-black">
                            <div className="h-8 w-full bg-white/5 border-b border-white/5 flex items-center px-4 gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                <div className="ml-4 px-3 py-0.5 rounded bg-white/5 text-[9px] text-slate-500 font-mono flex-1 truncate">
                                    webfindlead.vercel.app
                                </div>
                            </div>
                            <div className="relative w-full h-[calc(100%-32px)]">
                                <Image
                                    src="https://s0.wp.com/mshots/v1/https%3A%2F%2Fwebfindlead.vercel.app%3Fv%3D1?w=1024"
                                    alt="Professional dashboard preview of WebFindLead showing the local business scanning interface"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    unoptimized
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-electric-coral/5 to-transparent pointer-events-none" />
                            </div>
                        </div>
                        {/* Decorative background glow */}
                        <div className="absolute -inset-4 bg-electric-coral/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    </div>
                </div>

                {/* CustConnect Project */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-mist/30 bg-cyan-mist/10 text-cyan-mist text-[10px] font-bold uppercase tracking-widest">
                            <Sparkles size={12} /> Full-Stack Student Hub
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-black text-white uppercase font-orbitron">
                            CUST<span className="text-cyan-mist">CONNECT</span>
                        </h3>
                        <p className="text-slate-400 leading-relaxed border-l-2 border-cyan-mist/50 pl-6">
                            CustConnect is a centralized digital ecosystem designed to bridge the gap between students, administration, and vendors.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {custConnectFeatures.map((f, i) => (
                                <div key={i} className="flex gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-mist/30 transition-all group">
                                    <div className="shrink-0 p-2 rounded-lg bg-cyan-mist/10 text-cyan-mist group-hover:scale-110 transition-transform">
                                        <f.icon size={18} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-xs mb-1">{f.title}</h4>
                                        <p className="text-slate-400 text-[10px] leading-tight opacity-70">{f.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="pt-4">
                            <a href="https://custconnect.vercel.app" target="_blank" className="cyber-button px-8 py-4 flex items-center gap-2 font-bold uppercase tracking-wider text-xs !border-cyan-mist/50 hover:!bg-cyan-mist/20">
                                Launch Product <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 relative w-full aspect-video group">
                        {/* Mockup Frame */}
                        <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_-12px_rgba(6,182,212,0.3)] bg-obsidian-black">
                            <div className="h-8 w-full bg-white/5 border-b border-white/5 flex items-center px-4 gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                <div className="ml-4 px-3 py-0.5 rounded bg-white/5 text-[9px] text-slate-500 font-mono flex-1 truncate">
                                    custconnect.vercel.app
                                </div>
                            </div>
                            <div className="relative w-full h-[calc(100%-32px)]">
                                <Image
                                    src="https://s0.wp.com/mshots/v1/https%3A%2F%2Fcustconnect.vercel.app%3Fv%3D1?w=1024"
                                    alt="Official dashboard preview of CustConnect"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    unoptimized
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-mist/5 to-transparent pointer-events-none" />
                            </div>
                        </div>
                        {/* Decorative background glow */}
                        <div className="absolute -inset-4 bg-cyan-mist/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    </div>
                </div>

            </div>
        </section>
    );
}
