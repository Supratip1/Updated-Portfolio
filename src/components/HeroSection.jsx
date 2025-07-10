import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";
import Lottie from "lottie-react";
import animationData from "../../public/Animation.json";

function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    isMobile ? (
      <div id="hero" className="container w-full bg-[#f8f8f6] text-[#212121] mb-8 py-8 min-h-screen">
        <div className="flex flex-col md:flex-row items-center justify-between py-[10vh] gap-8">
          <div className="textstructure w-full md:w-1/2">
            {[
              "I craft",
              "Interactive",
              "webapps",
            ].map((item, index) => (
              <div key={index} className="masker">
                <div className="w-fit flex items-center overflow-hidden">
                  {index === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "12vw" }}
                      transition={{
                        ease: [0.76, 0, 0.24, 1],
                        duration: 1,
                        delay: 1,
                      }}
                      className="w-[6vw] h-[12vh] sm:h-[14vh] sm:w-[4vw] sm:mt-5 mr-5 rounded-md overflow-hidden"
                    >
                      <img
                        src="/hero.jpg"
                        alt="Hero"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}
                  <h1
                    key={index}
                    className="font-FoundersGroteskCondensed sm:-mb-[1vw] md:text-[10vw] sm:text-[12vw] text-[16vw] uppercase whitespace-nowrap leading-none h-full"
                  >
                    {item}
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Lottie animationData={animationData} loop={true} className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]" />
          </div>
        </div>
        <div className="flex items-center justify-end border-t-[1px] border-zinc-800 py-5 font-NueueMontreal"></div>
      </div>
    ) : (
      <div
        id="hero"
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.8"
        className="container w-full bg-[#f8f8f6] text-[#212121] min-h-screen"
      >
        <div className="flex flex-col md:flex-row items-center justify-between py-[10vh] gap-8">
          <div className="textstructure w-full md:w-1/2">
            {[
              "I craft",
              "Interactive",
              "webapps",
            ].map((item, index) => (
              <div key={index} className="masker">
                <div className="w-fit flex items-center overflow-hidden">
                  {index === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "12vw" }}
                      transition={{
                        ease: [0.76, 0, 0.24, 1],
                        duration: 1,
                        delay: 1,
                      }}
                      className="w-[6vw] h-[12vh] sm:h-[14vh] sm:w-[4vw] sm:mt-5 mr-5 rounded-md overflow-hidden"
                    >
                      <img
                        src="/hero.jpg"
                        alt="Hero"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}
                  <h1
                    key={index}
                    className="font-FoundersGroteskCondensed sm:-mb-[1vw] md:text-[10vw] sm:text-[12vw] text-[16vw] uppercase whitespace-nowrap leading-none h-full"
                  >
                    {item}
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Lottie animationData={animationData} loop={true} className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]" />
          </div>
        </div>
        <div className="flex items-center justify-end border-t-[1px] border-zinc-800 py-5 font-NueueMontreal"></div>
      </div>
    )
  );
}

export default HeroSection;
