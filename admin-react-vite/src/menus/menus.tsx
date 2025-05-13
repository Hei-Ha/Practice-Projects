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
        label: "Test",
        path: '/Test',
        icon: <IconApps />,
        children: [],
    },
];