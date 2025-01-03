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
          src="/pic1.png" // Replace with the actual image path
          alt="Product"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section - Content */}
      <div className="flex-1 p-6 flex flex-col justify-center md:w-1/2">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">Real Heritage Jacket</h2>
        
        {/* Paragraph */}
        <p className="text-lg mb-4">
          Iconic jacket blending timeless style with modern functionality.
        </p>

        {/* Line */}
        <div className="border-t-2 border-gray-300 mb-4"></div>

        {/* Price */}
        <h4 className="text-xl font-medium mb-4">
          <b>Price:</b> <i>$150</i>
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
            The Real Heritage Jacket merges classic design with advanced materials to deliver unmatched comfort, durability, and style. This jacket is perfect for both casual outings and outdoor adventures.
          </p>

          <h4 className="text-xl font-semibold mb-2">Material:</h4>
          <p className="text-lg mb-4">
            Crafted from premium-grade cotton and reinforced with water-resistant technology, this jacket ensures maximum comfort and long-lasting wear.
          </p>

          <h4 className="text-xl font-semibold mb-2">Design:</h4>
          <p className="text-lg mb-4">
            Featuring a vintage-inspired silhouette, the Real Heritage Jacket includes a high neckline, zippered closure, and multiple utility pockets. Its sleek and sophisticated design makes it versatile for various occasions.
          </p>

          <h4 className="text-xl font-semibold mb-2">Color Options:</h4>
          <p className="text-lg mb-4">
            Available in earthy tones like Olive Green, Charcoal Black, and Sand Brown, the Real Heritage Jacket complements a variety of looks.
          </p>

          <h4 className="text-xl font-semibold mb-2">Features:</h4>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Durable &amp; Water-Resistant: Provides protection against light rain and wind.
            </li>
            <li>
              Functional Design: Includes spacious pockets for storing essentials.
            </li>
            <li>
              Timeless Appeal: A classic design suitable for any wardrobe.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
