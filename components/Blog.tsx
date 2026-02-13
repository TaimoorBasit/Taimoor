"use client";

import { motion } from 'framer-motion';
import { BookOpen, ArrowUpRight, Clock, User } from 'lucide-react';
import Image from 'next/image';

const posts = [
    {
        title: "The Future of Web Development with AI",
        excerpt: "Exploring how artificial intelligence is reshaping the way we build and maintain modern web applications...",
        date: "Feb 10, 2024",
        author: "Taimoor Awan",
        image: "/imya1.png", // Using existing public image as placeholder
        category: "AI & Tech"
    },
    {
        title: "Mastering Next.js 14 Server Actions",
        excerpt: "A deep dive into the new paradigms of data mutations and server-side logic in the latest Next.js release...",
        date: "Jan 15, 2024",
        author: "Taimoor Awan",
        image: "/elysiadistribution.png",
        category: "Development"
    }
];

export function Blog() {
    return (
        <section id="blog" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                            Latest <span className="cyber-gradient-text">Insights</span>
                        </h2>
                        <p className="text-slate-gray max-w-xl">
                            Thoughts, tutorials, and deep dives into the world of full-stack development and creative technology.
                        </p>
                    </motion.div>

                    <motion.a
                        href="#"
                        className="flex items-center gap-2 text-cyan-mist font-bold group"
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        View All Posts <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
                    </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {posts.map((post, index) => (
                        <motion.article
                            key={index}
                            className="cyber-glass rounded-3xl overflow-hidden group hover:border-electric-coral/30 transition-all duration-500 flex flex-col sm:flex-row"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="relative w-full sm:w-2/5 aspect-video sm:aspect-square overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 p-2 bg-obsidian-black/60 backdrop-blur-md rounded-lg text-[10px] uppercase font-bold tracking-widest text-cyan-mist border border-white/10">
                                    {post.category}
                                </div>
                            </div>

                            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                                <div>
                                    <div className="flex items-center gap-4 text-xs text-slate-gray mb-4">
                                        <span className="flex items-center gap-1"><Clock size={12} /> {post.date}</span>
                                        <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-snow-white mb-3 group-hover:text-electric-coral transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-slate-gray line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                </div>

                                <motion.button
                                    className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-snow-white/60 group-hover:text-cyan-mist transition-colors"
                                >
                                    Read More <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                                </motion.button>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
