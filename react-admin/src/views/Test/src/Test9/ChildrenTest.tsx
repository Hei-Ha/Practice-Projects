import React, { useEffect, useState } from 'react'

const ChildrenTest = (props: any) => {
    const [count, setCount] = useState(0)
    
    useEffect( () => {
        console.log('this is children component change', props)
        return () => {
            console.log('children distoried')
        }
    }, [])
    
    
    
    
    return <div>
        ChildrenTest
        { props.testCount}
    </div>
}

export default ChildrenTest