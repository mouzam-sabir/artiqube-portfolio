import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-12 pb-8 border-t border-slate-800">
      <div className="container mx-auto max-w-7xl px-6">

        {/* TOP ROW: LOGO + TAGLINE (CENTERED) */}
        <div className="text-center flex flex-col items-center">
          <img
            src="images/logo/artiqube logo.png"
            alt="ArtiQube Logo"
            className="h-12 md:h-14 w-auto mb-0"
          />
          <p className="text-slate-300 font-satoshi text-sm md:text-base mb-0">
            Centered Digital Solutions Since 2019
          </p>
        </div>

        {/* BOTTOM ROW: LEFT (CONTACT) | RIGHT (SOCIAL) — EDGE SE */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 pt-6 border-t border-slate-800">

          {/* LEFT: Contact Info */}
          <div className="flex flex-col md:flex-row gap-1 md:gap-4 items-center md:items-start text-sm md:text-base">
            <a href="mailto:artiqubesolutions@gmail.com" className="font-syne font-bold hover:text-orange transition-colors duration-300">
              artiqubesolutions@gmail.com
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <a href="tel:+923204456666" className="font-syne font-bold hover:text-orange transition-colors duration-300">
              +92 320 4456666
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="font-syne font-bold">Lahore, Pakistan</span>
          </div>

          {/* RIGHT: Social Icons */}
          <div className="flex gap-5 md:gap-6 mt-3 md:mt-0">
            <a href="https://www.facebook.com/share/1JbPkYXPzj/" target="_blank" rel="noreferrer" className="text-white hover:text-orange transition-colors duration-300 text-lg" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.instagram.com/artiqubesolutions/" target="_blank" rel="noreferrer" className="text-white hover:text-orange transition-colors duration-300 text-lg" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/company/artiqubesolutions/" target="_blank" rel="noreferrer" className="text-white hover:text-orange transition-colors duration-300 text-lg" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center border-t border-slate-800 pt-6 mt-2 text-xs text-slate-400 font-satoshi gap-2">
          <p>&copy; 2026 Artiqube. All rights reserved.</p>
          <p className="font-syne font-bold tracking-widest text-slate-300 text-xs">THINK. SYNC. INC.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;