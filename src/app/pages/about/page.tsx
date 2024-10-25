'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; 

const AboutUs = () => {
  return (
    <div className="bg-orange-50 text-gray-800 py-16 px-6">
      {/* Hero Section */}
      <motion.div
        className="relative bg-white shadow-md rounded-lg overflow-hidden"
        initial={{ opacity: 0, y: 50 }} // Initial animation for hero
        animate={{ opacity: 1, y: 0 }} // Final position
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <Image
            src="/pictures/front.jpg"
            alt="Steel Mill Factory"
            width={800}
            height={500}
            className="object-cover w-full md:w-1/2"
          />
          <div className="p-8 md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              About Our Steel Mill
            </h1>
            <p className="leading-relaxed text-lg text-gray-600">
              Our steel mill stands at the forefront of innovation and quality in steel production.
              With decades of expertise, cutting-edge technology, and a dedicated team, we have
              become a trusted partner in supplying high-grade steel to industries worldwide.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Mission, Vision, Values Section */}
      <div className="mt-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="p-8 bg-white shadow-lg rounded-lg"
            whileHover={{ scale: 1.05 }} // Hover animation
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
            <p className="text-gray-600">
              To deliver exceptional steel products that empower industries and foster sustainable
              development, meeting the demands of the modern world with precision.
            </p>
          </motion.div>

          <motion.div
            className="p-8 bg-white shadow-lg rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h2>
            <p className="text-gray-600">
              To become a global leader in steel manufacturing, embracing innovation while adhering
              to the highest standards of environmental responsibility and customer satisfaction.
            </p>
          </motion.div>

          <motion.div
            className="p-8 bg-white shadow-lg rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Values</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Integrity and Transparency</li>
              <li>Quality and Innovation</li>
              <li>Safety and Sustainability</li>
              <li>Commitment to Customer Success</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Meet Our Leadership Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: 'John Smith', position: 'CEO', image: '/pictures/rani.jpeg' },
            { name: 'Sarah Johnson', position: 'CTO', image: '/pictures/rani.jpeg' },
            { name: 'David Lee', position: 'COO', image: '/pictures/rani.jpeg' },
          ].map((member, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-md"
              whileHover={{ scale: 1.1 }} // Slight hover effect on the cards
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <div className="relative w-36 h-36 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full border-4 border-gray-300 shadow-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-500">{member.position}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="mt-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16"
        initial={{ opacity: 0, y: 50 }} // Initial animation for CTA
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build a Stronger Future with Us?
          </h2>
          <p className="text-lg mb-6">
            Get in touch with us today and discover how we can support your steel needs
            with industry-leading solutions.
          </p>


          <div>
            <Link href="/pages/contact" passHref>
              <motion.button
                className="bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
