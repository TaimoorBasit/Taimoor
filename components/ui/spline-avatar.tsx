"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

// Dynamic import for Spline Scene to ensure heavy 3D assets don't block the main thread
const SplineScene = dynamic(() => import("@/components/ui/spline").then(mod => mod.SplineScene), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex items-center justify-center bg-transparent">
            {/* Animated loader matching the theme */}
            <div className="relative w-20 h-20">
                <div className="absolute inset-0 rounded-full border-2 border-electric-coral animate-ping opacity-20"></div>
                <div className="absolute inset-0 rounded-full border-2 border-cyan-mist animate-pulse shadow-[0_0_20px_var(--cyan-mist)]"></div>
            </div>
        </div>
    ),
});

interface SplineAvatarProps {
    className?: string;
}

export function SplineAvatar({ className }: SplineAvatarProps) {
    // FINAL SPLINE SCENE LINK HERE:
    // Replace the following URL with your futuristic AI avatar spline scene
    const SCENE_URL = "https://prod.spline.design/kZS1ORufDnn9Y7Wf/scene.splinecode"; // Placeholder premium scene

    return (
        <div className={cn("relative w-full h-[500px] lg:h-[700px] cursor-grab active:cursor-grabbing", className)}>
            <Suspense fallback={null}>
                <SplineScene
                    scene={SCENE_URL}
                    className="w-full h-full"
                />
            </Suspense>

            {/* Neural glow overlay - subtle */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-obsidian-black/50 via-transparent to-transparent flex items-end justify-center">
                <div className="w-1/2 h-1/4 bg-electric-coral/10 blur-[100px] rounded-full"></div>
            </div>

            {/* Floating particles represent lead scanner (CSS/Framer motion overlay) */}
            <div className="absolute inset-0 pointer-events-none">
                {/* We can add subtle particles here if needed */}
            </div>
        </div>
    );
}
