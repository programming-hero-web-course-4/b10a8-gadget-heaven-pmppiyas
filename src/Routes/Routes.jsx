import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import MyGadgets from '../Components/MyGadgets';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MyGadgets />,
        loader: async () => {
          const response = await fetch('/categories.json');
          const categories = await response.json();
          return { categories };
        },
      },
      {
        path: 'gadget/:category',
        element: <MyGadgets />,
        loader: async ({ params }) => {
          const [categoriesRes, gadgetsRes] = await Promise.all([
            fetch('/categories.json'),
            fetch('/gadgets.json'),
          ]);

          const categories = await categoriesRes.json();
          const gadgets = await gadgetsRes.json();

          const filteredGadgets = gadgets.filter(
            gadget =>
              gadget.category.toLowerCase() === params.category.toLowerCase()
          );

          return { categories, gadgets: filteredGadgets };
        },
      },
    ],
  },
]);

export default router;
