"use client";

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export function LaunchBanner() {
    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative z-[150] bg-black border-b border-white/10 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-electric-coral/20 via-transparent to-cyan-mist/20" />
            <div className="max-w-7xl mx-auto px-4 py-2 relative flex items-center justify-center gap-4 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
                <span className="flex items-center gap-1.5 text-electric-coral animate-pulse">
                    <Sparkles size={12} />
                    <span>New Product Launch</span>
                </span>
                <span className="text-white/80 hidden sm:inline">|</span>
                <span className="text-white flex items-center gap-2">
                    WebFindLead: AI-Powered Lead Intelligence for Agencies
                    <a
                        href="https://webfindlead.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-electric-coral hover:text-white transition-colors border-b border-electric-coral/30 hover:border-white"
                    >
                        Try Now <ArrowRight size={12} />
                    </a>
                </span>
            </div>
        </motion.div>
    );
}
