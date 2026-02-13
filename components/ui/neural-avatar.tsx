"use client";

import React, { useRef, useEffect } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";

export function NeuralAvatar() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth springs for high-end interaction
    const springConfig = { damping: 25, stiffness: 120 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    // Parallax / Rotation transforms
    const rotateX = useTransform(smoothY, [-400, 400], [25, -25]);
    const rotateY = useTransform(smoothX, [-400, 400], [-25, 25]);

    const innerX = useTransform(smoothX, [-400, 400], [-15, 15]);
    const innerY = useTransform(smoothY, [-400, 400], [-15, 15]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div
            ref={containerRef}
            className="relative flex items-center justify-center w-full max-w-[550px] aspect-square"
            style={{ perspective: 1500 }}
        >
            {/* 1. Nebula Glow Background (Cursor Tracking) */}
            <motion.div
                style={{ x: innerX, y: innerY }}
                className="absolute w-80 h-80 bg-cyan-mist/10 blur-[130px] rounded-full"
            />

            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative w-full h-full flex items-center justify-center"
            >
                {/* 2. THE 3D SPHERICAL GRID (JARVIS DATA MESH) */}
                <div className="absolute w-[85%] h-[85%] border border-cyan-mist/5 rounded-full" />

                {/* Longitudinal & Latitudinal tech lines */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={`ring-${i}`}
                        animate={{ rotateZ: 360 }}
                        transition={{ duration: 30 + i * 5, repeat: Infinity, ease: "linear" }}
                        className="absolute w-full h-full border border-cyan-mist/10 rounded-full"
                        style={{
                            rotateY: i * 30,
                            translateZ: -50 + i * 20
                        }}
                    />
                ))}

                {/* 3. DYNAMIC HUD PANELS (Floating around the core) */}
                <motion.div
                    style={{ translateZ: 200, x: 200, y: -150 }}
                    className="absolute cyber-glass p-3 rounded-xl border border-white/10 flex flex-col gap-1 w-32 shadow-2xl"
                >
                    <div className="text-[8px] font-mono text-cyan-mist uppercase tracking-widest">Network_Status</div>
                    <div className="text-[12px] font-bold text-white flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        SECURE
                    </div>
                </motion.div>

                <motion.div
                    style={{ translateZ: 150, x: -220, y: 100 }}
                    className="absolute cyber-glass p-3 rounded-xl border border-white/10 flex flex-col gap-1 w-40 shadow-2xl"
                >
                    <div className="text-[8px] font-mono text-cyan-mist uppercase tracking-widest">Lead_Scanned</div>
                    <div className="text-[12px] font-bold text-white tracking-widest">+12,842.06</div>
                    <div className="w-full h-1 bg-white/5 rounded-full mt-1 overflow-hidden">
                        <motion.div
                            animate={{ width: ["0%", "85%"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="h-full bg-electric-coral"
                        />
                    </div>
                </motion.div>

                {/* 4. THE CORE "POWER NODE" (THE AI ENTITY) */}
                <motion.div
                    style={{ translateZ: 100 }}
                    className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full flex items-center justify-center overflow-hidden"
                >
                    {/* Core Glow Layer */}
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 bg-cyan-mist/40 blur-3xl opacity-50"
                    />

                    {/* High-Tech Inner Gear / Eye */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="relative w-32 h-32 sm:w-44 sm:h-44 rounded-full border-[3px] border-cyan-mist/30 border-t-transparent border-b-transparent flex items-center justify-center"
                    >
                        <div className="w-full h-full border border-electric-coral/20 rounded-full animate-pulse" />

                        {/* Central WFL Intelligence Brand */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <motion.div
                                animate={{ opacity: [1, 0.5, 1] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="text-4xl font-black text-white tracking-tighter"
                            >
                                WFL<span className="text-cyan-mist">.</span>
                            </motion.div>
                            <div className="text-[9px] font-mono text-white/40 uppercase tracking-[0.4em] ml-1">Core_Intelligence</div>
                        </div>
                    </motion.div>

                    {/* Neural Scanning Line (Vertical) */}
                    <motion.div
                        animate={{ y: ["-150%", "150%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-[2px] bg-cyan-mist shadow-[0_0_15px_var(--cyan-mist)] z-10"
                    />
                </motion.div>

                {/* 5. ORBITING INTEL NODES (JARVIS PARTICLES) */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={`node-${i}`}
                        animate={{
                            rotateY: [0, 360],
                            y: [Math.random() * -100, Math.random() * 100],
                        }}
                        transition={{
                            rotateY: { duration: 10 + Math.random() * 10, repeat: Infinity, ease: "linear" },
                            y: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
                        }}
                        className="absolute"
                        style={{
                            width: 4 + Math.random() * 4,
                            height: 4 + Math.random() * 4,
                            translateZ: 250 + Math.random() * 50
                        }}
                    >
                        <div className="w-full h-full rounded-full bg-cyan-mist shadow-[0_0_10px_var(--cyan-mist)]" />

                        {/* Very faint data labels on some particles */}
                        {i % 4 === 0 && (
                            <div className="absolute left-4 top-0 text-[6px] font-mono text-cyan-mist/40 whitespace-nowrap">
                                TRACE_0{i}
                            </div>
                        )}
                    </motion.div>
                ))}

                {/* 6. TECHNICAL CIRCUMFERENCE READOUTS */}
                <div className="absolute w-[110%] h-[110%] opacity-20 border-[0.5px] border-cyan-mist/20 rounded-full border-dashed" />

                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    <div className="w-[105%] h-[105%] border-l-2 border-electric-coral rounded-full animate-[spin_5s_linear_infinite]" />
                </div>
            </motion.div>

            {/* Decorative Lens Flares */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-mist/5 blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-electric-coral/5 blur-[100px]" />
        </div>
    );
}
