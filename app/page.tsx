"use client";

import { BackgroundEffects } from '../components/BackgroundEffects'
import { CyberCursorTrail, PageTransition, CyberLoadingScreen } from '../components/CyberEffects'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'
import { Testimonials } from '../components/Testimonials'
import { Services } from '../components/Services'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Ensure all buttons and links are clickable
    const ensureClickability = () => {
      const allButtons = document.querySelectorAll('a, button, [role="button"]');
      allButtons.forEach(element => {
        (element as HTMLElement).style.pointerEvents = 'auto';
        (element as HTMLElement).style.cursor = 'pointer';
        (element as HTMLElement).style.userSelect = 'none';
      });
    };

    // Run immediately and after a delay to catch dynamically loaded elements
    ensureClickability();
    setTimeout(ensureClickability, 1000);
    setTimeout(ensureClickability, 3000);

    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-obsidian-black relative scroll-container">
      <CyberLoadingScreen />
      <BackgroundEffects />
      <CyberCursorTrail />
      <div className="relative z-10">
        <PageTransition>
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Testimonials />
            <Services />
            <Contact />
          </main>
          <Footer />
        </PageTransition>
      </div>
    </div>
  )
}
