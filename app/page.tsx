// Fresh build trigger - 2026-02-20
import dynamic from 'next/dynamic';

import { Header } from '../components/Header';
import { LaunchBanner } from '../components/LaunchBanner';
import { HeroWebFindLead as Hero } from '../components/sections/hero-webfindlead';

const About = dynamic(() => import('../components/About').then(mod => ({ default: mod.About })), {
  ssr: true,
});

const Skills = dynamic(() => import('../components/Skills').then(mod => ({ default: mod.Skills })), {
  ssr: false, // Below fold, heavy carousel
});

const Projects = dynamic(() => import('../components/Projects').then(mod => ({ default: mod.Projects })), {
  ssr: false, // Below fold, heavy cards
});

const Testimonials = dynamic(() => import('../components/Testimonials').then(mod => ({ default: mod.Testimonials })), {
  ssr: false, // Below fold
});

const Services = dynamic(() => import('../components/Services').then(mod => ({ default: mod.Services })), {
  ssr: true, // Often near top, keep SSR
});

const TheProcess = dynamic(() => import('../components/sections/TheProcess').then(mod => ({ default: mod.TheProcess })), {
  ssr: false,
});

const FAQ = dynamic(() => import('../components/sections/FAQ').then(mod => ({ default: mod.FAQ })), {
  ssr: false,
});

const Contact = dynamic(() => import('../components/Contact').then(mod => ({ default: mod.Contact })), {
  ssr: false,
});

const Footer = dynamic(() => import('../components/Footer').then(mod => ({ default: mod.Footer })), {
  ssr: true,
});

const FlagshipProducts = dynamic(() => import('../components/sections/FlagshipProducts').then(mod => ({ default: mod.FlagshipProducts })), {
  ssr: true, // Core content
});

export default function Home() {

  return (
    <div className="min-h-screen bg-obsidian-black relative scroll-container">
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <TheProcess />
          <FlagshipProducts />
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
