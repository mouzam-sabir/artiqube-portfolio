import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShareNodes, 
  faChartLine, 
  faUsers, 
  faBullhorn, 
  faPenRuler, 
  faCamera, 
  faVideo, 
  faCode, 
  faPeopleGroup 
} from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    icon: faShareNodes,
    title: 'Social Media Marketing',
    desc: 'Instagram, Facebook, LinkedIn, TikTok, YouTube'
  },
  {
    icon: faChartLine,
    title: 'Digital Marketing',
    desc: 'SEO, PPC, Email, Content Marketing'
  },
  {
    icon: faUsers,
    title: 'Influencer Marketing',
    desc: 'Macro, micro, niche creators'
  },
  {
    icon: faBullhorn,
    title: 'Campaign Management',
    desc: 'Strategy-driven, measurable results'
  },
  {
    icon: faPenRuler,
    title: 'Content Creation',
    desc: '360° design, social, video, illustration'
  },
  {
    icon: faCamera,
    title: 'Photography',
    desc: 'Portrait, Fashion, Street, Product, Double Exposure'
  },
  {
    icon: faVideo,
    title: 'Videography',
    desc: 'Dynamic brand storytelling'
  },
  {
    icon: faCode,
    title: 'Web Development',
    desc: 'Custom, responsive, user-friendly'
  },
  {
    icon: faPeopleGroup,
    title: 'Team Consultancy',
    desc: 'Collaboration, leadership, performance'
  }
];

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="section-padding bg-light">
      <div className="container mx-auto max-w-7xl px-6">
        <h2 className="section-title text-navy">Our Services</h2>
        
        <motion.div 
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(11,26,51,0.08)] border-2 border-transparent hover:border-orange transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl text-orange mb-6">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h4 className="text-xl font-syne font-bold text-navy mb-2">{service.title}</h4>
              <p className="text-muted">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
