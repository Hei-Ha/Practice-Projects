import React from 'react';
import Father from './components/Father';
import Children from './components/Children';

export const TestDemo1 = () => {
    return <div >
        <h1>TestDemo1</h1>
        <hr />
        <div className='my-10'> react 父组件调用子组件</div>
        <div className="border border-[#ccc]">
            <Father />
        </div>
    </div>
}

export default TestDemo1;