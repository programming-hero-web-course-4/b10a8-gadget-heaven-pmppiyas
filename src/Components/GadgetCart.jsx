import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Cart from './Cart';

export default function GadgetCart() {
  const allGadgets = useLoaderData();
  const { category } = useParams();
  const [gadgets, setGadgets] = useState(allGadgets);

  useEffect(() => {
    if (category == 'All Gadgets') {
      setGadgets(allGadgets);
    } else if (category) {
      const filterByCategory = allGadgets.filter(
        gadget => gadget.category === category
      );
      setGadgets(filterByCategory);
    } else {
      setGadgets(allGadgets.slice(0, 6));
    }
  }, [category, allGadgets]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <h2 className="col-span-full text-2xl text-center mt-4 md:mt-0 font-medium border-b-2 pb-1 border-purple-700">
        {category ? `${category}` : 'All Gadgets'}
      </h2>
      {gadgets.length > 0 ? (
        gadgets.map(gadget => <Cart key={gadget.product_id} gadget={gadget} />)
      ) : (
        <p className="text-xl text-gray-500 text-center col-span-full min-h-[200px] pt-20">
          <span className="font-medium">'{category}'</span> is not Avaiable...
        </p>
      )}
    </div>
  );
}
