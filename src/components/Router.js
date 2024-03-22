import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './home/Home'
import Root from './Root'
import Login from "./login-register/Login"
import Register from "./login-register/Register"
function Router() {
    let router = createBrowserRouter([
        {
            path: "",
            element: <Root />,
            children: [
                {
                    path: "",
                    element: <Home />
                },
                {
                    path: "login",
                    element: <Login />,
                },
                {
                    path: "register",
                    element: <Register />,
                },
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default Router
