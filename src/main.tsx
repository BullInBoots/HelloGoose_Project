import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Food from "./pages/Food.tsx";
import Stationery from "./pages/Stationery.tsx";
import Clothes from "./pages/Clothes.tsx";
import Favorite from "./pages/Favorite.tsx";
import Cart from "./pages/Cart.tsx";
import Account from "./pages/Account.tsx";
import BoardGame from "./pages/BoardGame.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import CheckoutDetail from "./pages/CheckoutDetail.tsx";
import Shipping from "./pages/Shipping.tsx";
import Payment from "./pages/Payment.tsx";
import Home from "./pages/Home.tsx";
import Login from "./Login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "home",
    element: <Home />
  },
  {
    path: "food",
    element: <Food />,
  },
  {
    path: "stationery",
    element: <Stationery />,
  },
  {
    path: "clothes",
    element: <Clothes />,
  },
  {
    path: "favorite",
    element: <Favorite />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "account",
    element: <Account />,
  },
  {
    path: "boardgame",
    element: <BoardGame />,
  },
  {
    path: ":category/product/:id",
    element: (
      <ProductDetail user={JSON.parse(localStorage.getItem("user") || "{}")} />
    ),
  },
  {
    path: "details",
    element: (
      <CheckoutDetail user={JSON.parse(localStorage.getItem("user") || "{}")} />
    ),
  },
  {
    path: "shipping",
    element: (
      <Shipping user={JSON.parse(localStorage.getItem("user") || "{}")} />
    ),
  },
  {
    path: "payment",
    element: <Payment />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
