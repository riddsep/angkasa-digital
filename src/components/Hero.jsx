import Button from "./Button";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <main className="lg:bg-hero-large lg:bg-cover bg-no-repeat w-full lg:min-h-screen bg-top">
      <Navbar />
      <div className="px-5 relative lg:hidden">
        <picture>
          <source srcSet="/hero-medium.png" media="(min-width: 640px)" />
          <img
            src="/hero-small.svg"
            className="w-full"
            width={400}
            height={400}
          />
        </picture>
        <div className="absolute top-0 left-0 right-0 w-[80%] mx-auto translate-y-1/2 ">
          <h3 className="text-clamp-2">Buat Website Impianmu</h3>
          <h1 className="font-poppins-600 text-clamp mb-5">
            Percepat Pertumbuhan Bisnis Anda dengan Website professional!
          </h1>
          <Button variant={"primary"}>Konsultasi gratis</Button>
          <span className="mr-2"></span>
          <Button variant={"secondary"}>Siapa kami?</Button>
        </div>
      </div>
      <div className="w-[90%] mx-auto text-center mt-32 hidden lg:block">
        <h3 className="text-clamp-2 mb-2 text-[#F27121] font-semibold ">
          Buat Website Impianmu
        </h3>
        <h1 className="font-poppins-600 text-clamp w-[70%] mx-auto mb-8 text-white text-center">
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
