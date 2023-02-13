import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import Login from "./Component/Login";
import "../src/cat.css";

import { 
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

 const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "login",
        element: < Login/>,
    },
 ]);

 const root=createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
























