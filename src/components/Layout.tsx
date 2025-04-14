import { Outlet } from 'react-router'
import Nav from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function Layout() {
    return (
        <>
            <Nav />
            <main className="pt-24 max-w-4xl mx-auto pb-16">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
