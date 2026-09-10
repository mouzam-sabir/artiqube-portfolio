import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// ✅ MANUAL IMPORTS — 25 images
import img1 from '/images/clients/1.png';
import img2 from '/images/clients/2.png';
import img3 from '/images/clients/3.png';
import img4 from '/images/clients/4.png';
import img5 from '/images/clients/5.png';
import img6 from '/images/clients/6.png';
import img7 from '/images/clients/7.png';
import img8 from '/images/clients/8.png';
import img9 from '/images/clients/9.png';
import img10 from '/images/clients/10.png';
import img11 from '/images/clients/11.png';
import img12 from '/images/clients/12.png';
import img13 from '/images/clients/13.png';
import img14 from '/images/clients/14.png';
import img15 from '/images/clients/15.png';
import img16 from '/images/clients/16.png';
import img17 from '/images/clients/17.png';
import img18 from '/images/clients/18.png';
import img19 from '/images/clients/19.png';
import img20 from '/images/clients/20.png';
import img21 from '/images/clients/21.png';
import img22 from '/images/clients/22.png';
import img23 from '/images/clients/23.png';
import img24 from '/images/clients/24.png';
import img25 from '/images/clients/25.png';

const TrustedBy = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // ✅ All 25 logos in one array
    const logos = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
        img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
        img21, img22, img23, img24, img25
    ];

    return (
        <section id="trusted-by" className="pt-20 pb-12 bg-white">
            <div className="container mx-auto max-w-7xl px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-4xl md:text-5xl font-syne font-bold text-navy">
                        Trusted By <span className="text-orange">Industry Leaders</span>
                    </h2>
                    <div className="w-16 h-0.5 bg-orange mx-auto mt-3"></div>
                </motion.div>

                {/* Grid — 5 Columns */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, delay: index * 0.03 }}
                            className="flex items-center justify-center p-3 md:p-4 bg-light rounded-xl hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                        >
                            <img
                                src={logo}
                                alt={`Client ${index + 1}`}
                                className="h-10 md:h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;