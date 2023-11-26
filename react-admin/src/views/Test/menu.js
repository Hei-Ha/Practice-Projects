import React from "react";
import { Link } from "react-router-dom";

export default [
    {
        label: 'Test页面',
        key: '/Test',
        rules: ['Test'],
        weight: 2,
        children: [
            {
                label: <Link to='/Test/父组件调用子组件方法'>父组件调用子组件方法</Link>,
                key: '/Test/父组件调用子组件方法',
                rules: ['*'],
            },
            {
                label: <Link to={'/Test/Zustand基本使用'}>Zustand基本使用</Link>,
                key: '/Test/Zustand基本使用',
                rules: ['*'],
                // children: [
                //     {
                //         label: <Link to={'/Test/Test2/Zustand基本使用'}>Zustand基本使用</Link>,
                //         key: '/Test/Test2/Zustand基本使用',
                //         rules: ['*'],
                //     }
                // ]
            },
            {
                label: <Link to={'Test/虚拟长列表'}>虚拟长列表</Link>,
                key: '/Test/虚拟长列表',
                rules: ['*'],
            }
        ]
    }
]