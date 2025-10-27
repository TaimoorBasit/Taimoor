"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Linkedin, Instagram, Zap, Sparkles, Code } from 'lucide-react';
import { toast } from 'sonner';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'mohammad.taimoor850@gmail.com', href: 'mailto:mohammad.taimoor850@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+92 348 5552644', href: 'tel:+923485552644' },
  { icon: MapPin, label: 'Location', value: 'Pakistan', href: '#' },
];

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/mohammad-taimoor' },
  { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/tamouriii?igsh=cmx3YW00am4wdTNx' },
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

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      {/* Optimized Floating Cyber Orbs - reduced from 5 to 2 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 2 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-2xl"
            style={{
              width: 160 + i * 60,
              height: 160 + i * 60,
              left: `${25 + i * 50}%`,
              top: `${20 + i * 60}%`,
              background: i % 2 === 0 
                ? 'radial-gradient(circle, rgba(255,62,92,0.1), transparent)' 
                : 'radial-gradient(circle, rgba(137,255,240,0.1), transparent)',
            }}
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -25, 35, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: 'var(--snow-white)' }}
            animate={{
              textShadow: [
                "0 0 10px var(--electric-coral)",
                "0 0 20px var(--electric-coral), 0 0 30px var(--cyan-mist)",
                "0 0 10px var(--electric-coral)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Get in <span className="cyber-gradient-text">Touch</span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl max-w-2xl mx-auto"
            style={{ color: 'var(--slate-gray)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Have a project in mind? Let&apos;s work together to create something amazing
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          >
            <div>
              <motion.h3
                className="text-2xl mb-6 font-bold"
                style={{ color: 'var(--snow-white)' }}
                whileHover={{ color: 'var(--electric-coral)' }}
              >
                Contact Information
              </motion.h3>
              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={info.label}
                    className="flex items-center gap-4 rounded-xl p-4 group"
                    style={{
                      backgroundColor: 'rgba(12, 12, 13, 0.8)',
                      borderColor: 'rgba(255, 62, 92, 0.2)',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 4, scale: 1.02 }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, var(--electric-coral), var(--cyan-mist))',
                        boxShadow: '0 0 15px var(--electric-coral)',
                      }}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <info.icon size={20} style={{ color: 'var(--obsidian-black)' }} />
                    </motion.div>
                    <div>
                      <div className="text-sm" style={{ color: 'var(--slate-gray)' }}>{info.label}</div>
                      <motion.div
                        className="font-medium"
                        style={{ color: 'var(--snow-white)' }}
                        whileHover={{ color: 'var(--cyan-mist)' }}
                      >
                        {info.value}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <motion.h3
                className="text-2xl mb-6 font-bold"
                style={{ color: 'var(--snow-white)' }}
                whileHover={{ color: 'var(--electric-coral)' }}
              >
                Follow Me
              </motion.h3>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-xl flex items-center justify-center group"
                    style={{
                      backgroundColor: 'rgba(12, 12, 13, 0.8)',
                      borderColor: 'rgba(255, 62, 92, 0.2)',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{
                      y: -8,
                      scale: 1.1,
                      boxShadow: '0 0 30px var(--electric-coral)',
                    }}
                  >
                    <social.icon size={24} className="text-cyan-mist group-hover:text-electric-coral transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          >
            <form onSubmit={handleSubmit} className="rounded-2xl p-8 backdrop-blur-md"
                  style={{
                    backgroundColor: 'rgba(12, 12, 13, 0.9)',
                    borderColor: 'rgba(255, 62, 92, 0.3)',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                  }}>
              <div className="space-y-6">
                <div>
                  <motion.label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium"
                    style={{ color: 'var(--snow-white)' }}
                    whileHover={{ color: 'var(--cyan-mist)' }}
                  >
                    Your Name
                  </motion.label>
                  <CyberInput
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <motion.label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                    style={{ color: 'var(--snow-white)' }}
                    whileHover={{ color: 'var(--cyan-mist)' }}
                  >
                    Email Address
                  </motion.label>
                  <CyberInput
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <motion.label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium"
                    style={{ color: 'var(--snow-white)' }}
                    whileHover={{ color: 'var(--cyan-mist)' }}
                  >
                    Subject
                  </motion.label>
                  <CyberInput
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

                <div>
                  <motion.label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium"
                    style={{ color: 'var(--snow-white)' }}
                    whileHover={{ color: 'var(--cyan-mist)' }}
                  >
                    Message
                  </motion.label>
                  <CyberInput
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={6}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl cyber-button text-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
                  whileHover={{ 
                    scale: isSubmitting ? 1 : 1.02,
                    boxShadow: "0 0 30px var(--electric-coral)"
                  }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-obsidian-black border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Sparkles size={20} />
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}