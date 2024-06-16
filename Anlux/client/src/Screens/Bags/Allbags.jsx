import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../Redux/cartSlice'; // Adjust the path as necessary
import CartModal from '../../Components/CartModal/CartModal'; // Adjust the path as necessary

function Allbags() {
  const [bags, setBags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    const fetchBags = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/bags-get`);
        const data = await response.json();
        setBags(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBags();
  }, []);

  const addToCartHandler = (bag) => {
    setIsLoading(true);
    dispatch(addItemToCart({
      _id: bag._id,
      name: bag.name,
      newPrice: parseFloat(bag.newPrice),
      image: bag.image,
    }));
    setTimeout(() => {
      setIsLoading(false);
    }, 500); // Simulate loading time
  };

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  const isItemInCart = (id) => cartItems.some(item => item._id === id);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Bags Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {bags.map((bag) => (
          <div key={bag._id} className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <img src={`${import.meta.env.VITE_API_URL}/${bag.image}`} alt={bag.name} className="w-full h-56 object-cover" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-sm px-2 py-1 rounded-bl-lg">
                {bag.discountPercentage}% off
              </span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">{bag.name}</h2>
              <p className="text-gray-700 mb-4">{bag.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-500 line-through">${bag.oldPrice}</span>
                <span className="text-green-500 font-bold text-xl">${bag.newPrice}</span>
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
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
                    onClick={() => addToCartHandler(bag)}
                  >
                    Add to Cart
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

export default Allbags;
