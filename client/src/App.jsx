import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      darkMode ? 'dark' : 'light'
    )
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  return (
    <div className="app">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main style={{ paddingTop: '60px' }}>
        <h1>Portfolio coming soon</h1>
      </main>
    </div>
  )
}

export default App