import { useState, useEffect } from 'react';
import { Button } from '@arco-design/web-react';




/**
 * 闭包陷阱示例
 * 场景：点击按钮 1s 后，数值变化
 * 问题说明：
 * 1. useEffect 中的定时器会一直使用初始的 count 值（0）
 * 2. 点击"有闭包陷阱的按钮"时，setTimeout 会使用点击时的 count 值
 * 3. 点击"正确的写法"按钮，使用函数式更新避免闭包问题
 */

export const ErrorDemo = () => {
    const [count, setCount] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    
    // 闭包陷阱示例1：useEffect 中的定时器
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('定时器中的 count:', count); // 这里会一直打印初始值 0
            setCount(count + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []); // 依赖数组为空，只在组件挂载时执行一次

    // 闭包陷阱示例2：事件处理函数
    const handleClick = () => {
        setTimeout(() => {
            console.log('点击事件中的 count:', count); // 这里会打印点击时的 count 值
            setCount(count + 1);
        }, 1000);
    }

    
    return (
        <div>
            <h1>React 闭包陷阱示例</h1>
            <div style={{ marginBottom: '10px' }}>
                <Button type='primary' onClick={handleClick} style={{ marginRight: '10px' }}>
                    有闭包陷阱的按钮 {count}
                </Button>
            </div>
            <div style={{ color: 'red', marginTop: '20px' }}>
                <p>问题说明：</p>
                <ol>
                    <li>useEffect 中的定时器会一直使用初始的 count 值（0）</li>
                    <li>点击"有闭包陷阱的按钮"时，setTimeout 会使用点击时的 count 值</li>
                    <li>点击"正确的写法"按钮，使用函数式更新避免闭包问题</li>
                </ol>
            </div>
        </div>
    )
}

export default ErrorDemo