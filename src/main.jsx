import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Layout/Main';
import Home from './component/Home/Home';
import OrderReview from './component/OrderReview/OrderReview';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
const router = createBrowserRouter([
   {
    path: '/',
    element: <Main/>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('tshirt.json')
      },
      {
        path: '/reviwe',
        element: <OrderReview></OrderReview>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      }
    ],
   },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
