import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <span className="footer-logo">Samundra<span className="accent">.dev</span></span>
          <p className="footer-tagline">Building things for the web and beyond.</p>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/SammSubedi"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a  href="https://mail.google.com/mail/?view=cm&to=its.samundra@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
             Email
            </a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Samundra Subedi. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer