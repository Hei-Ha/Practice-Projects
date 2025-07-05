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
                label: "TestDemo1",
                path: "testDemo1",
                icon: <IconApps />,
                title: "react 父组件调用子组件",
            },
            {
                label: "TestDemo2",
                path: "testDemo2",
                icon: <IconApps />,
                title: "图片懒加载",
            },
            {
                label: "TestDemo3",
                path: "testDemo3",
                icon: <IconApps />,
                title: "自定义 hooks 实时显示鼠标坐标",
            },
            {
                label: "TestDemo4",
                path: "testDemo4",
                icon: <IconApps />,
                title: "React 闭包陷阱",
            },  
            {
                label: "TestDemo5",
                path: "testDemo5",
                icon: <IconApps />,
                title: "虚拟列表",
            },
            {
                label: "TestDemo6",
                path: "testDemo6",
                icon: <IconApps />,
                title: "React 实现倒计时",
            },
            
        ],
    },
];