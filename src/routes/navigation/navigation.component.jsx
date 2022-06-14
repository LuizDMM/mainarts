import { ReactComponent as Logo } from 'assets/crown.svg'
import { Link, Outlet } from 'react-router-dom'
import './navigation.styles.scss'

const Navigation = () => {
  return (
    <div className="App">
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Navigation
