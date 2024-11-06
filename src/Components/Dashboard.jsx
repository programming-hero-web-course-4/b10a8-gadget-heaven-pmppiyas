import React, { useEffect, useState } from 'react';
import { getAllCart, removeCart } from '../Utilities/addCart';

export default function Dashboard() {
  const [addGadget, setAddGadget] = useState([]);

  useEffect(() => {
    const addItems = getAllCart();
    setAddGadget(addItems);
  }, []);

  // Handle deletion of an item
  const handleDelete = productId => {
    removeCart(productId);
    setAddGadget(prevGadgets =>
      prevGadgets.filter(gadget => gadget.product_id !== productId)
    );
  };

  return (
    <div>
      <h2>This is Dashboard</h2>

      <div className="space-y-2">
        {addGadget.map(gadget => (
          <div key={gadget.product_id} className="grid grid-cols-5 bg-gray-200">
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
              className="  text-white flex justify-center items-center"
            >
              <i class="fa-solid fa-delete-left text-2xl text-red-500"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
