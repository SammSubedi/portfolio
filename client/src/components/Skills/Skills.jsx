import './Skills.css'

const SKILLS = {
  'Web Development': [
    'React', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'JavaScript', 'HTML/CSS'
  ],
  'Game Development': [
    'Unreal Engine', 'Blueprints'
  ],
  'Creative': [
    'Graphic Design', 'Video Editing', 'Photo Editing'
  ],
  'Tools': [
    'Git', 'GitHub', 'VS Code'
  ]
}

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="skill-pills">
                {items.map(skill => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills