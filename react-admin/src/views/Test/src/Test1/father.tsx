import React, {useRef} from 'react'
import {Button} from 'antd';
import {Child} from './child';

export const Father = () => {
    const env = useRef(null);
    
    
    return <div>
        Parent
        <Button
            type='primary'
            className='text-#000000 mb-5'
            onClick={() => {
                env.current.childFun()
                console.log(123)
            }}>调用子组件方法</Button>
        
        <Child env={env}/>
        
    </div>
}