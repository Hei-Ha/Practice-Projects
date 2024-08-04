import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'antd'

export default () => {
    const [count, setCount] = useState(0);
    
    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         console.log(count); // 这里的 count 一直是 0
    //         // setCount((a) => a + 1) // 这样可以拿到最新的 count 的值
    //         setCount((count) => count + 1) // 这样可以拿到最新的 count 的值
    //     }, 1000);
    //
    //     if (count === 5) {
    //         console.log(999)
    //         clearInterval(intervalId);
    //         return
    //     }
    //     return () => clearInterval(intervalId);
    // }, []);
    
    
    const increaseAsync = ()=> {
        setTimeout(function () {
            setCount(count + 1);
            // setCount((count) => count + 1); // 解决
        }, 2000);
    }
    
    return <div>
        例1: {count}
        <br/>
        例2: <Button onClick={() => { increaseAsync() }}>count 延迟增加</Button>
    </div>
}


