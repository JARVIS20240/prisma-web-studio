import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "B2B Corporate Platforms",
      description: "High-performance, structured websites engineered for professional firms to establish absolute authority and speed.",
      icon: "architecture",
      height: "min-h-[320px]"
    },
    {
      title: "Conversion-Optimized Landing Pages",
      description: "Precision-built digital entry points utilizing marketing psychology and structural hierarchy to turn traffic into qualified leads.",
      icon: "filter_alt",
      height: "min-h-[380px]"
    },
    {
      title: "Full-Stack Application Engineering",
      description: "End-to-end development of custom software applications, from high-fidelity UI/UX design to robust, scalable React and Python backends.",
      icon: "code_blocks",
      height: "min-h-[420px]"
    },
    {
      title: "Data-Driven Dashboards & Internal Tools",
      description: "Custom tracking architectures and private systems designed to securely monitor and visualize your core business metrics.",
      icon: "monitoring",
      height: "min-h-[300px]"
    },
    {
      title: "Dynamic Content Architectures",
      description: "Complex, scalable systems where large-scale content is easily managed, routed, and beautifully displayed with sub-second latency.",
      icon: "hub",
      height: "min-h-[340px]"
    },
    {
      title: "Intelligent Automation Overlays",
      description: "Custom AI integrations woven into existing workflows to automate redundant tasks and process complex data instantly.",
      icon: "psychology",
      height: "min-h-[360px]"
    }
  ];

  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
      className="bg-black min-h-screen pt-32 pb-32"
    >
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-24">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl md:text-8xl italic text-primary mb-8">Architectural Solutions</h1>
          <p className="font-sans text-xl text-text-subdued max-w-xl">
            Engineered for performance. From high-converting digital storefronts to custom internal data pipelines.
          </p>
        </div>
      </section>

      {/* Services Masonry Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 md:space-y-0">
          {services.map((service, i) => (
            <div
              key={i}
              className={`break-inside-avoid mb-6 bg-[#0A0A0A] border border-[#222222] rounded-xl p-8 
                transition-all duration-500 ease-out 
                hover:-translate-y-2 hover:border-[#A855F7]/40 
                hover:shadow-[0_8px_30px_rgb(168,85,247,0.12)] 
                group ${service.height} flex flex-col justify-between`}
            >
              <span className="material-symbols-outlined text-primary/50 text-4xl mb-8 transition-colors group-hover:text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>
                {service.icon}
              </span>
              <div>
                <h3 className="font-serif text-3xl text-primary mb-4">{service.title}</h3>
                <p className="font-sans text-base text-text-subdued leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology Statement */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-24 text-center">
        <p className="font-mono text-[10px] text-primary/60 tracking-[0.2em] uppercase max-w-2xl mx-auto">
          Every architecture is built with React, Vite, and strict performance engineering for sub-second load times.
        </p>
      </section>
    </motion.main>
  );
};

export default Services;
