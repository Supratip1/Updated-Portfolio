import React from 'react';
import { motion } from "framer-motion";
import { 
  SiReact, 
  SiNodedotjs, 
  SiPostgresql, 
  SiDocker, 
  SiJavascript, 
  SiFigma 
} from "react-icons/si";
import type { IconType } from 'react-icons';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Skills data
const skills = [
  {
    category: "Frontend Development",
    icon: SiReact,
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"],
  },
  {
    category: "Backend Development",
    icon: SiNodedotjs,
    skills: ["Node.js", "Python", "REST APIs"],
  },
  {
    category: "Database",
    icon: SiPostgresql,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
  },
  {
    category: "DevOps",
    icon: SiDocker,
    skills: ["Docker", "AWS", "CI/CD", "Linux", "Git"],
  },
  {
    category: "Programming Languages",
    icon: SiJavascript,
    skills: ["JavaScript", "TypeScript", "Python", "C++"],
  },
  {
    category: "Design",
    icon: SiFigma,
    skills: ["Figma", "UI/UX", "Responsive Design"],
  },
] as const;

// SkillCard Component
interface SkillCardProps {
  category: string;
  Icon: IconType;
  skills: readonly string[];
}

function SkillCard({ category, Icon, skills }: SkillCardProps) {
  return (
    <motion.div
      className="relative w-full h-64 group perspective"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full bg-white p-8 rounded-2xl shadow-lg backface-hidden">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center mb-6 shadow-md mx-auto">
            <Icon className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{category}</h3>
          <p className="text-gray-600 text-center text-sm">Hover to explore skills</p>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-600 to-purple-600 p-8 rounded-2xl shadow-lg [transform:rotateY(180deg)] backface-hidden">
          <div className="flex flex-wrap gap-2 justify-center items-center h-full">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Skills Section Component
function Skills() {
  return (
    <section id ="skills"className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {skills.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
            >
              <SkillCard
                category={category.category}
                Icon={category.icon}
                skills={category.skills}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Skills />
    </div>
  );
}

export default App;