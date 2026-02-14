"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Zap, Sparkles, Code, ExternalLink, Calendar, ArrowRight } from 'lucide-react';
import { FaEnvelope, FaPhone, FaLocationDot, FaWhatsapp } from 'react-icons/fa6';
import { SiLinkedin, SiInstagram } from 'react-icons/si';
import { toast } from 'sonner';

const contactInfo = [
  { icon: FaEnvelope, label: 'Email', value: 'mohammad.taimoor850@gmail.com', href: 'mailto:mohammad.taimoor850@gmail.com' },
  { icon: FaPhone, label: 'Contact', value: '+1 (972) 688-7170', href: 'https://wa.me/19726887170' },
];

const socialLinks = [
  { icon: SiLinkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/mohammad-taimoor' },
  { icon: SiInstagram, label: 'Instagram', url: 'https://www.instagram.com/tamouriii?igsh=cmx3YW00am4wdTNx' },
];

// Cyber input field with glowing effects
function CyberInput({
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  rows = undefined
}: {
  id: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  required?: boolean;
  rows?: number;
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Holographic Border */}
      <div className="absolute inset-0 rounded-xl p-1">
        <motion.div
          className="w-full h-full rounded-xl"
          style={{
            background: isFocused
              ? 'linear-gradient(45deg, var(--electric-coral), var(--cyan-mist), var(--electric-coral))'
              : 'linear-gradient(45deg, rgba(217,227,242,0.2), rgba(217,227,242,0.1), rgba(217,227,242,0.2))',
            backgroundSize: '400% 400%',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Input Field */}
      <div className="relative">
        {rows ? (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required={required}
            rows={rows}
            className="w-full px-4 py-3 rounded-xl glass-input resize-none transition-all duration-300"
            style={{
              backgroundColor: 'rgba(12, 12, 13, 0.8)',
              color: 'var(--snow-white)',
              borderColor: isFocused ? 'var(--electric-coral)' : 'rgba(217, 227, 242, 0.2)',
            }}
            placeholder={placeholder}
          />
        ) : (
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required={required}
            className="w-full px-4 py-3 rounded-xl glass-input transition-all duration-300"
            style={{
              backgroundColor: 'rgba(12, 12, 13, 0.8)',
              color: 'var(--snow-white)',
              borderColor: isFocused ? 'var(--electric-coral)' : 'rgba(217, 227, 242, 0.2)',
            }}
            placeholder={placeholder}
          />
        )}

        {/* Focus Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--electric-coral), transparent)',
            filter: 'blur(8px)',
          }}
          animate={{
            opacity: isFocused ? [0, 0.3, 0] : 0,
            scale: isFocused ? [1, 1.1, 1] : 1,
          }}
          transition={{
            duration: 2,
            repeat: isFocused ? Infinity : 0,
            ease: "easeInOut",
          }}
        />

        {/* Simplified Floating Particles - reduced from 3 to 1 */}
        {isFocused && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: 'var(--electric-coral)',
                left: '50%',
                top: '50%',
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0, 0.6, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}

const budgetOptions = [
  "Under $1k",
  "$1k - $5k",
  "$5k - $10k",
  "$10k+",
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Construct WhatsApp Message
    const message = `*New Project Inquiry*
    
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'N/A'}
*Company:* ${formData.company || 'N/A'}
*Budget:* ${formData.budget}
*Message:*
${formData.message}`;

    const whatsappUrl = `https://wa.me/19726887170?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    toast.success('Redirecting to WhatsApp...');
    setFormData({ name: '', email: '', phone: '', company: '', budget: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden bg-obsidian-black border-t border-white/5">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-[0.03]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Context & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              Ready to <span className="cyber-gradient-text">Scale?</span>
            </h2>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed font-light">
              I only work with clients who are serious about growth. If you&apos;re ready to build high-performance infrastructure, let&apos;s talk.
            </p>

            <div className="mb-12 p-5 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-electric-coral/10 text-electric-coral">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Direct Partnership</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    You get me—not an account manager or a junior dev. No agency fluff, just direct access and high-level execution.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8 mb-12">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-electric-coral/50 group-hover:bg-electric-coral/10 transition-all duration-300">
                    <info.icon size={24} className="text-slate-300 group-hover:text-electric-coral transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold mb-1">{info.label}</div>
                    <div className="text-lg text-white font-medium group-hover:text-electric-coral transition-colors">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white hover:bg-white/5 transition-all"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-electric-coral focus:ring-1 focus:ring-electric-coral outline-none transition-all placeholder:text-slate-600"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-300 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-electric-coral focus:ring-1 focus:ring-electric-coral outline-none transition-all placeholder:text-slate-600"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-electric-coral focus:ring-1 focus:ring-electric-coral outline-none transition-all placeholder:text-slate-600"
                    placeholder="jane@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-slate-300 ml-1">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-electric-coral focus:ring-1 focus:ring-electric-coral outline-none transition-all placeholder:text-slate-600"
                    placeholder="Acme Inc."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="budget" className="text-sm font-medium text-slate-300 ml-1">Budget</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-electric-coral focus:ring-1 focus:ring-electric-coral outline-none transition-all appearance-none"
                >
                  <option value="" disabled className="text-slate-500">Select Range</option>
                  {budgetOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-obsidian-black text-white">{opt}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-electric-coral focus:ring-1 focus:ring-electric-coral outline-none transition-all placeholder:text-slate-600 resize-none"
                  placeholder="Tell me about your goals..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full cyber-button text-lg font-bold py-4 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Processing...' : (
                  <>
                    Send Message <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
