import { motion } from 'framer-motion';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-navy overflow-hidden px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-[#132a52] to-navy"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-transparent"></div>

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={item} className="text-5xl md:text-6xl lg:text-[80px] font-syne font-extrabold text-white leading-tight mb-4">
          THINK. SYNC. INC.
        </motion.h1>

        <motion.div variants={item} className="w-20 h-1 bg-orange mx-auto mb-6"></motion.div>

        <motion.h2 variants={item} className="text-2xl md:text-3xl font-satoshi font-normal text-white mb-4">
          Centered Digital Solutions Since 2019
        </motion.h2>

        <motion.p variants={item} className="text-lg md:text-xl text-slate-300 mb-10">
          Transforming businesses through people-first digital experiences
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn btn-primary animate-pulse shadow-[0_0_0_0_rgba(240,90,40,0.7)] hover:animate-none">
            Start Scaling
          </a>
          <a
            href="/images/pf/Artiqube-Portfolio.pdf"
            download
            className="btn btn-secondary"
          >
            See Our Work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;