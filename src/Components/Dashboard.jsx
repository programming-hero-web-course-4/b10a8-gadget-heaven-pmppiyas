import React, { useEffect, useState } from 'react';
import { getAllCart, removeCart } from '../Utilities/addCart';
import { getAllWishlist, removeWishlist } from '../Utilities/addWish';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Dashboard() {
  const [addGadget, setAddGadget] = useState([]);
  const [selectedTab, setSelectedTab] = useState('cart');
  const [isDescending, setIsDescending] = useState(false);

  // Load items based on selected tab
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

  const handleSortDescending = () => {
    const sortedGadgets = [...addGadget].sort((a, b) => b.price - a.price);
    setAddGadget(sortedGadgets);
    setIsDescending(true);
  };

  const handlePurchase = () => {
    if (selectedTab === 'cart') {
      addGadget.forEach(gadget => removeCart(gadget.product_id));
      setAddGadget([]);
      toast.success('Successfully Purchase!', {
        duration: 2000,
      });
    }
  };

  const totalPrice =
    selectedTab === 'cart'
      ? addGadget.reduce((sum, gadget) => sum + gadget.price, 0)
      : 0;

  return (
    <div className="container mx-auto">
      <div className="bg-sec flex flex-col justify-center items-center gap-2 text-white text-center py-6">
        <h2 className="text-3xl font-medium">This is Dashboard</h2>
        <p className="text-sm">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex gap-8 pt-4">
          <button
            onClick={() => setSelectedTab('cart')}
            className={`btn ${
              selectedTab === 'cart' ? 'bg-gray-100 text-sec' : 'bg-sec'
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => setSelectedTab('wishlist')}
            className={`btn ${
              selectedTab === 'wishlist' ? 'bg-gray-100 text-sec' : 'bg-sec'
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>

      {/* Display total price and sort button only for Cart tab */}
      <div className="flex justify-between items-center  h-16">
        <p className="text-2xl font-medium">
          {selectedTab === 'cart' ? 'Cart' : 'Wishlist'}
        </p>
        {selectedTab === 'cart' && (
          <div className=" px-4 flex justify-between items-center gap-20">
            <p className="text-lg font-medium">Total Price: ${totalPrice}</p>
            <div>
              <button
                onClick={handleSortDescending}
                className="btn bg-sec text-white rounded-md"
              >
                Sort by Price
              </button>
              <button
                onClick={handlePurchase} // Trigger the purchase (clear cart and show toast)
                className="btn bg-sec text-white"
              >
                Purchase
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Display gadgets */}
      <div className="space-y-2 mt-4">
        {addGadget.length > 0 ? (
          addGadget.map(gadget => (
            <div
              key={gadget.product_id}
              className="grid grid-cols-5 bg-gray-200 p-4 rounded-lg"
            >
              <div className="col-span-1 h-32">
                <img
                  className="h-full w-full rounded-md"
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
          <div className="min-h-[400px] flex justify-center items-center">
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
          </div>
        )}
      </div>

      {/* Toast Container to show toast notifications */}
      <ToastContainer />
    </div>
  );
}
