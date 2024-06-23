import React, { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoSearchOutline, IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import CartModal from "../CartModal/CartModal";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <>
      <div className="bg-[#FFE8E8] w-full h-10 flex justify-center items-center text-xs text-[#BF5D7C] font-semibold">
        <p>FREE SHIPPPING over Rs.3499</p>
      </div>


      <div className="sticky top-0 z-50">
        <nav className="bg-white dark:bg-gray-900 w-full z-10 top-15 start-0 border-b border-gray-200 dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <img src={logo} alt="" width={80} />
              <span className="self-center text-lg lg:text-2xl md:text-xl sm:text-lg whitespace-nowrap dark:text-white">
                AN-Luxuries
              </span>
            </div>

            <div className="flex items-center space-x-1 md:order-2 rtl:space-x-reverse ">
              <button
                type="button"
                className="text-black hover:bg-slate-50 focus:ring-blue-300 rounded-lg text-xl lg:text-2xl md:text-xl sm:text-lg px-4 py-3 text-center dark:hover:bg-gray-200 dark:focus:ring-blue-800"
                onClick={toggleSearch}
              >
                <IoSearchOutline />
              </button>
              <button
                type="button"
                onClick={toggleModal}
                className="text-black hover:bg-slate-50 focus:ring-blue-300 rounded-lg text-xl lg:text-2xl md:text-xl sm:text-lg px-4 py-3 text-center dark:hover:bg-gray-200 dark:focus:ring-blue-800 relative"
              >
                <HiOutlineShoppingBag />
                {cartQuantity > 0 && (
                  <span className="absolute top-0 right-0 inline-block w-5 h-5 text-xs font-bold text-white bg-red-600 rounded-full text-center">
                    {cartQuantity}
                  </span>
                )}
              </button>
            </div>
            <div className="flex space-x-1 md:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="text-black hover:bg-slate-50 focus:ring-blue-300 rounded-lg text-2xl px-3 py-3 text-right dark:hover:bg-gray-200 dark:focus:ring-blue-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } items-center justify-between w-full md:flex md:w-auto md:order-1`}
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    to="/"
                    className="block py-2 px-3 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Add-bags"
                    className="block py-2 px-3 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                    onClick={toggleMenu}
                  >
                    Add-Bags
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/Add-glasses"}
                    className="block py-2 px-3 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                    onClick={toggleMenu}
                  >
                    Add-Glasses
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/Add-watches"}
                    className="block py-2 px-3 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                    onClick={toggleMenu}
                  >
                    Add-Watches
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/summary"}
                    className="block py-2 px-3 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                    onClick={toggleMenu}
                  >
                    Orders
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Search Bar */}
        <div
          className={`top-15 start-0 w-full z-20 ${isSearchOpen ? "block" : "hidden"}`}
        >
          <div className="bg-transparent dark:border-gray-600 p-3 flex justify-end items-center">
            <div className="rounded-lg bg-white border border-gray-300 flex items-center justify-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-60 md:w-80 lg:w-96 xl:w-120 rounded-lg p-2 text-left"
              />
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700 focus:outline-none p-2"
                onClick={closeSearch}
              >
                <IoClose className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Cart Modal */}
        <CartModal isOpen={isModalOpen} closeModal={closeModal} cartItems={cartItems} totalAmount={totalAmount} />
      </div>
    </>
  );
};

export default Navbar;
