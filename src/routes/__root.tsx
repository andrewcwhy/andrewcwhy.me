import {
    Link,
    Outlet,
    createRootRoute,
    HeadContent,
} from '@tanstack/react-router'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export const Route = createRootRoute({
    component: Root,
    notFoundComponent: () => {
        return (
            <section className="h-screen flex justify-center items-center text-white text-center">
                <div className="w-full max-w-xl p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-lg space-y-6">
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>

                    <h1 className="text-6xl font-bold text-red-400">404</h1>
                    <p className="text-xl text-gray-400">
                        This page wandered off like a semicolon in Python.
                    </p>
                    <p className="text-sm text-gray-500">
                        Or maybe it got lost in a merge conflict. Who knows.
                    </p>
                    <Link
                        to="/"
                        className="inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Take me home 🏠
                    </Link>
                </div>
            </section>
        )
    },
})

function Root() {
    return (
        <>
            <HeadContent />
            <NavBar />
            <main className="pt-24 max-w-4xl mx-auto pb-16">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
