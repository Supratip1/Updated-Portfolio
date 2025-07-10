import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, label) => {
    e.preventDefault();
    let sectionId = label.toLowerCase().replace(/ /g, '-');
    if (sectionId === 'work') sectionId = 'featured';
    if (sectionId === 'contact-me') sectionId = 'contact';
    const section = document.getElementById(sectionId);
    if (section) {
      // Get navbar height (responsive)
      const navbar = document.querySelector('.fixed.top-0');
      let navbarHeight = 0;
      if (navbar) {
        navbarHeight = navbar.offsetHeight;
      } else {
        // fallback
        navbarHeight = window.innerWidth >= 768 ? 128 : 96;
      }
      // Get section top relative to document
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      // Scroll with offset
      window.scrollTo({
        top: sectionTop - navbarHeight,
        behavior: 'smooth',
      });
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-20 py-6 md:py-8 font-sans antialiased ${!isMenuOpen ? 'transition-all duration-300' : ''} ${
      !isMenuOpen && isScrolled
        ? 'bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <span
          className="text-3xl md:text-4xl cursor-pointer"
          style={{
            fontFamily: 'Brush Script MT, Pacifico, cursive',
            fontSize: '2.25rem', // 36px
            color: '#212121',
            fontWeight: 400,
            letterSpacing: 'normal',
            textTransform: 'none',
            lineHeight: 1,
            display: 'inline-block',
            verticalAlign: 'middle',
          }}
          onClick={e => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Supratip
        </span>

        {/* Hamburger Icon (mobile only) - positioned at top right corner */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8" 
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <span className="block w-6 h-0.5 bg-gray-700 rounded-sm mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-gray-700 rounded-sm"></span>
        </button>

        {/* Nav (desktop only) */}
        <nav
          className="hidden md:flex gap-10"
          style={{
            fontFamily: 'NeueMontreal, Roboto, sans-serif',
            fontSize: '20px',
            color: '#212121',
            fontWeight: 400,
            letterSpacing: 'normal',
            textTransform: 'none'
          }}
        >
          {['About', 'Work', 'Experience', 'Contact Me'].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(/ /g, '-')}`}
              onClick={e => handleNavClick(e, label)}
              className="relative overflow-hidden h-[32px] flex items-center group"
              style={{ color: '#212121', fontWeight: 400, letterSpacing: 'normal', textTransform: 'none', fontFamily: 'inherit', fontSize: 'inherit' }}
            >
              <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                {label}
              </span>
              <span className="block absolute left-0 top-full transition-transform duration-500 ease-in-out group-hover:translate-y-[-100%]">
                {label}
              </span>
              {/* Animated underline */}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left" />
            </a>
          ))}
        </nav>

        {/* Social Icons (desktop only) */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="https://github.com/Supratip1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/frontenddeveloper-supratip/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile Menu - Fullscreen Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#232323] flex flex-col md:hidden">
          <div className="flex justify-between w-full px-2 pt-4 pb-10 min-h-[112px] items-start">
            <span
              className="text-3xl mt-0"
              style={{
                fontFamily: 'Brush Script MT, Pacifico, cursive',
                fontSize: '2.25rem',
                color: '#fff',
                fontWeight: 400,
                letterSpacing: 'normal',
                textTransform: 'none',
                lineHeight: 1,
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            >
              Supratip
            </span>
            <button
              className="text-[#bdbdbd] text-3xl font-bold"
              aria-label="Close menu"
              onClick={toggleMenu}
              style={{ fontFamily: 'Founders Grotesk, sans-serif', lineHeight: 1 }}
            >
              &times;
            </button>
          </div>
          {/* Thin horizontal line below header */}
          <div className="w-full h-px bg-[#e5e5e5] opacity-70 mb-2" />
          <div className="flex flex-row flex-1">
            {/* Menu options */}
            <nav className="flex flex-col gap-8 mt-8 px-0 flex-1 pl-4">
              {['About', 'Work', 'Experience', 'Contact Me'].map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase().replace(/ /g, '-')}`}
                  className="text-white text-5xl font-bold uppercase"
                  style={{
                    fontFamily: 'Founders Grotesk, sans-serif',
                    letterSpacing: '0.01em',
                    lineHeight: 1.1,
                  }}
                  onClick={e => handleNavClick(e, label)}
                >
                  {label}
                </a>
              ))}
              
              {/* Social Links in Mobile as icons side by side, left aligned */}
              <div className="mt-8 flex flex-row items-center gap-6 justify-start pl-4">
                <a
                  href="https://github.com/Supratip1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/frontenddeveloper-supratip/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </nav>
            {/* Thin vertical line to the right of menu options, but slightly left from the edge and top-aligned to touch the horizontal line */}
            <div className="h-[70%] w-px bg-[#e5e5e5] opacity-70 mr-8 self-start mt-0" />
          </div>
        </div>
      )}
    </div>
  );
}