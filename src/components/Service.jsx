const Service = ({ serviceRef }) => {
  return (
    <section
      className="mx-auto my-16 px-5 lg:my-[120px] lg:w-[90%]"
      ref={serviceRef}
    >
      <h1 className="mb-10 font-poppins-500 text-clamp-3">Layanan Kami</h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-0">
        <div className="flex h-full items-center justify-center rounded-br-full bg-[#F27121] px-5 lg:py-10">
          <img
            src="/service-1.png"
            className="h-80 lg:h-96"
            alt="Ilustrasi layanan pembuatan website"
          />
        </div>
        <div className="flex flex-col justify-center rounded border border-black p-5 sm:border-0 lg:p-10">
          <h1 className="font-bold lg:text-2xl">
            Pembuatan Website untuk UMKM & Koperasi
          </h1>
          <h3 className="mb-4 font-semibold text-[#F27121] lg:text-xl">
            Tingkatkan Bisnis Anda dengan Website Profesional
          </h3>
          <p className="lg:text-xl">
            Kami menyediakan layanan pembuatan website modern yang dirancang
            khusus untuk UMKM dan koperasi. Website Anda akan tampil menarik
            dengan desain responsif, fitur lengkap, dan optimasi SEO, membantu
            menjangkau lebih banyak pelanggan.
          </p>
        </div>

        <div className="flex flex-col justify-center rounded border border-black p-5 sm:border-0 lg:p-10">
          <h1 className="font-bold lg:text-2xl">
            Pengembangan Aplikasi Custom untuk UMKM
          </h1>
          <h3 className="mb-4 font-semibold text-[#F27121] lg:text-xl">
            Solusi Digital untuk Mendukung Bisnis Anda
          </h3>
          <p className="font-normal lg:text-xl">
            Kami menawarkan pengembangan aplikasi custom yang disesuaikan dengan
            kebutuhan bisnis Anda. Mulai dari manajemen keuangan hingga platform
            e-commerce, aplikasi kami dirancang untuk meningkatkan efisiensi
            operasional UMKM dan koperasi Anda.
          </p>
        </div>
        <div className="flex h-full items-center justify-center rounded-tl-full bg-[#F27121] px-5 py-5 lg:py-10">
          <img
            src="/service-2.png"
            className="h-80 lg:h-96"
            alt="Ilustrasi layanan pengembangan aplikasi"
          />
        </div>
      </div>
    </section>
  );
};

export default Service;
