import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Categories({ categories }) {
  return (
    <div className="flex flex-col  gap-2">
      {categories.map(gadgetCategory => (
        <NavLink
          key={gadgetCategory.id}
          to={`/category/${gadgetCategory.name}`}
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
  );
}
