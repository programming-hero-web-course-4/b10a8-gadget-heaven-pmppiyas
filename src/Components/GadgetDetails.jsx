import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

export default function GadgetDetails() {
  const allGadgets = useLoaderData();
  const { id } = useParams();
  const IdNumber = parseInt(id);
  const [gadget, setGadget] = useState(null);

  useEffect(() => {
    const selectGadget = allGadgets.find(
      gadget => gadget.product_id === IdNumber
    );
    if (selectGadget) {
      setGadget(selectGadget);
    }
  }, [allGadgets, IdNumber]);

  if (!gadget) {
    return <div>Loading gadget details...</div>;
  }

  const {
    product_title,
    product_image,
    price,
    description,
    specifications,
    availability,
    rating,
  } = gadget;

  return (
    <div>
      {/* <div className="bg-sec">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div> */}
      <div className="bg-gray-200 py-8 md:grid md:grid-cols-5 gap-8 md:w-5/6 mx-auto rounded-xl">
        <div className=" md:col-span-2  m-2">
          <img
            className="w-full h-full object-fit rounded-xl"
            src={product_image}
            alt={product_title}
          ></img>
        </div>
        <div className="space-y-2 col-span-3 m-2">
          <h2 className="text-2xl font-medium">{product_title}</h2>
          <p>Price: ${price}</p>
          <div
            className={`badge ${
              availability
                ? 'badge-accent badge-outline'
                : 'badge-secondary badge-outline'
            }`}
          >
            {availability ? 'In Stock' : 'Not Available'}
          </div>
          <p>{description}</p>
          <p className="font-medium"> Specification:</p>
          <ul className="list-decimal list-inside pl-2">
            {specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
          <div className="flex gap-2">
            <p>
              <i class="fa-solid fa-star text-yellow-400"></i>
              <i class="fa-solid fa-star text-yellow-400"></i>
              <i class="fa-solid fa-star text-yellow-400"></i>
              <i class="fa-solid fa-star text-yellow-400"></i>
              <i class="fa-regular fa-star"></i>
            </p>
            <span className="bg-gray-300 px-2 rounded-full">{rating}</span>
          </div>
          <div className="flex gap-6 ">
            <button className="btn bg-sec ">
              Add to Card
              <span>
                <i class="fa-solid fa-cart-shopping"></i>
              </span>
            </button>
            <button className="text-sec text-3xl bg-gray-400 px-2 rounded-full btn">
              <i class="fa-regular fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
