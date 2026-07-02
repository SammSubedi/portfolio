import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="/profile.jpg" alt="Samundra Subedi" />
          </div>
          <div className="about-text">
            <p>
              I'm a Computer Engineering student at Gandaki College of
              Engineering & Science (GCES), Pokhara, with hands-on experience
              building full-stack web applications using the PERN and MERN stacks.
            </p>
            <p>
              I've shipped multiple projects — from community platforms to job
              portals — and built a 3D action game in Unreal Engine. I also bring
              creative skills in video and photo editing to the table.
            </p>
            <p>
              Currently seeking opportunities to contribute to real products
              while continuing to grow as a developer.
            </p>
            <div className="about-details">
              <div className="about-detail">
                <span className="detail-label">Location</span>
                <span className="detail-value">Kathmandu, Nepal</span>
              </div>
              <div className="about-detail">
                <span className="detail-label">Email</span>
                <span className="detail-value">sank.subedi@gmail.com</span>
              </div>
              <div className="about-detail">
                <span className="detail-label">GitHub</span>
                <span className="detail-value">
                 <a 
                    href="https://github.com/SammSubedi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/SammSubedi
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About