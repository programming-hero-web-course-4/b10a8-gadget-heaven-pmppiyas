import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );
  return (
    <div class="navbar bg-sec text-white pr-4 lg:px-28">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-400 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a class="btn btn-ghost text-xl">Gadget Heaven</a>
      </div>
      <div class="navbar-center hidden lg:flex ">
        <ul class="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div class="navbar-end flex gap-6 pr-4 md:pr-0">
        <div className="indicator">
          <span className="indicator-item badge badge-secondary">99+</span>
          <button className="p-2">
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>

        <div className="indicator">
          <span className="indicator-item badge badge-secondary">99+</span>
          <button className="p-2">
            <i class="fa-solid fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
