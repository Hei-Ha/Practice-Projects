import React from 'react';
import { useMemo, useState, useRef, useEffect } from 'react';


interface PropsType {
    className: string | '';
    itemHeight?: number | 20;
}
export const Virtual_List = (props: PropsType) => {
    const arr = new Array(100).fill(0);
    
    const listDom = useRef<any>(null);
    const [startIndex, setStartIndex] = useState<number>(0);
    const [endIndex, setEndIndex] = useState<number>(0);
    
    
    
    useEffect(() => {
        console.log(listDom.current.clientHeight);
    }, [])
    
    
    return <div ref={listDom} className={`${props.className} bg-#FFFFFF overflow-y-scroll h-full w-full`}>
        {
            arr.slice(startIndex, endIndex).map((item, index) => {
                return <div key={index} className='h-5 border-b border-#CCCCCC'>
                    {index}
                </div>
            })
        }
    
    </div>
}