import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addCart, getAllCart } from '../Utilities/addCart';
import {
  addWishlist,
  getAllWishlist,
  removeWishlist,
} from '../Utilities/addWish';

export default function GadgetDetails() {
  const allGadgets = useLoaderData();
  const { id } = useParams();
  const IdNumber = parseInt(id);
  const [gadget, setGadget] = useState(null);
  const [isAdd, setIsAdd] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    if (allGadgets) {
      const selectedGadget = allGadgets.find(
        gadget => gadget.product_id === IdNumber
      );
      setGadget(selectedGadget);
    }
  }, [allGadgets, IdNumber]);

  useEffect(() => {
    if (gadget) {
      const cartItems = getAllCart();
      const wishlistItems = getAllWishlist();

      const isCartItem = cartItems.some(
        item => item.product_id === gadget.product_id
      );
      const isWishlistItem = wishlistItems.some(
        item => item.product_id === gadget.product_id
      );

      setIsAdd(isCartItem);
      setIsInWishlist(isWishlistItem);
    }
  }, [gadget]);

  if (!gadget) {
    return (
      <div className="text-2xl font-medium text-center h-full mt-52">
        Loading gadget details...
      </div>
    );
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

  // Handle Add to Cart
  const handleCart = gadget => {
    addCart(gadget);
    setIsAdd(true);
  };

  // Handle Wishlist
  const handleWishlist = gadget => {
    if (isInWishlist) {
      removeWishlist(gadget.product_id);
      setIsInWishlist(false);
    } else {
      addWishlist(gadget);
      setIsInWishlist(true);
    }
  };

  return (
    <div>
      <div className="bg-gray-200 py-8 md:grid md:grid-cols-5 gap-8 md:w-5/6 mx-auto rounded-xl">
        <div className="md:col-span-2 m-2">
          <img
            className="w-full h-full object-fit rounded-xl"
            src={product_image}
            alt={product_title}
          />
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
          <p className="font-medium">Specifications:</p>
          <ul className="list-decimal list-inside pl-2">
            {specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
          <div className="flex gap-2">
            <p>
              <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-regular fa-star"></i>
            </p>
            <span className="bg-gray-300 px-2 rounded-full">{rating}</span>
          </div>
          <div className="flex gap-6">
            <button
              disabled={isAdd}
              onClick={() => handleCart(gadget)}
              className="btn bg-sec"
            >
              Add to Cart
              <span>
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
            </button>
            <button
              onClick={() => handleWishlist(gadget)}
              className={`text-sec text-3xl bg-gray-400 px-2 rounded-full btn ${
                isInWishlist ? 'text-red-500' : 'text-gray-500'
              }`}
            >
              <i
                className={
                  isInWishlist ? 'fa-solid fa-heart' : 'fa-regular fa-heart'
                }
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
