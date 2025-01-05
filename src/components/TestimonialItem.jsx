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
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex h-[400px] gap-5">
          {testimonials.map((testi) => (
            <div
              key={testi.id}
              className="embla__slide flex flex-shrink-0 flex-grow-0 basis-full cursor-pointer select-none flex-col rounded-lg border shadow-md md:basis-1/2 lg:basis-[25%]"
            >
              <div className="p-4 text-center">
                <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-[#F27121]">
                  <span className="relative font-bold text-white">
                    {testi.company}
                  </span>
                </span>
              </div>
              <div className="flex flex-1 flex-col px-8 py-5 pt-5">
                <p className="flex-1">“{testi.testimonial}”</p>

                <div className="flex items-center gap-2">
                  <img src={testi.image} className="h-14 w-14 rounded-full" />
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
        className="embla__prev absolute -left-10 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-4xl lg:flex"
        onClick={scrollPrev}
      >
        &#8249;
      </button>
      <button
        className="embla__next absolute -right-10 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-4xl lg:flex"
        onClick={scrollNext}
      >
        &#8250;
      </button>
    </div>
  );
}
