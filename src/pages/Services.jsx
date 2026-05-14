import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "B2B Corporate Platforms",
      description: "High-performance, structured websites engineered for professional firms to establish absolute authority and speed.",
      icon: "architecture",
      height: "h-[400px]"
    },
    {
      title: "Conversion-Optimized Landing Pages",
      description: "Precision-built digital entry points utilizing marketing psychology and structural hierarchy to turn traffic into qualified leads.",
      icon: "filter_alt",
      height: "h-[450px]",
      stagger: true
    },
    {
      title: "Full-Stack Application Engineering",
      description: "End-to-end development of custom software applications, from high-fidelity UI/UX design to robust, scalable React and Python backends.",
      icon: "code_blocks",
      height: "h-[480px]"
    },
    {
      title: "Data-Driven Dashboards & Internal Tools",
      description: "Custom tracking architectures and private systems designed to securely monitor and visualize your core business metrics.",
      icon: "monitoring",
      height: "h-[380px]",
      stagger: true
    },
    {
      title: "Dynamic Content Architectures",
      description: "Complex, scalable systems where large-scale content is easily managed, routed, and beautifully displayed with sub-second latency.",
      icon: "hub",
      height: "h-[380px]"
    },
    {
      title: "Intelligent Automation Overlays",
      description: "Custom AI integrations woven into existing workflows to automate redundant tasks and process complex data instantly.",
      icon: "psychology",
      height: "h-[420px]",
      stagger: true
    }
  ];

  return (
    <motion.main 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
      className="pt-32 pb-32"
    >
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-24">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl md:text-8xl italic text-primary mb-8">Architectural Solutions</h1>
          <p className="font-sans text-xl text-text-subdued max-w-xl">
            Engineered for performance. From high-converting digital storefronts to custom internal data pipelines.
          </p>
        </div>
      </section>

      {/* Services Masonry */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column */}
          <div className="grid gap-8">
            {services.filter(s => !s.stagger).map((service, i) => (
              <div 
                key={i}
                className={`bg-[#0A0A0A] border border-[#222222] rounded-xl p-8 hover:border-secondary/30 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] transition-all duration-500 group ${service.height} flex flex-col justify-between`}
              >
                <span className="material-symbols-outlined text-primary/50 text-4xl">{service.icon}</span>
                <div>
                  <h3 className="font-serif text-4xl text-primary mb-4">{service.title}</h3>
                  <p className="font-sans text-base text-text-subdued">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (Staggered) */}
          <div className="grid gap-8 md:mt-24">
            {services.filter(s => s.stagger).map((service, i) => (
              <div 
                key={i}
                className={`bg-[#0A0A0A] border border-[#222222] rounded-xl p-8 hover:border-secondary/30 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] transition-all duration-500 group ${service.height} flex flex-col justify-between`}
              >
                <span className="material-symbols-outlined text-primary/50 text-4xl">{service.icon}</span>
                <div>
                  <h3 className="font-serif text-4xl text-primary mb-4">{service.title}</h3>
                  <p className="font-sans text-base text-text-subdued">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-24 text-center">
        <p className="font-mono text-xs text-primary/60 tracking-widest uppercase max-w-2xl mx-auto">
          Every architecture is built with React, Vite, and strict performance engineering for sub-second load times.
        </p>
      </section>
    </motion.main>
  );
};

export default Services;
