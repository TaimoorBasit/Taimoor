"use client";

// Optimized static background for maximum performance
export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
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

      {/* Light static accent to replace moving particles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-coral/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-mist/5 blur-[100px] rounded-full pointer-events-none" />
    </div>
  );
}
