import React from 'react';
import Banner from '../Components/Banner';
import Categories from './Categories';
import { Outlet, useLoaderData } from 'react-router-dom';

export default function Home() {
  const categories = useLoaderData();
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      {/* Category And Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 md:space-x-6 lg:space-x-12 mt-6">
        <div className="col-span-2">
          <Categories categories={categories}></Categories>
        </div>
        <div className="col-span-6">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
