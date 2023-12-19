import { NavLink, Outlet } from 'react-router-dom'
import React from 'react';
import './style/navbar.css';

function NavBar () {
    return (
        <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : "link"}>Home</NavLink>
        <NavLink to="/search" className={({ isActive }) => isActive ? "active-link" : "link"}>Search</NavLink>
        <NavLink to="/soulmates" className={({ isActive }) => isActive ? "active-link" : "link"}>Soulmates</NavLink>
        <NavLink to="/favourites" className={({ isActive }) => isActive ? "active-link" : "link"}>Favourites</NavLink>
        <NavLink to="/aboutus" className={({ isActive }) => isActive ? "active-link" : "link"}>About Us</NavLink>
      </nav>
    )
}

export default NavBar;