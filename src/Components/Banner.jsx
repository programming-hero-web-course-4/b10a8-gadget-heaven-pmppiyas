import React from 'react';
import bannerImg from '../assets/banner.jpg';

export default function Banner() {
  return (
    <div className="relative bg-sec py-6 text-center container mx-auto min-h-screen">
      <div className="space-y-6 pb-28">
        <h1 className="text-4xl lg:text-6xl font-semibold">
          Upgrade Your Tech Accessories with Gadget Heaven
        </h1>
        <p>
          Explore the latest gadgets that will elevate your experience. From
          smart devices to the coolest accessories, we have it all!
        </p>
        <button className="btn btn-primary rounded-3xl">Subscribe</button>
      </div>
      <div className="absolute inset-x-0 w-5/6 mx-auto top-64 outline outline-offset-4 outline-white rounded-2xl z-10">
        <img
          className="rounded-2xl w-full object-cover h-[300px]"
          src={bannerImg}
          alt="Banner"
        />
      </div>
    </div>
  );
}
