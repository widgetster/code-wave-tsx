import './Header.css'


export function Header() {

  return (
    <header>
      <div className="header-left-container">
        <img className="header-logo-img" src={`${import.meta.env.BASE_URL}icon/logo.png`} />
        <p className="header-codewave-p">CodeWave</p>
      </div>

      <div className="header-middle-container">
        <div><p>Courses</p></div>
        <div><p>Bootcamps</p></div>
        <div><p>Roadmaps</p></div>
        <div><p>Blog</p></div>
      </div>

      <div>
        <button className="header-login-button">Log in</button>
        <button className="signup-login-button">Sign up</button>
      </div>
    </header>
  )
}
