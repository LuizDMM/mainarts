import { ReactComponent as Logo } from 'assets/crown.svg'
import { UserContext } from 'contexts/user.context'
import { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { signOutUser } from 'utils/firebase/firebase.utils'
import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)

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
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Navigation
