import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Server, Database, Cpu, Lightbulb, Layout, Code, Terminal, ArrowRight } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState(null);


  const sections = [
    { id: "frontend", num: "01", title: "FRONTEND", icon: <Globe className="w-5 h-5 md:w-8 md:h-8"/>, color: "bg-[#00b4d8]", angle: 180 },
    { id: "backend", num: "02", title: "BACKEND", icon: <Server className="w-5 h-5 md:w-8 md:h-8"/>, color: "bg-[#ff0054]", angle: 270 },
    { id: "database", num: "03", title: "DATABASE", icon: <Database className="w-5 h-5 md:w-8 md:h-8"/>, color: "bg-[#7209b7]", angle: 0 },
    { id: "ai", num: "04", title: "AI / ML", icon: <Cpu className="w-5 h-5 md:w-8 md:h-8"/>, color: "bg-[#ff9f1c]", angle: 90 },
  ];

  return (
    <section className="py-10 md:py-24 px-4 bg-[#020617] overflow-hidden min-h-screen flex flex-col items-center justify-center">
      
      {/* --- 1. YOUR ORIGINAL ORBIT DESIGN (Strictly Unchanged) --- */}
      <div className="relative w-full max-w-7xl aspect-square md:h-[900px] flex items-center justify-center">
        <div className="absolute z-0 w-[88vw] h-[88vw] max-w-[750px] max-h-[750px] border border-slate-800/60 rounded-full pointer-events-none shadow-[0_0_50px_rgba(30,41,59,0.2)]" />

        <motion.div 
          className="relative w-full h-full flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {/* CENTER HUB */}
          <div className="relative z-20 w-[110px] h-[110px] md:w-64 md:h-64 flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full -rotate-45 scale-110" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#7209b7" strokeWidth="10" strokeDasharray="70.6 212.4" />
              <circle cx="50" cy="50" r="45" fill="none" stroke="#ff9f1c" strokeWidth="10" strokeDasharray="70.6 212.4" strokeDashoffset="-70.6" />
              <circle cx="50" cy="50" r="45" fill="none" stroke="#00b4d8" strokeWidth="10" strokeDasharray="70.6 212.4" strokeDashoffset="-141.2" />
              <circle cx="50" cy="50" r="45" fill="none" stroke="#ff0054" strokeWidth="10" strokeDasharray="70.6 212.4" strokeDashoffset="-211.8" />
            </svg>
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 md:inset-8 bg-[#030712] rounded-full flex flex-col items-center justify-center border border-slate-800 shadow-[inset_0_0_30px_rgba(59,130,246,0.1)] z-30"
            >
              <Lightbulb className="w-6 h-6 md:w-10 md:h-10 text-blue-500 mb-1 animate-pulse" />
              <span className="text-[10px] md:text-[13px] font-black text-slate-300 uppercase tracking-[0.2em] text-center leading-tight">
                MERN <br /> STACK
              </span>
            </motion.div>
          </div>

          {/* ORBITING CARDS */}
          {sections.map((item, idx) => (
            <div
              key={idx}
              className="absolute cursor-pointer z-50"
              style={{ transform: `rotate(${item.angle}deg) translateX(min(38vw, 320px)) rotate(-${item.angle}deg)` }}
        
            >
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="flex flex-col items-center gap-3 md:gap-4 group"
              >
                <div className="relative">
                  <motion.div 
                    whileHover={{ scale: 1.15 }}
                    className={`w-14 h-14 md:w-24 md:h-24 rounded-2xl md:rounded-[2rem] flex items-center justify-center text-white shadow-2xl ${item.color} relative overflow-hidden`}
                  >
                    {item.icon}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-white/20 -skew-y-12" />
                  </motion.div>
                  <span className="absolute -top-1 -right-1 bg-[#0f172a] text-white text-[9px] md:text-[11px] font-bold px-2 py-0.5 rounded-md border border-slate-700 shadow-xl">
                    {item.num}
                  </span>
                </div>
                <div className={`bg-[#0f172a] border ${activeTab === item.id ? 'border-white' : 'border-slate-800'} px-3 md:px-6 py-1.5 rounded-full backdrop-blur-xl group-hover:border-white/30 transition-all shadow-2xl`}>
                  <h3 className="text-white font-bold text-[8px] md:text-[11px] tracking-[0.25em] uppercase whitespace-nowrap">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- 2. INFOGRAPHIC ROADMAP (Sequential Flow) --- */}
      {/* --- 2. DETAILED INFOGRAPHIC ROADMAP --- */}

    </section>
  );
};

export default Skills;