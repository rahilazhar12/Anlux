import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white py-10 px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h5 className="font-bold mb-4">SHOP</h5>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Bags</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Glasses</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Watches</a></li>
            
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-4">THE COMPANY</h5>
          <ul>
            
            <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Return/Exchange Policy</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Refund Policy</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Shipping Policy</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Terms Of Service</a></li>
          </ul>
        </div>
        {/* <div>
          <h5 className="font-bold mb-4">STORE ADDRESS</h5>
          <p>Plot B 45, Block 10, Ayesha Manzil FB Area</p>
        </div> */}
        <div>
          <h5 className="font-bold mb-4">NEWSLETTER SIGN UP</h5>
          <p className="mb-4">Sign up for exclusive updates, new arrivals & insider only discounts</p>
          <form className="flex">
            <input
              type="email"
              placeholder="enter your email"
              className="p-2 rounded-l bg-gray-800 text-white border-none focus:outline-none"
            />
            <button className="p-2 rounded-r bg-white text-gray-900 font-bold">SUBMIT</button>
          </form>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
