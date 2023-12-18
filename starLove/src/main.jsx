import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Aboutus from './pages/AboutUs.jsx'
import Favourites from './Pages/Favourites.jsx'
import Home from './Pages/Home.jsx'
import Search from './Pages/Search.jsx'
import Soulmates from './Pages/Soulmates.jsx'

import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      }, {
        path: "/Search",
        element: <Search />,
      }, {
        path: "/Soulmates",
        element: <Soulmates />,
      }, {
        path: "/Favourites",
        element: <Favourites />,
      }, {
        path: "/Aboutus",
        element: <Aboutus />
      }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
