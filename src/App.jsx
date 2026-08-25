import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Clients from './components/Clients';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Clients />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <CTA />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
