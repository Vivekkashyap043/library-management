import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
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
                    path: "/contactus",
                    element: <Contactus />
                },
                {
                    path: "login",
                    element: <Login />,
                    children: [
                        {
                            path: "donar",
                            element: <DonarLogin />
                        },
                        {
                            path: "volunteer",
                            element: <VolunteerLogin />
                        },
                        {
                            path: 'admin',
                            element: <AdminLogin />
                        }
                    ]
                },
                {
                    path: "register",
                    element: <Register />,
                },
                {
                    path: "donar-register",
                    element: <DonarRegister />
                },
                {
                    path: "volunteer-register",
                    element: <VolunteerRegister />
                },
                {
                    path: "donar-dashboard/:username",
                    element: <DonarDashboard />
                }
            ]
        }
    ])
    return (
        <div>

        </div>
    )
}

export default Router
