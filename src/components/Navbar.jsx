import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <span className="brand-mark">ShaonGram</span>
      </Link>
      <nav className="nav-links">
        <Link to="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/movies" className={pathname === '/movies' ? 'nav-cta active' : 'nav-cta'}>
          Browse shows
        </Link>
      </nav>
    </header>
  )
}
