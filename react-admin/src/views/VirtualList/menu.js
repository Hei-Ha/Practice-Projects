import React from "react";
import { Link } from "react-router-dom";

export default [
    {
        label: 'Virtual_List',
        // key: '/virtualList',
        rules: ['*'],
        weight: 3,
        children: [
            {
                label: <Link to='/virtualList'>Virtual_List</Link>,
                key: '/virtualList',
                rules: ['*']
            }
        ]
    }
]