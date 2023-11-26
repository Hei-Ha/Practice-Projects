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
                label: 'Test1',
                key: '/Test/Test1',
                rules: ['*'],
                children: [
                    {
                        label: <Link to='/Test/Test1/父组件调用子组件方法'>父组件调用子组件方法</Link>,
                        key: '/Test/Test1/子组件调用父组件方法',
                        rules: ['*'],
                    }
                ]
            },
            {
                label: 'Test2',
                key: '/Test/Test2',
                rules: ['*'],
                children: [
                    {
                        label: <Link to={'/Test/Test2/Zustand基本使用'}>Zustand基本使用</Link>,
                        key: '/Test/Test2/Zustand基本使用',
                        rules: ['*'],
                    }
                ]
            }
        ]
    }
]