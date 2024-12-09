const Service = () => {
  return (
    <section className="px-5 font-medium lg:w-[90%] mx-auto my-16 lg:my-[120px]">
      <h1 className="text-clamp-3 mb-10">Layanan Kami</h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-0">
        <div className="bg-[#F27121] p-5 rounded flex justify-center">
          <img src="/service-1.svg" />
        </div>
        <div className="p-5 lg:p-10 rounded bg-[#eeeeee] flex justify-center flex-col">
          <h1 className="font-bold lg:text-2xl">
            Pembuatan Website untuk UMKM & Koperasi
          </h1>
          <h3 className="font-semibold text-[#F27121] lg:text-xl mb-4">
            Bantu Bisnis Anda Tumbuh dengan Website Profesional
          </h3>
          <p className="font-normal lg:text-xl">
            Kami menyediakan layanan pembuatan website modern yang dirancang
            khusus untuk UMKM dan koperasi. Dengan desain responsif, fitur
            lengkap, dan optimasi SEO, website Anda akan tampil menarik dan
            mampu menjangkau lebih banyak pelanggan.
          </p>
        </div>

        <div className="p-5 lg:p-10 rounded bg-[#eeeeee] flex justify-center flex-col ">
          <h1 className="font-bold lg:text-2xl">
            Pembuatan Website untuk UMKM & Koperasi
          </h1>
          <h3 className="font-semibold text-[#F27121] lg:text-xl mb-4">
            Solusi Digital Praktis untuk Mengelola Bisnis Anda
          </h3>
          <p className="font-normal lg:text-xl">
            Kami menawarkan layanan pengembangan aplikasi custom yang
            disesuaikan dengan kebutuhan UMKM dan koperasi. Mulai dari aplikasi
            manajemen keuangan hingga platform e-commerce, kami siap membantu
            meningkatkan efisiensi bisnis Anda.
          </p>
        </div>
        <div className="bg-[#F27121] p-5 rounded flex justify-center">
          <img src="/service-2.svg" />
        </div>
      </div>
    </section>
  );
};

export default Service;
