import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Redux/cartSlice.jsx';
import router from './Router/router.jsx'
import { Toaster } from 'react-hot-toast';



const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={store}>
  <RouterProvider router={router}/>
  <Toaster 
  position="top-right" 
  toastOptions={{
    success: {
      style: {
        background: 'green',
        color: 'white',
      },
    },
  }} 
/>

  </Provider>
 
)
