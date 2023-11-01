import React, {useRef} from 'react'
import { Button } from 'antd';
import { Test2 } from './Test2';
export const Test1 = () => {
    const env = useRef(null);
    
    
    
    return <div>
        Parent
        <Button type='primary' className='text-#000000' onClick={() => {
            env.current.childFun()
            console.log(123)
        }}>调用子组件方法</Button>
        <Test2 env={env} />
    </div>
}