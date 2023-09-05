import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      
      <header class="text-gray-600 body-font shadow-lg ">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">ShopCLues</span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to='/'  class="mr-5 hover:text-gray-900">Home</Link>
            <Link to='/personal' class="mr-5 hover:text-gray-900">Products</Link>
            {/* <Link to='/product' class="mr-5 hover:text-gray-900">Product</Link> */}
            <Link to='/about' class="mr-5 hover:text-gray-900">About us</Link>
          </nav>
          <Link to='/cart' class="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-white mt-4 md:mt-0">
            Go to cart
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
