import { Link } from 'react-router-dom'
import { INSTAGRAM_URL } from '../constants'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <p className="footer__brand">Run4Fun Running Club</p>
          <nav className="footer__nav">
            <Link to="/" className="footer__nav-link">Início</Link>
            <span className="footer__nav-sep">·</span>
            <Link to="/club" className="footer__nav-link">O Clube</Link>
            <span className="footer__nav-sep">·</span>
            <Link to="/app" className="footer__nav-link">O App</Link>
            <span className="footer__nav-sep">·</span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__nav-link"
            >
              Instagram
            </a>
          </nav>
          <p className="footer__tagline">feito por gente que gosta de gente</p>
        </div>
      </div>
    </footer>
  )
}
