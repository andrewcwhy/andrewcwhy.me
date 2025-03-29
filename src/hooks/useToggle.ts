import { useCallback, useState } from 'react'

export function useToggle(
    initialState: boolean = false
): [isToggled: boolean, handleToggle: () => void] {
    const [isToggled, setIsToggled] = useState(initialState)

    // This function will toggle the value between true and false
    const handleToggle = useCallback(() => {
        setIsToggled((prev) => !prev)
    }, [])

    return [isToggled, handleToggle]
}
