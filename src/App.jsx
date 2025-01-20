import { lazy, Suspense, useRef } from "react";
import CardList from "./components/CardList";
import Loader from "./components/Loader";

const Accordion = lazy(() => import("./components/Accordion"));
const Footer = lazy(() => import("./components/Footer"));
const Hero = lazy(() => import("./components/Hero"));
const Konsultasi = lazy(() => import("./components/Konsultasi"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Service = lazy(() => import("./components/Service"));
const Testimonial = lazy(() => import("./components/Testimonial"));

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
    <Suspense fallback={<Loader />}>
      <Hero scrollToSection={scrollToSection} berandaRef={berandaRef} />
      <CardList featuresRef={featuresRef} />
      <Service serviceRef={serviceRef} />
      <Portfolio portfolioRef={portfolioRef} />
      <Testimonial />
      <Konsultasi contactRef={contactRef} />
      <Accordion faqRef={faqRef} />
      <Footer />
    </Suspense>
  );
}

export default App;
