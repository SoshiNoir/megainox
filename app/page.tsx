import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';
import ProductsSection from './components/ProductSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <section id='produtos'>
        <ProductsSection />
      </section>
      <section id='info'>
        <InfoSection />
      </section>
      <section id='sobre'>
        <AboutSection />
      </section>
      <section id='contato'>
        <ContactSection />
      </section>
    </>
  );
}
