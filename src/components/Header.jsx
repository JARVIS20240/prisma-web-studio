import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Task 4: Auto-close logic on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'THE LAB', path: '/lab' },
    { name: 'SERVICES', path: '/services' },
    { name: 'STACK', path: '/stack' },
    { name: 'ABOUT', path: '/about' },
  ];

  const menuVariants = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } },
    exit: { x: '100%', opacity: 0, transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] } }
  };

  const linkVariants = {
    initial: { x: 20, opacity: 0 },
    animate: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: 0.1 * i, duration: 0.5, ease: 'easeOut' }
    })
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b border-white/10">
      <div className="flex justify-between items-center h-20 px-6 max-w-7xl mx-auto">
        <Link to="/" className="font-serif italic text-[#DEDBC8] text-4xl font-bold tracking-tight z-[100]">
          Prisma
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              className="font-mono text-sm font-medium uppercase tracking-widest text-[#DEDBC8]/80 hover:text-[#DEDBC8] transition-colors duration-300" 
              to={link.path}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link 
          to="/contact"
          className="hidden md:block font-sans text-sm font-medium bg-[#DEDBC8] text-black px-6 py-3 rounded-sm hover:shadow-[0_0_8px_rgba(222,219,200,0.5)] transition-all duration-300 scale-95 active:scale-90"
        >
          Book a Call
        </Link>

        {/* Task 1: Mobile Hamburger Icon */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#DEDBC8] z-[100] w-10 h-10 flex items-center justify-center focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* Task 2 & 3: Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed inset-0 z-[99] bg-black/95 backdrop-blur-xl flex flex-col justify-center px-12 md:hidden"
            >
              <div className="flex flex-col space-y-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    custom={i}
                    variants={linkVariants}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="font-serif italic text-3xl text-[#DEDBC8] hover:text-secondary transition-colors py-4 block border-b border-white/5"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  custom={navLinks.length}
                  variants={linkVariants}
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="font-mono text-xs text-secondary tracking-[0.3em] py-6 block"
                  >
                    [ BOOK_CONSULTATION ]
                  </Link>
                </motion.div>
              </div>

              {/* Decorative Background Elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-[0.03] pointer-events-none -z-10">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="0.05" strokeDasharray="1 2" />
                  <path d="M 0 50 L 100 50 M 50 0 L 50 100" stroke="white" strokeWidth="0.05" />
                </svg>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Header;
