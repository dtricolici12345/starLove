// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './assets/Styles/CharactersItem.css'
import { Link, Outlet } from 'react-router-dom'

// import BackgroundStars from './Components/BackgroundStars.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="search">search</Link>
        <Link to="soulmates">Soulmates</Link>
        <Link to="favourites">Favourites</Link>
        <Link to="aboutus">AboutUs</Link>
      </nav>
      <main>
        <Outlet />
     </main>
    </>
  );
}


export default App; 
