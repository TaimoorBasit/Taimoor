"use client";

import { motion } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap, Award } from 'lucide-react';

const experiences = [
    {
        title: "Founder & Lead Architect",
        company: "WebFindLead (SaaS)",
        period: "2024 - Present",
        description: "Built an autonomous lead generation ecosystem using Next.js 14, TiDB Cloud, and SerpApi. Engineered real-time scanning infrastructure that identifies local businesses without digital presence, reducing prospecting time by 90%.",
        type: "work"
    },
    {
        title: "Senior Full Stack Engineer",
        company: "Freelance & Agency",
        period: "2023 - Present",
        description: "Built full-fledged university dashboard systems and developed custom automated Google Maps lead generation tools. Architected AI-powered chatbot solutions using n8n for automated appointment setting.",
        type: "work"
    },
    {
        title: "Game Developer (Unreal Engine 5)",
        company: "University FYP - Warden of Hades",
        period: "2023 - 2024",
        description: "Developed 'Warden of Hades', a complex Soul-like game using Unreal Engine 5. Implemented advanced C++ combat systems, AI enemy behavior, and intricate level design.",
        type: "work"
    },
    {
        title: "Cybersecurity & Forensics Analyst",
        company: "University Research",
        period: "2022 - 2023",
        description: "Specialized in Computer Forensics using tools like Autopsy and OS Forensics on Kali Linux. Conducted in-depth data recovery and security analysis simulations as part of advanced coursework.",
        type: "education"
    },
    {
        title: "E-commerce Specialist",
        company: "Amazon & Shopify",
        period: "2020 - 2022",
        description: "Managed end-to-end operations for Amazon Wholesale, Private Label, and Retail Arbitrage. Expertise in product research, SEO, and scaling dropshipping stores, generating consistent revenue streams.",
        type: "work"
    },
    {
        title: "BS Computer Science",
        company: "University Degree",
        period: "2020 - 2024",
        description: "Comprehensive study of Data Science, Automata Theory, Web Engineering, and Mobile App Development. Foundation for all advanced engineering work.",
        type: "education"
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Professional <span className="cyber-gradient-text">Journey</span>
                    </h2>
                    <p className="text-slate-gray max-w-2xl mx-auto">
                        A timeline of my growth, expertise, and professional contributions to the tech world.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-gradient-to-b from-electric-coral via-cyan-mist to-transparent hidden sm:block" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-2 w-4 h-4 rounded-full bg-obsidian-black border-2 border-electric-coral z-20 hidden sm:block">
                                    <div className="w-full h-full rounded-full bg-electric-coral animate-ping opacity-50" />
                                </div>

                                {/* Content Card */}
                                <div className="w-full md:w-1/2">
                                    <div className="cyber-glass p-6 sm:p-8 rounded-2xl hover:border-electric-coral/50 transition-all duration-300 group">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-electric-coral group-hover:scale-110 transition-transform">
                                                {exp.type === 'work' ? (
                                                    <Briefcase size={20} />
                                                ) : exp.type === 'education' ? (
                                                    <GraduationCap size={20} />
                                                ) : (
                                                    <Award size={20} />
                                                )}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-snow-white">{exp.title}</h3>
                                                <p className="text-sm text-cyan-mist">{exp.company}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-slate-gray mb-4">
                                            <Calendar size={14} />
                                            {exp.period}
                                        </div>
                                        <p className="text-sm sm:text-base text-slate-gray leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
