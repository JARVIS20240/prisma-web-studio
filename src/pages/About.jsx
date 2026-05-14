import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
      className="min-h-screen bg-black text-[#DEDBC8] flex items-center justify-center text-4xl font-serif italic"
    >
      About Page
    </motion.div>
  );
};

export default About;
