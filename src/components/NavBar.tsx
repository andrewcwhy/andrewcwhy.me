import { useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { HiMenu, HiX } from 'react-icons/hi'
import { useClickAway, useHideOnScroll, useToggle } from '@/hooks'

interface LinkProps {
    label: string
    path: string
}

const links: LinkProps[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Projects', path: '/projects' },
]

export default function Nav() {
    const [isMenuOpen, toggleMenu] = useToggle()
    const showNav = useHideOnScroll()
    const menuRef = useRef<HTMLDivElement>(null)

    // Close mobile menu when clicking outside
    useClickAway(menuRef, () => {
        if (isMenuOpen) toggleMenu()
    })

    return (
        <nav
            className={`bg-gray-900 text-gray-200 border-b border-gray-700 fixed inset-x-0 z-50 transition-transform duration-300 ${
                showNav ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-white">
                    andrewcwhy
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-6">
                    {links.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className='transition-colors hover:text-blue-400'
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Toggle Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white"
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                </button>
            </div>

            {/* Mobile Menu - overlays content */}
            <div
                ref={menuRef}
                className={`md:hidden absolute top-full left-0 w-full bg-gray-900 border-t border-gray-700 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            >
                <ul className="flex flex-col p-4 gap-6">
                    {links.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                onClick={toggleMenu}
                                className='transition-colors hover:text-blue-400'
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
