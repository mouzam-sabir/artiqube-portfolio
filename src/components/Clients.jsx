const logos = [
  'circular_logo.png', 'din_gardens.png', 'dr_aneeza.png',
  'dreams_homes.png', 'emaar.png', 'fluluna.png',
  'giant_movers.png', 'gloria_jeans.png', 'hair_extents.png',
  'jnr.png', 'kampus.png', 'keysha.png', 'laureate.png',
  'luxon.png', 'manzil_green.png', 'medical_green.png',
  'meerabs.png', 'nagina.png', 'newborn_babyshop.png',
  'priceoye.png', 'quran_guideline.png', 'raldor.png',
  'rumaisas_and_co.png', 'saad_developer.png', 'samsung.png',
  'sham_o_sdhar.png', 'she9.png', 'shuhwiz.png', 'telemart.png',
  'toheedsoft.png', 'ub.png', 'ultraderm.png', 'yango.png',
  'zameen_com.png'
];

const Clients = () => {

  return (
    <section id="clients" className="section-padding bg-light overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <h2 className="section-title text-navy">OUR CLIENTS</h2>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee marquee-left">
          <div className="marquee-content">
            {logos.map((logo, idx) => (
              <img key={`r1-${idx}`} src={`images/clients/${logo}`} alt="Client Logo" className="h-10 md:h-12 mx-8 hover:scale-105 transition-all duration-300" />
            ))}
            {logos.map((logo, idx) => (
              <img key={`r1-dup-${idx}`} src={`images/clients/${logo}`} alt="Client Logo" className="h-10 md:h-12 mx-8 hover:scale-105 transition-all duration-300" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
