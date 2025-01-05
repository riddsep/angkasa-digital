import { useRef } from "react";
import Accordion from "./components/Accordion";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Konsultasi from "./components/Konsultasi";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";

function App() {
  const berandaRef = useRef(null);
  const featuresRef = useRef(null);
  const serviceRef = useRef(null);
  const portfolioRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const sectionRefs = {
      home: berandaRef,
      features: featuresRef,
      service: serviceRef,
      portfolio: portfolioRef,
      faq: faqRef,
      contact: contactRef,
    };

    if (sectionRefs[section] && sectionRefs[section].current) {
      const sectionTop =
        sectionRefs[section].current.getBoundingClientRect().top;

      let offset = -110; // Default offset untuk desktop
      if (window.innerWidth <= 768) {
        // Misalnya, offset lebih kecil di layar mobile
        offset = -180;
      }

      window.scrollTo({
        top: window.scrollY + sectionTop + offset,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <Hero scrollToSection={scrollToSection} berandaRef={berandaRef} />
      <CardList featuresRef={featuresRef} />
      <Service serviceRef={serviceRef} />
      <Portfolio portfolioRef={portfolioRef} />
      <Testimonial />
      {/* <Konsultasi contactRef={contactRef} /> */}
      <Accordion faqRef={faqRef} />
      <Footer />
    </>
  );
}

export default App;
