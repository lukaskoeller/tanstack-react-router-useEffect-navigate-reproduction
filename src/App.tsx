import { Link, Outlet } from '@tanstack/react-router'
import './App.css'

function App() {
  console.log(location.href);
  

  return (
    <>
      <h1>@tanstack/react-router</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Outlet />
    </>
  )
}

export default App
