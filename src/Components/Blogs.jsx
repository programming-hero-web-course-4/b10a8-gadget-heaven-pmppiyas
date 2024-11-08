import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useLoaderData } from 'react-router-dom';
import ReactTypingEffect from 'react-typing-effect';

export default function GadgetBlog() {
  const ourGadgets = useLoaderData();
  const [gadgets, setGadget] = useState([]);

  useEffect(() => {
    document.title = 'Dashboard | Gedget Heaven';
    setGadget(ourGadgets);
  }, [ourGadgets]);

  const nineGadgets = gadgets.slice(0, 9);

  return (
    <div className="container mx-auto flex flex-col">
      <Navbar />
      <div className="space-y-2 py-2 flex flex-col">
        <h1 className="text-5xl font-medium text-center text-gray-800 border-b-4 border-sec">
          <ReactTypingEffect text={['Flash Sell! 12/12']} />
        </h1>

        {/* Gradient background wrapper for marquee */}
        <div
          style={{
            background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
            padding: '10px',
          }}
        >
          <marquee
            behavior="scroll"
            direction="left"
            scrollAmount="6"
            style={{
              fontSize: '1.25rem',
              fontWeight: 'normal',
              color: 'white',
            }}
          >
            Hello Reader, we are launching a flash big sale for 12/12. We offer
            you huge discounts and many more offers...
          </marquee>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
        {nineGadgets.map(gadget => (
          <div
            key={gadget.product_id}
            className="rounded-lg shadow-lg overflow-hidden border border-gray-200 bg-white pt-2"
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
                <s>${gadget.price}</s>
                <span className="scale-125">${gadget.price - 500}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
