import React from 'react';
import bannerImg from '../assets/banner.jpg';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
export default function Banner() {
  return (
    <div className="relative bg-sec  text-center container mx-auto flex flex-col justify-center items-center">
      <Navbar></Navbar>
      <div className="space-y-6 pb-48 lg:pb-60">
        <h1 className="text-4xl lg:text-6xl font-semibold text-gray-50">
          Upgrade Your Tech Accessories with Gadget Heaven
        </h1>
        <p className="text-gray-100">
          Explore the latest gadgets that will elevate your experience. From
          smart devices to the coolest accessories, we have it all!
        </p>
        <button className="btn text-lg text-gray-600 rounded-3xl">
          <NavLink to={'/'}>Shop Now</NavLink>
        </button>
      </div>
      <div className="absolute  w-5/6 top-64  mt-28 outline outline-offset-4 outline-white rounded-2xl z-10">
        <img
          className="rounded-2xl w-full object-cover h-[300px] lg:h-[400px]"
          src={bannerImg}
          alt="Banner"
        />
      </div>
    </div>
  );
}
