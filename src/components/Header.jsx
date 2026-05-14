import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b border-white/10 transition-transform duration-300">
      <div className="flex justify-between items-center h-20 px-6 max-w-7xl mx-auto">
        <Link to="/" className="font-serif italic text-[#DEDBC8] text-4xl font-bold tracking-tight">
          Prisma
        </Link>
        <div className="hidden md:flex items-center space-x-12">
          <Link 
            className="font-mono text-sm font-medium uppercase tracking-widest text-[#DEDBC8]/80 hover:text-[#DEDBC8] transition-colors duration-300" 
            to="/lab"
          >
            The Lab
          </Link>
          <Link 
            className="font-mono text-sm font-medium uppercase tracking-widest text-[#DEDBC8]/80 hover:text-[#DEDBC8] transition-colors duration-300" 
            to="/services"
          >
            Services
          </Link>
          <Link 
            className="font-mono text-sm font-medium uppercase tracking-widest text-[#DEDBC8]/80 hover:text-[#DEDBC8] transition-colors duration-300" 
            to="/stack"
          >
            Stack
          </Link>
          <Link 
            className="font-mono text-sm font-medium uppercase tracking-widest text-[#DEDBC8]/80 hover:text-[#DEDBC8] transition-colors duration-300" 
            to="/about"
          >
            About
          </Link>
        </div>
        <Link 
          to="/contact"
          className="hidden md:block font-sans text-sm font-medium bg-[#DEDBC8] text-black px-6 py-3 rounded-sm hover:shadow-[0_0_8px_rgba(222,219,200,0.5)] transition-all duration-300 scale-95 active:scale-90"
        >
          Book a Call
        </Link>
        {/* Mobile Menu Icon Placeholder */}
        <button className="md:hidden text-[#DEDBC8]">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
