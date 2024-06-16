import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../Redux/cartSlice';
import toast from 'react-hot-toast';

const Bagscards = ({ product, openCartModal }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const itemInCart = cartItems.find(item => item._id === product._id);
    setAddedToCart(!!itemInCart);
  }, [cartItems, product._id]);

  const addToCartHandler = () => {
    dispatch(addItemToCart({
      _id: product._id,
      name: product.name,
      newPrice: parseFloat(product.newPrice),
      image: product.image
    }));
    setAddedToCart(true);
    toast.success(`${product.name} added to cart successfully!`);
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/4 p-2" data-aos="fade-up">
      <div className="card bg-white shadow-xl relative border border-black">
        <figure className="relative">
          <img src={`http://localhost:8000/${product.image}`} alt={product.name} className='h-64 w-full object-cover' onError={(e) => e.target.src = 'https://via.placeholder.com/150'} />
          <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
            -{product.discountPercentage}%
          </div>
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg font-bold">{product.name}</h2>
          <div className="flex items-center mt-2">
            <span className="text-lg font-semibold line-through mr-2">Rs {product.oldPrice}</span>
            <span className="text-lg font-semibold text-red-500">Rs {product.newPrice}</span>
          </div>
          <div className="card-actions justify-end mt-4">
            {addedToCart ? (
              <button className="btn btn-success hover:text-white" onClick={openCartModal}>
                View Cart
              </button>
            ) : (
              <button
                className="btn btn-info hover:text-white"
                onClick={addToCartHandler}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bagscards;
