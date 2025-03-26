import { motion } from "framer-motion";
import { useState } from "react";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const achievements = [
    { id: 1, metric: "4+", label: "Years Experience" },
    { id: 2, metric: "2K+", label: "LinkedIn Followers" },
    { id: 3, metric: "90%", label: "Task Completion Speed" },
    { id: 4, metric: "40%", label: "User Engagement Boost" }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-gray-50 opacity-50">
        <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
            backgroundSize: "cover",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Clean Minimal Text */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-4"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Innovating the Future of AI-Powered Web Development
        </motion.h2>

        <motion.p 
          className="text-lg md:text-xl text-center text-gray-500 max-w-3xl mx-auto mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Crafting exceptional frontend experiences powered by cutting-edge AI technology
        </motion.p>

        {/* About Me Section */}
        <motion.div
          className="rounded-3xl shadow-2xl overflow-hidden border border-gray-200 bg-white mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Screen Header Bar */}
          <div className="bg-gray-100 h-10 flex items-center px-4 border-b border-gray-200">
            <div className="flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-gray-300"></div>
              <div className="h-3 w-3 rounded-full bg-gray-300"></div>
              <div className="h-3 w-3 rounded-full bg-gray-300"></div>
            </div>
            <div className="mx-auto text-sm text-gray-500 font-medium">About Supratip Bhattacharya</div>
          </div>

          {/* About Me Content */}
          <div className="p-8">
            <motion.div 
              className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm mb-8"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">About Me</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm a <span className="font-bold text-gray-800">Software Development Engineer</span> specializing in high-performance, AI-integrated web applications that transform how users interact with technology.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My expertise spans <span className="font-semibold text-gray-800">React.js, TypeScript, Next.js</span>, and emerging AI technologies, enabling me to build solutions that are not just functional but revolutionary.
              </p>
            </motion.div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement.id}
                  className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm"
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  onHoverStart={() => setHoveredCard(achievement.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gray-100 rounded-xl z-0"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredCard === achievement.id ? 0.5 : 0,
                      scale: hoveredCard === achievement.id ? 1.05 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10">
                    <h3 className="font-extrabold text-3xl text-gray-800 mb-1">{achievement.metric}</h3>
                    <p className="text-gray-500">{achievement.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* SaaS Products Section */}
        <motion.h3
          className="text-3xl font-bold text-center text-gray-800 mb-8"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          My SaaS Products
        </motion.h3>

        {/* Kalvya AI Product Section */}
        <motion.div 
          className="rounded-xl overflow-hidden shadow-lg border border-gray-200 mb-8"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          whileHover={{ 
            y: -5,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="bg-white p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Kalvya AI</h3>
                <p className="text-gray-500">Your AI-powered development companion</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              Kalvya AI empowers developers to build sophisticated interfaces in minutes, turning complex concepts into production-ready code with just a few prompts.
            </p>

            {/* Video Component - Outside the screen container for better mobile viewing */}
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200 mb-6">
              <video 
                className="w-full h-auto max-w-full aspect-video rounded-lg" 
                controls 
                autoPlay 
                loop
                muted
                playsInline
              >
                <source src="/Kalvya.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <a 
              href="https://kalvya-ai.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block w-40 py-3 px-6 bg-blue-800 text-white font-medium rounded-lg text-center transition-all hover:bg-gray-700 shadow-sm"
            >
              Try Kalvya AI →
            </a>
          </div>
        </motion.div>

        {/* Placeholder for Future SaaS Products */}
        <motion.div 
          className="rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white bg-opacity-50"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          whileHover={{ 
            y: -5,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="p-8 flex flex-col items-center justify-center text-center">
            <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center shadow-sm mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">More Coming Soon</h3>
            <p className="text-gray-500 max-w-lg">
              Stay tuned for more innovative AI-powered SaaS products that will revolutionize how developers build and interact with web applications.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Adding Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ddd;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ccc;
        }
      `}</style>
    </section>
  );
}