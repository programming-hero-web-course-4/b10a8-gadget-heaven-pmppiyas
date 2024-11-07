import React from 'react';
import Navbar from './Navbar';

export default function Statistics() {
  return (
    <div>
      <Navbar bgColor="white" textColor="black"></Navbar>
      <div className="bg-sec flex flex-col justify-center items-center gap-2 text-white text-center py-6">
        <h2 className="text-3xl font-medium">This is Statistics</h2>
        <p className="text-sm">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
    </div>
  );
}
