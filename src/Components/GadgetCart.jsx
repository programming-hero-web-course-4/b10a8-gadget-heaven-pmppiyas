import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Cart from './Cart';

export default function GadgetCart() {
  const allGadgets = useLoaderData();
  const { category } = useParams();
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    const filterByCategory = allGadgets.filter(
      gadget => gadget.category === category
    );
    setGadgets(filterByCategory);
  }, [category, allGadgets]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {gadgets.length > 0 ? (
        gadgets.map(gadget => <Cart key={gadget.product_id} gadget={gadget} />)
      ) : (
        <p className="text-xl text-gray-500 text-center col-span-full min-h-[200px] pt-20">
          No items available in this category.
        </p>
      )}
    </div>
  );
}
