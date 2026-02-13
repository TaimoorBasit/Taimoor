"use client";

import dynamic from 'next/dynamic';
import { useEffect } from 'react';

import { Header } from '../components/Header';
import { HeroWebFindLead as Hero } from '../components/sections/hero-webfindlead';

const About = dynamic(() => import('../components/About').then(mod => ({ default: mod.About })), {
  ssr: true,
});

const Skills = dynamic(() => import('../components/Skills').then(mod => ({ default: mod.Skills })), {
  ssr: true,
});

const Projects = dynamic(() => import('../components/Projects').then(mod => ({ default: mod.Projects })), {
  ssr: true,
});

const Tools = dynamic(() => import('../components/Tools').then(mod => ({ default: mod.Tools })), {
  ssr: true,
});

const Testimonials = dynamic(() => import('../components/Testimonials').then(mod => ({ default: mod.Testimonials })), {
  ssr: true,
});

const Services = dynamic(() => import('../components/Services').then(mod => ({ default: mod.Services })), {
  ssr: true,
});

const Blog = dynamic(() => import('../components/Blog').then(mod => ({ default: mod.Blog })), {
  ssr: true,
});

const TheProcess = dynamic(() => import('../components/sections/TheProcess').then(mod => ({ default: mod.TheProcess })), {
  ssr: true,
});

const FAQ = dynamic(() => import('../components/sections/FAQ').then(mod => ({ default: mod.FAQ })), {
  ssr: true,
});

const Contact = dynamic(() => import('../components/Contact').then(mod => ({ default: mod.Contact })), {
  ssr: true,
});

const Footer = dynamic(() => import('../components/Footer').then(mod => ({ default: mod.Footer })), {
  ssr: true,
});

export default function Home() {
  useEffect(() => {
    // Native browser anchors with CSS scroll-behavior: smooth handles this more reliably
    // We only need to ensure sections have IDs (which they do)
  }, []);

  return (
    <div className="min-h-screen bg-obsidian-black relative scroll-container">
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <TheProcess />
          <Projects />
          <Skills />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
