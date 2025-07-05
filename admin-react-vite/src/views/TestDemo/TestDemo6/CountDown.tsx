import React, { FC, useState, useEffect, useRef } from 'react';

interface CountDownProps {
    seconds: number;
    onFinish: () => void;
}

const CountDown: FC<CountDownProps> = ({ seconds, onFinish }) => {

    const [count, setCount] = useState(seconds);
    const timer = useRef<ReturnType<typeof setInterval> | null>(null);


    useEffect(() => {
        timer.current = setInterval(() => {
            setCount((prev) => {
                if (prev === 1) {
                    onFinish();
                    if (timer.current) {
                        clearInterval(timer.current);
                    }
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => {
            if (timer.current) {
                clearInterval(timer.current);
            }
        }
    }, [])


    // 格式化时间方便展示
    const handleFormatDate = (timestamp: number) => {
        const hours = Math.floor(timestamp / 3600);
        const minutes = Math.floor((timestamp % 3600) / 60);
        const seconds = timestamp % 60;

        return `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return <div>{handleFormatDate(count)}</div>;
};

export default CountDown;
