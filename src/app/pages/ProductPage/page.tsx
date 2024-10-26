'use client';
import React, { useState } from 'react';

// Sample product data
const products = [
  { id: 1, name: 'Steel Rod', description: 'High-quality steel rod suitable for construction.', image: '/images/steel-rod.jpg' },
  { id: 2, name: 'Steel Sheet', description: 'Durable steel sheet for various applications.', image: '/images/steel-sheet.jpg' },
  { id: 3, name: 'Steel Pipe', description: 'Reliable steel pipe for plumbing and construction.', image: '/images/steel-pipe.jpg' },
  { id: 4, name: 'Steel Rod', description: 'High-quality steel rod suitable for construction.', image: '/images/steel-rod.jpg' },
  { id: 5, name: 'Steel Sheet', description: 'Durable steel sheet for various applications.', image: '/images/steel-sheet.jpg' },
  { id: 6, name: 'Steel Pipe', description: 'Reliable steel pipe for plumbing and construction.', image: '/images/steel-pipe.jpg' },
];

const ProductPage: React.FC = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const openDialog = (productName: string) => {
    setSelectedProduct(productName);
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setSelectedProduct(null);
  };

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
                onClick={() => openDialog(product.name)}
              >
                Have a Query?
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Dialog Box */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-2xl font-bold mb-4">Query about {selectedProduct}</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="Enter your name" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="w-full px-3 py-2 border rounded-lg" placeholder="Enter your email" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea className="w-full px-3 py-2 border rounded-lg" placeholder="Enter your message" rows={4} />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeDialog}
                  className="bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;



// 'use client';
// import React from 'react';

// // Sample product data (replace images with actual URLs)
// const products = [
//   { id: 1, name: 'Steel Rod', description: 'High-quality steel rod suitable for construction.', image: '/images/steel-rod.jpg' },
//   { id: 2, name: 'Steel Sheet', description: 'Durable steel sheet for various applications.', image: '/images/steel-sheet.jpg' },
//   { id: 3, name: 'Steel Pipe', description: 'Reliable steel pipe for plumbing and construction.', image: '/images/steel-pipe.jpg' },
//   { id: 4, name: 'Steel Rod', description: 'High-quality steel rod suitable for construction.', image: '/images/steel-rod.jpg' },
//   { id: 5, name: 'Steel Sheet', description: 'Durable steel sheet for various applications.', image: '/images/steel-sheet.jpg' },
//   { id: 6, name: 'Steel Pipe', description: 'Reliable steel pipe for plumbing and construction.', image: '/images/steel-pipe.jpg' },
//   // Add more products here as needed
// ];

// const ProductPage: React.FC = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-orange-50 ">
//       <div className="max-w-7xl w-full p-6 mt-10 mb-20 ">
//         <h1 className="text-3xl font-extrabold text-center text-orange-500 mb-20"><span className='text-gray-900'>OUR </span>PRODUCTS</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.map(product => (
//             <div key={product.id} className="bg-gray-800 p-4 rounded-lg shadow-lg mb-8">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-40 object-cover rounded-md mb-4"
//               />
//               <h2 className="text-xl font-semibold text-white">{product.name}</h2>
//               <p className="text-gray-300 mt-2">{product.description}</p>
//               <button
//                 className="mt-4 bg-orange-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300"
//                 onClick={() => alert(`Query about ${product.name}`)}
//               >
//                 Have a Query?
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;
