import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Terminal, Shield, Zap, Search } from 'lucide-react';

const codeSnippets = [
  `// Initializing Market Scanner
const scanner = new WebFindLead.Scanner({
  niche: "Real Estate",
  city: "New York",
  depth: 0.95
});

// Scanning for businesses without websites...
const invisibleLeads = await scanner.scanMarket();
console.log(\`Found \${invisibleLeads.length} opportunities!\`);`,

  `// Neural Lead Intelligence
async function analyzePredictiveROI(business) {
  const score = await AI.scoring(business.name, {
    socialProof: false,
    googleMapsRating: 3.2,
    adPresence: "None"
  });
  
  return score > 85 ? "High-Value Lead" : "Standard";
}`,

  `// Automated Outreach Engine
const lead = invisibleLeads[0];
await WebFindLead.Outreach.send({
  target: lead.contact,
  template: "No-Website-Recovery",
  urgency: "High"
});`,
];

const scanResults = [
  { label: 'Business Found', value: 'Local Bakery', status: 'No Website', color: 'var(--electric-coral)' },
  { label: 'Market Depth', value: '82%', status: 'Scanning...', color: 'var(--cyan-mist)' },
  { label: 'Intelligence', value: 'High ROI', status: 'Target Acquired', color: '#10B981' },
];

export function CodeViewport() {
  const [currentCode, setCurrentCode] = useState('');
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showStatus, setShowStatus] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  useEffect(() => {
    const snippet = codeSnippets[currentSnippetIndex];
    if (charIndex < snippet.length) {
      const timeout = setTimeout(() => {
        setCurrentCode(snippet.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      const statusTimeout = setTimeout(() => setShowStatus(true), 1000);
      const switchTimeout = setTimeout(() => {
        setShowStatus(false);
        setCurrentSnippetIndex((currentSnippetIndex + 1) % codeSnippets.length);
        setCharIndex(0);
        setCurrentCode('');
      }, 5000);
      return () => {
        clearTimeout(statusTimeout);
        clearTimeout(switchTimeout);
      };
    }
  }, [charIndex, currentSnippetIndex]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full max-w-2xl mx-auto"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        className="relative rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl p-6 shadow-2xl overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 243, 255, 0.05)'
        }}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-white/40">
              <Terminal size={14} />
              <span>webfindlead-scanner.sh</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-cyan-mist/80 uppercase tracking-tighter">
            <Shield size={12} />
            Secure Session
          </div>
        </div>

        {/* Code Console */}
        <div className="relative h-[300px] font-mono text-sm">
          <pre className="text-white/80">
            <code>
              {currentCode.split('\n').map((line, i) => (
                <div key={i} className="flex min-h-[1.5rem]">
                  <span className="text-white/20 w-8 select-none">{i + 1}</span>
                  <span className="flex-1 whitespace-pre-wrap">{highlightSyntax(line)}</span>
                </div>
              ))}
              <motion.span
                className="inline-block w-1.5 h-4 bg-cyan-mist ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </code>
          </pre>

          {/* Floating HUD Results */}
          <AnimatePresence>
            {showStatus && (
              <motion.div
                className="absolute right-0 top-0 bottom-0 w-64 flex flex-col gap-3 justify-center pointer-events-none"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                {scanResults.map((res, i) => (
                  <motion.div
                    key={i}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest">{res.label}</div>
                    <div className="text-sm font-bold text-white mb-1">{res.value}</div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: res.color }} />
                      <span className="text-[10px] font-medium" style={{ color: res.color }}>{res.status}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Status Bar */}
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-[10px] font-mono text-white/30">
              <Search size={12} />
              <span>SCANNING_ENGINE_V2</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-white/30">
              <Zap size={12} className="text-yellow-500" />
              <span>LOW_LATENCY</span>
            </div>
          </div>
          <div className="h-1 w-24 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-cyan-mist"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </div>
      </motion.div>

      {/* Background Glow Decorations */}
      <div className="absolute -inset-4 bg-cyan-mist/5 blur-3xl opacity-50 pointer-events-none" />
    </motion.div>
  );
}

function highlightSyntax(line: string) {
  const keywords = ['const', 'new', 'await', 'async', 'function', 'return', 'console', 'log'];
  let highlighted = line;

  keywords.forEach(kw => {
    const reg = new RegExp(`\\b${kw}\\b`, 'g');
    highlighted = highlighted.replace(reg, `<span style="color: #FF3E5C">${kw}</span>`);
  });

  // Numbers & Strings
  highlighted = highlighted.replace(/(\d+)/g, '<span style="color: #A78BFA">$1</span>');
  highlighted = highlighted.replace(/(["'`].*?["'`])/g, '<span style="color: #22D3EE">$1</span>');

  return <span dangerouslySetInnerHTML={{ __html: highlighted }} />;
}
