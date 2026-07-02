import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Samundra Subedi</h1>
        <p className="hero-tagline">
          Full-Stack Developer building real products with the PERN/MERN stack —
          and occasionally a 3D action game in Unreal Engine.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a
            href="/Samundra_Subedi_CV.pdf"
            className="btn btn-secondary"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero