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
          src="/pic9.png" // Replace with the actual image path
          alt="Product"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section - Content */}
      <div className="flex-1 p-6 flex flex-col justify-center md:w-1/2">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">Bold Breeze Jacket</h2>
        
        {/* Paragraph */}
        <p className="text-lg mb-4">
          Perfect for dynamic days and breezy nights, the Bold Breeze Jacket combines lightweight comfort with stylish protection against the wind.
        </p>

        {/* Line */}
        <div className="border-t-2 border-gray-300 mb-4"></div>

        {/* Price */}
        <h4 className="text-xl font-medium mb-4">
          <b>Price:</b> <i>$130</i>
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
            The Bold Breeze Jacket is the perfect windbreaker for unpredictable weather. Its lightweight yet durable fabric allows you to move freely, while the wind-resistant design ensures you&apos;re protected when the weather turns breezy.
          </p>

          <h4 className="text-xl font-semibold mb-2">Material:</h4>
          <p className="text-lg mb-4">
            Made from a breathable and water-resistant polyester blend, the Bold Breeze Jacket provides comfort during physical activity, while its soft lining adds extra warmth for cooler days.
          </p>

          <h4 className="text-xl font-semibold mb-2">Design:</h4>
          <p className="text-lg mb-4">
            With a minimalist design and a tailored fit, the Bold Breeze Jacket complements both casual and active wear. The adjustable hood, cuffs, and waist allow you to personalize the fit for maximum comfort.
          </p>

          <h4 className="text-xl font-semibold mb-2">Color Options:</h4>
          <p className="text-lg mb-4">
            Available in midnight navy, cool gray, and vibrant orange, the Bold Breeze Jacket allows you to stand out while keeping things sleek and stylish.
          </p>

          <h4 className="text-xl font-semibold mb-2">Features:</h4>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Windproof: The jacket&apos;s material is designed to block out wind, keeping you comfortable in breezy conditions.
            </li>
            <li>
              Lightweight: Perfect for layering, this jacket offers protection without feeling bulky.
            </li>
            <li>
              Water-Resistant: It offers protection against light rain and drizzle, ideal for transitional weather.
            </li>
            <li>
              Adjustable Fit: The hood, cuffs, and waist are adjustable to ensure a snug fit that adapts to your needs.
            </li>
            <li>
              Easy to Pack: Lightweight and compact, the jacket can be easily folded into a small space for convenient storage when not in use.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
