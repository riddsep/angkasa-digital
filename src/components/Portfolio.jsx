import Button from "./Button";

const Portfolio = ({ portfolioRef }) => {
  return (
    <section
      className="mx-auto my-16 grid grid-cols-1 gap-10 px-5 md:grid-cols-2 lg:my-[120px] lg:w-[90%]"
      ref={portfolioRef}
    >
      <div>
        <h1 className="mb-10 text-clamp-3 font-semibold">Portfolio Kami</h1>
        <h3 className="mb-2 font-poppins-600 text-[#F27121] lg:text-xl">
          Website Halo Legal
        </h3>
        <p className="mb-4 lg:text-xl">
          Kami telah membantu Halo Legal membuat website profesional untuk
          menampilkan layanan legalitas dan perizinan terpercaya, memperkuat
          branding, dan mempermudah komunikasi dengan para pelaku usaha.
        </p>
        <Button
          variant={"primary"}
          width={"w-fit"}
          href={"https://ridoseptiawan.vercel.app"}
        >
          Lihat detail project
        </Button>
      </div>
      <div>
        <img src="/portofolio.png" className="w-full" />
      </div>
    </section>
  );
};

export default Portfolio;
