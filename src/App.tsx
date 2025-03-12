import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import '@/App.css'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Contact from '@/pages/Contact'

function App() {

  return (
    <>
      <nav className="flex gap-4 p-4 bg-gray-100">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
