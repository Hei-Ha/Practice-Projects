import React from "react";
import { Link } from "react-router-dom";

export default [
    {
        label: '使用ExcelJS导出excel',
        // key: '/virtualList',
        rules: ['*'],
        weight: 4,
        children: [
            {
                label: <Link to='/excelJS'>使用ExcelJS导出excel</Link>,
                key: '/excelJS',
                rules: ['*']
            }
        ]
    }
]