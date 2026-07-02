import { useState } from 'react'
import './Contact.css'
const API_URL = import.meta.env.VITE_API_URL || ''


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus(null)

    try {
      const response = await fetch(`${API_URL}/api/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setStatus({ type: 'success', text: 'Message sent successfully!' })
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus({ type: 'error', text: 'Something went wrong. Please try again.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="What's on your mind?"
              rows={6}
              required
            />
          </div>
          {status && (
            <p className={`form-status ${status.type}`}>
              {status.text}
            </p>
          )}
          <button
            type="submit"
            className="btn btn-primary submit-btn"
            disabled={submitting}
          >
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact