"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY.current ? "down" : "up";

    // Scrolled state for styling
    setIsScrolled(latest > 50);

    // Visibility state for smart hide/show
    if (latest > 150 && direction === "down" && !isMenuOpen) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    lastScrollY.current = latest;
  });

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      // Small delay to let the menu close smoothly
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 50);

      window.history.pushState(null, '', href);
    }
  };

  const navItems = [
    { label: 'Home', description: 'Back to the start', href: '#home' },
    { label: 'About', description: 'My digital journey', href: '#about' },
    { label: 'Services', description: 'How can I help?', href: '#services' },
    { label: 'Projects', description: 'View my creations', href: '#projects' },
    { label: 'Experience', description: 'Work history', href: '#experience' },
    { label: 'Skills', description: 'Tech stack', href: '#skills' },
    { label: 'Tools', description: 'My toolkit', href: '#tools' },
    { label: 'Testimonials', description: 'Client feedback', href: '#testimonials' },
    { label: 'Blog', description: 'Latest articles', href: '#blog' },
    { label: 'Contact', description: 'Get in touch', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-[95%] max-w-5xl rounded-[2rem] border border-white/10 ${isScrolled || isMenuOpen
          ? 'cyber-glass shadow-2xl'
          : 'bg-transparent py-2'
          }`}
        initial={{ y: -100, x: '-50%' }}
        animate={{
          y: isVisible ? 0 : -120,
          x: '-50%'
        }}
        transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
      >
        <div className="px-4 py-2 sm:px-6 relative">
          <div className="flex items-center justify-between h-10 sm:h-12 relative z-50">

            {/* Left: Menu Toggle */}
            <motion.button
              className="p-2 rounded-full hover:bg-white/5 transition-colors group relative border border-transparent hover:border-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={20} className="text-white" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={20} className="text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.button>

            {/* Center: Logo (Absolutely Positioned) */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <a href="#home" className="flex items-center" onClick={(e) => scrollToSection(e, '#home')}>
                <span className="text-lg font-bold cyber-gradient-text tracking-tighter whitespace-nowrap">
                  Taimoor Awan
                </span>
              </a>
            </motion.div>

            {/* Right: CTA Button */}
            <motion.a
              href="#contact"
              className="hidden sm:flex items-center px-4 py-2 rounded-full cyber-button text-xs font-bold tracking-wide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => scrollToSection(e, '#contact')}
            >
              Let&apos;s Connect
            </motion.a>
            {/* Mobile placeholder to balance spacing if needed, but flex-between handles it */}
            <div className="sm:hidden w-9" />
          </div>

          {/* Expanded Menu Content */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
                className="overflow-hidden mt-2"
              >
                {/* Mobile CTA (visible only inside menu on mobile) */}
                <div className="sm:hidden mb-4">
                  <a
                    href="#contact"
                    className="flex items-center justify-center w-full px-4 py-3 rounded-xl cyber-button text-sm font-bold tracking-wide"
                    onClick={(e) => scrollToSection(e, '#contact')}
                  >
                    Let&apos;s Connect
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pb-4 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      className="group p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all flex flex-col gap-1 relative overflow-hidden"
                      onClick={(e) => scrollToSection(e, item.href)}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03 }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-snow-white group-hover:cyber-gradient-text transition-colors">
                          {item.label}
                        </span>
                        <ArrowUpRight size={14} className="text-white/30 group-hover:text-electric-coral transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                      <span className="text-[10px] text-slate-gray line-clamp-1">
                        {item.description}
                      </span>
                      {/* Hover Decoration */}
                      <div className="absolute top-0 right-0 w-8 h-8 bg-electric-coral/5 blur-xl group-hover:bg-electric-coral/10 transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 z-[110] pointer-events-none"
        style={{
          background: 'linear-gradient(to right, var(--electric-coral), var(--cyan-mist))',
          scaleX: useScroll().scrollYProgress,
          transformOrigin: 'left',
        }}
      />
    </>
  );
}
