import { NavLink, Link } from 'react-router-dom'
import logobranco from '../assets/logo-branco.png'

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo">
          <img src={logobranco} alt="Run4Fun Running Club" />
        </Link>
        <nav className="header__nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            Início
          </NavLink>
          <NavLink
            to="/club"
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            O Clube
          </NavLink>
          <NavLink
            to="/app"
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            O App
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
