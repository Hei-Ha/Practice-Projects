import React from "react";
import { Menu } from "@arco-design/web-react";
import { IconApps, IconBug, IconBulb } from "@arco-design/web-react/icon";

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const MenusList = [
    {
        label: "1231",
        key: "1231",
        icon: <IconApps />,
        children: [
            {
                label: "first",
                key: "first",
                icon: <IconApps />,
            },
            {
                label: "second",
                key: "second",
            },
        ],
    },
];

export const SilderMenu = () => {
    return (
        <div>
            <Menu
                style={{ width: 200, height: "100%" }}
                hasCollapseButton
                defaultOpenKeys={["0"]}
                defaultSelectedKeys={["0_1"]}
            >
                {MenusList.map(item => {
                    return (
                        <SubMenu
                            key={item.key}
                            title={
                                <>
                                    {item.icon}
                                    {item.label}
                                </>
                            }
                        >
                            {item.children.map(child => {
                                return (
                                    <MenuItem key={child.key}>
                                        {child.icon}
                                        {child.label}
                                    </MenuItem>
                                );
                            })}
                        </SubMenu>
                    );
                })}
            </Menu>
        </div>
    );
};
export default SilderMenu;
