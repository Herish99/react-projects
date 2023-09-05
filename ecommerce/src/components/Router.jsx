import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Product from "./Product";
import Home from "./Home";
import About from "./About";
import MainHead from "./Header"
import SingleProd from "./SingleProd";
import Personal from "./Personal";
import AddToCart from "./AddToCart";




  const MainRouter = createBrowserRouter([
    
    {
      path: "/",
      element:<><MainHead/><Home/></> 
    },
    {
      path: "/product",
      element:<> <MainHead/><Product/></>
      ,
    },
    {
      path: "/about",
      element: <><MainHead/> <About/></>
      ,
    },
    {
      path: "/single/:id",
      element: <><MainHead/> <SingleProd/></>
      ,
    },
    {
      path: "/personal",
      element: <><MainHead/> <Personal/></>
      ,
    },
    {
      path: "/cart",
      element: <><MainHead/> <AddToCart/></>
      ,
    },
  ]);
  
  
  export default MainRouter