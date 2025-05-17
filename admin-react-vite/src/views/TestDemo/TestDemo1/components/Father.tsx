import { useRef } from 'react';
import { Children } from './Children';
import { Button } from '@arco-design/web-react';

export const Father = () => {
    const elm = useRef<{ childrenFun: () => void } | null>(null)

    const handleFatherClick = () => {
        console.log('This is father function')
        elm.current?.childrenFun() // 父组件，点击按钮，执行子组件的函数
    }

    return <div>
        <h1>Father</h1>
        <Button type="primary" onClick={handleFatherClick}>Click</Button>

        <hr className="my-10" />
        <Children elm={elm} />
    </div>
}

export default Father;  