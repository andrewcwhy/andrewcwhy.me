import { Routes, Route } from 'react-router'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Projects from '@/pages/Projects'
import NotFound from '@/pages/NotFound'
import Layout from '@/components/Layout'

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}
