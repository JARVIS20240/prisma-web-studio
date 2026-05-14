import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black min-h-screen text-primary"
    >
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        {/* Task 1: Back Navigation */}
        <div className="mb-16">
          <Link 
            to="/" 
            className="font-mono text-xs tracking-[0.3em] text-primary/40 hover:text-secondary transition-colors uppercase"
          >
            [ RETURN_TO_SYSTEM ]
          </Link>
        </div>

        {/* Task 2: Header Section */}
        <header className="mb-20">
          <span className="font-mono text-[10px] text-secondary tracking-[0.4em] uppercase">// DATA_PROTECTION_PROTOCOL_V1.0</span>
          <h1 className="font-serif text-5xl md:text-7xl italic text-primary mt-4 mb-4">Privacy Policy.</h1>
          <p className="font-sans text-sm italic text-primary/40">Effective Date: May 2026</p>
        </header>

        {/* Task 3: Content Injection */}
        <div className="space-y-12 font-sans text-lg text-primary/80 leading-relaxed">
          
          <section>
            <h2 className="font-serif text-2xl text-primary mb-6">1. The Information We Collect</h2>
            <p className="mb-6">
              We collect minimal, necessary information to architect your digital platforms and communicate effectively. This includes:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3">
              <li><strong>Direct Inputs:</strong> Name, organization, email address, international phone numbers, and project specifications provided via our secure contact portal.</li>
              <li><strong>Automated Telemetry:</strong> Basic connection data logged by our hosting providers (such as IP addresses and browser types) to ensure system security and site performance.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-6">2. How We Use Your Data</h2>
            <p className="mb-6">
              Your data is utilized strictly for the execution of web development and engineering services. We use it to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3">
              <li>Provide accurate project estimates and technical audits.</li>
              <li>Communicate regarding project milestones, deliverables, and billing.</li>
              <li>Secure our infrastructure against unauthorized bots and spam payloads.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-6">3. Confidentiality & Non-Disclosure</h2>
            <p>
              As architects of enterprise platforms, we treat your intellectual property with the highest security clearance. We do not sell, rent, or distribute your personal data, project details, or unreleased business strategies to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-6">4. Third-Party Infrastructure</h2>
            <p>
              We utilize enterprise-grade infrastructure to host our websites and process analytics. While we do not deploy invasive tracking, our hosting networks (e.g., Vercel, Netlify) and communication gateways may process data as part of standard web operations.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-6">5. International Data Routing</h2>
            <p>
              Prisma Digital operates primarily from our nodes in India. By initiating a handshake and submitting your payload, you acknowledge that your information may be routed to and processed within this jurisdiction under standard encryption protocols.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-primary mb-6">6. Your Access Rights</h2>
            <p>
              You maintain sovereignty over your data. You may request the modification or deletion of your contact records from our active databases at any time by initiating a new transmission through our contact portal.
            </p>
          </section>

        </div>
      </div>
    </motion.main>
  );
};

export default Privacy;
