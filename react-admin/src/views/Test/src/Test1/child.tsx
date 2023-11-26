import React, { useImperativeHandle } from 'react';
import { Button } from 'antd'

export const Child = (props: any) => {
    
    
    useImperativeHandle(props.env, () => {
        return {
            childFun: handleClick
        }
    })
    
    const handleClick = () => {
        console.log('这是子组件中的方法');
    }
    return <div className='border border-#CCCCCC border-solid'>
        Children
    </div>
}