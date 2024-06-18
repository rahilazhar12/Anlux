import React, { useState, useEffect } from 'react';
import {  useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SunglassesCards = ({ product, openCartModal }) => {
  const navigate = useNavigate()

  const cartItems = useSelector(state => state.cart.items);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const itemInCart = cartItems.find(item => item._id === product._id);
    setAddedToCart(!!itemInCart);
  }, [cartItems, product._id]);


  const navigatehandller = (id) =>{
      navigate(`/detailpage/${id}`)
  }

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-2" data-aos="fade-up">
      <div className="card bg-white shadow-xl relative border border-black">
        <figure className="relative">
          <img src={`${import.meta.env.VITE_API_URL}/${product.mainImage}`} alt={product.name} className='h-64 w-full object-cover' onError={(e) => e.target.src = 'https://via.placeholder.com/150'} />
          <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
            -{product.discountPercentage}%
          </div>
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg font-bold">{product.name}</h2>
          <div className="flex justify-between mt-2">
            <span className="text-lg font-semibold line-through  mr-2">Rs {product.oldPrice}</span>
            <span className="text-lg font-semibold text-red-500">Rs {product.newPrice}</span>
          </div>
          <div className="card-actions justify-end mt-4">
            {addedToCart ? (
              <button className="btn btn-outline hover:bg-green-500 hover:text-white" onClick={openCartModal}>
                View Cart
              </button>
            ) : (
              <button
                className="btn btn-outline hover:text-white hover:bg-red-400"
                onClick={()=>navigatehandller(product._id)}
              >
                Order Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunglassesCards;
