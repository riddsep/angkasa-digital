import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
const testimonials = [
  {
    id: 1,
    name: "Randy Wijaya",
    position: "CEO",
    company: "Digital Innovate",
    testimonial:
      "Kami sangat puas dengan layanan yang diberikan. Website perusahaan kami terlihat modern, profesional, dan performanya sangat baik. Tim ini sangat responsif terhadap kebutuhan kami.",
    image: "https://randomuser.me/api/portraits/men/45.jpg", // URL gambar asli
  },
  {
    id: 2,
    name: "Ayu Lestari",
    position: "Marketing Manager",
    company: "Toko Sukses Abadi",
    testimonial:
      "Tim ini berhasil membuat website toko online kami dengan sangat cepat dan sesuai ekspektasi. Penjualan kami meningkat pesat berkat fitur e-commerce yang user-friendly.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 3,
    name: "Dimas Pratama",
    position: "Owner",
    company: "Dimas Photography",
    testimonial:
      "Saya sangat terkesan dengan desain portofolio yang elegan dan menarik. Klien saya sekarang dapat melihat karya saya dengan lebih mudah, berkat website ini.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 4,
    name: "Sari Oktaviani",
    position: "CFO",
    company: "Startup Digital",
    testimonial:
      "Proses pembuatan website berjalan lancar dan cepat. Website yang dihasilkan sangat mencerminkan identitas startup kami. Sangat merekomendasikan layanan ini!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 5,
    name: "Hendra Saputra",
    position: "Product Manager",
    company: "Tech Solutions",
    testimonial:
      "Website yang dibuat sangat responsif, performanya luar biasa, dan mendukung skala bisnis kami. Terima kasih untuk solusi terbaik yang diberikan.",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
];

export function TestimonialItem() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="embla  overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-5 h-[400px]">
          {testimonials.map((testi) => (
            <div
              key={testi.id}
              className="embla__slide flex-grow-0 flex-shrink-0 lg:basis-[25%] md:basis-1/2 basis-full shadow-md flex flex-col select-none cursor-pointer  rounded-lg"
            >
              <div className="p-4 text-center ">
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#F27121] relative inline-block">
                  <span className="relative text-white">{testi.company}</span>
                </span>
              </div>
              <div className="px-8 py-5 flex flex-col flex-1 pt-5 ">
                <p className="flex-1">“{testi.testimonial}”</p>

                <div className="flex items-center gap-2">
                  <img src={testi.image} className="w-14 h-14 rounded-full" />
                  <div className="flex flex-col">
                    <p className="font-semibold">{testi.name}</p>
                    <small className="text-gray-600">{testi.position}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="embla__prev text-4xl absolute top-1/2 -translate-y-1/2 -left-10  rounded-full w-10 h-10 lg:flex items-center justify-center hidden "
        onClick={scrollPrev}
      >
        &#8249;
      </button>
      <button
        className="embla__next text-4xl absolute top-1/2 -translate-y-1/2 -right-10  rounded-full w-10 h-10 lg:flex items-center justify-center hidden "
        onClick={scrollNext}
      >
        &#8250;
      </button>
    </div>
  );
}
