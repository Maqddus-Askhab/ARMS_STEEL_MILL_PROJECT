"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion for animations

const images = [
  "/pictures/rani.jpeg",
  "/pictures/rani.jpeg",
  "/pictures/rani.jpeg",
  "/pictures/rani.jpeg",
  "/pictures/rani.jpeg",
  "/pictures/rani.jpeg",
  "/pictures/rani.jpeg",
  "/pictures/rani.jpeg",
  "/pictures/rani.jpeg",
  "/pictures/rani.jpeg",
  "/pictures/rani.jpeg",
  "/pictures/rani.jpeg",



  // Add more images as needed
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true); // Set loaded to true once the component mounts
  }, []);

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-orange-50 ">
      <div className="min-h-screen  py-12 px-2 sm:px-6 max-w-7xl mx-auto">
        {/* Section Title */}
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-12 text-gray-900">
          Steel Mill <span className="text-orange-500">Gallery</span>
        </h1>

        {/* Image Grid */}
        <div className="flex justify-center">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-2 sm:px-6"
            initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and 50px lower
            animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
            transition={{ duration: 0.8 }} // Animation duration
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => openModal(image)}
                whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)" }} // Hover scale and shadow effect
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={image}
                  alt={`Steel Mill Image ${index + 1}`}
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 bg-black bg-opacity-75 flex justify-center items-center px-4"
              onClick={closeModal}
              initial={{ opacity: 0 }} // Modal initial state
              animate={{ opacity: 1 }} // Modal animate to fully visible
              exit={{ opacity: 0 }} // Modal exit with fade out
              transition={{ duration: 0.4 }} // Animation duration for modal
            >
              <div className="relative max-w-3xl w-full mx-auto px-4">
                <motion.div
                  initial={{ scale: 0.8 }} // Start with smaller size
                  animate={{ scale: 1 }} // Scale to full size
                  transition={{ duration: 0.4 }} // Smooth scaling animation
                >
                  <Image
                    src={selectedImage}
                    alt="Selected Steel Image"
                    width={900}
                    height={600}
                    className="rounded-lg object-cover shadow-2xl"
                  />
                </motion.div>
                <button
                  className="absolute top-4 right-4 text-white text-4xl font-bold"
                  onClick={closeModal}
                >
                  &times;
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
