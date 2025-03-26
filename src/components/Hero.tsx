import React, { useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../Heroanimation.json'; // Adjust the path

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12 } }
};

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-white dark:bg-gray-950 px-6 font-inter"
    >
      {/* Text & Lottie container */}
      <motion.div 
        className="container max-w-5xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16"
      >
        {/* Left Side (Text Content) */}
        <motion.div 
          className="space-y-8 md:space-y-10 max-w-xl text-left"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight font-playfair"
            variants={fadeIn}
          >
            Where AI Meets <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 font-poppins">
              Intelligent Interfaces
            </span>
          </motion.h1>

          {/* Frontend-relevant info */}
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg font-inter"
            variants={fadeIn}
          >
            I build interactive, high-performance user interfaces using modern web technologies.
            My focus is on creating seamless, responsive, and accessible front-end experiences.
          </motion.p>

          {/* Worked at */}
          <motion.div
            className="flex items-center justify-start gap-4"
            variants={fadeIn}
          >
            <span className="text-base md:text-lg text-gray-600 dark:text-gray-300 font-medium">
              Worked at:
            </span>
            {/* TCS logo */}
            <img
              src="/tcs.jpg"
              alt="TCS"
              className="h-8 w-auto"
            />
            {/* News Corp logo */}
            <img
              src="/newscorp.png"
              alt="News Corp"
              className="h-8 w-auto"
            />
          </motion.div>

          {/* Call-to-action buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-start gap-6 pt-6"
            variants={fadeIn}
          >
            <motion.a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 transition-all duration-300 sm:min-w-[180px] font-poppins"
              whileHover={{ scale: 1.03, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View Works <ArrowRight className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="#about"
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white font-medium flex items-center justify-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-750 transition-all duration-300 sm:min-w-[180px] font-poppins"
              whileHover={{ scale: 1.03, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play className="w-6 h-6" /> Try AI SaaS Products
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side (Lottie Animation) - Moves Down in Mobile */}
        {/* Right Side (Lottie Animation) - Move Further Down in Mobile */}
<motion.div 
  className="w-40 sm:w-60 md:w-[400px] lg:w-[600px] flex justify-center mt-20 sm:mt-0"
>
  <Lottie animationData={animationData} loop={true} />
</motion.div>

      </motion.div>
    </section>
  );
}
