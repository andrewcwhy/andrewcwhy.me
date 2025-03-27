// src/hooks/useHideOnScroll.ts
import { useState, useEffect } from 'react'

export function useHideOnScroll(threshold = 10) {
    const [showNav, setShowNav] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY
            setShowNav(currentY < lastScrollY || currentY < threshold)
            setLastScrollY(currentY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY, threshold])

    return showNav
}
