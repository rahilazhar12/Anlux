import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Bagscards from '../Bags/Bagscards';
import SunglassesCards from '../Glasses/Glassescards';
import Watches from '../Watches/Watchescard';
import CartModal from '../../Components/CartModal/CartModal';
import { useSelector } from 'react-redux';
import { Link, useLoaderData } from 'react-router-dom';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const Home = () => {
  const { bags, glasses, watches } = useLoaderData();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  const openCartModal = () => {
    setIsModalOpen(true);
  };

  const closeCartModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>
      {/* <ProductGrid /> */}

      {/* Bags */}
      <div className='bg-gray-100 p-8'>
        <div className="container mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">Crossbody Bags</h2>
          <div className="flex flex-wrap justify-between items-start">
            <div className="w-full md:w-1/4 p-4" data-aos="fade-right">
              <img data-src="https://fineur.pk/cdn/shop/files/Fineur5_1_570x.webp?v=1701443886" alt="Featured Bag" className="w-full h-96 object-cover rounded-lg shadow-xl transition-transform transform hover:scale-105 lazyload" />
              <p className="text-center text-lg mt-4 text-gray-800 font-semibold tracking-wide">Featured Bag</p>
            </div>
            <div className="w-full md:w-3/4 flex flex-wrap">
              {bags.slice(-3).map((product, index) => (
                <Bagscards key={index} product={product} openCartModal={openCartModal} />
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to='/All-Bags'>
              <button className="btn bg-slate-700 text-white px-6 py-2 rounded hover:bg-slate-800 transition-colors">View All</button>
            </Link>
          </div>
        </div>
        <CartModal
          isOpen={isModalOpen}
          closeModal={closeCartModal}
          cartItems={cartItems}
          totalAmount={totalAmount}
        />
      </div>

      {/* Glasses */}
      <div className='bg-gradient-to-r from-pink-300 via-pink-100 to-pink-300 p-8'>
        <div className="container mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-slate-700">Sunglasses</h2>
          <div className="flex flex-wrap justify-between items-start">
            <div className="w-full md:w-1/4 p-4" data-aos="fade-right">
              <img data-src="https://static-01.daraz.pk/p/43c35d1a81bc0842c4d8e0d6cd542116.jpg_750x750.jpg_.webp" alt="Featured Bag" className="w-full h-96 object-cover rounded-lg shadow-xl transition-transform transform hover:scale-105 lazyload" />
              <p className="text-center text-lg mt-4 text-gray-800 font-semibold tracking-wide">Featured Glasses</p>
            </div>
            <div className="w-full md:w-3/4 flex flex-wrap">
              {glasses.slice(-3).map((product, index) => (
                <SunglassesCards key={index} product={product} openCartModal={openCartModal} />
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to='/All-glasses'>
              <button className="btn bg-slate-700 text-white px-6 py-2 rounded hover:bg-slate-800 transition-colors">View All</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Watches */}
      <div className='p-8'>
        <div className="container mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">Watches</h2>
          <div className="flex flex-wrap justify-between items-start">
            <div className="w-full md:w-1/4 p-4" data-aos="fade-right">
              <img data-src="https://c4.wallpaperflare.com/wallpaper/243/356/968/time-style-watch-rhinestones-dial-hd-wallpaper-preview.jpg" alt="Featured Bag" className="w-full h-96 object-cover rounded-lg shadow-xl transition-transform transform hover:scale-105 lazyload" />
              <p className="text-center text-lg mt-4 text-gray-800 font-semibold tracking-wide">Featured Watches</p>
            </div>
            <div className="w-full md:w-3/4 flex flex-wrap">
              {watches.slice(-3).map((product, index) => (
                <Watches key={index} product={product} openCartModal={openCartModal} />
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to='/All-watches'>
              <button className="btn bg-slate-700 text-white px-6 py-2 rounded hover:bg-slate-800 transition-colors">View All</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
