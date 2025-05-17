import { useImperativeHandle } from 'react';
import { Button } from '@arco-design/web-react';


interface ChildrenProps {
    elm: React.RefObject<{ childrenFun: () => void } | null> 
}
export const Children = ({ elm }: ChildrenProps) => {



    useImperativeHandle(elm, () => {
        return {
            childrenFun: handleChildrenClick
        }
    })

    const handleChildrenClick = () => {
        console.log('This is children function')
    }
    return <div>
        <h1>Children</h1>
        <Button type="primary" onClick={handleChildrenClick}>Children Fun</Button>
    </div>
}

export default Children;