"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";

// Testimonial Data
const testimonials = [
  {
    name: "Maria Robinson",
    imageUrl: "/pictures/rani.jpeg",
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed pulvinar ex.",
  },
  {
    name: "John Doe",
    imageUrl: "/pictures/rani.jpeg",
    rating: 5,
    text: "Aenean tristique eros vel mi tincidunt, nec suscipit sem placerat. Praesent posuere felis et.",
  },
  {
    name: "Alice Johnson",
    imageUrl: "/pictures/rani.jpeg",
    rating: 3,
    text: "Vestibulum eget nisl quis erat dapibus sollicitudin. Cras in metus ut mi tempor consequat.",
  },
  {
    name: "Michael Lee",
    imageUrl: "/pictures/rani.jpeg",
    rating: 4,
    text: "Quisque a turpis a odio sollicitudin convallis vel id nulla. Etiam a metus non orci sodales.",
  },
  {
    name: "Emily Davis",
    imageUrl: "/pictures/rani.jpeg",
    rating: 5,
    text: "Proin dignissim magna vel fermentum aliquam. Aenean sollicitudin odio vitae facilisis accumsan.",
  },
  {
    name: "Daniel Clark",
    imageUrl: "/pictures/rani.jpeg",
    rating: 4,
    text: "Morbi sit amet sem sit amet lorem gravida ullamcorper. Nam tincidunt velit non fermentum tempor.",
  },
];

// Testimonial Card Component
const TestimonialCard = ({ name, imageUrl, rating, text }: any) => (
  <div className="p-8 bg-white rounded-xl shadow-lg border mx-auto max-w-xs sm:max-w-md lg:max-w-lg mb-8">
    {/* Circular Image with Border */}
    <div className="relative w-40 h-40 mx-auto mb-6 rounded-full border-4 border-gray-900 overflow-hidden">
      <Image
        src={imageUrl}
        alt={name}
        layout="fill"
        objectFit="cover"
        className="rounded-full"
      />
    </div>

    <h3 className="text-xl font-semibold text-orange-500 text-center mb-2">{name}</h3>
    <div className="flex justify-center mb-4">
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-xl">★</span>
      ))}
      {Array.from({ length: 5 - rating }).map((_, i) => (
        <span key={i} className="text-gray-900 font-medium text-xl">☆</span>
      ))}
    </div>
    <p className="text-center text-gray-900 font-medium mb-5 leading-relaxed">
      {text}
    </p>
  </div>
);

// Testimonials Section
const Testimonials = () => (
  <div className="py-16 bg-white mt-10 px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900">TESTIMONIALS</h2>
      <p className="text-gray-900 font-medium mt-6 mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar lacus at feugiat iaculis.
        Suspendisse at viverra mauris, sit amet facilisis lectus.
      </p>
    </div>

    {/* Swiper for Testimonials */}
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true, el: ".swiper-pagination", type: "bullets" }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      breakpoints={{
        640: { slidesPerView: 1, spaceBetween: 10 },  // Mobile devices
        768: { slidesPerView: 2, spaceBetween: 20 },  // Tablets
        1024: { slidesPerView: 2, spaceBetween: 30 }, // Laptops/Desktops
      }}
      className="max-w-6xl mx-auto"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <TestimonialCard
            name={testimonial.name}
            imageUrl={testimonial.imageUrl}
            rating={testimonial.rating}
            text={testimonial.text}
          />
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Pagination Dots */}
    <div className="flex justify-center mt-6">
      <div className="swiper-pagination"></div>
    </div>
  </div>
);

export default Testimonials;
