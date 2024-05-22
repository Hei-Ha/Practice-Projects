import React, { useState, useEffect } from 'react'
import useCustomXY from './useCustomXY'

const CustomXy = () => {
    const [x, y] = useCustomXY()


    useEffect(() => {
        console.log('x', x)
        console.log('y', y)
    }, [x, y])


    return <div>123</div>
}

export default CustomXy