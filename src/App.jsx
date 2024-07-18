import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Resume from './components/Resume'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <header>
          <h1>LOVELY TAUTUA'A</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">About me</Link>
              </li>

              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>

              <li>
                <Link to="/resume">Resume</Link>
              </li>
            </ul>
          </nav>
        </header>
        

        <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        </Routes>
        
      </div>
    </Router>
  )
}

export default App
