"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Search, Sparkles, ArrowRight } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";

// Dynamic import for Spline scene to avoid hydration mismatch and improve load performance
const SplineSceneBasic = dynamic(() => import("@/components/ui/spline-demo").then((mod) => mod.SplineSceneBasic), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center w-full h-full">
            <div className="w-8 h-8 border-4 border-cyan-mist border-t-transparent rounded-full animate-spin" />
        </div>
    ),
});
import { TechMarquee } from "@/components/ui/tech-marquee";
import { cn } from "@/lib/utils";

const words = ["Digital Experiences", "AI Solutions", "SaaS Platforms", "Smart Systems"];

const RotatingWords = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.span
                key={words[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="cyber-gradient-text block"
            >
                {words[index]}
            </motion.span>
        </AnimatePresence>
    );
};

const DeferredSpline = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-full"
        >
            <SplineSceneBasic />
        </motion.div>
    );
};

export function HeroWebFindLead() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for cursor tracking
    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // subtle parallax for grid
    const rotateX = useTransform(springY, [-500, 500], [5, -5]);
    const rotateY = useTransform(springX, [-500, 500], [-5, 5]);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = clientX - left - width / 2;
        const y = clientY - top - height / 2;
        mouseX.set(x);
        mouseY.set(y);
    }

    return (
        <section
            className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-obsidian-black pt-32 perspective-1000"
            onMouseMove={handleMouseMove}
        >
            {/* 0. Animated Background Layer */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Ethereal Cursor Shadow */}
                <motion.div
                    className="absolute w-[800px] h-[800px] bg-electric-coral/10 rounded-full blur-[120px] opacity-30"
                    style={{
                        x: springX,
                        y: springY,
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        translateX: '-50%',
                        translateY: '-50%',
                    }}
                />

                {/* Animated Grid */}
                <motion.div
                    className="absolute inset-[-50%] w-[200%] h-[200%] cyber-grid opacity-[0.07]"
                    style={{
                        rotateX,
                        rotateY,
                        perspective: 1000,
                    }}
                />
            </div>

            {/* 1. Spotlight Effect */}
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 z-10" fill="var(--electric-coral)" />

            <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-grow flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT SIDE: HERO CONTENT */}
                    <div className="space-y-10 text-center lg:text-left z-20">
                        {/* Status Badge - Premium Glass */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-colors cursor-default"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-coral opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-electric-coral"></span>
                            </span>
                            <span className="text-xs font-semibold tracking-wide text-white uppercase">Accepting New Projects</span>
                        </motion.div>

                        {/* Main Headline - High Ticket Positioning */}
                        <div className="space-y-6 relative">
                            {/* Subtle background glow for text legibility */}
                            <div className="absolute -inset-10 bg-electric-coral/5 blur-3xl rounded-full pointer-events-none -z-10" />

                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1.05] drop-shadow-2xl">
                                Engineering <br />
                                <span className="cyber-gradient-text block mt-2 pb-4">
                                    <RotatingWords />
                                </span>
                            </h1>

                            {/* Subheading - Transformation Focused */}
                            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                                I build <strong className="text-white font-semibold">high-performance digital ecosystems</strong> that drive revenue. From University Systems to Autonomous AI Agents — I engineer solutions that scale.
                            </p>
                        </div>

                        {/* CTA Buttons - Premium Conversion Focused */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="relative overflow-hidden group bg-white text-obsidian-black px-8 py-5 rounded-lg font-bold text-lg w-full sm:w-auto shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] transition-shadow duration-300"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    View Selected Work
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-electric-coral/0 via-electric-coral/20 to-electric-coral/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-5 rounded-lg font-semibold text-lg text-slate-300 hover:text-white border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-3 backdrop-blur-sm"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <Sparkles size={20} className="text-electric-coral" />
                                Book a Strategy Call
                            </motion.button>
                        </div>
                    </div>

                    {/* RIGHT SIDE: 3D SPLINE SCENE */}
                    <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center -mt-10 lg:mt-0 z-10 pointer-events-auto">
                        <DeferredSpline />
                    </div>

                </div>
            </div>

            {/* Bottom Tech Marquee */}
            <div className="w-full relative z-20 bg-obsidian-black/60 backdrop-blur-sm border-t border-white/5 py-8 mt-4">
                <div className="container mx-auto px-4 mb-6">
                    <p className="text-center text-xs uppercase tracking-[0.2em] text-cyan-mist/80 font-bold">
                        Powering Brands With Modern Tech
                    </p>
                </div>
                <TechMarquee speed="normal" direction="left" />
            </div>

            {/* Bottom Section Gradient Blend */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian-black to-transparent z-10 pointer-events-none" />
        </section>
    );
}
