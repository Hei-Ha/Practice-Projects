
import React, { useEffect, useState } from 'react'
const useXY = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            setX(e.clientX)
            setY(e.clientY)
        })

        return () => {
            window.removeEventListener('mousemove', () => {
                setX(e.clientX)
                setY(e.clientY)
            })
        }
    }, [])

    return [x, y]
}

export { useXY }