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
          src="/pic7.png" // Replace with the actual image path
          alt="Product"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section - Content */}
      <div className="flex-1 p-6 flex flex-col justify-center md:w-1/2">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">Street Chic Jacket</h2>
        
        {/* Paragraph */}
        <p className="text-lg mb-4">
          An effortlessly stylish jacket that blends urban aesthetics with cozy warmth, perfect for everyday wear.
        </p>

        {/* Line */}
        <div className="border-t-2 border-gray-300 mb-4"></div>

        {/* Price */}
        <h4 className="text-xl font-medium mb-4">
          <b>Price:</b> <i>$140</i>
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
            The Street Chic Jacket is a fusion of functionality and fashion, designed for those who want to stay warm without compromising on style. With a sleek, minimalist design, it’s the ultimate jacket for streetwear enthusiasts.
          </p>

          <h4 className="text-xl font-semibold mb-2">Material:</h4>
          <p className="text-lg mb-4">
            Made from a soft, insulated fabric, this jacket provides warmth without the bulky feel. The exterior is crafted from durable, water-resistant polyester, while the lining offers comfort and breathability.
          </p>

          <h4 className="text-xl font-semibold mb-2">Design:</h4>
          <p className="text-lg mb-4">
            The Street Chic Jacket boasts a sleek, modern design that pairs perfectly with casual and semi-casual outfits. Its slim fit and urban style make it versatile enough for daily wear in any weather.
          </p>

          <h4 className="text-xl font-semibold mb-2">Color Options:</h4>
          <p className="text-lg mb-4">
            Available in classic black, charcoal grey, and deep navy, the Street Chic Jacket complements any wardrobe, allowing you to stay stylish while keeping warm.
          </p>

          <h4 className="text-xl font-semibold mb-2">Features:</h4>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Water-Resistant: Keeps you dry during light rain or snowfall.
            </li>
            <li>
              Lightweight Insulation: Provides warmth without the bulk, perfect for layering.
            </li>
            <li>
              Adjustable Hood: Customizable fit to shield you from the elements.
            </li>
            <li>
              Multiple Zippered Pockets: Safely store your essentials with easy access.
            </li>
            <li>
              Breathable: Ensures comfort during outdoor activities by wicking away moisture.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
