import React, {useState, useRef, useEffect, useCallback} from 'react';


export const VirtualList = () => {
    const arr = new Array(1000).fill(0);
    const itemHeight = 50;
    
    const [startIndex, setStartIndex] = useState<number>(0);
    const [endIndex, setEndIndex] = useState<number>(0);
    
    const listRef = useRef<HTMLDivElement | null>(null);
    
    // const [viewportList, setViewportList] = useState<number>(0);
    
    const scrollFun = () => {
        const newStartIndex = Math.floor(listRef.current.scrollTop / itemHeight);
        setStartIndex(newStartIndex);
        setEndIndex(newStartIndex + Math.ceil(listRef.current.clientHeight / itemHeight));
    }
    
    useEffect(() => {
        if (listRef.current) {
            const items = Math.ceil(listRef.current.clientHeight / itemHeight);
            setEndIndex(startIndex + items);
            
            listRef.current.addEventListener('scroll', scrollFun);
        }
        
        return () => {
            listRef.current.removeEventListener('scroll', scrollFun);
        }
    }, [])
    
    const renderList = useCallback(() => {
        const rows = [];
        for (let i = startIndex; i <= endIndex + 1; i++) {
            // 渲染每个列表项
            rows.push(
                <div
                    key={i}
                    style={{
                        width: '100%',
                        height: '50px',
                        position: 'absolute',
                        top: i * itemHeight + 'px',
                        left: 0,
                        right: 0,
                    }}
                >{i}</div>,
            );
        }
        return rows;
    }, [startIndex, endIndex])
    
    
    
    return <div ref={listRef} className={`h-300px w-500px bg-#FFFFFF border border-solid border-#CCCCCC overflow-y-scroll text-#000000`}>
        <div style={{height: `${arr.length * itemHeight}px`, position: 'relative'}}>
            {
                renderList()
            }
        </div>
    </div>
}