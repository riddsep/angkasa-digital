import Accordion from "./components/Accordion";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Konsultasi from "./components/Konsultasi";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Hero />
      <CardList />
      <Service />
      <Portfolio />
      <Testimonial />
      <Konsultasi />
      <Accordion />
      <Footer />
    </>
  );
}

export default App;
