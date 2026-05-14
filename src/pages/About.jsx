import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TerminalLine = ({ command, output, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="mb-6 font-mono text-sm"
  >
    <div className="flex items-center text-secondary mb-1">
      <span className="mr-2 opacity-50">&gt;</span>
      <span className="tracking-wider">{command}</span>
    </div>
    <div className="text-primary/90 leading-relaxed pl-4 border-l border-white/5">
      {output}
    </div>
  </motion.div>
);

const About = () => {
  const arsenal = [
    { title: "LLM Orchestration", sub: "Optimizing Gemma 4 E2b & Whisper Large v3 for sub-second inference." },
    { title: "Advanced RAG", sub: "High-precision retrieval-augmented generation for sovereign data vaults." },
    { title: "Sovereign Deployment", sub: "Linux-based local clusters with multi-drive redundancy and zero telemetry." },
    { title: "AI/DS Research", sub: "Deep learning experimentation at SRKI (Shree Ramkrishna Institute)." }
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black min-h-screen pt-32 pb-12"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Split-Pane Grid Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Pane: The Terminal Interface */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="bg-[#050505] border border-[#222222] rounded-xl overflow-hidden shadow-2xl">
              <div className="bg-[#111111] px-4 py-3 border-b border-[#222222] flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
                <div className="ml-4 text-[10px] font-mono text-text-subdued tracking-widest uppercase">system_identity_v1.0</div>
              </div>
              <div className="p-8 md:p-10">
                <TerminalLine command="whoami" output="Karan Mistry — AI & Machine Learning Engineer." delay={0.5} />
                <TerminalLine command="current_execution_context" output="Postgraduate Researcher — M.Sc. in Artificial Intelligence and Data Science at SRKI (Shree Ramkrishna Institute)." delay={1.5} />
                <TerminalLine command="core_directives" output="Architecting secure, local-first LLM pipelines. Optimizing RAG retrieval. Bypassing cloud dependencies." delay={2.5} />
                <motion.div animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-2 h-4 bg-secondary/50 mt-4 ml-4" />
              </div>
            </div>
            <div className="absolute -inset-4 bg-secondary/5 blur-3xl rounded-full -z-10" />
          </motion.div>

          {/* Right Pane: The Engineering Manifesto */}
          <div className="relative">
            <div className="absolute inset-0 -z-10 opacity-5 pointer-events-none overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <pattern id="wireframe-about" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#DEDBC8" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#wireframe-about)" />
                <path d="M 0 0 L 400 400 M 400 0 L 0 400" stroke="#DEDBC8" strokeWidth="0.5" />
              </svg>
            </div>
            <div className="space-y-8">
              <motion.h1 initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-serif text-6xl md:text-8xl italic text-primary leading-tight">Intelligence, <br/>localized.</motion.h1>
              <motion.p initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="font-sans text-lg md:text-xl text-primary/80 leading-relaxed max-w-xl">Specializing in the deployment of large language models on consumer-grade hardware. By leveraging frameworks like LangChain and optimizing models such as Gemma 4 E2b, I build sovereign, zero-latency systems that keep data strictly on-premise.</motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="pt-8">
                <Link to="/contact" className="inline-block px-10 py-4 bg-black border border-[#222222] text-primary font-mono text-sm tracking-[0.3em] uppercase transition-all duration-500 hover:border-secondary/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] rounded-full animate-[pulse_4s_infinite]">
                  [ INIT_CONTACT ]
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Task 2: The "Technical Arsenal" Section */}
        <section className="mt-40 pt-20 border-t border-white/5">
          <div className="mb-16">
            <h2 className="font-mono text-xs text-secondary tracking-[0.4em] uppercase">// CORE_COMPETENCIES_MAPPING</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {arsenal.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 border border-[#222222] rounded-2xl hover:border-secondary/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.05)] transition-all duration-500 group"
              >
                <h3 className="font-serif text-xl text-primary mb-4 group-hover:text-secondary transition-colors italic">{item.title}</h3>
                <p className="font-sans text-sm text-primary/60 leading-relaxed">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Task 3: System Specs Footer Bar */}
        <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
           <div className="overflow-hidden w-full relative">
              <div className="flex whitespace-nowrap animate-marquee-slow py-2 font-mono text-[10px] text-primary/30 tracking-[0.2em] uppercase">
                <span className="mx-12">SYSTEM_STATUS: OPTIMIZED</span>
                <span className="mx-12">//</span>
                <span className="mx-12">LATENCY: 24ms</span>
                <span className="mx-12">//</span>
                <span className="mx-12">ENVIRONMENT: LINUX_MINT</span>
                <span className="mx-12">//</span>
                <span className="mx-12">INFRASTRUCTURE: RTX_ACCELERATED</span>
                <span className="mx-12">//</span>
                <span className="mx-12">BUILD: V1.0.4</span>
                {/* Repeat for seamless loop */}
                <span className="mx-12">SYSTEM_STATUS: OPTIMIZED</span>
                <span className="mx-12">//</span>
                <span className="mx-12">LATENCY: 24ms</span>
                <span className="mx-12">//</span>
                <span className="mx-12">ENVIRONMENT: LINUX_MINT</span>
                <span className="mx-12">//</span>
                <span className="mx-12">INFRASTRUCTURE: RTX_ACCELERATED</span>
                <span className="mx-12">//</span>
                <span className="mx-12">BUILD: V1.0.4</span>
              </div>
           </div>
        </div>
      </div>
    </motion.main>
  );
};

export default About;
