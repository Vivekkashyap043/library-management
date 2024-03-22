import React from 'react'
import "./Header.css"
import {NavLink} from "react-router-dom"

function Header() {

    return (
        <nav className="navbar bg-dark">
            <div className="navbar-bg"></div> 
            <div className="navbar-content">
                <div className="logo ms-2 nav-item">
                    <NavLink className="nav-link" to="">
                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLfdQ2FWNXNPU3-rL1xHiff0q9x-JYoX2xzA&usqp=CAU"}  alt="Logo" />
                    </NavLink>   
                </div>
                <div className="title">
                    Library Management System
                </div>
                <div className="search-bar me-2">
                    <input type="text" placeholder="Search..." />
                    <button>Search</button>
                </div>
                <div className='lin'>
                {/* <div className='nav-item text-white '>
                    <NavLink className="nav-link" to="">
                        Home
                    </NavLink>
                </div> */}
                <div className='nav-item text-white'>
                    <NavLink className="nav-link" to="login">
                        Login
                    </NavLink>
                </div>
                <div className='nav-item text-white '>
                    <NavLink className="nav-link" to="register">
                        Register
                    </NavLink>
                </div>
                </div>
                
            </div>
        </nav>
    );
}

export default Header
