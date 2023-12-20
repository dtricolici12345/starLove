import { NavLink, Outlet } from 'react-router-dom'

import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <>
      <nav className='app-nav'>
        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : "link"}>Home</NavLink>
        <NavLink to="/soulmates" className={({ isActive }) => isActive ? "active-link" : "link"}>Soulmates</NavLink>
        <NavLink to="/favourites" className={({ isActive }) => isActive ? "active-link" : "link"}>Favourites</NavLink>
        <NavLink to="/aboutus" className={({ isActive }) => isActive ? "active-link" : "link"}>About Us</NavLink>
      </nav>
      <main className='app-main'>
        <Outlet />
      </main>
      <footer className='app-footer'>
        <Footer />
      </footer>
    </>
  );
}

export default App;
