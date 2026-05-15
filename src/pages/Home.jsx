import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const technologies = [
    "PYTHON", "REACT", "TAILWIND", "LANGCHAIN", "LINUX", "LLM NODES", "MODELS",
    "PYTHON", "REACT", "TAILWIND", "LANGCHAIN", "LINUX", "LLM NODES", "MODELS",
    "PYTHON", "REACT", "TAILWIND", "LANGCHAIN", "LINUX", "LLM NODES", "MODELS"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-primary font-sans pt-0 pb-36"
    >
      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 overflow-hidden">
        {/* Cinematic Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto text-center w-full z-10 flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif italic text-6xl md:text-9xl text-primary mb-8 max-w-5xl leading-[1.1] tracking-tight"
          >
            Architecting <br />Intelligent Systems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-xl md:text-2xl text-primary/70 max-w-2xl mb-8"
          >
            Karan Mistry. AI & Machine Learning Engineer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/lab"
              className="bg-primary text-black font-mono text-sm tracking-[0.3em] font-bold px-12 py-5 rounded-full hover:bg-white hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-500 uppercase"
            >
              Explore The Lab
            </Link>
          </motion.div>

          {/* Abstract Data Graphic (Hero) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 w-full max-w-3xl h-64 relative border border-white/5 bg-[#050505] backdrop-blur-md rounded-2xl overflow-hidden flex items-center justify-center shadow-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent pointer-events-none" />

            <div className="flex items-center space-x-12 opacity-40">
              <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary/60">database</span>
              </div>
              <div className="h-[0.5px] w-20 bg-white/10" />
              <div className="w-24 h-24 border border-secondary/40 rounded-xl flex items-center justify-center bg-black relative">
                <span className="material-symbols-outlined text-secondary text-4xl">smart_toy</span>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
              </div>
              <div className="h-[0.5px] w-20 bg-white/10" />
              <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary/60">code_blocks</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30">
          <span className="font-mono text-[10px] text-primary tracking-[0.3em] mb-4">SCROLL</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </header>

      {/* Tech Stack Marquee Section */}
      <section className="py-12 border-y border-white/5 bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <h3 className="font-mono text-[10px] text-secondary tracking-[0.4em] uppercase text-center opacity-60">Engineered with</h3>
        </div>
        <div className="relative w-full flex">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="flex whitespace-nowrap animate-marquee py-0">
            {technologies.map((tech, i) => (
              <span key={i} className="font-mono text-base md:text-xl text-primary/30 mx-12 tracking-widest hover:text-primary transition-colors duration-300">
                {tech}
              </span>
            ))}
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
        </div>
      </section>

      {/* Authority Section (The Bento Teaser) */}
      <section className="pt-24 pb-0 px-6 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-5 space-y-10">
            <div className="inline-flex items-center space-x-3 bg-secondary/10 border border-secondary/20 rounded-full px-5 py-2">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="font-mono text-[10px] text-secondary tracking-widest">SYSTEMS APPROACH</span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-primary italic leading-tight">
              Bridging the gap between design and automation.
            </h2>
            <p className="font-sans text-lg md:text-xl text-primary/70 leading-relaxed">
              We architect solutions that are as structurally sound as they are visually compelling. Leveraging modern AI pipelines to automate data flows, wrapped in interfaces built for clarity and impact.
            </p>
            <div className="pt-6">
              <Link
                to="/services"
                className="inline-flex items-center space-x-3 font-mono text-xs tracking-widest text-primary hover:text-secondary transition-all group uppercase"
              >
                <span>View Methodologies</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block w-[1px] h-32 bg-white/5 self-center" />

          {/* Right Bento/Card Graphic */}
          <div className="lg:col-span-6 relative group">
            <div className="absolute inset-0 bg-secondary/10 blur-[100px] rounded-full -z-10 group-hover:bg-secondary/20 transition-all duration-700" />
            <div className="bg-[#050505] border border-white/5 rounded-3xl p-8 md:p-10 transition-all duration-700 relative z-10 h-[560px] flex flex-col hover:border-secondary/30 shadow-2xl">
              <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-6">
                <span className="font-mono text-[10px] text-primary/40 tracking-widest uppercase">Pipeline Intelligence v4.0</span>
                <span className="material-symbols-outlined text-primary/20 text-sm">terminal</span>
              </div>

              <div className="flex-1 flex flex-col justify-center items-center space-y-8">
                <div className="flex items-center justify-between w-full max-w-md">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center shadow-inner group-hover:border-secondary/40 transition-colors">
                      <span className="material-symbols-outlined text-primary/30 group-hover:text-secondary transition-colors">api</span>
                    </div>
                    <span className="font-mono text-[9px] text-primary/40 mt-3 tracking-widest">INGEST</span>
                  </div>
                  <div className="flex-1 h-[1px] mx-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/5" />
                    <motion.div
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary to-transparent w-1/2"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center shadow-inner group-hover:border-secondary/40 transition-colors">
                      <span className="material-symbols-outlined text-primary/30 group-hover:text-secondary transition-colors">filter_alt</span>
                    </div>
                    <span className="font-mono text-[9px] text-primary/40 mt-3 tracking-widest">PROCESS</span>
                  </div>
                </div>

                <div className="h-16 w-[0.5px] bg-gradient-to-b from-white/10 via-secondary/40 to-white/10 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border border-secondary bg-black" />
                </div>

                <div className="w-full max-w-sm p-6 rounded-2xl bg-[#0A0A0A] border border-secondary/30 shadow-[0_0_30px_rgba(168,85,247,0.05)] relative overflow-hidden group/box">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/[0.03] to-transparent" />
                  <div className="flex items-start space-x-5 relative z-10">
                    <div className="p-3 bg-secondary/10 rounded-xl">
                      <span className="material-symbols-outlined text-secondary">memory</span>
                    </div>
                    <div>
                      <div className="font-sans text-base font-bold text-primary mb-1">LLM Inference Engine</div>
                      <div className="font-mono text-[9px] text-secondary tracking-widest uppercase opacity-80">STATUS: ACTIVE • LATENCY: 14ms</div>
                    </div>
                  </div>
                </div>

                <div className="h-16 w-[0.5px] bg-gradient-to-b from-secondary/40 via-white/10 to-transparent relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border border-secondary bg-black" />
                </div>

                <div className="flex flex-col items-center opacity-40">
                  <span className="material-symbols-outlined text-primary text-xl">output</span>
                  <span className="font-mono text-[8px] text-primary mt-2 tracking-widest">TRANSMIT_PAYLOAD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
