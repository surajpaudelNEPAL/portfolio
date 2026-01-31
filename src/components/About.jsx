import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Terminal, Cpu } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Smartphone className="text-neon-blue" />, label: 'Mobile Apps', value: '4+ Years' },
    { icon: <Code2 className="text-neon-purple" />, label: 'Frameworks', value: 'Flutter/Dart' },
    { icon: <Terminal className="text-neon-teal" />, label: 'Native Dev', value: 'Swift/iOS' },
    { icon: <Cpu className="text-pink-500" />, label: 'Architecture', value: 'Clean Code' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About <span className="neon-text">Me</span></h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
                I am a seasoned software engineer based in <span className="text-white font-medium">Kathmandu, Nepal</span>.
                I specialize in designing, developing, and deploying cross-platform mobile applications that stand out.
              </p>
              <p>
                My passion lies in delivering on time, adhering to strict quality standards in CI/CD pipelines, and creating
                user-centric experiences. Whether it's complex state management or pixel-perfect UI implementation,
                I strive for excellence in every line of code.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors"
                >
                  <div className="mb-3 p-3 bg-white/5 rounded-full">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core Competencies Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 mt-12 border border-white/5 bg-gradient-to-r from-white/5 to-transparent"
        >
          <h3 className="text-xl font-bold mb-6 text-center md:text-left">Core Competencies</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {['Hybrid App Development', 'UI/UX Implementation', 'Code Reviews', 'Native Package Development', 'CI/CD Pipelines'].map((skill, i) => (
              <span key={i} className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 hover:border-neon-blue/50 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
