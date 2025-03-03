const Service = ({ serviceRef }) => {
  return (
    <section
      className="mx-auto my-16 px-5 lg:my-[120px] lg:w-[90%]"
      ref={serviceRef}
    >
      <h1 className="mb-4 font-poppins-500 text-clamp-3">Layanan Kami</h1>
      <p className="mb-10 lg:text-lg">
        Kami menyediakan berbagai layanan digital untuk membantu bisnis Anda
        tumbuh
      </p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-0">
        <div className="flex h-full items-center justify-center rounded-br-full bg-[#F27121] p-5 lg:py-10">
          <img
            src="/service-1.png"
            className="h-[250px] w-auto max-w-full object-contain lg:h-[350px]"
            alt="Ilustrasi layanan pembuatan website"
          />
        </div>
        <div className="flex flex-col justify-center rounded border border-black p-5 sm:border-0 lg:p-10">
          <h1 className="font-bold lg:text-2xl">
            Pembuatan Website Modern dan Responsif
          </h1>
          <h3 className="mb-4 font-semibold text-[#F27121] lg:text-xl">
            Website yang Sesuai dengan Identitas Bisnis Anda
          </h3>
          <p className="lg:text-xl">
            Kami menyediakan layanan pembuatan website modern dan responsif yang
            dirancang dengan teknologi terbaru. Website kami disesuaikan dengan
            identitas bisnis Anda, tampil profesional, intuitif, dan kompatibel
            di berbagai perangkat untuk membantu meningkatkan kehadiran online
            dan menjangkau lebih banyak pelanggan.
          </p>
        </div>

        <div className="flex flex-col justify-center rounded border border-black p-5 sm:border-0 lg:p-10">
          <h1 className="font-bold lg:text-2xl">
            Tingkatkan Visibilitas Bisnis Anda di Google
          </h1>
          <h3 className="mb-4 font-semibold text-[#F27121] lg:text-xl">
            Optimasi Website untuk Pencarian Lebih Efektif
          </h3>
          <p className="font-normal lg:text-xl">
            Kami membantu bisnis Anda muncul lebih mudah di Google dengan teknik
            optimasi SEO yang tepat. Dengan strategi yang efektif, website Anda
            akan lebih sering tampil di hasil pencarian, meningkatkan
            visibilitas, menarik lebih banyak pengunjung, dan membantu
            pertumbuhan bisnis secara online.
          </p>
        </div>
        <div className="flex h-full items-center justify-center rounded-tl-full bg-[#F27121] p-5 lg:py-10">
          <img
            src="/service-2.png"
            className="h-[250px] w-auto max-w-full object-contain lg:h-[350px]"
            alt="Ilustrasi layanan pengembangan aplikasi"
          />
        </div>
      </div>
    </section>
  );
};

export default Service;
