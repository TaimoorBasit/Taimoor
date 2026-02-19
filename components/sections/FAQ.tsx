"use client";

import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
    {
        question: "Do you only work with large enterprises?",
        answer: "No. While I build enterprise-grade systems, I specialize in scaling ambitious startups and small businesses that are ready to invest in high-performance infrastructure."
    },
    {
        question: "What is your typical project timeline?",
        answer: "Most high-impact projects range from 4-8 weeks. Discovery takes 1 week, Development 3-5 weeks, and Testing/Launch 1-2 weeks. We set a strict timeline during our strategy call."
    },
    {
        question: "Do you offer post-launch support and maintenance?",
        answer: "Absolutely. I don't just hand over code and disappear. I offer ongoing retainer packages to ensure your system stays updated, secure, and optimized as you scale."
    },
    {
        question: "Can you help with marketing or just development?",
        answer: "I focus on the technical infrastructure (development, SEO, automation). However, my background in 7-figure e-commerce means I build with marketing in mind—optimized for conversions, speed, and tracking."
    },
    { // New Question
        question: "What makes your 'High-Ticket' positioning different?",
        answer: "It means I don't compete on price; I compete on ROI. You're not paying for 'hours of coding', you're investing in a revenue-generating asset built by someone who understands business mechanics, not just syntax."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 sm:py-32 relative overflow-hidden bg-obsidian-black border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6"
                    >
                        Common <span className="cyber-gradient-text">Questions</span>
                    </motion.h2>
                </div>

                {/* Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group border border-white/5 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg font-semibold text-slate-200 group-hover:text-white transition-colors">
                                    {faq.question}
                                </span>
                                <span className="p-2 rounded-full bg-white/5 text-electric-coral group-hover:bg-electric-coral group-hover:text-white transition-all duration-300">
                                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ml-6 mr-6 border-l border-white/10 pl-6 ${openIndex === index
                                    ? 'max-h-48 opacity-100 pb-6 mb-2 mt-2'
                                    : 'max-h-0 opacity-0 overflow-hidden'
                                    }`}
                            >
                                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                    {faq.answer}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
