import React from "react";
import { Index } from './src/Test1/index';
import { ZustandIndex } from './src/Test2/index';

export default [
    {
        name: 'Test1',
        path: '/Test/Test1/父组件调用子组件方法',
        rules: ['*'],
        element: <Index />
    },
    {
        name: 'Test2',
        path: '/Test/Test2/Zustand基本使用',
        rules: ['*'],
        element: <ZustandIndex />
    }
]
