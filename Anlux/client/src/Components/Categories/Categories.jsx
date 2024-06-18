import React from 'react';
import { FaShoppingBag, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { FaArrowUpLong } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";

const products = [
  { price: 1599, image: 'https://rtwcreation.com/cdn/shop/files/rs-1599-sale-handbags-rtw-creation-pakistan_1880x.jpg?v=1697628682', label: 'Starting from' },
  { price: 2599, image: 'https://rtwcreation.com/cdn/shop/files/rs-1599-sale-handbags-rtw-creation-pakistan_1880x.jpg?v=1697628682', label: 'Pick any for just' },
  { price: 2799, image: 'https://rtwcreation.com/cdn/shop/files/Rs.27999-sale-online-pakistan_c7422e1a-902a-4113-8aae-501e29b11bc7_1880x.jpg?v=1695303654', label: 'Pick any for just' },
  { price: 2399, image: 'https://rtwcreation.com/cdn/shop/files/rs-2999-sale-handbags-rtw-creation-pakistan_1880x.jpg?v=1697628803', label: 'Pick any for just' },
  { price: 2999, image: 'https://rtwcreation.com/cdn/shop/files/rs-2399-sale-handbags-rtw-creation-pakistan_1880x.jpg?v=1697628700', label: 'Pick any for just' },
];


const navItems = [
    'ALL',
    'NEW ARRIVALS',
    'SALE',
    'BAGS',
    'HIJABS & ABAYAS',
    'ACCESSORIES',
    'SHOES',
  ];

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
}

  


const ProductGrid = () => {
  return (
    <>
      <div className="scroll-button-container max-sm:hidden">
      <button onClick={handleScrollToTop} className="scroll-button">
       <FaArrowUpLong />
      </button>
    </div>


    {/* Navbar black */}
    <nav className="bg-black py-2 mb-4">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center space-x-4 text-white text-sm sm:text-base">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="nav-item hover:underline"
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <a className='text-xs' href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>

    {/*  */}
    {/* Inforbar */}
    <div className='px-3'>
    <div className="bg-pink-100 py-2 flex flex-col sm:flex-row justify-around items-center text-gray-700 text-sm ">
      <div className="flex items-center space-x-2 mb-2 sm:mb-0 ">
        <FaShoppingBag />
        <div>
          <p className="font-bold">500,000+ happy customers!</p>
          <a href="#" className="text-gray-500">See reviews</a>
        </div>
      </div>
      <div className="flex items-center space-x-2 border-t sm:border-t-0 sm:border-l border-gray-300 pt-2 sm:pt-0 sm:pl-4 mb-2 sm:mb-0">
        <FaInstagram />
        <div>
          <p className="font-bold">280,000+ followers</p>
          <a href="#" className="text-gray-500">See Instagram</a>
        </div>
      </div>
      <div className="flex items-center space-x-2 border-t sm:border-t-0 sm:border-l border-gray-300 pt-2 sm:pt-0 sm:pl-4 mb-2 sm:mb-0">
        <FaFacebookF />
        <div>
          <p className="font-bold">400,000+ fans</p>
          <a href="#" className="text-gray-500">Browse page</a>
        </div>
      </div>
      <div className="flex items-center space-x-2 border-t sm:border-t-0 sm:border-l border-gray-300 pt-2 sm:pt-0 sm:pl-4">
        <FaWhatsapp />
        <div>
          <p className="font-bold">Need help?</p>
          <a href="#" className="text-gray-500">Message us</a>
        </div>
      </div>
    </div>
    </div>

    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:px-20 md:py-4 px-3 py-4">
      {products.map((product, index) => (
        <div key={index} className={`relative ${index === 2 ? 'lg:col-span-2 lg:row-span-1' : ''}`}>
          <img src={product.image} alt={`Product ${index + 1}`} className="w-full h-ful object-cover" />
        
        </div>
      ))}
    </div>
    </>
  );
};

export default ProductGrid;
