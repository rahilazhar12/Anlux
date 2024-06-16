import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Cart from './Screens/Cart/Cart';
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
   <>
  
   <Navbar/>
   {/* <Cart/> */}
     <Outlet/>
     <Footer/>
   </>
  );
}

export default App;


{/* <div className="bg-gray-200 flex flex-col items-center justify-center  py-8">
      <h1 className="text-3xl font-bold text-center">Home</h1>
      <nav className="mt-4">
        <ul className="flex space-x-2 text-sm text-gray-600">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li>&gt;</li>
          <li><a href="/products" className="hover:underline">Products</a></li>
          <li>&gt;</li>
          <li><a href="/products/eyeglasses" className="hover:underline">Eyeglasses</a></li>
        </ul>
      </nav>
    </div> */}
