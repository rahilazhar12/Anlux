import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
  totalAmount: JSON.parse(localStorage.getItem('cartTotalAmount')) || 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item._id === newItem._id);
      if (!existingItem) {
        state.items.push({
          _id: newItem._id,
          name: newItem.name,
          price: newItem.newPrice,
          quantity: 1,
          totalPrice: newItem.newPrice,
          image: newItem.image,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.newPrice;
      }
      state.totalAmount += newItem.newPrice;
      localStorage.setItem('cartItems', JSON.stringify(state.items));
      localStorage.setItem('cartTotalAmount', JSON.stringify(state.totalAmount));
    },
    incrementQuantity(state, action) {
      const _id = action.payload;
      const existingItem = state.items.find(item => item._id === _id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
        state.totalAmount += existingItem.price;
        localStorage.setItem('cartItems', JSON.stringify(state.items));
        localStorage.setItem('cartTotalAmount', JSON.stringify(state.totalAmount));
      }
    },
    decrementQuantity(state, action) {
      const _id = action.payload;
      const existingItem = state.items.find(item => item._id === _id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
          state.totalAmount -= existingItem.price;
        } else {
          state.items = state.items.filter(item => item._id !== _id);
          state.totalAmount -= existingItem.price;
        }
        localStorage.setItem('cartItems', JSON.stringify(state.items));
        localStorage.setItem('cartTotalAmount', JSON.stringify(state.totalAmount));
      }
    },
    removeItemFromCart(state, action) {
      const _id = action.payload;
      const existingItem = state.items.find(item => item._id === _id);
      if (existingItem) {
        state.totalAmount -= existingItem.totalPrice;
        state.items = state.items.filter(item => item._id !== _id);
        localStorage.setItem('cartItems', JSON.stringify(state.items));
        localStorage.setItem('cartTotalAmount', JSON.stringify(state.totalAmount));
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
      localStorage.removeItem('cartItems');
      localStorage.removeItem('cartTotalAmount');
    },
  },
});

export const { addItemToCart, incrementQuantity, decrementQuantity, removeItemFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
