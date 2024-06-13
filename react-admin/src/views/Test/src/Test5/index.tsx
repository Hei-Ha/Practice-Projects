import { Button } from 'antd'
import React, { useState, useEffect } from 'react'
import useCustomXY from './useCustomXY'
import useChangeUrlParams from "@/views/Test/src/Test5/useChangeUrlParams";

const CustomXy = () => {
    const [x, y] = useCustomXY()
    
    const [testUrlParams, setTestUrlParams] = useState<number>(123)
    
    const [name, setName] = useChangeUrlParams('name', 'name')
    const [title, setTitle] = useChangeUrlParams('title', 'title')

    // useEffect(() => {
    //     console.log('x', x)
    //     console.log('y', y)
    // }, [x, y])
    
    


    return <div>
        <Button onClick={() => { setName(name + '1')}}>
            name + 1
        </Button>
        <Button onClick={() => { setTitle(title + '2')}}>
            title + 2
        </Button>
    </div>
}

export default CustomXy