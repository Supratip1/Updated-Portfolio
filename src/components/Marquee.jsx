import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Marquee() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    isMobile ? (
      <div className="w-full py-8 mb-8 rounded-t-3xl bg-[#004D43]">
        <div className="text text-[20vw] leading-none uppercase border-t-[1px] border-b-[1px] border-zinc-400 flex whitespace-nowrap overflow-hidden">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
            className="font-FoundersGroteskCondensed mb-[3vw] pr-4 text-white"
          >
            React ◦ Next.js ◦ GSAP ◦ Framer Motion ◦ TypeScript ◦ Tailwind CSS ◦ Three.js ◦ Vite ◦
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
            className="font-FoundersGroteskCondensed mb-[3vw] pr-4 text-white"
          >
            React ◦ Next.js ◦ GSAP ◦ Framer Motion ◦ TypeScript ◦ Tailwind CSS ◦ Three.js ◦ Vite ◦
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
            className="font-FoundersGroteskCondensed mb-[3vw] text-white"
          >
            React ◦ Next.js ◦ GSAP ◦ Framer Motion ◦ TypeScript ◦ Tailwind CSS ◦ Three.js ◦ Vite ◦
          </motion.h1>
        </div>
      </div>
    ) : (
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.1"
        className="w-full py-8 rounded-t-3xl bg-[#004D43]"
      >
        <div className="text text-[20vw] leading-none uppercase border-t-[1px] border-b-[1px] border-zinc-400 flex whitespace-nowrap overflow-hidden">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
            className="font-FoundersGroteskCondensed mb-[3vw] pr-4 text-white"
          >
            React ◦ Next.js ◦ GSAP ◦ Framer Motion ◦ TypeScript ◦ Tailwind CSS ◦ Three.js ◦ Vite ◦
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
            className="font-FoundersGroteskCondensed mb-[3vw] pr-4 text-white"
          >
            React ◦ Next.js ◦ GSAP ◦ Framer Motion ◦ TypeScript ◦ Tailwind CSS ◦ Three.js ◦ Vite ◦
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
            className="font-FoundersGroteskCondensed mb-[3vw] text-white"
          >
            React ◦ Next.js ◦ GSAP ◦ Framer Motion ◦ TypeScript ◦ Tailwind CSS ◦ Three.js ◦ Vite ◦
          </motion.h1>
        </div>
      </div>
    )
  );
}

export default Marquee;
