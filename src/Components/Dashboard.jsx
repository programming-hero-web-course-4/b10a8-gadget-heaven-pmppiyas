import React, { useEffect, useState } from 'react';
import { getAllCart, removeCart } from '../Utilities/addCart';
import { getAllWishlist, removeWishlist } from '../Utilities/addWish';

export default function Dashboard() {
  const [addGadget, setAddGadget] = useState([]);
  const [selectedTab, setSelectedTab] = useState('cart');

  useEffect(() => {
    const loadItems = selectedTab === 'cart' ? getAllCart() : getAllWishlist();
    setAddGadget(loadItems);
  }, [selectedTab]);

  const handleDelete = productId => {
    if (selectedTab === 'cart') {
      removeCart(productId);
    } else {
      removeWishlist(productId);
    }
    setAddGadget(prevGadgets =>
      prevGadgets.filter(gadget => gadget.product_id !== productId)
    );
  };

  return (
    <div>
      <h2>This is Dashboard</h2>
      <div className="flex gap-4">
        <button
          onClick={() => setSelectedTab('cart')}
          className={`btn ${
            selectedTab === 'cart' ? 'bg-sec text-white' : 'bg-gray-300'
          }`}
        >
          Cart
        </button>
        <button
          onClick={() => setSelectedTab('wishlist')}
          className={`btn ${
            selectedTab === 'wishlist' ? 'bg-sec text-white' : 'bg-gray-300'
          }`}
        >
          Wishlist
        </button>
      </div>

      <div className="space-y-2 mt-4">
        {addGadget.length > 0 ? (
          addGadget.map(gadget => (
            <div
              key={gadget.product_id}
              className="grid grid-cols-5 bg-gray-200"
            >
              <div className="col-span-1 h-32">
                <img
                  className="h-full w-full"
                  src={gadget.product_image}
                  alt={gadget.product_title}
                />
              </div>
              <div className="col-span-3 pl-2 flex justify-center flex-col">
                <h2 className="text-xl font-medium">{gadget.product_title}</h2>
                <p>{gadget.description}</p>
                <p>Price: ${gadget.price}</p>
              </div>
              <div
                onClick={() => handleDelete(gadget.product_id)}
                className="cursor-pointer text-red-500 flex justify-center items-center"
              >
                <i className="fa-solid fa-trash text-2xl"></i>
              </div>
            </div>
          ))
        ) : (
          <p>
            {selectedTab === 'cart' ? (
              <div className=" min-h-[400px] flex justify-center items-center">
                <p className="text-3xl">Your Cartlist is Empty</p>
              </div>
            ) : (
              <div className=" min-h-[400px] flex justify-center items-center">
                <p className="text-3xl">Your Wishlist is Empty</p>
              </div>
            )}
          </p>
        )}
      </div>
    </div>
  );
}
