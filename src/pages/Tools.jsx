import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layout, Server, Database, Cpu, 
  Sparkles, ArrowRight 
} from 'lucide-react';

const Tools = () => {
  const toolCategories = [
    {
      id: "frontend",
      title: "Frontend",
      icon: <Layout className="text-cyan-400" size={28} />,
      borderColor: "border-cyan-500/20",
      glow: "from-cyan-500/10 to-transparent",
      size: "md:col-span-7", // 70% Width
      gridCols: "grid-cols-2 sm:grid-cols-4",
      skills: [
        { name: "HTML & CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      ]
    },
    {
      id: "backend",
      title: "Backend",
      icon: <Server className="text-rose-500" size={28} />,
      borderColor: "border-rose-500/20",
      glow: "from-rose-500/10 to-transparent",
      size: "md:col-span-3", // 30% Width
      gridCols: "grid-cols-2",
      skills: [
        { name: "Node JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      ]
    },
    {
      id: "database",
      title: "Database",
      icon: <Database className="text-purple-500" size={28} />,
      borderColor: "border-purple-500/20",
      glow: "from-purple-500/10 to-transparent",
      size: "md:col-span-3", // 30% Width
      gridCols: "grid-cols-2",
      skills: [
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      ]
    },
    {
      id: "ai",
      title: "AI & Ecosystem",
      icon: <Cpu className="text-amber-500" size={28} />,
      borderColor: "border-amber-500/20",
      glow: "from-amber-500/10 to-transparent",
      size: "md:col-span-7", // 70% Width
      gridCols: "grid-cols-2 sm:grid-cols-4",
      skills: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Claude AI", logo: "https://cdn.simpleicons.org/claude/D97757" },
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white tracking-tighter"
          >
            Tech <span className="text-blue-500">Arsenal.</span>
          </motion.h1>
        </div>

        {/* --- ASYMMETRIC GRID (10 Columns) --- */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6 lg:gap-8">
          {toolCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`${cat.size} group relative bg-slate-900/10 border border-slate-800/50 rounded-[3.5rem] p-10 backdrop-blur-3xl overflow-hidden transition-all duration-500 hover:border-white/20 shadow-2xl`}
            >
              {/* Shine effect on hover */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-20 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />

              {/* Title & Icon */}
              <div className="flex items-center justify-between mb-12 relative z-10">
                <div className="flex items-center gap-5">
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                    {cat.icon}
                  </div>
                  <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter">{cat.title}</h2>
                </div>
                <ArrowRight size={24} className="text-slate-700 group-hover:text-white transition-all" />
              </div>

              {/* Tools List */}
              <div className={`grid ${cat.gridCols} gap-8 relative z-10`}>
                {cat.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-[2.5rem] bg-white p-4 shadow-xl flex items-center justify-center transition-all group-hover:rounded-2xl">
                      <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-[10px] font-black text-slate-500 group-hover:text-white transition-colors uppercase text-center tracking-widest">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;