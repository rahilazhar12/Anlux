import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
   <>
  
   <Navbar/>
     <Outlet/>
     <Footer/>
   </>
  );
}

export default App;



