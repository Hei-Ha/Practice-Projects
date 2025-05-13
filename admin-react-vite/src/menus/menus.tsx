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
        ],
    },
];