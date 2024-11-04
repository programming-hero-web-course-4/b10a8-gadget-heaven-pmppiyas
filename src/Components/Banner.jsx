import React from 'react';
import bannerImg from '../assets/banner.jpg';

export default function Banner() {
  return (
    <div className="">
      <div className="bg-sec">
        <div className="  py-6 text-center space-y-6 container mx-auto">
          <h1 className="text-4xl lg:text-6xl  font-semibold">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="btn rounded-3xl">Subscribe</button>
        </div>
        {/* <div className="w-5/6 mx-auto outline outline-offset-4 outline-white rounded-2xl  top-10">
        <img className="rounded-2xl h-full" src={bannerImg}></img>
      </div> */}
      </div>
    </div>
  );
}
