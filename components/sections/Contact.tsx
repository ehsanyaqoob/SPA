"use client";

import { motion } from "framer-motion";
import { Mail, Send, Github, Linkedin, MessageCircle, MapPin } from "lucide-react";
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
    <section id="contact" className="py-24 bg-gradient-to-t from-[#023E8A]/10 to-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16 space-y-4"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
            Get In Touch
          </h2>
          <div className="flex items-center justify-center gap-2 text-[#023E8A] text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">
            <div className="h-px w-6 bg-[#023E8A]/30" />
            <span>Available for new projects</span>
            <div className="h-px w-6 bg-[#023E8A]/30" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Direct Links */}
          <div className="md:col-span-4 space-y-10">
             <div className="space-y-6">
                <a href="mailto:ehsanyaqoob07@gmail.com" className="group flex flex-col gap-1 transition-all">
                   <p className="text-[10px] font-black uppercase tracking-widest text-[#023E8A]">Drop an email</p>
                   <p className="text-lg font-bold text-gray-300 group-hover:text-white transition-colors">ehsanyaqoob07@gmail.com</p>
                </a>
                <div className="flex flex-col gap-1">
                   <p className="text-[10px] font-black uppercase tracking-widest text-[#023E8A]">Current Status</p>
                   <p className="text-lg font-bold text-gray-300 flex items-center gap-2">
                       <MapPin className="w-4 h-4 text-green-500" /> Islamabad, Pakistan
                   </p>
                </div>
             </div>

             <div className="flex gap-4">
                <a href="https://github.com/ehsanyaqoob" target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/50 transition-all text-gray-400 hover:text-white">
                   <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/ehsany" target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/50 transition-all text-gray-400 hover:text-white">
                   <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://x.com/iamehsanyaqoob" target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/50 transition-all text-gray-400 hover:text-white">
                   <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.961H5.078z"></path></svg>
                </a>
             </div>
          </div>

          {/* Right Column: Minimalist Form */}
          <div className="md:col-span-8">
             <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-4">
                         <label className="text-[10px] font-black uppercase tracking-widest text-gray-600 block">Name</label>
                         <input 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange}
                            required
                            placeholder="Type here..."
                            className="w-full bg-transparent border-b border-white/10 pb-4 text-white text-lg font-medium focus:border-[#023E8A] outline-none transition-colors placeholder:text-gray-800"
                        />
                      </div>
                      <div className="space-y-4">
                         <label className="text-[10px] font-black uppercase tracking-widest text-gray-600 block">Email Address</label>
                         <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange}
                            required
                            placeholder="Email..."
                            className="w-full bg-transparent border-b border-white/10 pb-4 text-white text-lg font-medium focus:border-[#023E8A] outline-none transition-colors placeholder:text-gray-800"
                        />
                      </div>
                   </div>

                   <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-600 block">Message</label>
                      <textarea 
                         name="message" 
                         value={formData.message} 
                         onChange={handleChange}
                         required
                         rows={4}
                         placeholder="Have a project or opportunity? Let's talk."
                         className="w-full bg-transparent border-b border-white/10 pb-4 text-white text-lg font-medium focus:border-[#023E8A] outline-none transition-colors resize-none placeholder:text-gray-800"
                      />
                   </div>

                   <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-3 px-10 py-4 bg-white text-black rounded-2xl font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                   >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="w-4 h-4" />
                   </motion.button>
                </form>

                {/* Subtle Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#023E8A]/10 blur-[60px] pointer-events-none" />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}