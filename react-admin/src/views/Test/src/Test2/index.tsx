import React from 'react';
import { useBaseStore } from '@/store/index';
import {Button} from "antd";

export const ZustandIndex = () => {
    
    const storeCount = useBaseStore(state => state.count);
    const addCount = useBaseStore((state) => state.add);
    const decrease = useBaseStore((state) => state.decrease);
    return <div>
        <p>
            {storeCount}
            <Button onClick={() => { addCount() }}>Add</Button>
            <Button onClick={() => {  decrease() }}>decrease</Button>
        </p>
    </div>
}