import React from 'react';
import { FaShoppingBag, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { FaArrowUpLong } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";




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

    
    
    </>
  );
};

export default ProductGrid;
