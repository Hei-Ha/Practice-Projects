import React, { FC } from 'react';
import CountDown from './CountDown';

const TestDemo6: FC = () => {
    
    return <div>
        <h1>TestDemo6</h1>
        <div className='my-10'>
            <h2>React 实现倒计时</h2>
        </div>
        <hr />
        <CountDown seconds={6} onFinish={() => {
            console.log('倒计时结束');
        }} />

    </div>;
};

export default TestDemo6;