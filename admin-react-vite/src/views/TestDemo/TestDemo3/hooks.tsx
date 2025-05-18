import React, { useState, useEffect } from 'react';

export const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMousemove = (e: MouseEvent) => {
        setMousePosition({
            x: e.clientX,
            y: e.clientY
        })
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMousemove);

        return () => {
            window.removeEventListener('mousemove', handleMousemove);
        }
    }, [])

    return [mousePosition.x, mousePosition.y]


    
}