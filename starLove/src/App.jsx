// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Link, Outlet } from 'react-router-dom'
//import './NavBar';
import NavBar from './components/navbar';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <NavBar/>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}


export default App; 
