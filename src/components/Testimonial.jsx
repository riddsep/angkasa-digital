import { TestimonialItem } from "./TestimonialItem";

const Testimonial = () => {
  return (
    <div className="mx-auto my-16 px-5 lg:my-[120px] lg:w-[90%]">
      <h1 className="mb-10 text-clamp-3 font-semibold">
        Testimonial Layanan Kami
      </h1>
      <TestimonialItem />
    </div>
  );
};

export default Testimonial;
