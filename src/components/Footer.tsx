import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>

      {/* Animated Particles */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
      >
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 15, 0],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-3xl font-extrabold text-indigo-400 mb-2">Supratip</h3>
            <p className="text-gray-400 text-lg">Building digital experiences</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-end space-x-6">
            <a
              href="https://github.com/Supratip1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/supratip/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/Supratip13"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="mailto:supratipbhattacharya2@gmail.com"
              className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p className="text-sm">
            © {new Date().getFullYear()} Supratip. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
