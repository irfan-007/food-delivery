import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../static/logo.png";
import { useSelector } from "react-redux";

function Navbar() {
  // const [cartCount, setCartCount] = useState(0); // State to track cart items
  const navigate = useNavigate();
  const cartStorage = useSelector((store) => store.cartStorage);
  return (
    <nav className="flex justify-between items-center p-5 bg-gradient-to-r from-blue-800 to-purple-600 text-white shadow-lg">
      <div className="logo">
        <img className="w-24 rounded bg-cover" src={logo} alt="Logo" />
      </div>
      <div className="links flex gap-8">
        <Link
          to="/home"
          className="hover:text-gray-300 transition duration-200 font-semibold"
        >
          Home
        </Link>
        <Link
          to="/foods"
          className="hover:text-gray-300 transition duration-200 font-semibold"
        >
          Foods
        </Link>
        <Link
          to="/contact"
          className="hover:text-gray-300 transition duration-200 font-semibold"
        >
          Contact
        </Link>
        <Link
          to="/login"
          className="hover:text-gray-300 transition duration-200 font-semibold"
        >
          Login
        </Link>
        {/* Cart Button with Count */}
        <Link
          to="/cart"
          className="relative flex items-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow transition duration-200 font-semibold"
        >
          <span onClick={() => navigate("/cart")} className="mr-2">
            🛒
          </span>
          Cart
          <span className="absolute top-[-8px] right-[-12px] bg-red-600 text-white text-xs rounded-full px-2">
            {cartStorage.length}
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
