import { Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
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
        <li>
          <Link to="/news">News</Link>
        </li>
      </ul>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
}

export default App
