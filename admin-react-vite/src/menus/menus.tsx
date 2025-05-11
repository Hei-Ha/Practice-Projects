import { IconApps } from "@arco-design/web-react/icon";
import { MenuItemType } from "@src/types/common";



/**
 * 菜单列表
*/
export const MenusList: MenuItemType[] = [
    {
        label: "Home",
        key: "/home",
        icon: <IconApps />,
    },
    {
        label: "Test",
        key: "test",
        icon: <IconApps />,
        children: [
            {
                label: "Test1",
                key: "test1",
            },
            {
                label: "Test2",
                key: "test2",
            },
        ],
    },
];