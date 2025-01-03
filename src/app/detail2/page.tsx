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
          src="/pic2.png" // Replace with the actual image path
          alt="Product"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section - Content */}
      <div className="flex-1 p-6 flex flex-col justify-center md:w-1/2">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">Urban Maverick Jacket</h2>
        
        {/* Paragraph */}
        <p className="text-lg mb-4">
          Designed for the modern adventurer, the Urban Maverick Jacket blends rugged durability with sleek city style for those who dare to stand out.
        </p>

        {/* Line */}
        <div className="border-t-2 border-gray-300 mb-4"></div>

        {/* Price */}
        <h4 className="text-xl font-medium mb-4">
          <b>Price:</b><i>$120</i>
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
            The Urban Maverick Jacket is built to handle the fast-paced life of a city dweller with a rugged twist. Its versatile design features premium materials that promise comfort and protection no matter where your day takes you.
          </p>

          <h4 className="text-xl font-semibold mb-2">Material:</h4>
          <p className="text-lg mb-4">
            Crafted with a robust blend of high-quality nylon and polyester, this jacket is water-resistant, durable, and made to last through urban exploration and outdoor adventures.
          </p>

          <h4 className="text-xl font-semibold mb-2">Design:</h4>
          <p className="text-lg mb-4">
            With its clean lines, multiple pockets, and adjustable features, the Urban Maverick Jacket is as functional as it is stylish. Whether you’re on the go or out for a casual walk, it’s designed to keep you moving with ease.
          </p>

          <h4 className="text-xl font-semibold mb-2">Color Options:</h4>
          <p className="text-lg mb-4">
            Available in midnight black, charcoal gray, and deep olive, the Urban Maverick Jacket offers a palette that’s versatile enough for any wardrobe.
          </p>

          <h4 className="text-xl font-semibold mb-2">Features:</h4>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Water-Resistant: Stay dry in light rain or drizzle with its water-repellent fabric.
            </li>
            <li>
              Windproof: The jacket is designed to block out chilly winds, making it perfect for transitional seasons.
            </li>
            <li>
              Multiple Pockets: Ample storage with multiple pockets to carry your essentials securely.
            </li>
            <li>
              Adjustable Features: Equipped with adjustable cuffs, waist, and hood for a customizable fit.
            </li>
            <li>
              Lightweight yet Warm: Provides optimal warmth without being bulky or heavy.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
