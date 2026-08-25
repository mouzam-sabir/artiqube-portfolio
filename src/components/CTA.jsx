import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CTA = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="section-padding bg-orange text-white text-center">
      <div className="container mx-auto max-w-4xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 uppercase tracking-wide">
            YOUR GROWTH STARTS HERE
          </h2>
          
          <p className="text-lg md:text-xl font-satoshi mb-6 leading-relaxed">
            You're not just hiring a service — you're investing in a strategic partner committed to your brand's long-term success. At Artiqube, we combine data-driven strategy, compelling content, and consistent execution to turn attention into engagement, and engagement into real business growth.
          </p>
          
          <p className="text-xl md:text-2xl font-syne font-bold mb-10">
            Let's move beyond uncertainty. Let's start scaling together.
          </p>
          
          <a href="#contact" className="btn bg-white text-orange hover:scale-105 transition-transform duration-300 animate-pulse shadow-[0_0_0_0_rgba(255,255,255,0.7)] hover:animate-none">
            Let's Start Scaling
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
