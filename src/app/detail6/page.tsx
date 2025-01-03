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
          src="/pic6.png" // Replace with the actual image path
          alt="Product"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section - Content */}
      <div className="flex-1 p-6 flex flex-col justify-center md:w-1/2">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">Winter Wanderer Jacket</h2>
        
        {/* Paragraph */}
        <p className="text-lg mb-4">
          A durable jacket designed for adventurous souls who embrace the winter outdoors with style and comfort.
        </p>

        {/* Line */}
        <div className="border-t-2 border-gray-300 mb-4"></div>

        {/* Price */}
        <h4 className="text-xl font-medium mb-4">
          <b>Price:</b> <i>$190</i>
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
            The Winter Wanderer Jacket is built for those who enjoy the thrill of winter adventures. With its high-performance insulation and water-resistant fabric, it’s the perfect companion for outdoor excursions in cold, snowy conditions.
          </p>

          <h4 className="text-xl font-semibold mb-2">Material:</h4>
          <p className="text-lg mb-4">
            Crafted from a premium blend of weather-resistant polyester and nylon, this jacket offers superior warmth and protection. The interior is lined with plush insulation that traps heat while remaining breathable.
          </p>

          <h4 className="text-xl font-semibold mb-2">Design:</h4>
          <p className="text-lg mb-4">
            Designed for both style and function, the Winter Wanderer Jacket features a sporty yet sophisticated cut, ensuring freedom of movement during physical activities while maintaining a sleek, modern look.
          </p>

          <h4 className="text-xl font-semibold mb-2">Color Options:</h4>
          <p className="text-lg mb-4">
            Available in a variety of vibrant winter colors, including Arctic Blue, Midnight Black, and Snow White, so you can choose the jacket that best suits your outdoor style.
          </p>

          <h4 className="text-xl font-semibold mb-2">Features:</h4>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Water-Resistant: Keeps you dry even in heavy snow or light rain.
            </li>
            <li>
              High-Performance Insulation: Maintains warmth in extreme temperatures without the bulk.
            </li>
            <li>
              Adjustable Hood and Cuffs: Customize the fit for added warmth and protection from the wind.
            </li>
            <li>
              Multiple Pockets: Equipped with several zippered pockets to safely store your gear and essentials.
            </li>
            <li>
              Breathable: Designed to wick moisture away, keeping you comfortable during active outdoor use.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
