import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 relative bg-dark-surface/30">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 text-center border-neon-blue/20"
        >
          <div className="inline-block p-4 rounded-full bg-neon-blue/10 mb-6 text-neon-blue">
            <GraduationCap size={48} />
          </div>

          <h2 className="text-3xl font-bold mb-8">Education</h2>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">Bachelor of Science in Information Technology</h3>
            <p className="text-neon-teal text-lg">CT Institute of Management of Technology</p>
            <p className="text-gray-400 font-mono">2017 - 2020</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
