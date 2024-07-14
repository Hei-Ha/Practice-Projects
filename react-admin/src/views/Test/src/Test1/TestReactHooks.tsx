import React, { useState, useEffect } from 'react'
// 测试 react 闭包陷阱
const TestReactHooks = () => {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
        setCount(1)
        console.log('----', count)
        
        setTimeout(() => {
            setCount((count) => count + 1); // 解决方法，给 setState 传递一个函数。
            console.log(count)
        }, 1000)
        
    }, [])
    
    useEffect(() => {
    
    }, [count])
    
    return <div>
        This is count: { count }
    </div>
}
export default TestReactHooks