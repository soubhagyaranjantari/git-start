import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            <h1>Contact Us Page</h1>
            <h3>This is our company Page</h3>
            <ul className='navBar'>
                <li ><NavLink
                    className='nav-link' to='company'>Company</NavLink></li>
                <li><NavLink
                    className='nav-link' to='channel'>Channel</NavLink></li>
                <li><NavLink
                    className='nav-link' to='other/'>Other</NavLink></li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Contact