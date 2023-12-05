import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.tsx'
import Sale from './pages/Sale.tsx';
import New from './pages/New.tsx';
import Food from './pages/Food.tsx';
import Stationery from './pages/Stationery.tsx';
import Clothes from './pages/Clothes.tsx';
import Favorite from './pages/Favorite.tsx';
import Cart from './pages/Cart.tsx';
import Account from './pages/Account.tsx';
import BoardGame from './pages/BoardGame.tsx';
import ProductDetail from './pages/ProductDetail.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "sale",
    element: <Sale/>,
  },
  {
    path: "new",
    element: <New/>,
  },
  {
    path: "food",
    element: <Food/>,
  },
  {
    path: "stationery",
    element: <Stationery/>,
  },
  {
    path: "clothes",
    element: <Clothes/>,
  },
  {
    path: "favorite",
    element: <Favorite/>,
  },
  {
    path: "cart",
    element: <Cart/>,
  },
  {
    path: "account",
    element: <Account/>,
  },
  {
    path: "boardgame",
    element: <BoardGame/>,
  },
  {
    path: ":category/product",
    element: <ProductDetail />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
