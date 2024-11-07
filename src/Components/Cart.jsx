import React from 'react';
import { Link } from 'react-router-dom';

export default function SIngleGadget({ gadget }) {
  const { product_title, price, product_id: id, product_image } = gadget;

  return (
    <div className="card card-compact bg-base-100 shadow-xl hover:scale-100 scale-95 transition-transform hover:bg-purple-200">
      <figure>
        <img
          className="h-[300px] md:h-[200px] w-full"
          src={product_image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p>Price: ${price}</p>
        <div className="card-actions ">
          <Link
            to={`gadget/${id}`}
            className="btn btn-sm rounded-3xl outline-2 outline outline-purple-600 text-purple-800 hover:bg-purple-800 hover:text-white hover:outline-none transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
