import Button from "./Button";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <main className="font-sans lg:bg-hero-large lg:bg-cover bg-no-repeat w-full min-h-screen bg-top">
      <Navbar />
      <div className="px-5 relative lg:hidden">
        <picture>
          <source srcSet="/hero-medium.png" media="(min-width: 640px)" />
          <img src="/hero-small.svg" className="w-full" />
        </picture>
        <div className="absolute top-0 left-0 right-0 w-[80%] mx-auto translate-y-1/2 ">
          <h3 className="font-source text-clamp-2">Buat Website Impianmu</h3>
          <h1 className="font-source-600 text-clamp mb-5">
            Percepat Pertumbuhan Bisnis Anda dengan Website professional!
          </h1>
          <Button variant={"primary"}>Konsultasi gratis</Button>
          <span className="mr-2"></span>
          <Button variant={"secondary"}>Siapa kami?</Button>
        </div>
      </div>
      <div className="w-[90%] mx-auto mt-24 hidden lg:block">
        <h3 className="font-source text-clamp-2 mb-2">Buat Website Impianmu</h3>
        <h1 className="font-source-600 text-clamp w-[60%] mb-8">
          Percepat Pertumbuhan Bisnis Anda dengan Website professional
        </h1>
        <Button variant={"primary"}>Konsultasi gratis</Button>
        <span className="mr-3"></span>
        <Button variant={"secondary"}>Siapa kami?</Button>
      </div>
    </main>
  );
};

export default Hero;
