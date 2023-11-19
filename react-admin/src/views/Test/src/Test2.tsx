import React, { useImperativeHandle } from 'react';
import { useBaseStore} from "@/store";
import { Button } from 'antd'

export const Test2 = (props: any) => {
    
    const count = useBaseStore(state => state.count);
    
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
        
        
        
        {/*<Button type='primary'>Test</Button>*/}
        {/*<div>*/}
        {/*    children 中的  store count :*/}
        {/*    <p>{count}</p>*/}
        {/*</div>*/}
    </div>
}