"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SiLinkedin, SiInstagram } from "react-icons/si";

const socialLinks = [
  {
    icon: SiLinkedin,
    url: "https://www.linkedin.com/in/mohammad-taimoor",
    label: "LinkedIn",
  },
  {
    icon: SiInstagram,
    url: "https://www.instagram.com/tamouriii?igsh=cmx3YW00am4wdTNx",
    label: "Instagram",
  },
];

export function Footer() {
  return (
    <footer className="relative w-full pt-4 pb-0">
      {/* Same glass style as navbar: cyber-glass, border, rounded */}
      <div className="relative w-full py-8 sm:py-10 overflow-hidden cyber-glass border border-white/10 border-b-0 border-t-0 rounded-t-[2rem] shadow-2xl">
        <div className="absolute inset-0 cyber-grid opacity-[0.03] rounded-t-[2rem]" aria-hidden />

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Social icons */}
            <motion.div
              className="flex justify-center gap-3 mb-5"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg text-white transition-all duration-300 hover:scale-105 hover:opacity-90 border border-white/10 hover:border-electric-coral/50 bg-white/5"
                  aria-label={`Visit my ${social.label} profile`}
                >
                  <social.icon size={20} aria-hidden="true" />
                </a>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2
                className="text-xl sm:text-2xl font-bold mb-1"
                style={{
                  color: "var(--electric-coral)",
                  textShadow:
                    "0 0 20px rgba(255, 62, 92, 0.5), 0 0 40px rgba(255, 62, 92, 0.2)",
                }}
              >
                Let&apos;s Build the Future Together
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm">
                Ready to transcend digital boundaries?
              </p>
            </motion.div>

            {/* Gradient line */}
            <div className="flex justify-center mb-4">
              <div
                className="h-0.5 w-16 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, var(--electric-coral), var(--cyan-mist))",
                }}
              />
            </div>

            {/* Divider - full width, centered */}
            <div className="w-full h-px bg-white/10 mb-5" />

            {/* Privacy (left), Copyright (center), Terms (right) */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 w-full text-sm text-slate-400 gap-4 sm:gap-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex justify-center sm:justify-start order-2 sm:order-1">
                <Link
                  href="/privacy"
                  className="text-slate-400 hover:text-cyan-mist transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
              <div className="flex justify-center order-1 sm:order-2 text-slate-400">
                © {new Date().getFullYear()} Taimoor Awan
              </div>
              <div className="flex justify-center sm:justify-end order-3">
                <Link
                  href="/terms"
                  className="text-slate-400 hover:text-cyan-mist transition-colors"
                >
                  Terms of Use
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
