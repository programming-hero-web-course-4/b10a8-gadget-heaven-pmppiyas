import React from 'react';

export default function SIngleGadget({ gadget }) {
  const { product_title, price, product_id } = gadget;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p>Price: {price}</p>
        <div className="card-actions ">
          <button className="btn rounded-3xl outline-2 outline outline-purple-600 text-purple-800">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
