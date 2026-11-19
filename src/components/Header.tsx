import './Header.css'
import { Link, NavLink } from 'react-router';



export function Header() {

  return (
    <header>
      <div className="header-container page-container">
        <Link className="header-left-container" to="/">
          <img className="header-logo-img" src={`${import.meta.env.BASE_URL}icon/logo.png`} alt="" />
          <span className="header-codewave-p">CodeWave</span>
        </Link>

        <nav className="header-middle-container" aria-label="Main navigation">
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/bootcamps">Bootcamps</NavLink>
          <NavLink to="/roadmaps">Roadmaps</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </nav>

        <div className="header-actions">
          <button className="header-login-button">Log in</button>
          <button className="signup-login-button">Sign up</button>
        </div>
      </div>
    </header>
  )
}
