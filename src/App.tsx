import { Routes, Route } from 'react-router'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </>
    )
}
