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
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    const displayStack = isMobile ? techStack.slice(0, 10) : [...techStack, ...techStack];

    return (
        <div
            className={cn(
                "scroller relative z-20 w-full overflow-hidden",
                className
            )}
            style={{
                "--animation-direction": direction === "left" ? "forwards" : "reverse",
                "--animation-duration": isMobile ? "25s" : (speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"),
            } as React.CSSProperties}
        >
            <ul
                className={cn(
                    "flex min-w-full shrink-0 gap-8 sm:gap-16 py-4 w-max flex-nowrap animate-scroll will-change-transform",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {displayStack.map((tech, idx) => (
                    <li
                        className="w-[80px] sm:w-[100px] h-[60px] sm:h-[80px] max-w-full relative flex flex-col items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110"
                        key={`${tech.name}-${idx}`}
                    >
                        <tech.icon
                            className="w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3"
                            style={{ color: tech.color || 'white' }}
                        />
                        <span
                            className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-center"
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
