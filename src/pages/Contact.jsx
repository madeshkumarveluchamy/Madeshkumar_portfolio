import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Linkedin, Github, Send, 
  MapPin, MessageSquare, Sparkles, CheckCircle2 
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // EmailJS or Backend integration inga varum
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' }); // Form clear panrom
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactDetails = [
    { 
      icon: <Mail className="text-blue-400" />, 
      label: "Email Me", 
      value: "madeshkumarveluchamy@gmail.com", 
      link: "mailto:madeshkumarveluchamy@gmail.com",
      color: "hover:border-blue-500/50"
    },
    {  
      icon: <Linkedin className="text-cyan-400" />, 
      label: "LinkedIn", 
      value: "linkedin.com/in/madeshkumarveluchamy1111", 
      link: "https://www.linkedin.com/in/madeshkumarveluchamy1111",
      color: "hover:border-cyan-500/50"
    },
    { 
      icon: <MapPin className="text-rose-400" />, 
      label: "Location", 
      value: "Coimbatore, Tamil Nadu", 
      link: "#",
      color: "hover:border-rose-500/50"
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/5 blur-[100px] md:blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/5 blur-[100px] md:blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-12 md:mb-20 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/50 border border-slate-800 text-blue-400 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] mb-4 md:mb-6"
          >
            <Sparkles size={14} /> Get In Touch
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter mb-4"
          >
            Let's <span className="text-blue-500">Connect.</span>
          </motion.h1>
          <p className="text-slate-500 max-w-lg text-base md:text-lg leading-relaxed mx-auto lg:mx-0">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* --- LEFT: CONTACT INFO CARDS --- */}
          <div className="lg:col-span-5 space-y-4 md:space-y-6">
            {contactDetails.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ x: 10 }}
                className={`flex items-center gap-4 md:gap-6 p-6 md:p-8 bg-slate-900/20 border border-slate-800/50 rounded-[2rem] md:rounded-[2.5rem] backdrop-blur-xl transition-all duration-300 ${item.color} group overflow-hidden`}
              >
                <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-slate-950 border border-slate-800 group-hover:scale-110 transition-transform shrink-0">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">{item.label}</p>
                  <p className="text-white font-bold tracking-tight text-sm md:text-base truncate">{item.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Availability Status Card */}
            <div className="p-6 md:p-8 bg-blue-500/5 border border-blue-500/20 rounded-[2rem] md:rounded-[2.5rem]">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-green-400">Available for Hire</span>
                </div>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    Targeting roles in <b>Full Stack Development</b> & <b>AI Engineering</b>. Let's build something extraordinary together.
                </p>
            </div>
          </div>

          {/* --- RIGHT: INTERACTIVE CONTACT FORM --- */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="group bg-slate-900/10 border border-slate-800/50 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-14 backdrop-blur-3xl shadow-2xl relative overflow-hidden"
            >
              {isSubmitted ? (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center text-center py-16 md:py-20"
                >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-6">
                        <CheckCircle2 size={32} className="text-green-500" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-2">Message Sent!</h2>
                    <p className="text-slate-500 text-sm md:text-base">Thanks for reaching out, I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    {/* Name Input */}
                    <div className="space-y-2 md:space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        placeholder="John Doe"
                        className="w-full bg-slate-950/50 border border-slate-800 rounded-xl md:rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-slate-700 font-medium text-sm md:text-base"
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    {/* Email Input */}
                    <div className="space-y-2 md:space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        placeholder="john@example.com"
                        className="w-full bg-slate-950/50 border border-slate-800 rounded-xl md:rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-slate-700 font-medium text-sm md:text-base"
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Your Message</label>
                    <textarea 
                      rows="4" 
                      required
                      value={formData.message}
                      placeholder="I'd like to talk about a project..."
                      className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl md:rounded-[2rem] px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-slate-700 font-medium resize-none text-sm md:text-base"
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button 
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 md:py-5 rounded-xl md:rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] text-xs md:text-sm"
                  >
                    Send Message <Send size={18} />
                  </motion.button>
                </form>
              )}

              {/* Shine effect parent-la 'group' iruntha thaan work agum */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
            </motion.div>
          </div>
        </div>

        {/* --- FOOTER --- */}
        <div className="mt-20 md:mt-32 pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-slate-600 text-[10px] font-mono uppercase tracking-[0.2em] text-center">© 2026 MadeshKumarVeluchamy. All Rights Reserved.</p>
            <div className="flex gap-8">
                <a href="https://github.com/madeshkumarveluchamy?tab=overview&from=2026-03-01&to=2026-03-24" className="text-slate-500 hover:text-white transition-colors"><Github size={20} /></a>
                <a href="https://www.linkedin.com/in/madeshkumarveluchamy1111" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
                <a href="mailto:madeshkumarveluchamy@gmail.com" className="text-slate-500 hover:text-white transition-colors"><MessageSquare size={20} /></a>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;