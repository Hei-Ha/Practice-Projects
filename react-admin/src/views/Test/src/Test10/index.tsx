import React, { useState, useEffect} from 'react'
import { Button } from 'antd'
export default () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)
        }, 1000)
    }, [count])
    
    
    return <div>
        <div>{count}</div>
    </div>
}