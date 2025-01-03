'use client';

import React, { useState } from 'react';
import Image from 'next/image'; // Importing Image from next/image

const ProductPage = () => {
  // State to keep track of the number
  const [quantity, setQuantity] = useState(0);

  // Function to increase quantity
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="flex min-h-screen p-6 bg-white flex-col md:flex-row">
      {/* Left Section - Image */}
      <div className="flex-1 mb-6 md:mb-0 md:w-1/2">
        <Image
          src="/pic5.png" // Replace with the actual image path
          alt="Product"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section - Content */}
      <div className="flex-1 p-6 flex flex-col justify-center md:w-1/2">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">Luxe Noir Jacket</h2>
        
        {/* Paragraph */}
        <p className="text-lg mb-4">
          A luxurious jacket designed for both elegance and warmth, perfect for sophisticated winter styling.
        </p>

        {/* Line */}
        <div className="border-t-2 border-gray-300 mb-4"></div>

        {/* Price */}
        <h4 className="text-xl font-medium mb-4">
          <b>Price:</b> <i>$180</i>
        </h4>
        <h4 className="text-xl font-medium mb-4">
          <b>Select Quantity</b>
        </h4>

        {/* Quantity Control */}
        <div className="flex items-center gap-4 mb-6">
          <button
            className="bg-gray-200 text-xl p-2 rounded"
            onClick={decreaseQuantity}
          >
            -
          </button>
          <span className="text-xl font-semibold">{quantity}</span>
          <button
            className="bg-gray-200 text-xl p-2 rounded"
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          className="bg-orange-700 hover:bg-orange-600 text-white py-2 px-6 rounded-full text-xl"
        >
          Add to Cart
        </button>

        {/* Additional Product Details Section */}
        <div className="mt-8">
          <h4 className="text-xl font-semibold mb-2">Description:</h4>
          <p className="text-lg mb-4">
            The Luxe Noir Jacket is crafted with premium materials to offer both luxury and comfort. It features a sleek design that combines timeless style with modern elements, making it perfect for high-end occasions or casual outings in the colder months.
          </p>

          <h4 className="text-xl font-semibold mb-2">Material:</h4>
          <p className="text-lg mb-4">
            Made from high-quality wool blend fabric, this jacket is soft to the touch, durable, and designed to provide optimal warmth during cold weather. The inner lining ensures a cozy fit while maintaining breathability.
          </p>

          <h4 className="text-xl font-semibold mb-2">Design:</h4>
          <p className="text-lg mb-4">
            The Luxe Noir Jacket offers a fitted silhouette that flatters all body types, designed with a modern, chic look. The clean lines and minimalistic design make it a versatile piece for various styling options.
          </p>

          <h4 className="text-xl font-semibold mb-2">Color Options:</h4>
          <p className="text-lg mb-4">
            Available in classic black with subtle detailing, the Luxe Noir Jacket is designed to pair effortlessly with both casual and formal outfits.
          </p>

          <h4 className="text-xl font-semibold mb-2">Features:</h4>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Premium Wool Blend: Offers superior warmth and softness without the bulk.
            </li>
            <li>
              Stylish and Slim Fit: Enhances your figure with a flattering cut that is both fashionable and comfortable.
            </li>
            <li>
              Adjustable Fit: Features adjustable cuffs for a more tailored fit, allowing you to adjust the jacket to your preference.
            </li>
            <li>
              Versatile Style: Perfect for both formal and casual settings, offering effortless elegance.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
