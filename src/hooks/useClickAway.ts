import { useEffect, RefObject } from 'react'

type EventType = MouseEvent | TouchEvent

export function useClickAway<T extends HTMLElement>(
    ref: RefObject<T | null>,
    onClickAway: (event: EventType) => void
) {
    useEffect(() => {
        function handleClickAway(event: EventType) {
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
