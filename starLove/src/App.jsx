// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { NavLink, Outlet } from 'react-router-dom'
import DropDownSearch from './components/DropDownSearch';

function App() {


  return (
    <>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : "link"}>Home</NavLink>
        <NavLink to="/search" className={({ isActive }) => isActive ? "active-link" : "link"}>Search</NavLink>
        <NavLink to="/soulmates" className={({ isActive }) => isActive ? "active-link" : "link"}>Soulmates</NavLink>
        <NavLink to="/favourites" className={({ isActive }) => isActive ? "active-link" : "link"}>Favourites</NavLink>
        <NavLink to="/aboutus" className={({ isActive }) => isActive ? "active-link" : "link"}>About Us</NavLink>
      </nav>
      <main>
        <Outlet />

      </main>
    </>
  );
}

export default App;
