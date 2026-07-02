import { useState, useEffect } from 'react'
import './Projects.css'

const ALL_TAGS = ['all', 'react', 'node', 'mongodb', 'express', 'rest-api', 'unreal-engine', 'game-dev']

function Projects() {
  const [projects, setProjects] = useState([])
  const [activeTag, setActiveTag] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchProjects(activeTag)
  }, [activeTag])

  const fetchProjects = async (tag) => {
    setLoading(true)
    setError(null)
    try {
      const url = tag === 'all'
        ? '/api/projects'
        : `/api/projects?tag=${tag}`
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Failed to fetch projects')
      }
      const data = await response.json()
      setProjects(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>

        <div className="tag-filters">
          {ALL_TAGS.map(tag => (
            <button
              key={tag}
              className={`tag-btn ${activeTag === tag ? 'active' : ''}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {loading && <p className="status-message">Loading projects...</p>}
        {error && <p className="status-message error">{error}</p>}

        {!loading && !error && (
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-card-header">
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.live_url && (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects