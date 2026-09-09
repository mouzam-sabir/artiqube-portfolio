import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formState, setFormState] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('loading');
    // Simulate network request
    setTimeout(() => {
      setFormState('success');
      e.target.reset();
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24"
        >
          {/* Info Side */}
          <div>
            <h2 className="section-title text-left text-navy">Let's Talk</h2>
            <p className="text-lg text-muted mb-12">
              Have a project in mind? Let's create something amazing together.
            </p>

            <a href="mailto:info@artiqubesolutions.com" className="inline-flex items-center text-xl md:text-2xl font-syne font-bold text-navy hover:text-orange transition-colors duration-300 mb-12 group">
              <span className="text-orange mr-4 group-hover:-translate-y-1 transition-transform duration-300">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              info@artiqubesolutions.com
            </a>

            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1JbPkYXPzj/" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-light text-navy hover:bg-orange hover:text-white hover:scale-110 transition-all duration-300">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://www.instagram.com/artiqubesolutions/" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-light text-navy hover:bg-orange hover:text-white hover:scale-110 transition-all duration-300">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com/company/artiqubesolutions/" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-light text-navy hover:bg-orange hover:text-white hover:scale-110 transition-all duration-300">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-light p-8 rounded-2xl shadow-sm border border-slate-100">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-6 py-4 rounded-xl border border-transparent focus:border-orange focus:ring-4 focus:ring-orange/10 bg-white transition-all outline-none font-satoshi"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-6 py-4 rounded-xl border border-transparent focus:border-orange focus:ring-4 focus:ring-orange/10 bg-white transition-all outline-none font-satoshi"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="w-full px-6 py-4 rounded-xl border border-transparent focus:border-orange focus:ring-4 focus:ring-orange/10 bg-white transition-all outline-none font-satoshi resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={formState === 'loading'}
                className="btn btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formState === 'loading' ? 'Sending...' : 'Send Message →'}
              </button>

              {formState === 'success' && (
                <div className="p-4 bg-green-100 text-green-800 rounded-xl text-center font-satoshi animate-pulse">
                  Thanks for reaching out! We will get back to you soon.
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
