import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getAllCart } from '../Utilities/addCart';
import { getAllWishlist } from '../Utilities/addWish';

export default function Navbar({
  bgColor = 'bg-sec',
  textColor = 'text-white',
}) {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const updateCounts = () => {
      const cartData = getAllCart();
      const wishlistData = getAllWishlist();
      console.log('Cart Data:', cartData);
      console.log('Wishlist Data:', wishlistData);
      setCartCount(cartData.length);
      setWishlistCount(wishlistData.length);
      setCartItems(cartData);
      setWishlistItems(wishlistData);
    };
    updateCounts();
  }, []);

  const links = (
    <div className="text-lg">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
    </div>
  );

  return (
    <div className={`navbar ${bgColor} ${textColor} pr-4 lg:px-28`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden ">
            <i className="fa-solid fa-bars text-xl"></i>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content bg-sec rounded-box z-[100] mt-3 w-52 p-2 shadow "
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/statistics">Statistics</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-6 pr-4 md:pr-0">
        <div className="indicator dropdown dropdown-end">
          <span className="indicator-item badge badge-secondary">
            {cartCount}
          </span>
          <button className="p-2" tabIndex="0">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
          <ul
            tabIndex="0"
            className="dropdown-content menu p-2 shadow bg-white text-black rounded-box w-64"
          >
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <li
                  key={index}
                  className="flex  justify-between border-2 rounded-md"
                >
                  <span className="text-lg">{item.product_title}</span>
                  <span>Price: ${item.price}</span>
                </li>
              ))
            ) : (
              <li className="p-2 text-center">Cart is empty</li>
            )}
          </ul>
        </div>

        <div className="indicator dropdown dropdown-end">
          <span className="indicator-item badge badge-secondary">
            {wishlistCount}
          </span>
          <button className="p-2" tabIndex="0">
            <i className="fa-solid fa-heart"></i>
          </button>
          <ul
            tabIndex="0"
            className="dropdown-content menu p-2 shadow bg-white text-black rounded-box w-64"
          >
            {wishlistItems.length > 0 ? (
              wishlistItems.map((item, index) => (
                <li
                  key={index}
                  className="flex  justify-between border-2 rounded-md"
                >
                  <span>{item.product_title}</span>
                  <span>Price: ${item.price}</span>
                </li>
              ))
            ) : (
              <li className="p-2 text-center">Wishlist is empty</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
