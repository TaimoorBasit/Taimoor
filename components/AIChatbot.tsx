"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';

export function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', content: "Hi! I'm Taimoor's AI assistant. Ask me anything about his skills, experience, or available services!" }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            let response = "";
            const query = input.toLowerCase();

            if (query.includes('skill') || query.includes('tech')) {
                response = "Taimoor is an expert in React, Next.js, Laravel, WordPress, and Shopify. He also works with Node.js and various SQL/NoSQL databases.";
            } else if (query.includes('experience') || query.includes('work')) {
                response = "He has worked with companies like Seven Koncepts and Fast Food Express, delivering high-scale applications for several years.";
            } else if (query.includes('price') || query.includes('cost')) {
                response = "Pricing depends on the project's complexity! You can use the 'Contact' section to get a custom quote within 24 hours.";
            } else if (query.includes('hello') || query.includes('hi')) {
                response = "Hello! How can I help you explore Taimoor's portfolio today?";
            } else {
                response = "I'm still learning about Taimoor! You can ask about his skills, projects, or how to contact him. Alternatively, feel free to use the contact form below!";
            }

            setMessages(prev => [...prev, { role: 'bot', content: response }]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[60]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="mb-4 w-[320px] sm:w-[380px] h-[500px] cyber-glass rounded-[2rem] border-white/10 flex flex-col shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-electric-coral/20 to-cyan-mist/20 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-obsidian-black border border-electric-coral flex items-center justify-center relative">
                                    <Bot size={20} className="text-electric-coral" />
                                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-obsidian-black" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm text-snow-white">Cyber Assistant</h3>
                                    <span className="text-[10px] text-green-500 font-bold uppercase tracking-widest">Online</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/5 rounded-full text-slate-gray transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide bg-black/40"
                        >
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: msg.role === 'bot' ? -10 : 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}
                                >
                                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'bot'
                                            ? 'bg-white/5 border border-white/10 text-snow-white rounded-tl-none'
                                            : 'bg-electric-coral text-white rounded-tr-none'
                                        }`}>
                                        {msg.content}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-tl-none flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-slate-gray rounded-full animate-bounce" />
                                        <span className="w-1.5 h-1.5 bg-slate-gray rounded-full animate-bounce [animation-delay:0.2s]" />
                                        <span className="w-1.5 h-1.5 bg-slate-gray rounded-full animate-bounce [animation-delay:0.4s]" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-obsidian-black/50 border-t border-white/10">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask me anything..."
                                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-snow-white focus:outline-none focus:border-electric-coral transition-colors"
                                />
                                <button
                                    onClick={handleSend}
                                    className="w-10 h-10 rounded-full bg-electric-coral text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xl shadow-electric-coral/20"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-coral to-cyan-mist flex items-center justify-center shadow-2xl shadow-electric-coral/20 relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <div className="absolute inset-0 rounded-full bg-electric-coral animate-ping opacity-20 pointer-events-none" />
                {isOpen ? (
                    <X size={28} className="text-obsidian-black" />
                ) : (
                    <div className="relative">
                        <MessageSquare size={28} className="text-obsidian-black group-hover:hidden" />
                        <Sparkles size={28} className="text-obsidian-black hidden group-hover:block animate-pulse" />
                    </div>
                )}
            </motion.button>
        </div>
    );
}
