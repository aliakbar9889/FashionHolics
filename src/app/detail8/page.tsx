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
          src="/pic4.png" // Replace with the actual image path
          alt="Product"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section - Content */}
      <div className="flex-1 p-6 flex flex-col justify-center md:w-1/2">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">Alpine Guardian Jacket</h2>
        
        {/* Paragraph */}
        <p className="text-lg mb-4">
          A premium jacket designed for extreme weather conditions, providing ultimate protection and warmth in alpine environments.
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
            The Alpine Guardian Jacket is engineered for the most demanding alpine expeditions. Whether you&apos;re braving icy winds on a mountain summit or enduring extreme cold, this jacket provides superior insulation and protection from the elements, making it the ultimate choice for adventurers.
          </p>

          <h4 className="text-xl font-semibold mb-2">Material:</h4>
          <p className="text-lg mb-4">
            Made from high-performance Gore-Tex fabric, this jacket is both waterproof and breathable, ensuring you stay dry even in the harshest conditions. The interior features premium down insulation for maximum warmth without adding bulk.
          </p>

          <h4 className="text-xl font-semibold mb-2">Design:</h4>
          <p className="text-lg mb-4">
            The Alpine Guardian Jacket boasts a rugged design with reinforced seams, adjustable hoods, and cuffs to provide a snug fit. The outer shell is designed to withstand heavy winds and snow, while the inner lining offers thermal protection to retain body heat.
          </p>

          <h4 className="text-xl font-semibold mb-2">Color Options:</h4>
          <p className="text-lg mb-4">
            Available in classic alpine shades of Snow White, Midnight Blue, and Forest Green, the Alpine Guardian Jacket offers both style and functionality for any outdoor adventure.
          </p>

          <h4 className="text-xl font-semibold mb-2">Features:</h4>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Waterproof &amp; Breathable: Made with Gore-Tex fabric to ensure protection against rain and snow while allowing moisture to escape.
            </li>
            <li>
              Extreme Warmth: Features high-quality down insulation to keep you warm even in freezing temperatures.
            </li>
            <li>
              Durable &amp; Reinforced: Built to withstand the toughest alpine conditions, with reinforced areas for extra durability.
            </li>
            <li>
              Adjustable Fit: Includes an adjustable hood and cuffs to seal out the cold and wind.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
