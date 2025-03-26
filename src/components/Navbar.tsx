import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, Menu, X } from 'lucide-react';

// Types
interface NavLinkProps {
  href: string;
  children: ReactNode;
  onClick: () => void;
}

interface SocialIconProps {
  href: string;
  icon: ReactNode;
  label: string;
}

// Navigation links with hover animations
const NavLink = ({ href, children, onClick }: NavLinkProps) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    className="relative group px-3 py-2 font-medium text-black hover:text-gray-700 transition-colors duration-300"
  >
    {children}
    <motion.span
      className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"
      initial={{ width: 0 }}
      whileHover={{ width: '100%' }}
    />
  </a>
);

// Social media icons with hover effects
const SocialIcon = ({ href, icon, label }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="relative group flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 transition-all duration-300 hover:bg-gray-300 hover:scale-110"
  >
    {icon}
  </a>
);

// Navigation items
const NAV_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
  { href: '#timeline', label: 'Experience' },
];

// Social links
const SOCIAL_LINKS = [
  {
    href: 'https://github.com/Supratip1',
    icon: <Github className="w-4 h-4 text-black" />,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/supratip/',
    icon: <Linkedin className="w-4 h-4 text-black" />,
    label: 'LinkedIn',
  },
  {
    href: 'mailto:supratipbhattacharya2@gmail.com',
    icon: <Mail className="w-4 h-4 text-black" />,
    label: 'Email',
  },
  {
    href: 'https://drive.google.com/file/d/1eAS8KV77d9jaCVnvledI5s-tVe2SJEAd/view?usp=sharing',
    icon: <FileText className="w-4 h-4 text-black" />,
    label: 'Resume',
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const section = document.querySelector(id);
      if (section) {
        const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: sectionTop - navbarHeight, behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <motion.nav
      initial={{ backgroundColor: '#ffffff', backdropFilter: 'blur(5px)' }}
      animate={{
        backgroundColor: scrolled ? '#f9f9f9' : '#ffffff',
        boxShadow: scrolled ? '0 4px 10px rgba(0, 0, 0, 0.1)' : 'none',
      }}
      transition={{ duration: 0.3 }}
      className="fixed w-full z-50 text-black backdrop-blur-lg"
    >
      {/* Adjusted container padding so the logo is closer to the left edge */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo + Portfolio Text: pinned to the left with minimal spacing */}
          <div className="flex items-center mr-auto space-x-2">
            <img
              src="/Logo.png"
              alt="Logo"
              className="h-7 w-auto"
            />
            <span className="text-lg font-semibold tracking-tight uppercase text-gray-900">
              Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-6">
              {NAV_ITEMS.map((item) => (
                <NavLink key={item.href} href={item.href} onClick={() => scrollToSection(item.href)}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Desktop Right Section: Social Icons + CTA */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Social Icons */}
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link) => (
                <SocialIcon key={link.href} {...link} />
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="px-5 py-2.5 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button onClick={() => setIsOpen(!isOpen)} className="text-black">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="block px-3 py-2 rounded-md text-black hover:bg-gray-200 transition-colors"
                >
                  {item.label}
                </a>
              ))}

              {/* Mobile Social Icons */}
              <div className="flex justify-center space-x-4 mt-4">
                {SOCIAL_LINKS.map((link) => (
                  <SocialIcon key={link.href} {...link} />
                ))}
              </div>

              {/* Mobile CTA Button */}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="block text-center px-5 py-2.5 mt-4 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
