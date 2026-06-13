"use client";

import { motion } from "framer-motion";
import { Mail, Send, Github, Linkedin, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-4">
            Contact
          </h2>
          <div className="w-24 h-1.5 bg-blue-500 rounded-full" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* LEFT COLUMN: Info & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Tile 1: Status */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 relative overflow-hidden group hover:border-white/20 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-50" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                  <span className="text-green-400 font-bold uppercase tracking-widest text-xs">Available for new projects</span>
                </div>
                <h3 className="text-3xl font-black text-white tracking-tight mb-2">Let&apos;s talk.</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Currently accepting freelance opportunities and full-time roles. If you have a project that needs to be built, I&apos;d love to hear about it.
                </p>
              </div>
            </motion.div>

            {/* Tile 2: Direct Email */}
            <motion.a 
              href="mailto:ehsanyaqoob07@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col justify-center relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500 cursor-pointer"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                <ArrowRight className="w-6 h-6 text-blue-400" />
              </div>
              <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-1">Direct Line</p>
              <h4 className="text-lg md:text-xl font-bold text-white tracking-tight">ehsanyaqoob07@gmail.com</h4>
            </motion.a>

            {/* Tile 3: Social Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <a 
                href="https://github.com/ehsanyaqoob" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-all duration-300 group"
              >
                <Github className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/ehsany" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center gap-3 hover:bg-blue-500/10 hover:border-blue-500/20 transition-all duration-300 group"
              >
                <Linkedin className="w-8 h-8 text-gray-400 group-hover:text-blue-400 transition-colors" />
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-blue-400 transition-colors">LinkedIn</span>
              </a>
            </motion.div>
            
          </div>

          {/* RIGHT COLUMN: The Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7 p-8 md:p-14 rounded-[2.5rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group"
          >
            {/* Subtle glow behind form */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] pointer-events-none" />

            <div className="relative z-10 mb-12">
              <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
                Let&apos;s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">exceptional.</span>
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group/input">
                  <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={formData.name} 
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white text-lg font-medium focus:border-blue-500 outline-none transition-colors peer placeholder-transparent"
                    placeholder="John Doe"
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-0 top-4 text-gray-500 text-lg font-medium transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-400 peer-focus:font-bold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-4 peer-valid:text-xs peer-valid:text-gray-400 peer-valid:font-bold peer-valid:tracking-widest peer-valid:uppercase cursor-text"
                  >
                    Your Name
                  </label>
                </div>

                <div className="relative group/input">
                  <input 
                    type="email" 
                    name="email" 
                    id="email"
                    value={formData.email} 
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white text-lg font-medium focus:border-blue-500 outline-none transition-colors peer placeholder-transparent"
                    placeholder="john@example.com"
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-0 top-4 text-gray-500 text-lg font-medium transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-400 peer-focus:font-bold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-4 peer-valid:text-xs peer-valid:text-gray-400 peer-valid:font-bold peer-valid:tracking-widest peer-valid:uppercase cursor-text"
                  >
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative group/input pt-4">
                <textarea 
                  name="message" 
                  id="message"
                  value={formData.message} 
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white text-lg font-medium focus:border-blue-500 outline-none transition-colors peer placeholder-transparent resize-none"
                  placeholder="Tell me about your project..."
                />
                <label 
                  htmlFor="message" 
                  className="absolute left-0 top-8 text-gray-500 text-lg font-medium transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-400 peer-focus:font-bold peer-focus:tracking-widest peer-focus:uppercase peer-valid:top-0 peer-valid:text-xs peer-valid:text-gray-400 peer-valid:font-bold peer-valid:tracking-widest peer-valid:uppercase cursor-text"
                >
                  Message Details
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 bg-white text-black rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] disabled:opacity-50 disabled:hover:scale-100"
              >
                {isSubmitting ? "Transmitting..." : "Send Message"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}