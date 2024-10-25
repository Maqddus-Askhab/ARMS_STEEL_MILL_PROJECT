'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      title: 'Steel That Builds Tomorrow',
      description: 'High-quality steel designed to meet the demands of future infrastructure and technology.',
      imageUrl: '/pictures/front.jpg'
    },
    {
      id: 2,
      title: 'INNOVATIVE SOLUTIONS BY ARMS STEEL',
      description: 'Pushing the boundaries of steel technology to create stronger, more sustainable materials.t',
      imageUrl: '/pictures/front2.jpg'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-[calc(100vh-50px)] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Use the Image component */}
          <Image
            src={slide.imageUrl}
            alt={slide.title}
            layout="fill"
            objectFit="cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gray-950 bg-opacity-80"></div>
          <div className="relative flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h1 className="text-6xl font-bold mb-4 text-white">{slide.title}</h1>
              <p className="text-xl font-medium mb-6 ">{slide.description}</p>
              {/* <a href="#" className="bg-orange-500 hover:bg-[#3b5065] text-white font-bold py-3 px-6 rounded-full">
                {slide.buttonLabel}
              </a> */}

              <div>
                <Link href="/pages/contact" passHref>
                  <motion.button
                    className="bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold mt-7 "
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      ))}

      {/* Slider Controls */}
      <button
        onClick={handlePrev}
        className="slider-button absolute top-1/2 left-4 transform -translate-y-1/2 z-10 hover:opacity-100 bg-gray-900"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="slider-button absolute top-1/2 right-4 transform -translate-y-1/2 z-10 hover:opacity-100"
      >
        &#10095;
      </button>
    </section>
  );
};

export default HeroSlider;
