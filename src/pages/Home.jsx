import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
    >
      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20">
        <div className="max-w-7xl mx-auto text-center w-full z-10 flex flex-col items-center">
          {/* Aesthetic Overlays/Glows for Cinematic Feel */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none"></div>
          <h1 className="font-serif italic text-5xl md:text-8xl text-primary mb-8 max-w-4xl relative z-10">
            Architecting Intelligent Systems.
          </h1>
          <p className="font-sans text-lg text-on-surface-variant max-w-2xl mb-12 relative z-10">
            Karan Mistry, AI & ML Engineer.
          </p>
          <Link 
            to="/lab"
            className="font-sans text-sm font-medium bg-primary-container text-on-primary px-8 py-4 rounded-sm hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all duration-300 relative z-10"
          >
            Explore The Lab
          </Link>
          {/* Abstract Data Graphic below button */}
          <div className="mt-24 w-full max-w-3xl h-64 relative border border-outline-variant/20 bg-surface-container-lowest/50 backdrop-blur-md rounded-lg overflow-hidden flex items-center justify-center">
            {/* Placeholder for stylized complex diagram, simplified visually */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-background to-background pointer-events-none"></div>
            <div className="flex items-center space-x-8 opacity-50">
              <div className="w-16 h-16 border border-outline-variant rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-outline">database</span>
              </div>
              <div className="h-[1px] w-12 bg-outline-variant"></div>
              <div className="w-24 h-24 border border-secondary/30 rounded flex items-center justify-center bg-[#0A0A0A] relative glow-border">
                <span className="material-symbols-outlined text-secondary text-3xl">smart_toy</span>
                {/* Tiny node indicators */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <div className="h-[1px] w-12 bg-outline-variant"></div>
              <div className="w-16 h-16 border border-outline-variant rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-outline">code_blocks</span>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50">
          <span className="font-mono text-[12px] text-text-subdued mb-2">SCROLL</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-text-subdued to-transparent"></div>
        </div>
      </header>

      {/* Tech Stack Marquee Section */}
      <section className="py-24 border-y border-outline-variant/10 bg-surface-container-lowest overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <h3 className="font-mono text-[12px] text-text-subdued uppercase tracking-widest text-center">Core Technologies</h3>
        </div>
        <div className="relative w-full flex overflow-hidden">
          {/* Left fade overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="marquee-track opacity-60 hover:opacity-100 transition-opacity duration-500">
            {/* Repeated items for smooth scrolling */}
            <div className="marquee-item"><span className="font-mono text-lg text-primary">PYTHON</span></div>
            <div className="marquee-item"><span className="font-mono text-lg text-primary">REACT</span></div>
            <div className="marquee-item"><span className="font-mono text-lg text-primary">TAILWIND</span></div>
            <div className="marquee-item"><span className="font-mono text-lg text-primary">LANGCHAIN</span></div>
            <div className="marquee-item"><span className="font-mono text-lg text-primary">LINUX</span></div>
            <div className="marquee-item"><span className="font-mono text-lg text-primary">LLM NODES</span></div>
            <div className="marquee-item">
              <span className="material-symbols-outlined text-primary text-2xl">memory</span>
            </div>
            {/* Duplicate set */}
            <div className="marquee-item"><span className="font-mono text-lg text-primary">PYTHON</span></div>
            <div className="marquee-item"><span className="font-mono text-lg text-primary">REACT</span></div>
            <div className="marquee-item"><span className="font-mono text-lg text-primary">TAILWIND</span></div>
            <div className="marquee-item"><span className="font-mono text-lg text-primary">LANGCHAIN</span></div>
            <div className="marquee-item"><span className="font-mono text-lg text-primary">LINUX</span></div>
            <div className="marquee-item"><span className="font-mono text-lg text-primary">LLM NODES</span></div>
            <div className="marquee-item">
              <span className="material-symbols-outlined text-primary text-2xl">memory</span>
            </div>
          </div>
          {/* Right fade overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        </div>
      </section>

      {/* Authority Section (The Bento Teaser) */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-5 flex flex-col space-y-8 pr-0 lg:pr-12">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 rounded-full px-3 py-1 w-fit">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-mono text-[12px] text-secondary">SYSTEMS APPROACH</span>
            </div>
            <h2 className="font-serif text-4xl text-primary">
              Bridging the gap between premium web design and complex data automation.
            </h2>
            <p className="font-sans text-base text-on-surface-variant">
              We architect solutions that are as structurally sound as they are visually compelling. Leveraging modern AI pipelines to automate data flows, wrapped in interfaces built for clarity and impact.
            </p>
            <div className="pt-4">
              <Link 
                to="/stack"
                className="inline-flex items-center space-x-2 font-sans text-sm font-medium text-primary hover:text-secondary transition-colors group"
              >
                <span>View Methodologies</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
          {/* Right Bento/Card Graphic */}
          <div className="lg:col-span-7 mt-12 lg:mt-0 relative">
            {/* Abstract Glow Behind Card */}
            <div className="absolute inset-0 bg-secondary/10 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl p-8 transition-all duration-500 relative z-10 h-[500px] flex flex-col card-gradient-hover">
              <div className="flex justify-between items-center mb-8 border-b border-[#1A1A1A] pb-4">
                <span className="font-mono text-[12px] text-text-subdued">Pipeline Overview</span>
                <span className="material-symbols-outlined text-outline-variant text-sm">more_horiz</span>
              </div>
              {/* Stylized Node Visual Placeholder */}
              <div className="flex-1 flex flex-col justify-center items-center space-y-6">
                {/* Node Top */}
                <div className="flex items-center justify-between w-full max-w-sm px-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-lg bg-[#111111] border border-outline-variant/30 flex items-center justify-center shadow-inner">
                      <span className="material-symbols-outlined text-outline-variant">api</span>
                    </div>
                    <span className="font-mono text-[10px] text-text-subdued mt-2">INGEST</span>
                  </div>
                  <div className="flex-1 h-[1px] mx-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-outline-variant/30"></div>
                    <div className="absolute top-0 left-0 h-full w-1/3 bg-secondary/50 rounded-full"></div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-lg bg-[#111111] border border-outline-variant/30 flex items-center justify-center shadow-inner">
                      <span className="material-symbols-outlined text-outline-variant">filter_alt</span>
                    </div>
                    <span className="font-mono text-[10px] text-text-subdued mt-2">PROCESS</span>
                  </div>
                </div>
                {/* Vertical connector */}
                <div className="h-12 w-[1px] bg-gradient-to-b from-outline-variant/30 to-secondary/30 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-secondary bg-[#0A0A0A]"></div>
                </div>
                {/* Node Bottom Center */}
                <div className="w-64 p-4 rounded-lg bg-[#111111] border border-secondary/40 shadow-[0_0_15px_rgba(139,92,246,0.1)] relative">
                  {/* Focus Ring Effect */}
                  <div className="absolute inset-0 rounded-lg border border-secondary opacity-20 scale-105 pointer-events-none"></div>
                  <div className="flex items-start space-x-4">
                    <span className="material-symbols-outlined text-secondary">memory</span>
                    <div>
                      <div className="font-sans text-sm font-medium text-primary mb-1">LLM Inference Engine</div>
                      <div className="font-mono text-[10px] text-text-subdued">STATUS: ACTIVE • LATENCY: 24ms</div>
                    </div>
                  </div>
                </div>
                {/* Connector Down */}
                <div className="h-8 w-[1px] bg-gradient-to-b from-secondary/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
