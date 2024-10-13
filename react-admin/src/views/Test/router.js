import React from "react";
import { Index } from './src/Test1/index';
import { ZustandIndex } from './src/Test2/index';
import { VirtualList } from "@/views/Test/src/Test3";
import LazyLoad from './src/Test4/index.tsx';
import LazyLoad1 from './src/Test4/index1.js';

import CustomXY from './src/Test5/index.tsx';
import ReactComponent from './src/Test6'
import Test7 from './src/Test7'
import Test8 from './src/Test8'
import EmptyTest from './src/Test9'
import HourMeter from './src/Test10'

export default [
    {
        name: 'Test',
        path: '/Test',
        rules: ['*'],
        children: [
            {
                name: '父组件调用子组件方法',
                path: '/Test/父组件调用子组件方法',
                rules: ['*'],
                element: <Index />
            },
            {
                name: 'Zustand基本使用',
                path: '/Test/Zustand基本使用',
                rules: ['*'],
                element: <ZustandIndex />
            },
            {
                name: '虚拟长列表',
                path: '/Test/虚拟长列表',
                rules: ['*'],
                element: <VirtualList />
            },
            {
                name: '图片懒加载',
                path: '/Test/图片懒加载',
                rules: ['*'],
                element: <LazyLoad1 />,
            },
            {

                name: '自定义显示鼠标坐标',
                path: '/Test/自定义Hook显示鼠标坐标',
                rules: ['*'],
                element: <CustomXY />
            },
            {
                name: '封装React组件',
                path: '/Test/封装React组件',
                rules: ['*'],
                element: <ReactComponent btnContent={'鼠标悬浮显示内容'} hoverContent={34} />
            },
            {
                name: 'react闭包陷阱',
                path: '/Test/react闭包陷阱',
                rules: ['*'],
                element: <Test7 />
            },
            {
                name: 'react实现定时器',
                path: '/Test/react实现定时器',
                rules: ['*'],
                element: <Test8 />
            },
            {
                name: '空白测试页面',
                path: '/Test/emptyTest',
                rules: ['*'],
                element: <EmptyTest />
            },
            {
                name: 'react 实现计时器',
                path: '/Test/hourMeter',
                rules: ['*'],
                element: <HourMeter />
            }
        ]
    },
    
]
