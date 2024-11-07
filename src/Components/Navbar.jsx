import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar({
  bgColor = 'bg-sec',
  textColor = 'text-white',
}) {
  const links = (
    <div>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
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
            tabindex="0"
            className="menu menu-sm dropdown-content bg-sec  rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/statistics">Statistics</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-6 pr-4 md:pr-0">
        <div className="indicator">
          <span className="indicator-item badge badge-secondary">99+</span>
          <button className="p-2">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>

        <div className="indicator">
          <span className="indicator-item badge badge-secondary">99+</span>
          <button className="p-2">
            <i className="fa-solid fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
