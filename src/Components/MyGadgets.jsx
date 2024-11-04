// src/Components/MyGadgets.jsx
import React from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';
import SIngleGadget from './SIngleGadget';

export default function MyGadgets() {
  const data = useLoaderData();
  const { category } = useParams();

  const { categories, gadgets } = data;
  return (
    <div className="md:grid grid-cols-8 gap-8 container mx-auto">
      <div className="col-span-2 flex flex-col gap-8 font-medium py-6">
        {categories.map(gadgetCategory => (
          <NavLink
            key={gadgetCategory.id}
            to={`/gadget/${gadgetCategory.name}`}
            className={({ isActive }) =>
              `btn text-xl h-max bg-gray-300 rounded-xl text-center hover:bg-sec ${
                isActive ? 'bg-sec text-white' : ''
              }`
            }
          >
            {gadgetCategory.name}
          </NavLink>
        ))}
      </div>

      {/* Gadget Show Case Area*/}
      <div className="col-span-6  py-4">
        {category && (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              "{category}"
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gadgets.length > 0 ? (
                gadgets.map(gadget => (
                  <SIngleGadget
                    key={gadget.product_id}
                    gadget={gadget}
                  ></SIngleGadget>
                ))
              ) : (
                <p className="text-xl text-gray-500 text-center">
                  No items available in this category.
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
