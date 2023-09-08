import React from 'react';
// import { createRoot } from "react-dom/client";
import { createBrowserRouter } from 'react-router-dom';
import Listing from './components/Listing';
import Create from './components/Create';
import Edit from './components/Edit';
import Details from './components/Details';

const MainRouter = createBrowserRouter ([
    {
        path: "/",
        element:<Listing/>
    },
    {
        path: "/create",
        element:<Create/>
    },
    {
        path: "/edit/:empid",
        element:<Edit/>
    },
    {
        path: "/details/:empid",
        element:<Details/>
    },
]);

export default MainRouter;