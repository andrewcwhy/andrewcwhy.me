import { useEffect, RefObject } from 'react'

export function useClickAway<T extends HTMLElement>(
    ref: RefObject<T | null>,
    onClickAway: (event: MouseEvent | TouchEvent) => void
) {
    useEffect(() => {
        const handleClickAway = (event: MouseEvent | TouchEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onClickAway(event)
            }
        }

        document.addEventListener('mousedown', handleClickAway)
        document.addEventListener('touchstart', handleClickAway)

        return () => {
            document.removeEventListener('mousedown', handleClickAway)
            document.removeEventListener('touchstart', handleClickAway)
        }
    }, [ref, onClickAway])
}
