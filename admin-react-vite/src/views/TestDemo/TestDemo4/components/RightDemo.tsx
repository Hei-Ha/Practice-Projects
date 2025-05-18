import { useState } from 'react';
import { Button } from '@arco-design/web-react';

export const RightDemo = () => {
    const [correctCount, setCorrectCount] = useState(0);

    // 正确的写法示例
    const handleClickCorrect = () => {
        setTimeout(() => {
            setCorrectCount((setCorrectCount) => setCorrectCount + 1); // 使用函数式更新，避免闭包陷阱
        }, 1000);
    };

    return (
        <div>
            <h1>正确的写法</h1>
            <p>count: {correctCount}</p>
            <Button type="primary" onClick={handleClickCorrect}>
                Increment
            </Button>
        </div>
    );
};

export default RightDemo;
