import { Routes, Route } from 'react-router-dom'
import { HashRouter as Router } from 'react-router-dom'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Navbar from '@/components/Nav'
import Footer from '@/components/Footer'

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
