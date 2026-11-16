import './Footer.css'


export function Footer() {

  return (
    <footer className="ftr-container">
      <div className="ftr-top-container page-container">
        <div>
          <div className="fifth-block-logo-name-container">
            <img className="logo-bottom-img" src={`${import.meta.env.BASE_URL}icon/logo.png`} />
            <p className="codewave-bottom">CodeWave</p>
          </div>

          <p className="empowering-the-p">Empowering the next generation of developers through high-quality education and hands-on practice.</p>

          <div className="soc-med-container">
            <img className="soc-med-img" src={`${import.meta.env.BASE_URL}icon/facebook.png`} />
            <img className="soc-med-img" src={`${import.meta.env.BASE_URL}icon/linkedin.png`} />
            <img className="soc-med-img" src={`${import.meta.env.BASE_URL}icon/instagram.png`} />
          </div>
        </div>

        <div>
          <p className="ftr-title-link-p">Platform</p>

          <p className="ftr-link-p">Courses</p>
          <p className="ftr-link-p">Bootcamps</p>
          <p className="ftr-link-p">Roadmaps</p>
          <p className="ftr-link-p">Projects</p>
          <p className="ftr-link-p">Pricing</p>
        </div>

        <div>
          <p className="ftr-title-link-p">Resources</p>

          <p className="ftr-link-p">Blog</p>
          <p className="ftr-link-p">Documentation</p>
          <p className="ftr-link-p">Guides</p>
          <p className="ftr-link-p">Cheatsheets</p>
          <p className="ftr-link-p">Help Center</p>
        </div>

        <div>
          <p className="ftr-title-link-p">Company</p>

          <p className="ftr-link-p">About Us</p>
          <p className="ftr-link-p">Courses</p>
          <p className="ftr-link-p">Affiliates</p>
          <p className="ftr-link-p">Contact Us</p>
          <p className="ftr-link-p">Press Kit</p>
        </div>

        <div>
          <p className="ftr-title-link-p">Legal</p>

          <p className="ftr-link-p">Terms of Service</p>
          <p className="ftr-link-p">Privacy Policy</p>
          <p className="ftr-link-p">Refund Policy</p>
          <p className="ftr-link-p">Cookie Policy</p>
        </div>

        <div>
          <p className="ftr-title-link-p">Newsletter</p>

          <p className="ftr-link-get-the-p">Get the latest updates and</p>
          <p className="ftr-link-coding-tips-p">coding tips in your inbox</p>

          <div>
            <input type="text" className="ftr-enter-email" placeholder="Enter your email" />
            <button className="ftr-subscribe-button">Subscribe</button>
          </div>
        </div>
      </div>

      <p className="ftr-copyright">&copy; 2026 CodeWave. All rights reserved.</p>
    </footer>
  )

}
