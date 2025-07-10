import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";
import Lottie from "lottie-react";
import animationData from "../../public/Animation.json";

function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const unicornRef = useRef(null);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Inject UnicornStudio script for all devices
  useEffect(() => {
    if (unicornRef.current && !window.UnicornStudio) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.innerHTML = `!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.27/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();`;
      unicornRef.current.appendChild(script);
    }
  }, []);



  return (
    <div
      id="hero"
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.5"
      className="container w-full bg-[#f8f8f6] text-[#212121] min-h-screen flex flex-col items-center pt-8"
      style={{ marginTop: '0px' }}
    >
      <div className="w-full flex flex-col items-center mb-4 mt-0">
        <h1 className="font-NueueMontreal text-3xl md:text-5xl text-center font-bold mb-2" style={{ fontFamily: 'NeueMontreal, sans-serif' }}>
          Building Interactive Web Experiences
        </h1>
        <p className="font-NueueMontreal text-lg md:text-2xl text-center max-w-3xl text-[#444]" style={{ fontFamily: 'NeueMontreal, sans-serif' }}>
          I design and engineer high-performance, visually striking web applications that engage users and elevate brands. Explore my work below.
        </p>
      </div>
      <div ref={unicornRef} data-scroll data-scroll-speed="0" className="rounded-3xl overflow-hidden shadow-xl w-full flex justify-center" style={{ maxWidth: '100%', maxHeight: '80vh' }}>
        <div data-us-project="mLhWHvsaOqs7ezTPMacw" style={{ width: '100vw', maxWidth: '100%', height: '60vw', maxHeight: '80vh' }}></div>
      </div>
    </div>
  );
}

export default HeroSection;
