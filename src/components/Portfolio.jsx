import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  { name: 'Fluriluna',           category: 'Social Media / Skincare',   file: 'Fluriluna.png',             description: 'Skincare campaign'    },
  { name: 'Keyshaa',             category: 'Fashion / Social Media',    file: 'Keyshaa_official.png',      description: 'Fashion editorial'    },
  { name: 'Giant Movers',        category: 'Branding / Campaign',       file: 'The Giant Movers.png',      description: 'Dubai moving co.'     },
  { name: 'Aesthetics Hub',      category: 'Social Media / Branding',   file: 'Aesthetics Hub.png',        description: 'Aesthetic clinic'     },
  { name: 'Zeromile',            category: 'Digital Campaign',          file: 'Zeromile.png',              description: 'PPF campaign'         },
  { name: 'Portrait Photography', category: 'Photography',              file: 'Portrait Photography.png',  description: 'Portrait photography' },
  { name: 'Fashion Photography', category: 'Photography',               file: 'Fashion Photography.png',   description: 'Fashion editorial'    },
  { name: 'Product Photography', category: 'Photography',               file: 'Product Photography.png',   description: 'Product detail'       },
  { name: 'Double Exposure',     category: 'Photography',               file: 'Double Exposure.png',       description: 'Double exposure art'  },
];

const Portfolio = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="work" className="py-20 bg-white px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-syne font-bold text-center text-navy">OUR WORK</h2>
        <p className="text-center text-textmuted font-satoshi mt-2 mb-12 max-w-2xl mx-auto">
          Featured Campaigns & Projects — Real results for real brands.
        </p>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={`/images/portfolio/${project.file}`}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    console.error(`Failed to load image: /images/portfolio/${project.file}`);
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-family="sans-serif" font-size="20"%3ENo Image%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="bg-orange text-white text-xs font-satoshi font-semibold px-3 py-1 rounded-full w-fit mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white font-syne text-xl font-bold">{project.name}</h3>
                  <p className="text-white/80 font-satoshi text-sm mt-1">{project.description}</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-syne font-bold text-navy">{project.name}</h3>
                <p className="text-textmuted font-satoshi text-sm">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;