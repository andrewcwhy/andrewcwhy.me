import { useState, useEffect } from 'react'
import { NavLink } from 'react-router'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [showNav, setShowNav] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Portfolio', path: '/portfolio' },
    ]

    // Hide on scroll down, show on scroll up
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY
            setShowNav(currentY < lastScrollY || currentY < 10)
            setLastScrollY(currentY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    return (
        <nav
            className={`bg-gray-900 text-gray-200 border-b border-gray-700 fixed w-full z-50 transition-transform duration-300 ${
                showNav ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <NavLink to="/" className="text-xl font-bold text-white">
                    andrewcwhy
                </NavLink>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `transition-colors hover:text-blue-400 ${
                                        isActive
                                            ? 'text-blue-400'
                                            : 'text-gray-200'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Toggle Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-white"
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                </button>
            </div>

            {/* Mobile Menu - overlays content */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-gray-900 border-t border-gray-700 transition-all duration-300 ease-in-out ${
                    menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            >
                <ul className="flex flex-col p-4 gap-6">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `transition-colors hover:text-blue-400 ${
                                        isActive
                                            ? 'text-blue-400'
                                            : 'text-gray-200'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
