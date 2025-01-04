import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css"
import AppLayout from "./src/components/AppLayout"; 
import { createBrowserRouter,RouterProvider } from "react-router";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import Body from "./src/components/Body";
import RestrauntMenu from "./src/components/RestrauntMenu";


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
                element : <About/>
            },
            {
                path:"/contact",
                element : <Contact />
            },
            {
                path:"/restarants/:resId",
                element:<RestrauntMenu />
            },
        ],
        errorElement: <Error/>
    },
    
])

// createBrowserRouter takes list of path
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)

