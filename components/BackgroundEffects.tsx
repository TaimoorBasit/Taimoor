"use client";

import { useEffect } from "react";
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";

export function BackgroundEffects() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* 
        PREMIUM UPGRADE: Mouse-following gradient mesh 
        Uses motion values for performant updates without re-renders 
      */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 62, 92, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Static grid pattern - GPU efficient */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(137, 255, 240, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(137, 255, 240, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Static gradient overlay - replaces expensive moving orbs */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-obsidian-black/40" />

      {/* Enhanced static accents for depth */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-electric-coral/5 blur-[120px] rounded-full pointer-events-none opacity-40 mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-cyan-mist/5 blur-[120px] rounded-full pointer-events-none opacity-30 mix-blend-screen" />
    </div>
  );
}
