import './Header.css'
import { Link } from 'react-router';



export function Header() {

  return (
    <header>
      <div className="header-container page-container">
        <Link to="/">
          <div className="header-left-container">
            <img className="header-logo-img" src={`${import.meta.env.BASE_URL}icon/logo.png`} />
            <p className="header-codewave-p">CodeWave</p>
          </div>
        </Link>


        <div className="header-middle-container">
          <Link to="/courses">Courses</Link>
          <Link to="/bootcamps">Bootcamps</Link>
          <Link to="/roadmaps">Roadmaps</Link>
          <Link to="/blog">Blog</Link>
        </div>

        <div className="header-actions">
          <button className="header-login-button">Log in</button>
          <button className="signup-login-button">Sign up</button>
        </div>
      </div>
    </header>
  )
}
