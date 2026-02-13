"use client";

import { motion } from 'framer-motion';
import { Search, Code, Rocket, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
    {
        icon: Search,
        title: "Discovery & Strategy",
        description: "We dive deep into your business goals, bottlenecks, and market position. I don't just ask 'what features you need', I ask 'what revenue you want to target'.",
        color: "#FF3E5C",
    },
    {
        icon: Code,
        title: "Agile Development",
        description: "I build your high-performance infrastructure using industry-leading tech (Next.js, AI, Supabase). Weekly sprints keep you in the loop—no black boxes.",
        color: "#89FFF0",
    },
    {
        icon: Rocket,
        title: "Launch & Scale",
        description: "Rigorous testing, SEO optimization, and deployment. But we don't stop there—I set up analytics and automation to ensure your system scales effortlessly.",
        color: "#D9E3F2",
    },
];

export function TheProcess() {
    return (
        <section id="process" className="py-24 sm:py-32 relative overflow-hidden bg-obsidian-black/50 border-t border-white/5">

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6"
                    >
                        How We <span className="cyber-gradient-text">Build</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-400 max-w-2xl mx-auto"
                    >
                        A systematic, transparent approach to taking your project from concept to revenue.
                    </motion.p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="relative group text-center"
                        >
                            {/* Icon Circle */}
                            <div className="relative inline-flex items-center justify-center mb-8">
                                <div className="w-24 h-24 rounded-full bg-obsidian-black border border-white/10 flex items-center justify-center relative z-10 group-hover:border-electric-coral/50 transition-colors duration-500 shadow-2xl">
                                    <step.icon size={36} style={{ color: step.color }} />
                                </div>

                                {/* Number Badge */}
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white/10 border border-white/5 flex items-center justify-center text-sm font-bold text-white z-20 backdrop-blur-md">
                                    {index + 1}
                                </div>

                                {/* Glow Behind */}
                                <div className="absolute inset-0 bg-white/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-electric-coral transition-colors">
                                {step.title}
                            </h3>

                            <p className="text-slate-400 leading-relaxed text-sm px-4">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
