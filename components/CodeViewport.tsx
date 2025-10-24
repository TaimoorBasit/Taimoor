"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const codeSnippets = [
  `// React Component
const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    fetchProjects().then(data => {
      setProjects(data);
    });
  }, []);
  
  return (
    <div className="grid">
      {projects.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};`,
  `// Next.js API Route
export default async function handler(req, res) {
  try {
    const data = await fetch('https://api.example.com/data');
    const json = await data.json();
    
    res.status(200).json({
      success: true,
      data: json
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch' });
  }
}`,
  `// WordPress Custom Post Type
function register_portfolio_post_type() {
  register_post_type('portfolio', [
    'labels' => [
      'name' => 'Portfolio Items',
      'singular_name' => 'Portfolio Item'
    ],
    'public' => true,
    'has_archive' => true,
    'supports' => ['title', 'editor', 'thumbnail']
  ]);
}
add_action('init', 'register_portfolio_post_type');`,
];

const projectPreviews = [
  { 
    title: 'E-Commerce Store', 
    tech: 'Shopify + React', 
    color: 'purple',
    logo: '🛒',
    animatedIcon: '💳',
    description: 'Modern online store with seamless shopping experience'
  },
  { 
    title: 'Portfolio Site', 
    tech: 'Next.js + Tailwind', 
    color: 'teal',
    logo: '👨‍💻',
    animatedIcon: '⚡',
    description: 'Professional portfolio with smooth animations'
  },
  { 
    title: 'Blog Platform', 
    tech: 'WordPress + Custom Theme', 
    color: 'gold',
    logo: '📝',
    animatedIcon: '✨',
    description: 'Content management with custom functionality'
  },
];

export function CodeViewport() {
  const [currentCode, setCurrentCode] = useState('');
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  useEffect(() => {
    const snippet = codeSnippets[currentSnippetIndex];
    
    if (charIndex < snippet.length) {
      const timeout = setTimeout(() => {
        setCurrentCode(snippet.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, Math.random() * 50 + 30); // Random typing speed
      return () => clearTimeout(timeout);
    } else {
      // Show preview after code is fully typed
      const previewTimeout = setTimeout(() => {
        setShowPreview(true);
      }, 1000);
      
      // Switch to next snippet
      const switchTimeout = setTimeout(() => {
        setShowPreview(false);
        setCurrentSnippetIndex((currentSnippetIndex + 1) % codeSnippets.length);
        setCharIndex(0);
        setCurrentCode('');
      }, 5000);
      
      return () => {
        clearTimeout(previewTimeout);
        clearTimeout(switchTimeout);
      };
    }
  }, [charIndex, currentSnippetIndex]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="glass-panel rounded-2xl p-6 depth-shadow overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 20 }}
      >
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <span className="ml-4 text-xs text-gray-500" style={{ fontFamily: 'var(--font-mono)' }}>
            portfolio.tsx
          </span>
        </div>

        {/* Code Display */}
        <div className="relative h-[400px] overflow-hidden">
          <pre
            className="text-sm leading-relaxed"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            <code>
              {currentCode.split('\n').map((line, i) => (
                <div key={i} className="flex">
                  <span className="text-gray-400 select-none mr-4 text-right" style={{ minWidth: '2rem' }}>
                    {i + 1}
                  </span>
                  <span className="syntax-highlight">{highlightSyntax(line)}</span>
                </div>
              ))}
              <motion.span
                className="inline-block w-2 h-5 ml-1 bg-gradient-to-r from-[var(--gold-start)] to-[var(--gold-end)]"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </code>
          </pre>

          {/* Project Previews */}
          {showPreview && (
            <motion.div
              className="absolute right-4 top-4 space-y-3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            >
              {projectPreviews.map((preview, i) => (
                <motion.div
                  key={i}
                  className="glass-panel rounded-lg p-4 w-64 depth-shadow overflow-hidden"
                  initial={{ opacity: 0, rotateY: -20 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  transition={{ delay: i * 0.2, type: 'spring', stiffness: 120, damping: 18 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Header with animated logo */}
                  <div className={`h-24 rounded-md mb-3 bg-gradient-to-br ${
                    preview.color === 'purple' ? 'from-purple-400 to-purple-600' :
                    preview.color === 'teal' ? 'from-teal-400 to-teal-600' :
                    'from-yellow-400 to-yellow-600'
                  } relative flex items-center justify-center`}>
                    {/* Animated logo */}
                    <motion.div
                      className="text-4xl mb-2"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      {preview.logo}
                    </motion.div>
                    
                    {/* Floating animated icon */}
                    <motion.div
                      className="absolute top-2 right-2 text-lg"
                      animate={{
                        y: [0, -5, 0],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      {preview.animatedIcon}
                    </motion.div>

                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="w-full h-full bg-white/20 rounded-md"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-800">{preview.title}</h4>
                    <p className="text-xs text-gray-600 font-mono">{preview.tech}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{preview.description}</p>
                  </div>

                  {/* Tech badges */}
                  <div className="flex gap-1 mt-3">
                    {preview.tech.split(' + ').map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.2 + idx * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// Simple syntax highlighting
function highlightSyntax(line: string) {
  const keywords = ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'export', 'import', 'from', 'async', 'await', 'try', 'catch', 'useEffect', 'useState', 'default'];
  const strings = line.match(/(["'`])(?:(?=(\\?))\2.)*?\1/g);
  const comments = line.match(/\/\/.*/g);

  let highlighted = line;

  // Highlight comments
  if (comments) {
    comments.forEach(comment => {
      highlighted = highlighted.replace(comment, `<span style="color: #6B7280">${comment}</span>`);
    });
  }

  // Highlight strings
  if (strings) {
    strings.forEach(str => {
      highlighted = highlighted.replace(str, `<span style="color: #10B981">${str}</span>`);
    });
  }

  // Highlight keywords
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'g');
    highlighted = highlighted.replace(regex, `<span style="color: #7C3AED">${keyword}</span>`);
  });

  return <span dangerouslySetInnerHTML={{ __html: highlighted }} />;
}
