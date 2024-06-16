import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Bagscards from './Bagscards';
import SunglassesCards from '../Glasses/Glassescards';
import Topproducts from '../Topsellingproducts.jsx/Topproducts';
import CartModal from '../../Components/CartModal/CartModal';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Homebags = () => {
  const [products, setProducts] = useState([]);
  const [glasses, setGlasses] = useState([]);

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
      duration: 1000, // animation duration
      once: true, // whether animation should happen only once
      mirror: false, // whether elements should animate out while scrolling past them
    });
  }, []);

  useEffect(() => {
    // Fetch all products
    fetch(`${import.meta.env.VITE_API_URL}/api/bags-get`)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);
  useEffect(() => {
    // Fetch all products
    fetch(`${import.meta.env.VITE_API_URL}/api/glasses-get`)
      .then(response => response.json())
      .then(data => {
        setGlasses(data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <>
    <div className='bg-gray-100 p-8'>
  <div className="container mx-auto">
    <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">Crossbody Bags</h2>
    <div className="flex flex-wrap justify-between items-start">
      <div className="w-full md:w-1/4 p-4" data-aos="fade-right">
        <img src="https://fineur.pk/cdn/shop/files/Fineur5_1_570x.webp?v=1701443886" alt="Featured Bag" className="w-full h-96 object-cover rounded-lg shadow-xl transition-transform transform hover:scale-105" />
        <p className="text-center text-lg mt-4 text-gray-800 font-semibold tracking-wide">Featured Bag</p>
      </div>
      <div className="w-full md:w-3/4 flex flex-wrap">
        {products.slice(-4).map((product, index) => (
          <Bagscards key={index} product={product} openCartModal={openCartModal} />
        ))}
      </div>
    </div>
    <div className="text-center mt-12">
      <Link to='/All-Bags'>
      <button className="btn bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">View All</button></Link>
    </div>
  </div>
  <CartModal
    isOpen={isModalOpen}
    closeModal={closeCartModal}
    cartItems={cartItems}
    totalAmount={totalAmount}
  />
</div>


<div className='bg-slate-200  p-8'>
  <div className="container mx-auto">
    <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">Sunglasses</h2>
    <div className="flex flex-wrap justify-between items-start">
      <div className="w-full md:w-1/4 p-4" data-aos="fade-right">
        <img src="https://static-01.daraz.pk/p/43c35d1a81bc0842c4d8e0d6cd542116.jpg_750x750.jpg_.webp" alt="Featured Bag" className="w-full h-96 object-cover rounded-lg shadow-xl transition-transform transform hover:scale-105" />
        <p className="text-center text-lg mt-4 text-gray-800 font-semibold tracking-wide">Featured Glasses</p>
      </div>
      <div className="w-full md:w-3/4 flex flex-wrap">
        {glasses.slice(-4).map((product, index) => (
          <SunglassesCards key={index} product={product} openCartModal={openCartModal} />
        ))}
      </div>
    </div>
    <div className="text-center mt-12">
      <Link to='/All-glasses'>
      <button className="btn bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">View All</button></Link>
    </div>
  </div>
</div>

      <div>
        <Topproducts />
      </div>
    </>
  );
}

export default Homebags;
