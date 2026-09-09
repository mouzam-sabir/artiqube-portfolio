import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
    const allTestimonials = [
        {
            id: 1,
            name: 'Ahmed Raza',
            company: 'The Giant Movers',
            text: 'Artiqube completely transformed our digital presence. Their strategic approach and creative execution delivered measurable results.',
            rating: 5,
        },
        {
            id: 2,
            name: 'Sana Khan',
            company: 'Aesthetics Hub',
            text: 'Working with Artiqube has been a game-changer for our clinic. Our social media engagement increased by over 200% in just three months.',
            rating: 5,
        },
        {
            id: 3,
            name: 'Usman Malik',
            company: 'Fluriluna',
            text: 'The team at Artiqube truly understands brand building. They helped us create a cohesive brand identity that resonates with our customers.',
            rating: 5,
        },
        {
            id: 4,
            name: 'Fatima Noor',
            company: 'Keyshaa Official',
            text: 'Artiqube took our fashion brand to the next level. Their content creation and social media strategy is unmatched in the industry.',
            rating: 5,
        },
        {
            id: 5,
            name: 'Ali Hassan',
            company: 'Zeromile Detailing',
            text: 'Our automotive brand needed a strong digital presence. Artiqube delivered a comprehensive campaign that boosted our sales significantly.',
            rating: 5,
        },
        {
            id: 6,
            name: 'Zara Tariq',
            company: 'Dream Homes Marketing',
            text: 'Artiqube helped us build a brand that stands out in the competitive real estate market. Their branding and marketing strategies are top-notch.',
            rating: 5,
        },
        {
            id: 7,
            name: 'Hassan Rauf',
            company: 'Sham O Sdhar',
            text: 'Working with Artiqube has been a breath of fresh air. They understand our vision and execute it flawlessly every single time.',
            rating: 5,
        },
        {
            id: 8,
            name: 'Ayesha Amir',
            company: 'Quran Guideline',
            text: 'Artiqube helped us connect with our audience on a deeper level. Their digital marketing approach was both creative and effective.',
            rating: 5,
        },
    ];

    const [startIndex, setStartIndex] = useState(0);

    const nextSlide = () => {
        setStartIndex((prev) => (prev + 1) % allTestimonials.length);
    };

    const prevSlide = () => {
        setStartIndex((prev) => (prev - 1 + allTestimonials.length) % allTestimonials.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    const getVisibleClients = () => {
        const result = [];
        for (let i = 0; i < 3; i++) {
            const index = (startIndex + i) % allTestimonials.length;
            result.push(allTestimonials[index]);
        }
        return result;
    };

    const visibleClients = getVisibleClients();

    return (
        <section id="testimonials" className="section-padding bg-light overflow-hidden">
            <div className="container mx-auto max-w-7xl px-6">
                <div className="text-center mb-12">
                    <h2 className="section-title text-center text-navy">
                        What Our Clients <span className="text-orange">Are Saying</span>
                    </h2>
                    <div className="w-20 h-1 bg-orange mx-auto mt-4"></div>
                </div>

                <div className="relative">
                    {/* Left Arrow */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 z-20 bg-white/80 hover:bg-orange hover:text-white text-navy w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
                        aria-label="Previous"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 z-20 bg-white/80 hover:bg-orange hover:text-white text-navy w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
                        aria-label="Next"
                    >
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>

                    {/* 3 Columns — STATIC, NO ANIMATION */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {visibleClients.map((testimonial, index) => {
                            const isCenter = index === 1;

                            return (
                                <div
                                    key={`${testimonial.id}-${startIndex}`}
                                    className={`bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                                        isCenter ? 'opacity-100 scale-100' : 'opacity-40 scale-90'
                                    }`}
                                >
                                    <div className="text-orange text-3xl mb-4 opacity-40">
                                        <FontAwesomeIcon icon={faQuoteLeft} />
                                    </div>

                                    <p className="text-navy font-satoshi text-base leading-relaxed mb-6">
                                        "{testimonial.text}"
                                    </p>

                                    <div className="flex text-orange mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <FontAwesomeIcon key={i} icon={faStar} className="text-sm" />
                                        ))}
                                    </div>

                                    <div>
                                        <h4 className="font-syne font-bold text-navy text-lg">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-textmuted font-satoshi text-sm">
                                            {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
