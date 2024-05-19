import "./App.css";
import React, { useState } from "react";
import Home from "./pages_klient/Home";
import Buy_1 from "./pages_klient/Buy_1";
import Cart_edit from "./pages_klient/Cart_edit";
import Cart_product from "./pages_klient/Cart_product";
import Cart from "./pages_klient/Cart";
import Login from "./pages_klient/Login";
import Catalog from "./pages_klient/Catalog";
import Delivery from "./pages_klient/Deliver";
import Favorites from "./pages_klient/Favorites";
import PersonalDetails from "./pages_klient/PersonalDetails";
import RecoverPassword from "./pages_klient/RecoverPassword";
import Registration from "./pages_klient/Registration";
import PersonalDetailsSuppliers from "./pages-suppliers/PersonalDetailsSuppliers";
import InformationDetailsSuppliers from "./pages-suppliers/InformationDetailsSupplier";
import PersonalDetailsAdmin from "./pages_admin/PersonalDetailsAdmin";
import OrderDetailsAdmin from "./pages_admin/OrderDetailsAdmin";
import OrdersAdmin from "./pages_admin/OrdersAdmin";
import PriceListAdmin from "./pages_admin/PriceListAdmin";
import Fakelogin from "./pages_admin/Fakelogin";
import AboutUs from "./commone_pages/aboutUs/AboutUs";
import Header from "./commone_pages/header/Header";
import News from "./commone_pages/news";
import HomeSite from "./commone_pages/home/Home";
import Partners from "./commone_pages/partners/Partners";
import Contact from "./commone_pages/contact/Contact";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Park from "./commone_pages/park/Park";
import Purchases from "./pages_klient/Purchases";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeSite />,
      children: [],
    },
    {
      path: "/Purchases",
      element: <Purchases />,
      children: [],
    },
    {
      path: "/Buy_1",
      element: <Buy_1 />,
      children: [],
    },
    {
      path: "/Cart_edit",
      element: <Cart_edit />,
      children: [],
    },
    {
      path: "/Cart_product",
      element: <Cart_product />,
      children: [],
    },
    {
      path: "/Cart",
      element: <Cart />,
      children: [],
    },
    {
      path: "/Home",
      element: <Home />,
      children: [],
    },
    {
      path: "/Catalog",
      element: <Catalog />,
      children: [],
    },
    {
      path: "/Delivery",
      element: <Delivery />,
      children: [],
    },
    {
      path: "/favorites",
      element: <Favorites />,
      children: [],
    },
    {
      path: "/PersonalDetails",
      element: <PersonalDetails />,
      children: [],
    },
    {
      path: "/RecoverPassword",
      element: <RecoverPassword />,
      children: [],
    },
    {
      path: "/Registration",
      element: <Registration />,
      children: [],
    },
    {
      path: "/AboutUs",
      element: <AboutUs />,
      children: [],
    },
    {
      path: "/News",
      element: <News />,
      children: [],
    },
    {
      path: "/Partners",
      element: <Partners />,
      children: [],
    },
    {
      path: "/Contacts",
      element: <Contact />,
      children: [],
    },
    {
      path: "/Park",
      element: <Park />,
      children: [],
    },
    {
      path: "/Login",
      element: <Login />,
      children: [],
    },
    {
      path: "/SignUp",
      element: <Registration />,
      children: [],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
