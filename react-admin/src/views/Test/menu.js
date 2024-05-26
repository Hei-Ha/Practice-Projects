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
                label: <Link to='/Test/父组件调用子组件方法'>1-父组件调用子组件方法</Link>,
                key: '/Test/父组件调用子组件方法',
                rules: ['*'],
            },
            {
                label: <Link to={'/Test/Zustand基本使用'}>2-Zustand基本使用</Link>,
                key: '/Test/Zustand基本使用',
                rules: ['*'],
            },
            {
                label: <Link to={'Test/虚拟长列表'}>3-虚拟长列表</Link>,
                key: '/Test/虚拟长列表',
                rules: ['*'],
            },
            {
                label: <Link to={'Test/图片懒加载'}>4-实现图片懒加载</Link>,
                key: '/Test/图片懒加载',
                rules: ['*'],

            },
            {
                label: <Link to={'Test/自定义Hook显示鼠标坐标'}>5-自定义Hook显示鼠标坐标</Link>,
                key: '/Test/自定义Hook显示鼠标坐标',
                rules: ['*'],
            },
            {
                label: <Link to={'Test/封装React组件'}>6-封装React组件</Link>,
                key: '/Test/封装React组件',
                rules: ['*'],
            },
            {
                label: <Link to={'Test/react闭包陷阱'}>7-react闭包陷阱</Link>,
                key: '/Test/react闭包陷阱',
                rules: ['*'],
            }
        ]
    }
]