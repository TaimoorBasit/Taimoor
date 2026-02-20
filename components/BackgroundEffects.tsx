"use client";

import React from "react";

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-obsidian-black">
      {/* Static premium ambient glow - much faster than mouse-following gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-electric-coral/5 blur-[100px] rounded-full opacity-30" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-mist/5 blur-[100px] rounded-full opacity-20" />

      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-obsidian-black/40" />

      {/* Subtle Grid - optimized */}
      <div className="absolute inset-0 cyber-grid opacity-[0.02]" />
    </div>
  );
}
