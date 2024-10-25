"use client";
import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from 'next/link';
import { motion } from 'framer-motion';

// Custom Arrow components
const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#212529",
        borderRadius: "50%",
        fontSize: "30px", // Reduce arrow size for better responsiveness
        // padding: "10px",  // Add padding for clickability
        right: "-25px",   // Move arrow outside content area
        zIndex: 2,        // Ensure arrows are above the slider
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#212529",
        borderRadius: "50%",
        fontSize: "30px", // Reduce arrow size for better responsiveness
        // padding: "10px",  // Add padding for clickability
        left: "-25px",    // Move arrow outside content area
        zIndex: 2,        // Ensure arrows are above the slider
      }}
      onClick={onClick}
    />
  );
};

interface TeamMember {
  name: string;
  role: string;
  imageSrc: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Danial Jain",
    role: "Mechanical Engineering",
    imageSrc: "/pictures/rani.jpeg",
  },
  {
    name: "Margorie Hych",
    role: "Testing Manager",
    imageSrc: "/pictures/rani.jpeg",
  },
  {
    name: "Cheryl Ray Lam",
    role: "Interior Designer",
    imageSrc: "/pictures/rani.jpeg",
  },
];

const TeamSection: React.FC = () => {
  const settings = {
    dots: true, // Enable dots under the slider
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 team members at once
    slidesToScroll: 1,
    autoplay: true, // Automatically slide
    autoplaySpeed: 3000, // 3 seconds interval
    arrows: true, // Left and right arrow navigation
    nextArrow: <NextArrow />, // Custom Next Arrow
    prevArrow: <PrevArrow />, // Custom Prev Arrow
    responsive: [
      {
        breakpoint: 1024, // For tablet and smaller screens
        settings: {
          slidesToShow: 2, // Show 2 slides at once
          arrows: true, // Keep arrows on tablet screens
        },
      },
      {
        breakpoint: 768, // For medium-sized tablets
        settings: {
          slidesToShow: 1, // Show 1 slide at once
          arrows: false, // Hide arrows on mobile for better user experience
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-orange-50 mt-12">
      <div className="container text-center px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto p-6 mt-12">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
          OUR <span className="text-orange-500">TEAM</span>
        </h2>
        <p className="text-gray-900 font-medium mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar
          lacus at feugiat iaculis. Suspendisse at viverra mauris, sit amet
          facilisis lectus.
        </p>

        {/* Slider with Team Members */}
        <Slider {...settings}>
          {teamMembers.map((member) => (
            <div key={member.name} className="p-4 mx-[4px]">
              <div className="text-center bg-white p-8 border-x-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  width={144}
                  height={144}
                  className="object-cover mb-4 rounded-full border-4 border-gray-900 mx-auto"
                />
                {/* <h3 className="text-lg font-semibold mb-2 text-white bg-orange-500 hover:bg-[#3b5065] inline-block px-6 py-2 rounded-md">
                  {member.name}
                </h3> */}

                <div>
                  
                    <motion.button
                      className="bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold mt-7"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {member.name}
                    </motion.button>
                  
                </div>
                <p className="italic font-semibold text-gray-900">{member.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TeamSection;
