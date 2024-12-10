const Service = () => {
  return (
    <section className="px-5 font-medium lg:w-[90%] mx-auto my-16 lg:my-[120px]">
      <h1 className="text-clamp-3 mb-10">Layanan Kami</h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-0">
        <div className="bg-[#F27121] px-5 lg:py-10 rounded-br-full  flex justify-center items-center h-full ">
          <img
            src="/service-1.svg"
            className="h-80 lg:h-96"
            alt="Ilustrasi layanan pembuatan website"
          />
        </div>
        <div className="p-5 lg:p-10 rounded flex justify-center flex-col border sm:border-0 border-black">
          <h1 className="font-bold lg:text-2xl">
            Pembuatan Website untuk UMKM & Koperasi
          </h1>
          <h3 className="font-semibold text-[#F27121] lg:text-xl mb-4">
            Tingkatkan Bisnis Anda dengan Website Profesional
          </h3>
          <p className="font-normal lg:text-xl">
            Kami menyediakan layanan pembuatan website modern yang dirancang
            khusus untuk UMKM dan koperasi. Website Anda akan tampil menarik
            dengan desain responsif, fitur lengkap, dan optimasi SEO, membantu
            menjangkau lebih banyak pelanggan.
          </p>
        </div>

        <div className="p-5 lg:p-10 rounded flex justify-center flex-col border sm:border-0 border-black">
          <h1 className="font-bold lg:text-2xl">
            Pengembangan Aplikasi Custom untuk UMKM
          </h1>
          <h3 className="font-semibold text-[#F27121] lg:text-xl mb-4">
            Solusi Digital untuk Mendukung Bisnis Anda
          </h3>
          <p className="font-normal lg:text-xl">
            Kami menawarkan pengembangan aplikasi custom yang disesuaikan dengan
            kebutuhan bisnis Anda. Mulai dari manajemen keuangan hingga platform
            e-commerce, aplikasi kami dirancang untuk meningkatkan efisiensi
            operasional UMKM dan koperasi Anda.
          </p>
        </div>
        <div className="bg-[#F27121] px-5 py-5 lg:py-10 rounded-tl-full flex justify-center items-center h-full ">
          <img
            src="/service-2.svg"
            className="h-80 lg:h-96"
            alt="Ilustrasi layanan pengembangan aplikasi"
          />
        </div>
      </div>
    </section>
  );
};

export default Service;
