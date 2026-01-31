import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const categories = [
    {
      title: "Languages",
      skills: ["Dart", "Swift", "C++", "JavaScript"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frameworks & UI",
      skills: ["Flutter", "React", "Tailwind CSS", "Framer Motion"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools & DevOps",
      skills: ["Figma", "Postman", "Shorebird", "GitHub Actions", "Swagger"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Backend & Data",
      skills: ["Firebase", "Drift", "Isar", "Supabase", "REST APIs"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="tech" className="py-20 relative bg-dark-surface/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech <span className="neon-text">Arsenal</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 hover:border-white/20 transition-all duration-300"
            >
              <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${cat.color} bg-clip-text text-transparent inline-block`}>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white/5 rounded-md text-sm text-gray-300 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
