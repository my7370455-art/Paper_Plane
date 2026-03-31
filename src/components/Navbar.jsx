import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="navbar-icon">✈</span>
        <span className="navbar-title">Paper Plane</span>
      </Link>
      <div className="navbar-actions">
        <Link
          to="/"
          className={`navbar-btn compose-btn${location.pathname === '/' ? ' active-compose' : ''}`}
        >
          ✏️ Compose
        </Link>
        <Link
          to="/public"
          className={`navbar-link${location.pathname === '/public' ? ' active' : ''}`}
        >
          🌐 Public Letters
        </Link>
        <Link
          to="/profile"
          className={`navbar-link${location.pathname === '/profile' ? ' active' : ''}`}
        >
          👤 Profile
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
