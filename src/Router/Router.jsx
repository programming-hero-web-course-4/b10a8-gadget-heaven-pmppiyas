import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Components/MainLayout';
import Dashboard from '../Components/Dashboard';
import Statistics from '../Components/Statistics';

import Home from '../Components/Home';
import GadgetCart from '../Components/GadgetCart';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: '/category/:category',
            element: <GadgetCart></GadgetCart>,
            loader: () => fetch('../gadgets.json'),
          },
        ],
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

export default router;
