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
          src="/pic3.png" // Replace with the actual image path
          alt="Product"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section - Content */}
      <div className="flex-1 p-6 flex flex-col justify-center md:w-1/2">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">Vintage Valor Jacket</h2>
        
        {/* Paragraph */}
        <p className="text-lg mb-4">
          A timeless piece that blends classic style with modern comfort, perfect for any occasion.
        </p>

        {/* Line */}
        <div className="border-t-2 border-gray-300 mb-4"></div>

        {/* Price */}
        <h4 className="text-xl font-medium mb-4">
          <b>Price:</b> <i>$170</i>
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
            The Vintage Valor Jacket offers the perfect blend of timeless elegance and modern craftsmanship, designed for the style-conscious individual. Whether you&apos;re stepping out for a casual gathering or need something stylish for a night out, this jacket has you covered.
          </p>

          <h4 className="text-xl font-semibold mb-2">Material:</h4>
          <p className="text-lg mb-4">
            Crafted from high-quality wool blend fabric, this jacket provides warmth and comfort. The interior is lined with smooth satin, ensuring ease of movement and luxury feel.
          </p>

          <h4 className="text-xl font-semibold mb-2">Design:</h4>
          <p className="text-lg mb-4">
            The jacket features a classic tailored fit with a single-breasted design, offering a sharp look suitable for any formal or semi-formal occasion. It includes a sleek notch collar and elegant button details for that retro vibe.
          </p>

          <h4 className="text-xl font-semibold mb-2">Color Options:</h4>
          <p className="text-lg mb-4">
            Available in timeless shades of Charcoal Gray, Burgundy, and Midnight Black, the Vintage Valor Jacket adapts seamlessly to your wardrobe.
          </p>

          <h4 className="text-xl font-semibold mb-2">Features:</h4>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Classic Design: Single-breasted with a notch collar, perfect for formal settings.
            </li>
            <li>
              Comfortable Fit: A tailored fit with enough room to allow freedom of movement.
            </li>
            <li>
              Durable Material: Made from a premium wool blend for lasting durability and warmth.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
