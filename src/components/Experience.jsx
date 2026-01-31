import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'ShrigSolutions',
      role: 'Mobile App Developer',
      period: '2023 - Present',
      description: [
        'Designing and deploying cross-platform apps using Flutter/Dart.',
        'Conducting code reviews and managing CI/CD pipelines.',
        'Implementing complex state management solutions.'
      ]
    },
    {
      company: 'KIKO Solutions Pvt. Ltd',
      role: 'Mobile App Developer',
      period: '2021 - 2022',
      description: [
        'Developed UI components following strict workflows.',
        'Managed code reviews and testing cycles.',
        'Collaborated with backend teams for API integration.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          Work <span className="neon-text">Experience</span>
        </motion.h2>

        <div className="space-y-12 relative before:content-[''] before:absolute before:left-4 md:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-neon-blue before:to-neon-purple before:opacity-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-neon-blue rounded-full shadow-[0_0_10px_theme(colors.neon.blue)] z-10" />

              {/* Content */}
              <div className="w-full md:w-[calc(50%-2rem)] ml-12 md:ml-0">
                <div className="glass-card p-6 p-8 relative overflow-hidden group hover:bg-white/10 transition-colors">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Briefcase size={80} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <h4 className="text-neon-teal font-medium mb-4">{exp.company}</h4>
                  <p className="text-sm text-gray-400 mb-6 bg-white/5 inline-block px-3 py-1 rounded-full">
                    {exp.period}
                  </p>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-neon-purple rounded-full shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
