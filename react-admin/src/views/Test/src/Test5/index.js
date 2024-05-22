import React, { useEffect } from 'react'
import { useXY } from './zidingyihooks.js'


export default () => {

    const [x, y] = useXY()

    useEffect(() => {
        console.log(1)
        console.log([x, y])
    }, [x, y])
    return <div>123</div>
}