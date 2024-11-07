import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useLoaderData } from 'react-router-dom';

export default function GadgetBlog() {
  const ourGadgets = useLoaderData();
  const [gadgets, setGadget] = useState([]);
  useEffect(() => {
    setGadget(ourGadgets);
  }, [ourGadgets]);

  const nineGadgets = gadgets.slice(0, 9);
  return (
    <div className="container mx-auto flex flex-col">
      <Navbar></Navbar>
      <div className="space-y-2 py-2 flex flex-col">
        <h1 className=" text-5xl font-medium text-center text-gray-800 border-b-4 border-sec ">
          <span className="text-sec">|</span> Flash Sell 12/ 12
          <span className="text-sec">|</span>
        </h1>
        <p className="text-lg text-center">
          Hello Reader, we are lounched a flash big sale for 12/12. We offer to
          you huge discount and many more offers........
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
        {nineGadgets.map(gadget => (
          <div
            key={gadget.product_id}
            className="rounded-lg shadow-lg overflow-hidden border border-gray-200 bg-white"
          >
            <img
              src={gadget.product_image}
              alt={gadget.product_title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                {gadget.product_title}
              </h3>
              <p className="text-gray-600 mb-4">{gadget.description}</p>
              <div className="text-lg font-bold text-blue-600 flex gap-2">
                <s> ${gadget.price}</s>
                <span className="scale-125">${gadget.price - 500}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
