import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartModal from '../../Components/CartModal/CartModal';
import { clearCart } from '../../Redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto p-4">
      {/* <button onClick={() => setIsModalOpen(true)}>View Cart</button> */}
      <CartModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        cartItems={cartItems}
        totalAmount={totalAmount}
        onClearCart={handleClearCart}
      />
    </div>
  );
};

export default Cart;
