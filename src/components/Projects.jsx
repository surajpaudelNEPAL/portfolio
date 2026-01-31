import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'FishTechy',
      category: 'AI Fishing App',
      description: 'Revolutionary fish measurement tool using smartphone & "Proof Ball" technology. Features "SMART Log" for automatic catch tracking and "Measuring for Science" citizen initiative. Privacy-focused.',
      tags: ['Flutter', 'AI/ML', 'Citizen Science', 'Data Privacy'],
      link: 'https://fishtechy.com/'
    },
    {
      title: 'Aquabuildr',
      category: 'AI Aquarium Platform',
      description: 'Intelligent algorithm for aquarium enthusiasts that suggests compatible fish based on tank parameters (pH, Temp, Size). Features custom tank builder and expert care guides.',
      tags: ['Flutter', 'Algorithms', 'Smart Tools', 'Community'],
      link: 'https://aquabuildr.com/'
    },
    {
      title: 'Saro',
      category: 'Digital Scrapbook',
      description: 'A fully customizable digital scrapbook theme with calendar views for sharing memories and events.',
      tags: ['Flutter', 'Dart', 'UI Design'],
      link: '#'
    },
    {
      title: 'Native Packages',
      category: 'Open Source',
      description: 'Swift packages for Geofencing (Area detection) and Activity Detection (Walking, Running, Driving).',
      tags: ['Swift', 'Native Modules', 'iOS'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="neon-text">Projects</span></h2>
          <p className="text-gray-400">Some of my recent work and experiments.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <Layers className="text-neon-blue" size={24} />
                  </div>
                  <div className="flex gap-4">
                    <a href={project.link} className="text-gray-400 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.link} className="text-gray-400 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-neon-blue transition-colors">{project.title}</h3>
                <p className="text-sm text-neon-teal mb-4 font-medium">{project.category}</p>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/5 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
