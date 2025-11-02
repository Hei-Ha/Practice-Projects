import React, { useState } from "react";
import  { Children1, Children2 } from "@src/views/TestDemo/TestDemo7/Children";
import { Button } from "@arco-design/web-react";

export default () => {
    const [testArr, setTestArr] = useState([1, 2, 3, 4, 5])
    const [count, setCount] = useState(0)


    const handleClick = () => {
        // testArr[1] = testArr[1] + 1
        // setTestArr([...testArr])
        setCount(count + 1)
    }

    return <>
        <div>
            Test Memo 依赖项目是数组的时候，数组元素变化会不会引起重新渲染。

            <div>
                Children1:
                <Children1 arr={testArr} />
            </div>

            <hr/>
            <div>
                Children2:
                <Children2  />
            </div>

            <Button type="primary" onClick={() => handleClick()}>Click</Button>
        </div>
    </>
}