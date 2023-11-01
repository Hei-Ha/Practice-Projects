import React, { useImperativeHandle } from 'react';
export const Test2 = (props: any) => {
    
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