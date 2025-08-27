import { IconApps } from "@arco-design/web-react/icon";
import { MenuItemType } from "@src/types/common";



/**
 * 菜单列表
*/
export const MenusList: MenuItemType[] = [
    {
        label: "Home",
        path: "/home",
        icon: <IconApps />,
    },
    {
        label: "测试Demo",
        path: '/test',
        icon: <IconApps />,
        children: [
            {
                label: "react 父组件调用子组件",
                path: "testDemo1",
                icon: <IconApps />,
                title: "react 父组件调用子组件",
            },
            {
                label: "图片懒加载",
                path: "testDemo2",
                icon: <IconApps />,
                title: "图片懒加载",
            },
            {
                label: "自定义 hooks 实时显示鼠标坐标",
                path: "testDemo3",
                icon: <IconApps />,
                title: "自定义 hooks 实时显示鼠标坐标",
            },
            {
                label: "React 闭包陷阱",
                path: "testDemo4",
                icon: <IconApps />,
                title: "React 闭包陷阱",
            },  
            {
                label: "虚拟列表",
                path: "testDemo5",
                icon: <IconApps />,
                title: "虚拟列表",
            },
            {
                label: "React 实现倒计时",
                path: "testDemo6",
                icon: <IconApps />,
                title: "React 实现倒计时",
            },
            
        ],
    },
];