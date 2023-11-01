import React from "react";
import { Link } from "react-router-dom";

export default [
    {
        label: 'Test',
        key: '/Test',
        rules: ['Test'],
        weight: 2,
        children: [
            {
                label: <Link to='/Test/Test1'>Test112</Link>,
                key: '/Test/Test1',
                rules: ['*']
            }
        ]
    }
]