import { MockData } from './constants';
import LazyLoad from './components/LazyLoad';

const TestDemo2 = () => {
    return <div>
        <h1>TestDemo2</h1>
        <div className='my-10'>图片懒加载</div>
        <hr />
        <div id="lazyLoadpage">
            {MockData.slice(0).map((item) => (
                <LazyLoad style={{ width: '200px', height: '200px' }} key={item} imgSrc={item} />
            ))}
        </div>
    </div>
}

export default TestDemo2;