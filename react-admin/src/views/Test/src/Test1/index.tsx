import React from 'react';
import { Father } from './father';
import { Child } from './child';

import TestReactHooks from './TestReactHooks'


export const Index = () => {
    return <div>
        <Father />
        <div className='mt-4 border-#CCCCCC border-solid border'>
            测试 react hooks 必包陷阱：
            <TestReactHooks />
        </div>
    </div>
}