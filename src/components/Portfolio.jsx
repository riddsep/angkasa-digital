const Portfolio = () => {
  return (
    <section className="px-5 lg:w-[90%] mx-auto my-16 lg:my-[120px] grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <h1 className="text-clamp-3 mb-10 font-semibold">Portfolio Kami</h1>
        <h3 className="font-bold text-[#F27121] lg:text-xl mb-2">
          Website Halo Legal
        </h3>
        <p className="lg:text-xl">
          Kami telah membantu Halo Legal membuat website profesional untuk
          menampilkan layanan legalitas dan perizinan terpercaya, memperkuat
          branding, dan mempermudah komunikasi dengan para pelaku usaha.
        </p>
      </div>
      <div>
        <img src="/portfolio.svg" />
      </div>
    </section>
  );
};

export default Portfolio;
