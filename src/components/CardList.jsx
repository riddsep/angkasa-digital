const features = [
  {
    id: 1,
    title: "Solusi Lengkap",
    desc: "Mulai dari pembuatan website, manajemen media sosial, hingga strategi pemasaran—semua ada di sini.",

    icon: "/Responsif.svg",
  },
  {
    id: 2,
    title: "Fokus pada Kebutuhan Anda",
    desc: "Setiap solusi dirancang khusus untuk memenuhi target bisnis Anda.",
    icon: "/Price.svg",
  },
  {
    id: 3,
    title: "Berpengalaman dan Terpercaya",
    desc: "Dengan lebih dari 10 tahun pengalaman, kami selalu memberikan yang terbaik.",
    icon: "/Hand.svg",
  },
  {
    id: 4,
    title: "Selalu Inovatif",
    desc: "Kami terus mengikuti tren teknologi dan pemasaran terbaru untuk memberikan hasil terbaik.",
    icon: "/Support.svg",
  },
];

const CardList = ({ featuresRef }) => {
  return (
    <section
      className="mx-auto my-16 px-5 lg:my-[120px] lg:w-[90%]"
      ref={featuresRef}
    >
      <h1 className="mb-4 font-poppins-500 text-clamp-3">
        Kenapa harus memilih kami
      </h1>
      <p className="mb-10 max-w-[800px] lg:text-lg">
        Kami paham bahwa memilih partner digital adalah langkah penting untuk
        perkembangan bisnis Anda. Inilah alasan mengapa Angkasa Digital adalah
        pilihan yang tepat.
      </p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="grid grid-cols-1 gap-2 rounded-lg bg-[#eeeeee] p-6"
          >
            <img src={feature.icon} width={50} />
            <h3 className="font-bold md:text-lg">{feature.title}</h3>
            <p className="font-normal">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardList;
