'use client';
import React from 'react';

// Sample product data (replace images with actual URLs)
const products = [
  { id: 1, name: 'Steel Rod', description: 'High-quality steel rod suitable for construction.', image: '/images/steel-rod.jpg' },
  { id: 2, name: 'Steel Sheet', description: 'Durable steel sheet for various applications.', image: '/images/steel-sheet.jpg' },
  { id: 3, name: 'Steel Pipe', description: 'Reliable steel pipe for plumbing and construction.', image: '/images/steel-pipe.jpg' },
  { id: 4, name: 'Steel Rod', description: 'High-quality steel rod suitable for construction.', image: '/images/steel-rod.jpg' },
  { id: 5, name: 'Steel Sheet', description: 'Durable steel sheet for various applications.', image: '/images/steel-sheet.jpg' },
  { id: 6, name: 'Steel Pipe', description: 'Reliable steel pipe for plumbing and construction.', image: '/images/steel-pipe.jpg' },
  // Add more products here as needed
];

const ProductPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-50 ">
      <div className="max-w-7xl w-full p-6 mt-10 mb-20 ">
        <h1 className="text-3xl font-extrabold text-center text-orange-500 mb-20"><span className='text-gray-900'>OUR </span>PRODUCTS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-gray-800 p-4 rounded-lg shadow-lg mb-8">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-white">{product.name}</h2>
              <p className="text-gray-300 mt-2">{product.description}</p>
              <button
                className="mt-4 bg-orange-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300"
                onClick={() => alert(`Query about ${product.name}`)}
              >
                Have a Query?
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
