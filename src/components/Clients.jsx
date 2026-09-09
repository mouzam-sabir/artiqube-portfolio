// ✅ MANUAL IMPORTS — Numbers 1 se 8 tak
import img1 from '/images/clients/1.png';
import img2 from '/images/clients/2.png';
import img3 from '/images/clients/3.png';
import img4 from '/images/clients/4.png';
import img5 from '/images/clients/5.png';
import img6 from '/images/clients/6.png';
import img7 from '/images/clients/7.png';
import img8 from '/images/clients/8.png';

const Clients = () => {
  const logos = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <section id="clients" className="pt-10 pb-0 bg-white overflow-hidden">
      <div className="w-full px-0">
        {/* Top Border */}
        <div className="w-full h-0.5 bg-orange mb-6"></div>

        {/* Moving Logos Row */}
        <div className="relative overflow-hidden">
          <div className="flex gap-16 md:gap-24 whitespace-nowrap animate-marquee">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Client ${index + 1}`}
                className="h-14 md:h-20 w-auto object-contain hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom Border */}
        <div className="w-full h-0.5 bg-orange mt-6"></div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default Clients;