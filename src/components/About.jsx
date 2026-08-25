import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const started = useRef(false);

  useEffect(() => {
    if (inView && !started.current) {
      started.current = true;
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, target, duration]);

  return <span ref={ref}>{count}</span>;
};

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title text-left">About Us</h2>
            <p className="text-lg text-muted mb-8">
              Hello, we are Artiqube. We are the centered Digital Solution company. We have been transforming businesses and putting people at the heart of creating digital experiences since 2019. Offering to customers marketing and advertising solutions. We start by formulating a personalized strategic direction for needed marketing activities researching the projects through, branding strategy & positioning, identifying audiences, and setting objectives, thus providing solutions tailored for specific business needs. Using the latest automated tools and technologies.
            </p>
            
            <div className="w-20 h-1 bg-orange mb-8"></div>
            
            <blockquote className="border-l-4 border-orange pl-6 italic text-xl font-satoshi text-dark">
              <p className="mb-4">"Success is rooted in building the right team"</p>
              <footer className="flex flex-col not-italic text-sm">
                <strong className="text-navy text-base">Umaid Sabir</strong>
                <span className="text-muted">Visionary & Founder since 2019</span>
              </footer>
            </blockquote>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(11,26,51,0.08)] text-center transition-transform hover:-translate-y-2">
              <div className="font-syne text-5xl font-bold text-orange mb-2">
                <Counter target={2019} />
              </div>
              <div className="text-lg font-semibold text-navy">Founded</div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(11,26,51,0.08)] text-center transition-transform hover:-translate-y-2">
              <div className="font-syne text-5xl font-bold text-orange mb-2 flex justify-center">
                <Counter target={200} />+
              </div>
              <div className="text-lg font-semibold text-navy">Clients</div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(11,26,51,0.08)] text-center transition-transform hover:-translate-y-2 sm:col-span-2">
              <div className="font-syne text-5xl font-bold text-orange mb-2 flex justify-center">
                <Counter target={9} />+
              </div>
              <div className="text-lg font-semibold text-navy">Services</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
