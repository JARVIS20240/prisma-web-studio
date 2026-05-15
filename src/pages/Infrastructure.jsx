import { motion } from 'framer-motion';

const SystemBoundingBox = () => (
  <div className="relative w-40 h-40 flex items-center justify-center">
    {/* Central Icon */}
    <span className="material-symbols-outlined text-7xl text-primary/40" style={{ fontVariationSettings: "'FILL' 0", fontWeight: '100' }}>
      account_tree
    </span>

    {/* Corner Segments */}
    <div className="absolute inset-0">
      {/* Top Left */}
      <div className="absolute top-4 left-4 w-6 h-6 border-t-[0.75px] border-l-[0.75px] border-secondary animate-bounding-tl" />
      {/* Top Right */}
      <div className="absolute top-4 right-4 w-6 h-6 border-t-[0.75px] border-r-[0.75px] border-secondary animate-bounding-tr" />
      {/* Bottom Left */}
      <div className="absolute bottom-4 left-4 w-6 h-6 border-b-[0.75px] border-l-[0.75px] border-secondary animate-bounding-bl" />
      {/* Bottom Right */}
      <div className="absolute bottom-4 right-4 w-6 h-6 border-b-[0.75px] border-r-[0.75px] border-secondary animate-bounding-br" />
    </div>

    {/* Peak Glow Overlay */}
    <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl opacity-0 animate-peak-glow" />
  </div>
);

const NeuralSynapse = () => (
  <div className="relative w-40 h-40 flex items-center justify-center">
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Center Node */}
      <circle cx="50" cy="50" r="4" fill="none" stroke="#A855F7" strokeWidth="0.75" />

      {/* Synapse Branches */}
      <g stroke="#A855F7" strokeWidth="0.75" fill="none" strokeLinecap="round">
        <path d="M 50,46 L 50,20 M 50,16 L 50,10" className="animate-synapse" style={{ animationDelay: '0s' }} />
        <path d="M 54,50 L 80,50 M 84,50 L 90,50" className="animate-synapse" style={{ animationDelay: '1s' }} />
        <path d="M 50,54 L 50,80 M 50,84 L 50,90" className="animate-synapse" style={{ animationDelay: '2s' }} />
        <path d="M 46,50 L 20,50 M 16,50 L 10,50" className="animate-synapse" style={{ animationDelay: '3s' }} />

        {/* Diagonal Branches */}
        <path d="M 53,47 L 70,30" className="animate-synapse" style={{ animationDelay: '0.5s' }} />
        <path d="M 53,53 L 70,70" className="animate-synapse" style={{ animationDelay: '1.5s' }} />
        <path d="M 47,53 L 30,70" className="animate-synapse" style={{ animationDelay: '2.5s' }} />
        <path d="M 47,47 L 30,30" className="animate-synapse" style={{ animationDelay: '3.5s' }} />
      </g>

      {/* Outer Glow Nodes */}
      {[20, 80].map(x => [20, 80].map(y => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" fill="none" stroke="#A855F7" strokeWidth="0.5" className="animate-pulse" />
      )))}
    </svg>
  </div>
);

const HardwareHeartbeat = () => (
  <div className="relative w-40 h-40 flex flex-col items-center justify-center space-y-4">
    {[0, 1, 2].map(i => (
      <div key={i} className="relative w-24 h-6 border-[0.75px] border-primary/20 rounded-sm overflow-hidden bg-black/40">
        {/* The Throughput Wipe Layer */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/40 to-transparent w-full h-full -translate-x-full animate-hardware-wipe"
          style={{ animationDelay: `${i * 0.8}s` }}
        />
        {/* Drive Markers */}
        <div className="absolute top-0 left-2 w-[1px] h-full bg-primary/10" />
        <div className="absolute top-0 right-2 w-[1px] h-full bg-primary/10" />
      </div>
    ))}
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <span className="material-symbols-outlined text-[140px] text-primary" style={{ fontVariationSettings: "'FILL' 0", fontWeight: '100' }}>dns</span>
    </div>
  </div>
);

const Infrastructure = () => {
  const sections = [
    {
      id: "01",
      title: "Client Architecture",
      items: ["React 18", "Vite", "TypeScript", "Tailwind CSS 3"],
      visual: <SystemBoundingBox />
    },
    {
      id: "02",
      title: "Intelligence Pipeline",
      items: ["Python", "LangChain", "Ollama local inference", "Gemma 4 E2b integration"],
      visual: <NeuralSynapse />,
      accent: true
    },
    {
      id: "03",
      title: "Hardware & OS",
      items: ["Linux OS development environment", "RTX GPU hardware acceleration"],
      visual: <HardwareHeartbeat />
    }
  ];

  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
      className="flex-grow max-w-7xl mx-auto w-full px-6 lg:px-16 pt-36 pb-36"
    >
      {/* Page Header */}
      <header className="mb-24">
        <h1 className="font-serif text-5xl md:text-8xl italic text-primary mb-6">The Infrastructure.</h1>
        <p className="font-sans text-xl text-text-subdued max-w-2xl">
          The architecture, models, and environments powering our digital solutions.
        </p>
      </header>

      {/* Console Panels */}
      <div className="flex flex-col gap-8">
        {sections.map((section, i) => (
          <article
            key={i}
            className="bg-[#0A0A0A] border border-[#222222] p-8 md:p-12 relative overflow-hidden group transition-all duration-500 hover:border-secondary/30 flex flex-col md:flex-row items-center gap-12 rounded-2xl"
          >
            {/* Content Column */}
            <div className="flex-grow z-10">
              <h2 className="font-mono text-xs text-secondary mb-8 tracking-[0.2em] uppercase">
                {section.id} / {section.title}
              </h2>
              <ul className="space-y-6 font-mono text-sm md:text-base text-primary">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="material-symbols-outlined text-secondary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      terminal
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Re-Engineered Visual Module */}
            <div className="w-full md:w-1/3 flex justify-center items-center opacity-40 group-hover:opacity-100 transition-all duration-700 z-10 transform group-hover:scale-105">
              {section.visual}
            </div>

            {/* Background Gradient Trace */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/[0.02] to-secondary/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Subtle Line Accent */}
            <div className="absolute top-0 left-0 w-[2px] h-full bg-secondary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
          </article>
        ))}
      </div>
    </motion.main>
  );
};

export default Infrastructure;
