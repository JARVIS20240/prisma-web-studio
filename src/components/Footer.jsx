const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-white/10 mt-24">
      <div className="flex flex-col md:flex-row justify-between items-center py-16 px-6 max-w-7xl mx-auto text-[#DEDBC8]">
        <div className="font-serif italic text-xl font-bold mb-8 md:mb-0">
          Prisma
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8 md:mb-0">
          <a className="font-mono text-xs uppercase tracking-widest text-[#DEDBC8]/60 hover:text-[#DEDBC8] transition-opacity duration-200" href="#">
            Privacy Policy
          </a>
          <a className="font-mono text-xs uppercase tracking-widest text-[#DEDBC8]/60 hover:text-[#DEDBC8] transition-opacity duration-200" href="#">
            Terms of Service
          </a>
          <a className="font-mono text-xs uppercase tracking-widest text-[#DEDBC8]/60 hover:text-[#DEDBC8] transition-opacity duration-200" href="https://github.com/JARVIS20240" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          <a className="font-mono text-xs uppercase tracking-widest text-[#DEDBC8]/60 hover:text-[#DEDBC8] transition-opacity duration-200" href="https://www.linkedin.com/in/karan-mistry-264160350/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="font-sans text-sm text-[#DEDBC8]/60 text-center md:text-right">
          © 2026 Prisma Digital. Engineered for Intelligence.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
