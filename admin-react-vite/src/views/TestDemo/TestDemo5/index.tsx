import React, { useState, useRef, useEffect, useCallback, FC } from 'react';
import { ContentHeader } from '@src/components/ContentHeader';

const TestDemo5: FC = () => {
    const arr = new Array(1000).fill(0);
    const itemHeight = 50; // 每条 item 的高度

    const [startIndex, setStartIndex] = useState<number>(0); // 开始索引
    const [endIndex, setEndIndex] = useState<number>(0); // 结束索引

    const listRef = useRef<HTMLDivElement | null>(null); // 列表容器

    const scrollFun = () => {
        // 滚动事件处理函数
        if (!listRef.current) return;
        const newStartIndex = Math.floor(listRef.current.scrollTop / itemHeight);
        setStartIndex(newStartIndex);
        setEndIndex(newStartIndex + Math.ceil(listRef.current.clientHeight / itemHeight));
    };

    useEffect(() => {
        if (listRef.current) {
            const items = Math.ceil(listRef.current.clientHeight / itemHeight); // 计算需要渲染的 item 数量
            setEndIndex(startIndex + items); // 设置结束索引
            
            listRef.current.addEventListener('scroll', scrollFun); // 监听滚动事件
        }
        
        return () => {
            listRef.current?.removeEventListener('scroll', scrollFun);
        }
    }, []);

    const renderList = useCallback(() => {
        const rows = [];
        for (let i = startIndex; i <= endIndex + 1; i++) {
            // 渲染每个列表项，使用 transform 替代 top/left
            rows.push(
                <div
                    key={i}
                    style={{
                        width: '100%',
                        height: '50px',
                        position: 'absolute',
                        // top: i * itemHeight + 'px',
                        transform: `translateY(${i * itemHeight}px)`,
                        left: 0,
                        right: 0,
                        borderBottom: '1px solid #eee', // 添加一些样式让列表项更明显
                        display: 'flex',
                        alignItems: 'center',
                        paddingLeft: '10px',
                        backgroundColor: i % 2 === 0 ? '#f9f9f9' : '#ffffff'
                    }}
                >
                    Item {i}
                </div>
            );
        }
        return rows;
    }, [startIndex, endIndex]);

    return (
        <div>
            <ContentHeader title="TestDemo5" subTitle="虚拟列表" />
            <div
                ref={listRef}
                className={`h-[300px] w-[500px] bg-#FFFFFF border border-solid border-#CCCCCC overflow-y-scroll text-#000000`}
            >
                <div
                    style={{
                        height: `${arr.length * itemHeight}px`,
                        position: 'relative',
                    }}
                >
                    {renderList()}
                </div>
            </div>
        </div>
    );
};

export default TestDemo5;
