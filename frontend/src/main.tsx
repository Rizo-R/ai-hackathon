import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.tsx';
import Recommended, { loader as recommendedLoader } from './Recommended.tsx';

const router = createBrowserRouter([
  {
      path: '/',
      element: <Layout />,
      children: [
          {
              path: '/',
              element: <App />,
          },
          {
              path: '/recommendations',
              element: <Recommended />,
              loader: recommendedLoader
          }
      ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
