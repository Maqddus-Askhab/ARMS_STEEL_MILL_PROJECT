'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import mainImage from '../../public/pictures/front2.jpg';
import workerImage from '../../public/pictures/front3.jpg';

const IndustrySection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto p-6 mt-20">
      {/* Text Section */}
      <div className="md:w-1/2 p-6">
        <h2 className="text-orange-500 text-lg font-semibold">About Industrip</h2>
        <h1 className="text-gray-900 text-4xl font-bold mt-2">INDUSTRY AND ENGINEERING</h1>
        <p className="text-gray-900 font-medium mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis augue, dapibus non ex non, posuere
          mattis tellus. Suspendisse laoreet mattis posuere.
        </p>
        <p className="text-gray-900 font-medium mt-2">
          Aenean odio odio, iaculis sit amet magna eget, faucibus hendrerit neque. Mauris rutrum venenatis facilisis.
          Vivamus volutpat erat id ultricies blandit.
        </p>
        {/* <a href="#" className="inline-block bg-orange-500 text-white py-3 px-6 mt-6 rounded-full hover:bg-[#3b5065]">
          Read More
        </a> */}
        <div>
          <Link href="/pages/about" passHref>
            <motion.button
              className="bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold mt-7"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Read More
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative md:w-1/2 flex justify-center items-center mt-8 md:mt-0 ">
        {/* Large Circle Image with Min Size */}
        <Image
          src={mainImage}
          alt="Main Industry"
          className="rounded-full border-4 border-orange-500 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 lg:w-112 lg:h-112 min-w-[12rem] min-h-[12rem]"
        />
        {/* Small Overlapping Circle Image with Min Size */}
        <Image
          src={workerImage}
          alt="Worker"
          className="rounded-full absolute bottom-0 left-0 sm:left-8 md:left-12 border-4 border-orange-500 transform sm:translate-x-4 sm:translate-y-4 md:translate-x-8 md:translate-y-8 w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 min-w-[8rem] min-h-[8rem] lg:w-52 lg:h-52"
          width={240}
          height={240}
        />
      </div>
    </section>
  );
};

export default IndustrySection;
