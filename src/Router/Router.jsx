import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Components/MainLayout';
import Dashboard from '../Components/Dashboard';
import Statistics from '../Components/Statistics';
import Home from '../Components/Home';
import GadgetCart from '../Components/GadgetCart';
import GadgetDetails from '../Components/GadgetDetails';
import ErrorElement from '../Components/ErrorElement';
import Blogs from '../Components/Blogs';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/categories.json'),
        children: [
          {
            path: '/',
            element: <GadgetCart></GadgetCart>,
            loader: () => fetch('/gadgets.json'),
          },
          {
            path: '/category/:category',
            element: <GadgetCart></GadgetCart>,
            loader: () => fetch('/gadgets.json'),
          },
        ],
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/statistics',
        element: <Statistics />,
      },
      {
        path: '/gadget/:id',
        element: <GadgetDetails />,
        loader: () => fetch('/gadgets.json'),
      },
      {
        path: '/category/:category/gadget/:id',
        element: <GadgetDetails />,
        loader: () => fetch('/gadgets.json'),
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
        loader: () => fetch('/gadgets.json'),
      },
    ],
  },
]);

export default router;
