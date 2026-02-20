"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, ArrowRight, MousePointer2, Phone, Zap } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";
import { TechMarquee } from "@/components/ui/tech-marquee";

// Dynamic import for Spline scene to avoid hydration mismatch and improve load performance
const SplineSceneBasic = dynamic(() => import("@/components/ui/spline-demo").then((mod) => mod.SplineSceneBasic), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center w-full h-full">
            <div className="w-8 h-8 border-4 border-electric-coral border-t-transparent rounded-full animate-spin" />
        </div>
    ),
});

const words = ["Digital Ecosystems", "AI Agents", "SaaS Platforms", "High-Ticket Sales"];

const RotatingWords = () => {
    const [index, setIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // On mobile, just render static text or very simple motion to save TBT
    if (isMobile) {
        return <span className="text-electric-coral">{words[index]}</span>;
    }

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.span
                key={words[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-electric-coral inline-block py-1"
            >
                {words[index]}
            </motion.span>
        </AnimatePresence>
    );
};

const DeferredSpline = () => {
    return (
        <div className="w-full h-full relative min-h-[350px] sm:min-h-[450px] lg:min-h-[600px] flex items-center justify-center">
            <div className="w-full h-full">
                <SplineSceneBasic />
            </div>
        </div>
    );
};

export function HeroWebFindLead() {
    return (
        <section
            id="home"
            className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-obsidian-black pt-24 sm:pt-32"
        >
            {/* Ambient Premium Glow - CSS Optimized */}
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-electric-coral/10 blur-[120px] rounded-full pointer-events-none z-0" />
            <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-cyan-mist/5 blur-[120px] rounded-full pointer-events-none z-0" />

            <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-grow flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* LEFT SIDE: HERO CONTENT */}
                    <div className="space-y-8 text-center lg:text-left z-20 relative order-2 lg:order-1">

                        {/* Status Badge - Premium Glass */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.05] transition-colors cursor-default"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-coral opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-electric-coral"></span>
                            </span>
                            <span className="text-xs font-bold tracking-widest text-slate-300 uppercase font-mono">
                                Available for New Projects
                            </span>
                        </motion.div>

                        {/* Main Headline - High Ticket Positioning */}
                        <div className="space-y-4 relative">
                            {/* Name as subtle byline */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex items-center gap-4 mb-4"
                            >
                                <span className="h-[1px] w-12 bg-electric-coral/50"></span>
                                <span className="text-electric-coral font-mono text-sm sm:text-base tracking-[0.2em] uppercase font-bold">
                                    Taimoor Awan
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 1, y: 0 }} // SSR visible by default
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-tight uppercase font-orbitron"
                            >
                                BUILDING <br />
                                HIGH-PERFORMANCE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 block mt-1">
                                    <RotatingWords />
                                </span>
                            </motion.h1>

                            {/* Subheading - Transformation Focused */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light pt-6 border-l-2 border-electric-coral/50 pl-6 mt-6"
                            >
                                Founder of <span className="text-white font-medium">WebFindLead</span> — a SaaS platform that automates local business lead generation for agencies and developers by identifying businesses without a digital presence.
                            </motion.p>
                        </div>

                        {/* CTA Buttons - Professional Conversion Focused */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-8">
                            <button
                                className="relative overflow-hidden group bg-electric-coral text-white px-8 py-4 rounded-lg font-bold text-lg w-full sm:w-auto shadow-[0_0_20px_-5px_rgba(255,62,92,0.5)] hover:shadow-[0_0_30px_-5px_rgba(255,62,92,0.7)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                aria-label="Scroll to view my selected work projects"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    View Selected Work
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            </button>

                            <a
                                href="tel:+19726887170"
                                className="px-8 py-4 rounded-lg font-semibold text-lg text-white border border-white/10 hover:border-electric-coral/50 hover:bg-white/[0.05] transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 backdrop-blur-sm group cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                                aria-label="Call me at +1 (972) 688-7170"
                            >
                                <Phone size={20} className="text-electric-coral group-hover:rotate-12 transition-transform" aria-hidden="true" />
                                <span>+1 (972) 688-7170</span>
                            </a>
                        </div>
                    </div>

                    <div className="relative h-[350px] sm:h-[450px] lg:h-[600px] w-full flex items-center justify-center order-1 lg:order-2 z-10 pointer-events-auto">
                        <div
                            className="w-full h-full relative"
                        >
                            {/* Decorative Frame */}
                            <div className="absolute -inset-4 border border-white/5 rounded-3xl -z-10 rotate-3 scale-95 opacity-50" />
                            <div className="absolute -inset-4 border border-electric-coral/10 rounded-3xl -z-10 -rotate-2 scale-105 opacity-50" />

                            <DeferredSpline />
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Tech Marquee */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="w-full relative z-20 border-t border-white/5 bg-gradient-to-r from-obsidian-black via-obsidian-black/90 to-obsidian-black backdrop-blur-sm py-6 mt-12"
            >
                <div className="container mx-auto px-4 mb-4">
                    <p className="text-center text-[10px] sm:text-xs uppercase tracking-[0.3em] text-slate-500 font-bold">
                        TRUSTED TECHNOLOGY STACK
                    </p>
                </div>
                <TechMarquee speed="normal" direction="left" />
            </motion.div>
        </section>
    );
}
