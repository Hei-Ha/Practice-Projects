import React, { useEffect, useState } from 'react';
import { useBaseStore } from '@/store/index';
import {Button} from "antd";

export const ZustandIndex = () => {
    
    const [ num ,setNumber ] = React.useState(0)
    const [count, setCount] = useState(0)
    const handerClick = () => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                setNumber(num + 1)
                console.log(num)
            }, 1000)
        }
    }
    useEffect(() => {
        setCount(1);
        console.log(count)
        setTimeout( () => {
            setCount((count) => count + 1)
            console.log(count)
        }, 1000)
    }, [])
    
    
    const storeCount = useBaseStore(state => state.count);
    const addCount = useBaseStore((state) => state.add);
    const decrease = useBaseStore((state) => state.decrease);
    return <div>
        qqqq-----------{count}
        <p>
            {storeCount}
            <Button onClick={() => { addCount() }}>Add</Button>
            <Button onClick={() => {  decrease() }}>decrease</Button>
        </p>
        <button onClick={ handerClick } >{ num }</button>
    </div>
}