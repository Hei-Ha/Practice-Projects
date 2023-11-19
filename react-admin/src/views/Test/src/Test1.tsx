import React, {useRef} from 'react'
import {Button} from 'antd';
import {Test2} from './Test2';
import { useBaseStore } from '../../../store/index';
export const Test1 = () => {
    const env = useRef(null);
    
    
    const storeCount = useBaseStore(state => state.count);
    const addCount = useBaseStore((state) => state.add);
    const decrease = useBaseStore((state) => state.decrease);
    
    return <div>
        Parent
        <Button
            type='primary'
            className='text-#000000'
            onClick={() => {
                env.current.childFun()
                console.log(123)
            }}>调用子组件方法</Button>
        <Test2 env={env}/>
        
        
        <p>
            {storeCount}
            <Button onClick={() => { addCount() }}>Add</Button>
            <Button onClick={() => {  decrease() }}>decrease</Button>
        </p>
    </div>
}