import React from "react";
import { Index } from './src/Test1/index';
import { ZustandIndex } from './src/Test2/index';
import { VirtualList } from "@/views/Test/src/Test3";

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
                // children: [
                //     {
                //         name: '虚拟长列表',
                //         path: '/Test/虚拟长列表',
                //         rules: ['*'],
                //
                //     }
                // ]
            }
        ]
    },
    
]
