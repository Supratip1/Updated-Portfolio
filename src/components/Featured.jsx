import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaArrowUpLong } from "react-icons/fa6";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Featured() {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const cardsRef = useRef(null);
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      // Refresh ScrollTrigger on resize
      ScrollTrigger.refresh();
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation controls for each project
  const animationControls = {
    prominence: useAnimation(),
    superimpress: useAnimation(),
    cocktilla: useAnimation(),
    gtavi: useAnimation()
  };

  // Project data with keys
  const projects = [
    {
      key: "gtavi",
      title: "GTA VI",
      image: "/GTA6.png",
      pills: ["GSAP", "Landing Page", "Game"],
      live: "https://jasonclaudia.netlify.app",
    },
    {
      key: "cocktilla",
      title: "COCKTILLA",
      image: "/Cocktail.png",
      pills: ["GSAP", "Landing Page", "Store"],
      live: "https://cocktilla.netlify.app",
    },
    {
      key: "prominence",
      title: "PROMINENCE",
      image: "/Prominence.png",
      pills: ["AI", "Dashboard", "SEO"],
      live: "https://prominence.live",
    },
    {
      key: "superimpress",
      title: "SUPERIMPRESS",
      image: "/Superimpress.png",
      pills: ["LinkedIn", "Personal Branding", "Content Tools"],
      live: "https://www.superimpress.com/",
    },
  ];

  useGSAP(() => {
    const cards = cardsRef.current;
    if (!cards) return;

    // Kill any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(t => t.kill());

    // Calculate scroll amount more precisely for mobile
    const cardWidth = window.innerWidth;
    const totalCards = projects.length;
    const scrollAmount = cardWidth * (totalCards - 1);
    
    // Main horizontal scroll animation with improved smoothness
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${scrollAmount + window.innerHeight * 0.8}`, // Increased end point
        pin: true,
        scrub: 0.5, // Reduced for smoother animation
        anticipatePin: 1,
        invalidateOnRefresh: true,
        markers: false, // Set to true for debugging
        onUpdate: (self) => {
          // Prevent infinite scrolling by clamping the progress
          if (self.progress >= 1) {
            self.progress = 1;
          }
        },
      },
    });

    // Animate cards container horizontally with easing
    tl.to(cards, {
      x: -scrollAmount,
      ease: "power2.out", // Added easing for smoother movement
      duration: 1,
    });

    // Scale and fade animation for each card with improved timing
    gsap.utils.toArray(".project-card").forEach((card, i) => {
      const cardTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: `${i * (100 / projects.length)}% center`,
          end: `${(i + 1) * (100 / projects.length)}% center`,
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      cardTl
        .fromTo(
          card,
          {
            scale: 0.85,
            opacity: 0.6,
          },
          {
            scale: 1,
            opacity: 1,
            ease: "power2.out",
          }
        )
        .to(card, {
          scale: 0.85,
          opacity: 0.6,
          ease: "power2.out",
        });
    });

    // Add a ScrollTrigger to handle the end of the section
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "bottom bottom",
      end: "bottom top",
      onEnter: () => {
        // Ensure the section unpins when reaching the bottom
        gsap.set(cards, { clearProps: "x" });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [projects.length, isMobile]); // Re-run when mobile state changes

  // Animation handlers with wavy effect
  const handleHoverStart = (projectKey) => {
    if (!isMobile) {
      animationControls[projectKey].start({
        y: "0",
      });
    }
  };

  const handleHoverEnd = (projectKey) => {
    if (!isMobile) {
      animationControls[projectKey].start({
        y: "100%",
      });
    }
  };

  // Reusable project card component
  const ProjectCard = ({ project, onHoverStart, onHoverEnd }) => (
    <motion.div
      className="project-card relative w-screen h-[70vh] md:h-[80vh] flex-none"
      onMouseEnter={() => onHoverStart(project.key)}
      onMouseLeave={() => onHoverEnd(project.key)}
    >
      <div className="relative w-full h-full px-4 md:px-8">
        {/* Wavy text overlay */}
        <h1 className="absolute text-[#CDEA68] flex overflow-hidden left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-6xl md:text-8xl font-NueueMontreal leading-none tracking-tighter">
        {project.title.split("").map((item, index) => (
          <motion.span
            initial={{ y: "100%" }}
            animate={animationControls[project.key]}
            transition={{ 
              ease: [0.22, 1, 0.36, 1], 
              delay: index * 0.06,
              duration: 0.6 
            }}
            className="inline-block"
            key={index}
          >
            {item}
          </motion.span>
        ))}
      </h1>

        {/* Image container with glassmorphic effect */}
        <div className="card w-full h-full rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center">
        <img
            className="w-auto h-auto max-w-full max-h-full object-contain hover:scale-105 transition-all duration-500"
          src={project.image}
          alt={project.title}
            style={{ 
              objectPosition: 'center',
              backgroundColor: 'transparent'
            }}
        />
      </div>

        {/* Live pill only - positioned at the bottom of the image */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center transition-all duration-500 z-20 px-4 md:px-8">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
            className="px-6 md:px-8 py-3 border-2 border-green-600 rounded-full text-sm md:text-base font-sans font-bold uppercase tracking-wide text-green-700 bg-white/90 backdrop-blur-sm hover:bg-green-50 transition-colors duration-200 shadow-lg"
        >
          Live
        </a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div 
      ref={containerRef}
      className="featured-section w-full h-screen overflow-hidden"
    >
      <div className="w-full border-b-[1px] border-zinc-700 pb-5 px-4">
        <h1 className="text-4xl sm:text-6xl">Featured Works</h1>
      </div>
      
      <div 
        ref={cardsRef} 
        className="py-4 cards w-full flex gap-0 px-0"
      >
        {projects.map((project) => (
              <ProjectCard 
                key={project.key}
                project={project}
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
              />
            ))}
      </div>
    </div>
  );
}

export default Featured;