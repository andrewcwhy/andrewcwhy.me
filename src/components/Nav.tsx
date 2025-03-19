import { NavLink, useLocation } from 'react-router'

export default function Nav() {
    const location = useLocation()

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ]

    return (
        <nav className="bg-gray-900 p-4 text-gray-200 border-b border-gray-700">
            <div className="container mx-auto flex justify-between items-center">
                <NavLink to="/" className="text-xl font-bold text-white">
                    andrewcwhy
                </NavLink>
                <ul className="flex items-center gap-6">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                className={`hover:text-blue-400 ${
                                    location.pathname === link.path
                                        ? 'text-blue-400'
                                        : 'text-gray-200'
                                }`}
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
