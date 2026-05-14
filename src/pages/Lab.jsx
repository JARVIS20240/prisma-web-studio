import { motion } from 'framer-motion';

const SummarizationPipeline = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-between px-16 overflow-hidden">
      {/* Left: Chaotic Ingest Cluster */}
      <div className="relative w-32 h-40 flex flex-col justify-center space-y-1.5 z-10">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i} 
            className="h-[1px] bg-primary/40 rounded-full animate-bar-flicker"
            style={{ 
              width: `${30 + Math.random() * 70}%`, 
              animationDelay: `${i * 0.1}s`,
              marginLeft: `${Math.random() * 20}px`
            }}
          />
        ))}
      </div>

      {/* Center: Fractal Processing Node */}
      <div className="relative flex items-center justify-center flex-1">
        {/* Converging/Diverging Lines */}
        <svg className="absolute w-full h-60 pointer-events-none opacity-20" viewBox="0 0 400 200">
           <path d="M 40,60 L 200,100 M 40,80 L 200,100 M 40,100 L 200,100 M 40,120 L 200,100 M 40,140 L 200,100" fill="none" stroke="#A855F7" strokeWidth="0.5" strokeDasharray="2 4" />
           <path d="M 360,70 L 200,100 M 360,100 L 200,100 M 360,130 L 200,100" fill="none" stroke="#A855F7" strokeWidth="0.5" strokeDasharray="3 3" />
        </svg>

        <div className="relative w-32 h-32 flex items-center justify-center animate-fractal">
           <div className="absolute inset-0 bg-secondary/5 rounded-full blur-2xl" />
           {/* Complex Fractal Pattern */}
           <svg className="w-24 h-24" viewBox="0 0 100 100">
             <rect x="25" y="25" width="50" height="50" fill="none" stroke="#A855F7" strokeWidth="0.5" transform="rotate(45 50 50)" />
             <circle cx="50" cy="50" r="20" fill="none" stroke="#A855F7" strokeWidth="1" />
             <rect x="35" y="35" width="30" height="30" fill="none" stroke="#A855F7" strokeWidth="0.5" transform="rotate(15 50 50)" />
             <circle cx="50" cy="50" r="10" fill="none" stroke="#A855F7" strokeWidth="0.5" />
             <path d="M 50,0 L 50,100 M 0,50 L 100,50" stroke="#A855F7" strokeWidth="0.2" className="opacity-30" />
           </svg>
        </div>
      </div>

      {/* Right: Structured Summary Output */}
      <div className="flex flex-col space-y-6 w-40 z-10">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i} 
            className="flex flex-col space-y-1.5 animate-bullet opacity-0" 
            style={{ animationDelay: `${i * 1.5}s` }}
          >
            <div className="flex items-center space-x-2">
               <div className="w-1.5 h-1.5 bg-primary/60 rounded-full" />
               <div className="h-[1px] bg-primary/40 w-full" />
            </div>
            <div className="h-[1px] bg-primary/20 w-4/5 ml-3" />
          </div>
        ))}
      </div>
    </div>
  );
};

const NeuralHUD = () => {
  return (
    <div className="relative w-72 h-72 flex items-center justify-center overflow-hidden">
      {/* Outer Segmented Data-Rings */}
      <div className="absolute w-full h-full animate-rotate-cw opacity-30">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="none" stroke="#DEDBC8" strokeWidth="0.5" strokeDasharray="10 2 20 2" />
          <rect x="49.5" y="0" width="1" height="4" fill="#DEDBC8" />
          <rect x="49.5" y="96" width="1" height="4" fill="#DEDBC8" />
        </svg>
      </div>
      <div className="absolute w-[85%] h-[85%] animate-rotate-ccw opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="none" stroke="#DEDBC8" strokeWidth="0.5" strokeDasharray="5 15" />
        </svg>
      </div>

      {/* Predictive Arcs */}
      <div className="absolute w-[70%] h-[70%] animate-spin-slow opacity-40">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <path d="M 50,2 A 48,48 0 0,1 98,50" fill="none" stroke="#A855F7" strokeWidth="0.8" strokeLinecap="round" strokeDasharray="1 10" />
          <path d="M 50,98 A 48,48 0 0,1 2,50" fill="none" stroke="#A855F7" strokeWidth="0.8" strokeLinecap="round" strokeDasharray="1 10" />
        </svg>
      </div>

      {/* Central Neural Core (Spherical Pattern) */}
      <div className="relative w-28 h-28 flex items-center justify-center">
         <div className="absolute inset-0 bg-secondary/10 rounded-full animate-neural-bloom" />
         <svg className="w-20 h-20 animate-pulse" viewBox="0 0 100 100">
           {[...Array(6)].map((_, i) => (
             <circle 
                key={i} 
                cx="50" cy="50" r={10 + i * 6} 
                fill="none" stroke="#A855F7" strokeWidth="0.5" 
                strokeDasharray={`${20 + i * 5} ${40 + i * 10}`} 
                className="opacity-60"
                style={{ transform: `rotate(${i * 60}deg)`, transformOrigin: 'center' }}
             />
           ))}
           <circle cx="50" cy="50" r="5" fill="#A855F7" className="animate-pulse" />
         </svg>
      </div>

      {/* Telemetry Corner Data */}
      <div className="absolute inset-0 p-8 font-mono text-[7px] text-primary/40 pointer-events-none select-none flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="animate-glitch">P-NODE: 92</div>
          <div className="animate-glitch" style={{ animationDelay: '2s' }}>TRC_LIVE</div>
        </div>
        <div className="flex justify-between">
          <div className="animate-glitch" style={{ animationDelay: '1s' }}>INF: 0.12ms</div>
          <div className="animate-glitch" style={{ animationDelay: '3s' }}>LOC_PRIV</div>
        </div>
      </div>
    </div>
  );
};

const SovereignShield = () => {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden bg-black">
      {/* Expanded 3D Isometric Honeycomb Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-25" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100">
        <defs>
          <pattern id="shield-grid-expanded" x="0" y="0" width="10" height="17.32" patternUnits="userSpaceOnUse">
             <path d="M 5,0 L 10,2.88 L 10,8.66 L 5,11.54 L 0,8.66 L 0,2.88 Z" fill="none" stroke="#DEDBC8" strokeWidth="0.1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#shield-grid-expanded)" />
        
        {/* Validation Shimmer Nodes - Spanning expanded grid */}
        {[...Array(40)].map((_, i) => (
          <path 
            key={i}
            d="M 5,0 L 10,2.88 L 10,8.66 L 5,11.54 L 0,8.66 L 0,2.88 Z"
            className="animate-node-shimmer"
            style={{ 
              transform: `translate(${Math.random() * 120 - 10}px, ${Math.random() * 120 - 10}px)`,
              animationDelay: `${Math.random() * 5}s`,
              fill: 'none'
            }}
          />
        ))}
      </svg>

      {/* Expanded Radar Verification Scan */}
      <div className="absolute w-full h-full animate-radar pointer-events-none">
        {/* Full-bleed radar line */}
        <div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/10 to-secondary/60 origin-left blur-[0.5px]" />
      </div>

      {/* Sovereign Vault Lock - Slightly Larger for Balance */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative w-44 h-44 flex items-center justify-center">
          {/* Enhanced Vault Boundary */}
          <div className="absolute inset-0 rounded-full border-[3px] border-secondary/80 animate-vault-pulse" />
          <div className="absolute inset-2 rounded-full border-[1px] border-secondary/20" />
          
          <div className="w-20 h-20 bg-black border border-secondary/30 rounded-full flex items-center justify-center relative shadow-[0_0_30px_rgba(168,85,247,0.3)]">
             <span className="material-symbols-outlined text-5xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Lab = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
      className="flex-grow pt-32 pb-24 px-6 max-w-7xl mx-auto w-full"
    >
      {/* Page Title Section */}
      <header className="mb-16 md:mb-24 md:w-2/3">
        <h1 className="font-serif text-5xl md:text-8xl text-primary italic mb-6">The Lab.</h1>
        <p className="font-sans text-lg text-text-subdued max-w-2xl">
          Deep technical builds, local LLM architectures, and automation pipelines.
        </p>
      </header>

      {/* Bento Grid Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Card 1: Enterprise Meeting Summarizer */}
        <div className="md:col-span-2 bg-[#111111] border border-[#222222] hover:border-secondary/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-300 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center group relative overflow-hidden">
          <div className="md:w-1/2 space-y-4 z-10">
            <div className="flex items-center space-x-3 mb-4">
              <div className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/20 text-secondary font-mono text-[12px] uppercase tracking-widest rounded">Case Study</div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="font-mono text-[10px] text-green-500 uppercase tracking-tighter">Active</span>
              </div>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-primary">Enterprise Meeting Summarizer</h2>
            <p className="font-sans text-base text-text-subdued">
              LangChain & Whisper v3 Integration for automated audio processing. A robust pipeline designed to transcribe, summarize, and extract actionable insights from hours of corporate discussions with high fidelity.
            </p>
          </div>

          <div className="md:w-1/2 w-full h-80 md:h-96 bg-[#0e0e0e] rounded-xl border border-white/5 relative overflow-hidden flex items-center justify-center">
            {/* Rolling Glowing Aura */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.15)_0%,_transparent_70%)] animate-pulse-aura"></div>

            {/* Scrolling Data Stream Overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none select-none overflow-hidden font-mono text-[8px] flex flex-col items-center">
              <div className="animate-data-stream whitespace-nowrap">
                {Array(20).fill(0).map((_, i) => (
                  <div key={i} className="py-1 opacity-20">
                    DATA_INGEST_NODE_{i} PROCESSING_TRANSCRIPT... {Math.random().toString(16).substring(2, 10).toUpperCase()}
                  </div>
                ))}
              </div>
            </div>

            {/* Summarization Pipeline Re-Engineering */}
            <div className="relative z-10 w-full h-full bg-black flex flex-col items-center justify-center py-12">
               <div className="flex-grow w-full flex items-center justify-center">
                 <SummarizationPipeline />
               </div>
               <div className="mt-8 flex justify-center w-full z-20">
                 <div className="px-5 py-2 bg-black border border-secondary/20 rounded-full text-[10px] font-mono text-secondary tracking-[0.2em] uppercase shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                   LIVE_AUDIO_SIGNAL_INGEST
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Card 2: J.A.R.V.I.S. Local AI */}
        <div className="bg-[#111111] border border-[#222222] hover:border-secondary/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-300 rounded-2xl p-8 flex flex-col group h-full overflow-hidden">
          <div className="flex-grow space-y-4 mb-8">
            <div className="flex items-center space-x-3 mb-2">
              <div className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/20 text-secondary font-mono text-[12px] uppercase tracking-widest rounded">Prototype</div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="font-mono text-[10px] text-green-500 uppercase tracking-tighter">Ready</span>
              </div>
            </div>
            <h3 className="font-serif text-3xl text-primary">J.A.R.V.I.S. Local AI</h3>
            <p className="font-sans text-base text-text-subdued">
              Python & Ollama-powered voice assistant running entirely on local consumer hardware. Prioritizing zero-latency response and complete data privacy.
            </p>
          </div>

          <div className="h-80 bg-[#0e0e0e] rounded-xl border border-white/5 flex flex-col items-center justify-center relative overflow-hidden p-6">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>

            {/* Neural HUD Overlay */}
            <NeuralHUD />

            {/* Operational Status */}
            <div className="mt-4 font-mono text-[10px] text-secondary tracking-widest uppercase z-20">
              Local Inference Engine Active
            </div>

            {/* Data Feeds */}
            <div className="absolute inset-0 z-20 flex justify-between items-end pb-8 px-6 font-mono text-[9px] text-text-subdued/60 pointer-events-none">
              <div className="flex flex-col space-y-2">
                <div>CPU TEMP: 42°C</div>
                <div>RAM USAGE: 7.1GB/16GB</div>
              </div>
              <div className="flex flex-col space-y-2 text-right">
                <div>LATENCY: 8ms</div>
                <div>TOKENS/SEC: 15</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Secure On-Premise AI */}
        <div className="bg-[#111111] border border-[#222222] hover:border-secondary/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-300 rounded-2xl p-8 flex flex-col group h-full overflow-hidden">
          <div className="flex-grow space-y-4 mb-8">
            <div className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/20 text-secondary font-mono text-[12px] uppercase tracking-widest rounded mb-2">Architecture</div>
            <h3 className="font-serif text-3xl text-primary">Secure On-Premise AI</h3>
            <p className="font-sans text-base text-text-subdued">
              Dedicated private LLM clusters and encrypted data pipelines designed for maximum sovereignty and institutional security.
            </p>
          </div>
          <div className="h-80 bg-black rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden">
            {/* Sovereign Shield Expanded Visual */}
            <SovereignShield />

            {/* Status Label Positioning */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
               <div className="px-5 py-2 bg-black/80 backdrop-blur-md border border-secondary/30 rounded-full text-[10px] font-mono text-secondary tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(168,85,247,0.15)] whitespace-nowrap">
                 LIVE_DATA_INTEGRITY_SCAN
               </div>
            </div>

            {/* Constant Subtle Glow Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Lab;
