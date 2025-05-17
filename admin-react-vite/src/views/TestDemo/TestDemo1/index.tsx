import Father from './components/Father';

export const TestDemo1 = () => {
    return <div >
        <h1>TestDemo1</h1>
        <div className='my-10'> react 父组件调用子组件</div>
        <hr />
        <div className="border border-[#ccc]">
            <Father />
        </div>
    </div>
}

export default TestDemo1;