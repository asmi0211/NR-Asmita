import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css"
import AppLayout from "./src/components/AppLayout"; 
import { createBrowserRouter,RouterProvider } from "react-router";
// import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import Body from "./src/components/Body";
import RestrauntMenu from "./src/components/RestrauntMenu";
import Shimmer from "./src/components/Shimmer";
import Cart from "./src/components/Cart";
const Grocery = lazy(() => import("./src/components/Grocery"))
const About = lazy(() => import("./src/components/About"))



const appRouter = createBrowserRouter([
    {
        path:"/",
        element : <AppLayout/>,
        children : [
            {
                path:"/",
                element: <Body />
            },
            {
                path:"/about",
                element : <Suspense fallback={<h1>Loading....</h1>}><About/></Suspense>
            },
            {
                path:"/contact",
                element : <Contact />
            },
            {
                path:"/restarants/:resId",
                element:<RestrauntMenu />
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<Shimmer />}><Grocery /></Suspense>
            },
            {
                path:"/cart",
                element:<Cart />
            }
        ],
        errorElement: <Error/>
    },
    
])

// createBrowserRouter takes list of path
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)

