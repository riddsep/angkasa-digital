import { useInView } from "react-intersection-observer";
import Button from "./Button";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const Hero = ({ scrollToSection, berandaRef }) => {
  const [isSticky, setIsSticky] = useState(false);

  const { ref: heroRef, inView } = useInView({
    root: null, // Mengamati viewport browser
    threshold: 0, // Trigger ketika hero section keluar sebagian besar
    rootMargin: "0px", // Offset margin sesuai tinggi navbar
  });

  // Gunakan useEffect untuk update state
  useEffect(() => {
    setIsSticky(!inView);
  }, [inView]);
  return (
    <main
      ref={(el) => {
        heroRef(el);
        berandaRef.current = el;
      }}
      className={`relative ${
        isSticky ? "lg:pt-[90px]" : ""
      } w-full bg-top bg-no-repeat lg:min-h-screen lg:bg-hero-large lg:bg-cover`}
    >
      <Navbar isSticky={isSticky} scrollToSection={scrollToSection} />
      <div className="relative px-5 lg:hidden">
        <picture>
          <source srcSet="/hero-medium.png" media="(min-width: 640px)" />
          <img
            src="/hero-small.svg"
            className="w-full"
            width={400}
            height={400}
          />
        </picture>
        <div className="absolute left-0 right-0 top-0 mx-auto w-[80%] translate-y-1/2">
          <h3 className="text-clamp-2">Buat Website Impianmu</h3>
          <h1 className="mb-5 font-poppins-600 text-clamp">
            Percepat Pertumbuhan Bisnis Anda dengan Website professional!
          </h1>
          <Button
            variant={"primary"}
            onClick={() => scrollToSection("contact")}
          >
            Konsultasi gratis
          </Button>
          <span className="mr-2"></span>
          <Button
            variant={"secondary"}
            onClick={() => scrollToSection("features")}
          >
            Kenapa kami?
          </Button>
        </div>
      </div>
      <div className="mx-auto mt-32 hidden w-[90%] text-center lg:block">
        <h3 className="mb-2 text-clamp-2 font-semibold text-[#F27121]">
          Buat Website Impianmu
        </h3>
        <h1 className="mx-auto mb-8 w-[70%] text-center font-poppins-600 text-clamp text-white">
          Percepat Pertumbuhan Bisnis Anda dengan Website professional
        </h1>
        <Button variant={"primary"} onClick={() => scrollToSection("contact")}>
          Konsultasi gratis
        </Button>
        <span className="mr-3"></span>
        <Button
          variant={"secondary"}
          onClick={() => scrollToSection("features")}
        >
          Kenapa kami?
        </Button>
      </div>
    </main>
  );
};

export default Hero;
