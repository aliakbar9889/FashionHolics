import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image from next/image

const Page = () => {
  return (
    <div data-aos="fade-up" className="h-full bg-orange-100 flex flex-col items-center p-6">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-12">Our Products</h1>

      {/* Card Grid */}
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-7xl"
      >
        {/* First Product */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group">
          <Image src="/pic1.png" alt="Regal Heritage" width={400} height={500} className="w-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
            <button className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-md">
              <Link href="/detail">Add to Cart</Link>
            </button>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">Regal Heritage</h3>
            <p className="text-gray-600 text-sm">A classic wool blend jacket offering warmth and sophistication for every occasion.</p>
            <p className="mt-2 text-lg font-semibold text-gray-800">$150</p>
          </div>
        </div>

        {/* Second Product */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group">
          <Image src="/pic2.png" alt="Urban Maverick" width={400} height={500} className="w-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
            <button className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-md">
              <Link href="/detail2">Add to Cart</Link>
            </button>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">Urban Maverick</h3>
            <p className="text-gray-600 text-sm">Lightweight and durable faux leather jacket, perfect for modern style enthusiasts.</p>
            <p className="mt-2 text-lg font-semibold text-gray-800">$120</p>
          </div>
        </div>

        {/* Third Product */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group">
          <Image src="/pic3.png" alt="Vintage Valor" width={400} height={500} className="w-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
            <button className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-md">
              <Link href="/detail3">Add to Cart</Link>
            </button>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">Vintage Valor</h3>
            <p className="text-gray-600 text-sm">High-quality suede finish, detailed stitching, and a soft, breathable lining for comfort.</p>
            <p className="mt-2 text-lg font-semibold text-gray-800">$170</p>
          </div>
        </div>

        {/* Fourth Product */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group">
          <Image src="/pic4.png" alt="Alpine Guardian" width={400} height={500} className="w-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
            <button className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-md">
              <Link href="/detail4">Add to Cart</Link>
            </button>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">Alpine Guardian</h3>
            <p className="text-gray-600 text-sm">Weather-resistant jacket for outdoor adventures.</p>
            <p className="mt-2 text-lg font-semibold text-gray-800">$180</p>
          </div>
        </div>

        {/* Fifth Product */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group">
          <Image src="/pic5.png" alt="Luxe Noir" width={400} height={500} className="w-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
            <button className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-md">
              <Link href="/detail5">Add to Cart</Link>
            </button>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">Luxe Noir</h3>
            <p className="text-gray-600 text-sm">Soft leather jacket for formal occasions.</p>
            <p className="mt-2 text-lg font-semibold text-gray-800">$200</p>
          </div>
        </div>

        {/* Sixth Product */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group">
          <Image src="/pic6.png" alt="Winter Wanderer" width={400} height={500} className="w-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
            <button className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-md">
              <Link href="/detail6">Add to Cart</Link>
            </button>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">Winter Wanderer</h3>
            <p className="text-gray-600 text-sm">Insulated jacket for extreme cold weather.</p>
            <p className="mt-2 text-lg font-semibold text-gray-800">$190</p>
          </div>
        </div>

        {/* Seventh Product */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group">
          <Image src="/pic7.png" alt="Street Chic" width={400} height={500} className="w-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
            <button className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-md">
              <Link href="/detail7">Add to Cart</Link>
            </button>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">Street Chic</h3>
            <p className="text-gray-600 text-sm">Trendy lightweight jacket for casual wear.</p>
            <p className="mt-2 text-lg font-semibold text-gray-800">$140</p>
          </div>
        </div>

        {/* Eighth Product */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group">
          <Image src="/pic8.png" alt="Explorer's Edge" width={400} height={500} className="w-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
            <button className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-md">
              <Link href="/detail8">Add to Cart</Link>
            </button>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">Explorer&apos;s Edge</h3>
            <p className="text-gray-600 text-sm">Durable jacket for outdoor exploration and hiking.</p>
            <p className="mt-2 text-lg font-semibold text-gray-800">$210</p>
          </div>
        </div>

        {/* Ninth Product */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group">
          <Image src="/pic9.png" alt="Bold Breeze" width={400} height={500} className="w-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
            <button className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-md">
              <Link href="/detail9">Add to Cart</Link>
            </button>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">Bold Breeze</h3>
            <p className="text-gray-600 text-sm">Lightweight jacket designed for everyday use.</p>
            <p className="mt-2 text-lg font-semibold text-gray-800">$130</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
