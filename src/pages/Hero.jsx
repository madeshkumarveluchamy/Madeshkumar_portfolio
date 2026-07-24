import React from 'react';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.webp';

const Hero = () => {
  const imagePath = profilePic;

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.2 } }
  };

  return (
    // Background: Clean white in Light, near-black in Dark. No Heavy Grains/Aurora
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 py-12 md:px-10 overflow-hidden bg-white dark:bg-[#030712]">
      
      {/* --- SUBTLE BACKGROUND ELEMENTS (Minimal & Clean) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft, low-opacity glow effect behind the text for premium look */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-10 bg-blue-300 blur-[100px] dark:opacity-[0.05]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 bg-indigo-400 blur-[130px] dark:opacity-[0.05]"></div>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative w-full max-w-5xl space-y-8 md:space-y-12 z-10"
      >
        {/* --- PROFILE IMAGE WITH SINGLE ROTATING CIRCLE --- */}
        <motion.div
          variants={fadeInUp}
          className="relative flex justify-center items-center"
        >
          {/* Subtle Glow behind image */}
          <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full scale-75"></div>

          {/* SINGLE ROTATING CIRCLE WITH TERMINAL SYMBOLS */}
          <motion.div
            className="absolute z-0"
            animate={{ rotate: 360 }}
            transition={{
              duration: 15, // Speed of rotation
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* Minimal, lighter dashed line */}
            <div className="relative border border-dashed border-blue-500/20 rounded-full w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 flex justify-center items-center">
              
              {/* Terminal Icon at Top */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white dark:bg-[#030712] px-1.5 py-0.5 z-20">
                <Terminal className="text-blue-500/70" size={22} />
              </div>
              
              {/* Closing Symbol at Bottom */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-[#030712] px-1.5 py-0.5 z-20">
                <span className="text-blue-500/70 font-mono font-bold text-lg">{`/>`}</span>
              </div>
            </div>
          </motion.div>

          {/* ACTUAL PROFILE IMAGE */}
          <img 
            src={imagePath} 
            alt="Dheena" 
            className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 md:border-8 border-white dark:border-slate-800 shadow-xl z-10"
          />
        </motion.div>

        {/* --- TEXT CONTENT --- */}
        <motion.div variants={fadeInUp} className="space-y-4 md:space-y-6">
          {/* Subtle Command line label */}
          <h2 className="text-blue-600/80 dark:text-blue-400 font-mono font-medium tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs sm:text-sm md:text-base">
            $ whoami --dheena
          </h2>

          {/* Heading - Vibrant Gradient applied only to accented part */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
            Full Stack <br className="hidden sm:block" />
            {/* UPDATE: Radiant Vibrant Gradient Text with Blue and Cyan */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500">
              Web Developer
            </span>
          </h1>

          <p className="max-w-xs sm:max-w-md md:max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
            Final year student specializing in the MERN stack. Building career guidance 
            platforms and automotive solutions with modern tech.
          </p>
        </motion.div>

        {/* --- SOCIAL LINKS --- */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-wrap gap-4 sm:gap-6 mt-6 justify-center"
        >
          {[
            { icon: <Github size={24} />, color: "text-slate-900 dark:text-white", link: "https://github.com/madeshkumarveluchamy?tab=overview&from=2026-03-01&to=2026-03-24" },
            { icon: <Linkedin size={24} />, color: "text-blue-600", link: "https://www.linkedin.com/in/madeshkumarveluchamy1111" },
            { icon: <Mail size={24} />, color: "text-red-500", link: "mailto:madeshkumarveluchamy@gmail.com" }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 sm:p-4 bg-white dark:bg-slate-900/40 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800/80 ${item.color} z-20 transition-colors`}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;