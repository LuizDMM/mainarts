import { Outlet } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="App">
      <nav>
        <h1>I am the navigation</h1>
      </nav>
      <Outlet />
    </div>
  )
}

export default Navigation
