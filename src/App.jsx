import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
// import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [showLoading, setShowLoading] = useState(true);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [locomotiveScroll, setLocomotiveScroll] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 1024;
      setIsMobileOrTablet(isMobile);
      
      // If switching to mobile/tablet and locomotive scroll exists, destroy it
      if (isMobile && locomotiveScroll) {
        locomotiveScroll.destroy();
        setLocomotiveScroll(null);
      }
      // If switching to desktop and no locomotive scroll exists, initialize it
      else if (!isMobile && !locomotiveScroll) {
        const newLocomotiveScroll = new LocomotiveScroll({
          lenisOptions: {
            smoothTouch: true,
            touchMultiplier: 1,
            smoothWheel: true,
            wheelMultiplier: 0.8,
          },
          smooth: true,
          lerp: 0.1,
          multiplier: 0.8,
        });
        setLocomotiveScroll(newLocomotiveScroll);
      }
    };

    // Initial setup
    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  return (
    <>
      <LoadingScreen show={showLoading} onFinish={() => setShowLoading(false)} />
      <div
        className={`w-full min-h-screen bg-[#f8f8f6] text-[#212121] overflow-x-hidden transition-opacity duration-300 ${
          showLoading ? 'opacity-0 pointer-events-none select-none' : 'opacity-100'
        }`}
      >
        <Navbar />
        <div className="pt-24 md:pt-32">
          <HeroSection />
          <Marquee />
          <About />
          <Eyes />
          <Featured />
          <Experience />
          <Contact />
          <Footer />
          {/* <Cards /> */}
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}

export default App;
