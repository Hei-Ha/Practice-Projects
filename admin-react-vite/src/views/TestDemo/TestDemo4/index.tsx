import { useState } from 'react';
import ErrorDemo from './components/ErrorDemo';
import RightDemo from './components/RightDemo';

export const TestDemo4 = () => {

    return (
        <div>
            <h1>TestDemo4</h1>
            <div className='my-10'>React 闭包陷阱</div>
            <hr />
            <div>
                <ErrorDemo />   
                <RightDemo />
            </div>
        </div>
    )
}

export default TestDemo4