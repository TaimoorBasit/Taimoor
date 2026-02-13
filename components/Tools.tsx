"use client";

import { motion } from 'framer-motion';
import { SiTypescript, SiPostman, SiFigma, SiGithub, SiVercel, SiDocker } from 'react-icons/si';
import { Box, Wrench, Rocket, ArrowRight, ExternalLink } from 'lucide-react';

const tools = [
    { icon: SiTypescript, name: "TypeScript", category: "Language", color: "#3178C6" },
    { icon: SiPostman, name: "Postman", category: "API Testing", color: "#FF6C37" },
    { icon: SiFigma, name: "Figma", category: "Design", color: "#F24E1E" },
    { icon: SiGithub, name: "GitHub", category: "Version Control", color: "#ffffff" },
    { icon: SiVercel, name: "Vercel", category: "Deployment", color: "#ffffff" },
    { icon: SiDocker, name: "Docker", category: "Containerization", color: "#2496ED" },
];

export function Tools() {
    return (
        <section id="tools" className="py-20 relative overflow-hidden bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="flex justify-center mb-4">
                        <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-cyan-mist">
                            <Wrench size={24} />
                        </div>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        My Digital <span className="cyber-gradient-text">Toolkit</span>
                    </h2>
                    <p className="text-slate-gray max-w-2xl mx-auto">
                        The professional instruments I use to architect, develop, and deploy world-class digital solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={index}
                            className="cyber-glass group p-6 rounded-2xl text-center hover:border-cyan-mist/50 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex justify-center mb-4">
                                <tool.icon
                                    size={32}
                                    className="transition-all duration-300 group-hover:scale-110"
                                    style={{ color: tool.color }}
                                />
                            </div>
                            <h3 className="text-base font-bold text-snow-white mb-1">{tool.name}</h3>
                            <p className="text-[10px] uppercase tracking-widest text-slate-gray">{tool.category}</p>

                            {/* Decorative scanline */}
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-mist to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>

                {/* Featured Products */}
                <motion.div
                    className="mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-snow-white mb-2">Developed <span className="cyber-gradient-text">Products</span></h3>
                        <p className="text-slate-gray text-sm">SaaS solutions and tools I have built and scaled.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="cyber-glass p-8 rounded-[2rem] border-white/5 group hover:border-electric-coral/30 transition-all relative overflow-hidden">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-4 bg-electric-coral/10 rounded-2xl text-electric-coral shadow-[0_0_15px_rgba(255,62,92,0.2)]">
                                    <Rocket size={32} />
                                </div>
                                <div className="px-4 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-widest border border-green-500/20">Active SaaS</div>
                            </div>
                            <h4 className="text-2xl font-bold text-snow-white mb-2 group-hover:text-electric-coral transition-colors">G-Map Business Finder</h4>
                            <p className="text-slate-gray text-base mb-6">A powerful Chrome extension for automated lead generation from Google Maps, helping 500+ businesses find local clients efficiently.</p>
                            <div className="flex items-center gap-4">
                                <button className="cyber-button px-6 py-3 text-sm font-bold flex items-center gap-2">Explore <ArrowRight size={16} /></button>
                                <span className="text-xs text-slate-gray font-mono">v2.4.0</span>
                            </div>
                        </div>

                        <div className="cyber-glass p-8 rounded-[2rem] border-white/5 group hover:border-cyan-mist/30 transition-all relative overflow-hidden">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-4 bg-cyan-mist/10 rounded-2xl text-cyan-mist shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                                    <Box size={32} />
                                </div>
                                <div className="px-4 py-1 rounded-full bg-cyan-mist/10 text-cyan-mist text-[10px] font-bold uppercase tracking-widest border border-cyan-mist/20">Custom Tool</div>
                            </div>
                            <h4 className="text-2xl font-bold text-snow-white mb-2 group-hover:text-cyan-mist transition-colors">Inv-Sync Pro</h4>
                            <p className="text-slate-gray text-base mb-6">Advanced inventory synchronization tool for multi-channel e-commerce stores, streamlining stock management across Shopify, Amazon & eBay.</p>
                            <div className="flex items-center gap-4">
                                <button className="cyber-glass border-white/10 px-6 py-3 text-sm font-bold flex items-center gap-2 hover:bg-white/5">Details <Box size={16} /></button>

                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
