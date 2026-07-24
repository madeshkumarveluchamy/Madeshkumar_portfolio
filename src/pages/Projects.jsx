import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import { Github, ExternalLink, Briefcase } from 'lucide-react';
import unimaxxlogo from "../assets/unimaxx.webp"
import profilepicture from "../assets/goodlook.webp"
import brighttruckbackground from "../assets/marslogo.webp"

const Projects = () => {
  const projectsData = [
    {
      title: "unimaxx architects and interiors",
      stack: ["React JS","Bootstrap"],
      desc: "Real-time Kanban board for project management.",
      image: unimaxxlogo,
      github: "https://github.com/madeshkumarveluchamy/headphone-hub",
      live: "https://unimaxxarchitects.com/"
    },
    {
      title: "Good Looks Home Decor",
      stack: ["React JS","Bootstrap"],
      desc: "Intelligent media gallery with AI auto-tagging.",
      image: profilepicture,
      github: "#",
      live: "https://goodlookhomedecor.com/"
    },
    {
      title: "Mars Automotive Designers",
      stack: ["React JS","Bootstrap"],
      desc: "Live cryptocurrency dashboard with real-time charts.",
      image: brighttruckbackground,
      github: "#",
      live: "https://marsautomotivedesigners.com/"
    }
  ];

  // Infinite Drag & Scroll-kaga data-va 6 times duplicate panrom
  const duplicatedProjects = [
    ...projectsData, ...projectsData, ...projectsData, 
    ...projectsData, ...projectsData, ...projectsData
  ];

  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      // 6 times duplicate panni irukom, so total width-a 6 aala divide panna original 1 set width kedaichidum
      setContentWidth(containerRef.current.scrollWidth / 6);
    }
  }, []);

  // Continuous Auto-Scroll & Seamless Wrap Logic
  useAnimationFrame(() => {
    if (!isDragging && !isHovered && contentWidth > 0) {
      let currentX = x.get();
      currentX -= 1; // Suthura speed (Increase panna fast aagum)

      // Seamless Infinite Loop Magic
      let newX = currentX % contentWidth;
      if (newX > 0) {
        newX -= contentWidth;
      }
      x.set(newX);
    }
  });

  return (
    <div className="min-h-screen bg-[#020617] py-24 overflow-hidden flex flex-col justify-center">
      
      {/* --- HEADER --- */}
      <div className="mb-16 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/50 border border-slate-800 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
        >
          <Briefcase size={14} /> My Creations
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
          Project <span className="text-blue-500">Gallery.</span>
        </h1>
      </div>

      {/* --- DRAGGABLE & AUTO-SCROLL CONTAINER --- */}
      <div className="relative flex w-full">
        {/* Hover pannum pothu stop aagum, Drag panna drag aagum */}
        <motion.div 
          ref={containerRef}
          style={{ x }}
          drag="x"
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex cursor-grab active:cursor-grabbing w-max"
        >
          {duplicatedProjects.map((proj, idx) => (
            // Cards-ku naduvula exact space maintain panna 'pr-8' add panni irukom
            <div key={idx} className="pr-8 shrink-0"> 
              <div className="w-[350px] md:w-[450px] group relative bg-slate-900/20 border border-slate-800 rounded-[3rem] p-6 backdrop-blur-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-500">
                
                {/* Image Section */}
                <div className="w-full h-52 rounded-[2rem] overflow-hidden mb-6 relative pointer-events-none">
                  <img src={proj.image} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                </div>

                {/* Title & Desc */}
                <div className="px-2 mb-6 pointer-events-none">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2 group-hover:text-blue-500 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                    {proj.desc}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 px-2 mb-8 pointer-events-none">
                  {proj.stack.map((tech, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-bold uppercase tracking-widest text-blue-400/70">
                      #{tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 px-2 relative z-10">
                  <a href={proj.github} className="p-3 rounded-full bg-slate-950 border border-slate-800 text-white hover:bg-blue-500 transition-all" target="_blank" rel="noopener noreferrer">
                    <Github size={18} />
                  </a>
                  <a href={proj.live} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-[10px] font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all" target="_blank" rel="noopener noreferrer">
                    Touch to View Site <ExternalLink size={14} />
                  </a>
                </div>

                {/* Decorative Glow */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/5 blur-[50px] group-hover:bg-blue-500/10 transition-all pointer-events-none" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- BOTTOM DECORATION --- */}
      <div className="mt-20 text-center">
        <p className="text-slate-600 text-[10px] font-mono tracking-widest uppercase animate-pulse">
          ← Drag or let it slide →
        </p>
      </div>

    </div>
  );
};

export default Projects;