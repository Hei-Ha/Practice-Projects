import { useMousePosition } from './hooks';
export const TestDemo3 = () => {
    const [x, y] = useMousePosition();
    return (
        <div>
            <h1>TestDemo3</h1>
            <div className='my-10'>自定义 hooks 实时显示鼠标坐标</div>
            <hr />
            <div>
                <p>x: {x}</p>
                <p>y: {y}</p>
            </div>
        </div>
    )
}   

export default TestDemo3;