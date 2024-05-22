import React, { useState, useEffect } from 'react'

const CustomXy = () => {
    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)



    const handleMousemove = (e: any) => {
        setX(e.clientY);
        setY(e.clientY);
    }


    useEffect(() => {
        document.addEventListener('mousemove', handleMousemove)

        return () => {
            document.removeEventListener('mousemove', handleMousemove)
        }
    }, [])



    // useEffect(() => {
    //     console.log('X', X)
    //     console.log('Y', Y)
    // }, [X, Y])
    
    return [X, Y]
}

export default CustomXy