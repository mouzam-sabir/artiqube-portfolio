import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const WhyChooseUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const points = [
    "Strategy-first approach",
    "No generic marketing",
    "Built to compete with big agencies",
    "ROI-focused execution",
    "Hands-on expert team"
  ];

  return (
    <section className="section-padding bg-navy text-white text-center">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Why Brands Choose Artiqube Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 my-16">
            {points.map((point, idx) => (
              <div key={idx} className="bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300 hover:-translate-y-2 transform">
                <div className="text-3xl text-orange mb-4">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <h4 className="font-syne font-bold text-lg">{point}</h4>
              </div>
            ))}
          </div>

          <p className="text-gold text-xl md:text-2xl font-semibold mb-12">
            Trusted by growing brands and service-based businesses worldwide
          </p>

          <div className="bg-white text-navy p-12 rounded-2xl max-w-3xl mx-auto">
            <h3 className="font-syne text-3xl font-bold mb-4">Ready to Build a Brand That Stands Out?</h3>
            <a href="#contact" className="btn btn-primary inline-block mt-4">
              Schedule a Free Strategy Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
