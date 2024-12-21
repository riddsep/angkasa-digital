import { TestimonialItem } from "./TestimonialItem";

const Testimonial = () => {
  return (
    <div className="px-5 lg:w-[90%] mx-auto my-16 lg:my-[120px]">
      <h1 className="text-clamp-3 mb-10 font-semibold">
        Testimonial Layanan Kami
      </h1>
      <TestimonialItem />
    </div>
  );
};

export default Testimonial;
