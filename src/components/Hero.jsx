import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px]" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-neon-teal font-medium tracking-wide mb-4">SOFTWARE ENGINEER</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="neon-text">Suraj Paudel</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Crafting production-ready <span className="text-white">hybrid applications</span> with 4+ years of experience in Flutter and Dart. Focused on user satisfaction, seamless performance, and clean code.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="#projects"
              className="group bg-white text-black px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-neon-blue hover:text-black transition-all duration-300"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex gap-6">
              <a
                href="https://github.com/surajNEPAL"
                target="_blank"
                rel="noreferrer"
                className="p-3 glass-card hover:bg-white/10 transition-colors text-gray-300 hover:text-white"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 glass-card hover:bg-white/10 transition-colors text-gray-300 hover:text-white"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
