import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const countryData = {
  "+91": { name: "IND", mask: "00000 00000", length: 10, instruction: "10_DIGIT_STRICT" },
  "+1": { name: "USA", mask: "(000) 000-0000", length: 10, instruction: "(XXX) XXX-XXXX" },
  "+44": { name: "UK", mask: "00000 000000", length: 11, instruction: "11_DIGIT_UK_STD" },
  "+971": { name: "UAE", mask: "00 000 0000", length: 9, instruction: "9_DIGIT_UAE" },
  "+49": { name: "GER", mask: "000 00000000", length: 11, instruction: "11_DIGIT_GER" },
  "+61": { name: "AUS", mask: "0 0000 0000", length: 9, instruction: "9_DIGIT_AUS" }
};

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, processing, complete
  const [country, setCountry] = useState("+91");
  const [phone, setPhone] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  // Task 6: Custom Dropdown State
  const [isScopeOpen, setIsScopeOpen] = useState(false);
  const [selectedScope, setSelectedScope] = useState('SELECT WEB_SERVICE_TYPE');
  const [isCountryOpen, setIsCountryOpen] = useState(false);

  // Task 14.1: Refs for Click Outside Detection
  const countryRef = useRef(null);
  const scopeRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryRef.current && !countryRef.current.contains(event.target)) {
        setIsCountryOpen(false);
      }
      if (scopeRef.current && !scopeRef.current.contains(event.target)) {
        setIsScopeOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatPhone = (input, mask) => {
    const numbers = input.replace(/\D/g, "");
    let formatted = "";
    let numberIdx = 0;

    for (let i = 0; i < mask.length && numberIdx < numbers.length; i++) {
      if (mask[i] === "0") {
        formatted += numbers[numberIdx];
        numberIdx++;
      } else {
        formatted += mask[i];
      }
    }
    return formatted;
  };

  const handlePhoneChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    const selectedCountry = countryData[country];
    const limitedValue = rawValue.slice(0, selectedCountry.length);
    const formatted = formatPhone(limitedValue, selectedCountry.mask);
    setPhone(formatted);
    setIsPhoneValid(limitedValue.length === selectedCountry.length || limitedValue.length === 0);
  };

  useEffect(() => {
    setPhone("");
    setIsPhoneValid(true);
  }, [country]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const rawLength = phone.replace(/\D/g, "").length;
    if (rawLength !== countryData[country].length) {
      setIsPhoneValid(false);
      return;
    }

    window.location.href = 'mailto:your.email@example.com?subject=[PRISMA_DIGITAL_HANDSHAKE]';
    setStatus('processing');
    setTimeout(() => {
      setStatus('idle');
    }, 3000);
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
      className="relative bg-black min-h-screen pt-36 pb-36"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="space-y-12">
            <header className="space-y-6">
              <h1 className="font-serif text-5xl md:text-7xl italic text-primary leading-tight">
                Establish <br />Connection.
              </h1>
              <p className="font-sans text-xl text-primary/70 leading-relaxed max-w-lg">
                For custom web architecture, secure data pipelines, or enterprise engineering consulting, initiate a secure handshake below.
              </p>
            </header>

            <div className="bg-[#050505] border border-[#222222] p-8 rounded-xl relative overflow-hidden group">
              <div className="font-mono text-xs tracking-[0.2em] space-y-6 relative z-10">
                <div className="flex items-center gap-4">
                  <span className="text-primary/40">STATUS:</span>
                  <div className="flex items-center gap-2 text-[#10B981]">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_8px_#10B981]" style={{ animationDuration: '1.5s' }} />
                    ACTIVE_LISTENING
                  </div>
                </div>
                <div>
                  <span className="text-primary/40">PRIMARY_NODE:</span>
                  <span className="text-primary ml-4 uppercase tracking-widest">IND_SOUTH_ASIA</span>
                </div>
                <div>
                  <span className="text-primary/40">ENCRYPTION:</span>
                  <span className="text-primary ml-4">END_TO_END_SECURE</span>
                </div>
                <div>
                  <span className="text-primary/40">LATENCY_TARGET:</span>
                  <span className="text-primary ml-4">&lt; 24ms</span>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-[1px] bg-secondary/20 animate-scan-vertical" />
            </div>
          </div>

          <div className="relative">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-primary/40 uppercase tracking-widest pl-2">[ NAME / ORGANIZATION ]</label>
                <input
                  type="text"
                  required
                  aria-label="Name or Organization"
                  placeholder="IDENTIFY_YOURSELF"
                  className="bg-transparent border border-[#222222] text-primary p-5 w-full outline-none transition-all duration-500 rounded-lg focus:border-secondary focus:shadow-[0_0_20px_rgba(168,85,247,0.15)] placeholder:text-primary/20"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-[10px] text-primary/40 uppercase tracking-widest pl-2">[ EMAIL ADDRESS ]</label>
                <input
                  type="email"
                  required
                  aria-label="Secure Email Address"
                  placeholder="SECURE_RETURN_NODE"
                  className="bg-transparent border border-[#222222] text-primary p-5 w-full outline-none transition-all duration-500 rounded-lg focus:border-secondary focus:shadow-[0_0_20px_rgba(168,85,247,0.15)] placeholder:text-primary/20"
                />
              </div>

              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="sm:w-1/3 space-y-2" ref={countryRef}>
                    <label className="font-mono text-[10px] text-primary/40 uppercase tracking-widest pl-2">[ CODE ]</label>
                    <div className="relative">
                      <div
                        onClick={() => setIsCountryOpen(!isCountryOpen)}
                        className="bg-[#080808] border border-[#222222] text-[#DEDBC8] p-5 w-full rounded-lg cursor-pointer flex justify-between items-center focus-within:border-secondary"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && setIsCountryOpen(!isCountryOpen)}
                        aria-label="Select Country Code"
                      >
                        <span>{countryData[country].name} ({country})</span>
                        <svg className={`transition-transform duration-300 ${isCountryOpen ? 'rotate-180' : ''}`} width="10" height="6" viewBox="0 0 100 6" fill="none">
                          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>

                      <AnimatePresence>
                        {isCountryOpen && (
                          <motion.ul
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            data-lenis-prevent
                            className="absolute z-50 w-full mt-2 bg-[#050505] border border-[#222222] rounded-lg shadow-2xl max-h-48 overflow-y-auto overscroll-contain scrollbar-thin scrollbar-thumb-secondary/20"
                          >
                            {Object.keys(countryData).map(code => (
                              <li
                                key={code}
                                onClick={() => { setCountry(code); setIsCountryOpen(false); }}
                                className="p-4 hover:bg-secondary/10 hover:text-secondary cursor-pointer transition-colors border-b border-white/5 last:border-0 font-mono text-xs"
                              >
                                {countryData[code].name} ({code})
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <label className="font-mono text-[10px] text-primary/40 uppercase tracking-widest pl-2">[ PHONE_NUMBER ]</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={handlePhoneChange}
                      aria-label="Phone Number"
                      placeholder="DIAL_PROTOCOL"
                      className={`bg-transparent border ${isPhoneValid ? 'border-[#222222]' : 'border-red-500/50 focus:border-red-500'} text-primary p-5 w-full outline-none transition-all duration-500 rounded-lg focus:border-secondary focus:shadow-[0_0_20px_rgba(168,85,247,0.15)] placeholder:text-primary/20`}
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center px-2">
                  <span className="font-mono text-[10px] text-primary/30 uppercase tracking-widest">
                    FORMAT_REQUIRED: {countryData[country].instruction}
                  </span>
                  {!isPhoneValid && phone.length > 0 && (
                    <span className="font-mono text-[10px] text-red-500 uppercase tracking-widest animate-pulse">
                      INVALID_PAYLOAD_LENGTH
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-2" ref={scopeRef}>
                <label className="font-mono text-[10px] text-primary/40 uppercase tracking-widest pl-2">[ PROJECT SCOPE ]</label>
                <div className="relative">
                  <div
                    onClick={() => setIsScopeOpen(!isScopeOpen)}
                    className="bg-[#080808] border border-[#222222] text-[#DEDBC8] p-5 w-full rounded-lg cursor-pointer flex justify-between items-center focus-within:border-secondary"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setIsScopeOpen(!isScopeOpen)}
                    aria-label="Select Project Scope"
                  >
                    <span className={selectedScope === 'SELECT WEB_SERVICE_TYPE' ? 'text-primary/20' : 'text-primary'}>
                      {selectedScope}
                    </span>
                    <svg className={`transition-transform duration-300 ${isScopeOpen ? 'rotate-180' : ''}`} width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>

                  <AnimatePresence>
                    {isScopeOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        data-lenis-prevent
                        className="absolute z-50 w-full mt-2 bg-[#050505] border border-[#222222] rounded-lg shadow-2xl max-h-60 overflow-y-auto overscroll-contain scrollbar-thin scrollbar-thumb-secondary/20"
                      >
                        {[
                          "B2B Corporate Platform",
                          "Full-Stack Web Application",
                          "E-commerce Ecosystem",
                          "High-Conversion Landing Page",
                          "Custom AI / LLM Integration",
                          "Other (System Inquiry)"
                        ].map((option) => (
                          <li
                            key={option}
                            onClick={() => { setSelectedScope(option); setIsScopeOpen(false); }}
                            className="p-5 hover:bg-secondary/10 hover:text-secondary cursor-pointer transition-colors border-b border-white/5 last:border-0 text-sm"
                          >
                            {option}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                  <input type="hidden" name="project_scope" value={selectedScope} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-mono text-[10px] text-primary/40 uppercase tracking-widest pl-2">[ PROJECT DETAILS ]</label>
                <textarea
                  rows="5"
                  required
                  aria-label="Project Details"
                  placeholder="TRANSMIT_DATA_PAYLOAD..."
                  className="bg-transparent border border-[#222222] text-primary p-5 w-full outline-none transition-all duration-500 rounded-lg focus:border-secondary focus:shadow-[0_0_20px_rgba(168,85,247,0.15)] placeholder:text-primary/20 resize-none"
                />
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={status === 'processing' || !isPhoneValid || phone.length === 0 || selectedScope === 'SELECT WEB_SERVICE_TYPE'}
                  className={`w-full py-6 border border-[#222222] font-mono text-sm tracking-[0.4em] uppercase transition-all duration-500 rounded-lg active:scale-[0.98] 
                    ${(status === 'processing' || !isPhoneValid || phone.length === 0 || selectedScope === 'SELECT WEB_SERVICE_TYPE')
                      ? 'bg-secondary/5 text-primary/20 cursor-not-allowed border-white/5'
                      : 'bg-black text-primary hover:bg-primary hover:text-black shadow-[0_0_30px_rgba(168,85,247,0.1)'}`}
                >
                  {status === 'processing' ? '[ PROTOCOL_INITIATED... ]' : '[ TRANSMIT_PAYLOAD ]'}
                </button>
              </div>
            </form>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.03] pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="0.1" strokeDasharray="1 2" />
                <path d="M 0 50 L 100 50 M 50 0 L 50 100" stroke="white" strokeWidth="0.1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Contact;
