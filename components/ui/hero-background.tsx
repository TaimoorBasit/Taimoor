"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const HeroBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 overflow-hidden pointer-events-none z-0"
        >
            {/* 1. Deep Atmospheric Base */}
            <div className="absolute inset-0 bg-obsidian-black">
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: `radial-gradient(circle at 15% 50%, rgba(76, 29, 149, 0.08) 0%, transparent 50%),
                         radial-gradient(circle at 85% 30%, rgba(6, 182, 212, 0.05) 0%, transparent 50%)`
                    }}
                />
            </div>

            {/* 2. Delicate Grid Texture */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                    maskImage: 'radial-gradient(circle at 50% 50%, black 30%, transparent 80%)'
                }}
            />

            {/* 3. Ethereal Floating Orbs (Slow Motion) */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-electric-coral/5 blur-[120px] rounded-full mix-blend-screen"
            />

            <motion.div
                animate={{
                    x: [0, -60, 0],
                    y: [0, 80, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-1/4 -right-40 w-[700px] h-[700px] bg-cyan-mist/5 blur-[140px] rounded-full mix-blend-screen"
            />

            {/* 4. Mouse Follower (Subtle Glow) */}
            <motion.div
                className="absolute z-10 pointer-events-none transition-opacity duration-700"
                animate={{
                    x: mousePosition.x - 400,
                    y: mousePosition.y - 400,
                }}
                transition={{ type: "spring", damping: 50, stiffness: 50, mass: 3 }}
                style={{
                    width: 800,
                    height: 800,
                    background: `radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 60%)`,
                    borderRadius: '50%'
                }}
            />

            {/* 5. Cinematic Noise Grain */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />
        </div>
    );
};
