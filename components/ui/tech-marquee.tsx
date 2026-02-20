"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import {
    SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiNodedotjs,
    SiTailwindcss, SiMongodb, SiPostgresql, SiDocker, SiAmazon,
    SiPython, SiOpenai, SiFigma, SiGit, SiPrisma
} from "react-icons/si";

const techStack = [
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiPython, name: "Python", color: "#3776AB" },
    { icon: SiOpenai, name: "AI/LLM", color: "#00A67E" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
    { icon: SiPrisma, name: "Prisma", color: "#2D3748" }, // Dark, maybe use white if on dark theme
    { icon: SiDocker, name: "Docker", color: "#2496ED" },
    { icon: SiAmazon, name: "AWS", color: "#FF9900" },
    { icon: SiGit, name: "Git", color: "#F05032" },
    { icon: SiFigma, name: "Figma", color: "#F24E1E" },
];

export const TechMarquee = ({
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 w-full overflow-hidden",
                className
            )}
            style={{
                "--animation-direction": direction === "left" ? "forwards" : "reverse",
                "--animation-duration": speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s",
            } as React.CSSProperties}
        >
            <ul
                className={cn(
                    "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {[...techStack, ...techStack].map((tech, idx) => (
                    <li
                        className="w-[100px] h-[80px] max-w-full relative flex flex-col items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110"
                        key={`${tech.name}-${idx}`}
                    >
                        <tech.icon
                            className="w-10 h-10 mb-3"
                            style={{ color: tech.color || 'white' }}
                        />
                        <span
                            className="text-xs font-bold uppercase tracking-wider"
                            style={{ color: tech.color || 'white', opacity: 0.9 }}
                        >
                            {tech.name}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
