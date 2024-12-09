const features = [
  {
    id: 1,
    title: "Website Responsif",
    desc: "Kami menciptakan desain yang terlihat sempurna di perangkat apa pun, dari desktop hingga smartphone.",

    icon: "/Responsif.svg",
  },
  {
    id: 2,
    title: "Harga Terjangkau",
    desc: "Layanan berkualitas dengan harga yang bersahabat untuk UMKM.",
    icon: "/Price.svg",
  },
  {
    id: 3,
    title: "Sesuai Karakter",
    desc: "Website Anda, sesuai dengan kebutuhan dan karakter bisnis Anda.",
    icon: "/Hand.svg",
  },
  {
    id: 4,
    title: "Jaminan After Sales",
    desc: "Kami memberikan layanan support setelah peluncuran untuk memastikan website Anda selalu berjalan lancar.",
    icon: "/Support.svg",
  },
];

const CardList = () => {
  return (
    <section className="px-5 py-10 font-medium">
      <h1>Kenapa harus memilih kami</h1>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:w-[90%] mx-auto">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="p-6 bg-[#eeeeee] rounded-lg grid grid-cols-1 gap-2"
          >
            <img src={feature.icon} width={50} />
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardList;
