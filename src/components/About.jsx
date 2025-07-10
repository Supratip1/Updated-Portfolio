import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function About() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    isMobile ? (
      <div id="about" className="w-full bg-[#CDEA68] rounded-t-3xl py-8 mb-8">
        <div className="container w-full">
          <p className="font-['NeueMontreal'] text-[31px] text-[#212121] m-0 px-4 md:px-[30px]">
            I am <span className="font-bold">Supratip Bhattacharya</span>, a senior frontend engineer who transforms bold ideas into high-performance, visually striking web experiences that elevate brands and accelerate growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 border-t border-zinc-400 pt-10 mt-10">
            <div className="font-['NeueMontreal'] text-[31px] text-[#212121] m-0 px-4 md:px-[30px]">
              What you can expect:
            </div>
            <div className="font-['NeueMontreal'] text-[16px] text-[#212121] m-0 px-4 md:px-[30px] flex flex-col h-full justify-between">
              <div>
                With 5+ years of experience in SaaS, e-commerce, and enterprise dashboards, I blend design thinking and engineering rigour to deliver:
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li><span className="font-semibold">Fast interfaces:</span> sub-2s load times, green Core Web Vitals</li>
                  <li><span className="font-semibold">Accessible UIs:</span> WCAG-AA or higher</li>
                  <li><span className="font-semibold">Scalable frontends:</span> React/Next.js, microservices-ready</li>
                  <li><span className="font-semibold">Data-driven results:</span> measurable conversion & engagement lifts</li>
                </ul>
                <div className="mt-6">
                  <span className="font-semibold">Skills</span> React.js • Next.js • TypeScript • Tailwind CSS • Framer Motion • Node.js • UI ⁄ UX Strategy
                </div>
                <div className="mt-4 font-semibold">Let us collaborate</div>
                <div>and turn your next digital challenge into a category-defining success.</div>
              </div>
              <div className="flex gap-8 mt-8 justify-end">
                <a href="https://github.com/Supratip1/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub className="text-zinc-900 hover:text-zinc-700 transition text-2xl md:text-3xl" />
                </a>
                <a href="https://www.linkedin.com/in/frontenddeveloper-supratip/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="text-zinc-900 hover:text-blue-700 transition text-2xl md:text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div
        id="about"
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.08"
        className="w-full bg-[#CDEA68] rounded-t-3xl py-10 sm:py-20"
      >
        <div className="container w-full">
          <p className="font-['NeueMontreal'] text-[31px] text-[#212121] m-0 px-4 md:px-[30px]">
            I am <span className="font-bold">Supratip Bhattacharya</span>, a senior frontend engineer who transforms bold ideas into high-performance, visually striking web experiences that elevate brands and accelerate growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 border-t border-zinc-400 pt-10 mt-10">
            <div className="font-['NeueMontreal'] text-[31px] text-[#212121] m-0 px-4 md:px-[30px]">
              What you can expect:
            </div>
            <div className="font-['NeueMontreal'] text-[16px] text-[#212121] m-0 px-4 md:px-[30px] flex flex-col h-full justify-between">
              <div>
                With 5+ years of experience in SaaS, e-commerce, and enterprise dashboards, I blend design thinking and engineering rigour to deliver:
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li><span className="font-semibold">Fast interfaces:</span> sub-2s load times, green Core Web Vitals</li>
                  <li><span className="font-semibold">Accessible UIs:</span> WCAG-AA or higher</li>
                  <li><span className="font-semibold">Scalable frontends:</span> React/Next.js, microservices-ready</li>
                  <li><span className="font-semibold">Data-driven results:</span> measurable conversion & engagement lifts</li>
                </ul>
                <div className="mt-6">
                  <span className="font-semibold">Skills</span> React.js • Next.js • TypeScript • Tailwind CSS • Framer Motion • Node.js • UI ⁄ UX Strategy
                </div>
                <div className="mt-4 font-semibold">Let us collaborate</div>
                <div>and turn your next digital challenge into a category-defining success.</div>
              </div>
              <div className="flex gap-8 mt-8 justify-end">
                <a href="https://github.com/Supratip1/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub className="text-zinc-900 hover:text-zinc-700 transition text-2xl md:text-3xl" />
                </a>
                <a href="https://www.linkedin.com/in/frontenddeveloper-supratip/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="text-zinc-900 hover:text-blue-700 transition text-2xl md:text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default About;
