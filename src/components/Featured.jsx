import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

function Featured() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Create individual animation controls for each project
  const animationControls = {
    prominence: useAnimation(),
    superimpress: useAnimation(),
    cocktilla: useAnimation(),
    gtavi: useAnimation()
  };

  // Animation handlers with wavy effect
  const handleHoverStart = (projectKey) => {
    animationControls[projectKey].start({
      y: "0",
    });
  };

  const handleHoverEnd = (projectKey) => {
    animationControls[projectKey].start({
      y: "100%",
    });
  };

  // Project data with keys
  const projects = [
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
    {
      key: "cocktilla",
      title: "COCKTILLA",
      image: "/Cocktail.png",
      pills: ["GSAP", "Landing Page", "Store"],
      live: "https://cocktilla.netlify.app",
    },
    {
      key: "gtavi",
      title: "GTA VI",
      image: "/GTA6.png",
      pills: ["GSAP", "Landing Page", "Game"],
      live: "https://jasonclaudia.netlify.app",
    },
  ];

  // Reusable project card component
  const ProjectCard = ({ project, onHoverStart, onHoverEnd }) => (
    <motion.div
      key={project.key}
      className="cardcontainer cursor-pointer relative w-full h-full group"
      onMouseEnter={!isMobile ? () => onHoverStart(project.key) : undefined}
      onMouseLeave={!isMobile ? () => onHoverEnd(project.key) : undefined}
    >
      <h1 className="mb-4 flex gap-2 items-center tracking-wide text-xl md:text-3xl font-bold">
        <span className="w-2 h-2 bg-zinc-50 rounded-full"></span> {project.title}
      </h1>
      <h1 className="absolute text-[#CDEA68] flex overflow-hidden left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl font-NueueMontreal leading-none tracking-tighter">
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
      <div className="card w-full h-[300px] flex items-center rounded-xl overflow-hidden">
        <img
          className="w-full h-auto object-cover hover:scale-105 transition-all duration-500"
          src={project.image}
          alt={project.title}
        />
      </div>
      <div className="flex flex-wrap gap-2 mt-6 ml-2 transition-all duration-500 group-hover:-translate-y-2 group-hover:opacity-80">
        {project.pills.map((pill) => (
          <span 
            key={pill} 
            className="px-6 py-2 border-2 border-gray-600 rounded-full text-base font-sans font-normal uppercase tracking-wide text-black bg-transparent"
          >
            {pill}
          </span>
        ))}
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border-2 border-green-600 rounded-full text-base font-sans font-bold uppercase tracking-wide text-green-700 bg-transparent hover:bg-green-50 transition-colors duration-200 ml-2"
        >
          Live
        </a>
      </div>
    </motion.div>
  );

  return (
    <div id="featured" className="container w-full py-8 mb-8 sm:pt-20 sm:mb-0">
      <div className="w-full border-b-[1px] border-zinc-700 pb-5">
        <h1 className="text-4xl sm:text-6xl">Featured Works</h1>
      </div>
      
      <div className="py-10 cards w-full">
        {isMobile ? (
          // Mobile layout - single column
          <div className="flex flex-col gap-10">
            {[projects[3], projects[2], projects[0], projects[1]].map((project) => (
              <ProjectCard 
                key={project.key}
                project={project}
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
              />
            ))}
          </div>
        ) : (
          // Desktop layout - two columns
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left column */}
            <div className="flex flex-col gap-10">
              <ProjectCard 
                project={projects[3]} // GTA VI
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
              />
              <ProjectCard 
                project={projects[0]} // Prominence
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
              />
            </div>
            
            {/* Right column */}
            <div className="flex flex-col gap-10">
              <ProjectCard 
                project={projects[2]} // Cocktilla
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
              />
              <ProjectCard 
                project={projects[1]} // Superimpress
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Featured;