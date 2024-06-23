import React, { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import CartModal from '../../Components/CartModal/CartModal'; // Adjust the path as necessary
import { useNavigate } from 'react-router-dom';
import {CircleLoader} from 'react-spinners'

function Allwatches() {
  const navigate = useNavigate();
  const [bags, setBags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    const fetchBags = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/watches-get`);
        const data = await response.json();
        setBags(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBags();
    window.scrollTo(0,0)
  }, []);

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  const navigatehandller = (id) => {
    navigate(`/detailpage/${id}`);
  };

  const isItemInCart = (id) => cartItems.some(item => item._id === id);

  return (
    <div className="container mx-auto p-8 relative">
      {/* {isLoading && (
        <div className="flex items-center justify-center fixed inset-0 bg-white bg-opacity-75 z-50">
          <CircleLoader color="#d63673"  size={80} />
        </div>
      )} */}
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Watches Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {bags.map((bag) => (
          <div key={bag._id} className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <img src={`${import.meta.env.VITE_API_URL}/${bag.mainImage}`} alt={bag.name} className="w-full h-56 object-cover" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-sm px-2 py-1 rounded-bl-lg">
                {bag.discountPercentage}% off
              </span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">{bag.name}</h2>
              <p className="text-gray-700 mb-4">{bag.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-500 line-through">Rs{bag.oldPrice}</span>
                <span className="text-green-500 font-bold text-xl">Rs{bag.newPrice}</span>
              </div>
              <div className="text-right">
                {isLoading ? (
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-full cursor-not-allowed">
                    Loading...
                  </button>
                ) : isItemInCart(bag._id) ? (
                  <button
                    className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors duration-300"
                    onClick={openCartModal}
                  >
                    View Cart
                  </button>
                ) : (
                  <button
                    className="btn btn-outline hover:text-white hover:bg-red-400"
                    onClick={() => navigatehandller(bag._id)}
                  >
                    Order Now
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <CartModal isOpen={isCartModalOpen} closeModal={closeCartModal} cartItems={cartItems} />
    </div>
  );
}

export default Allwatches;
