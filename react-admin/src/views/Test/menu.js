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
                label: <Link to='/Test/Test1'>React 中父组件调用子组件方法</Link>,
                key: '/Test/Test1',
                rules: ['*']
            }
        ]
    }
]