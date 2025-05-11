import React from "react";
import { Menu } from "@arco-design/web-react";
import { IconApps, IconBug, IconBulb } from "@arco-design/web-react/icon";
import { Link } from "react-router";
import { MenusList } from "@src/menus/menus";
import { MenuItemType } from "@src/types/common";

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export const SilderMenu = () => {
    return (
        <div>
            <Menu
                style={{ width: 200, height: "100%" }}
                hasCollapseButton={false}
                defaultOpenKeys={["0"]}
                defaultSelectedKeys={["0_1"]}
            >
                <Link to={"/"}>
                    <div className="logo">Hei-Ha</div>
                </Link>
                {MenusList.map((item: MenuItemType) => {
                    return (
                        <>
                            {item.children ? (
                                <SubMenu
                                    key={item.key}
                                    title={
                                        <>
                                            {item.icon}
                                            {item.label}
                                        </>
                                    }
                                >
                                    {item.children?.map(
                                        (child: MenuItemType) => {
                                            return (
                                                <MenuItem key={child.key}>
                                                    <Link to={child.key}>
                                                        {child.icon}
                                                        {child.label}
                                                    </Link>
                                                </MenuItem>
                                            );
                                        }
                                    )}
                                </SubMenu>
                            ) : (
                                <MenuItem key={item.key}>
                                    <Link to={item.key}>
                                        {item.icon}
                                        {item.label}
                                    </Link>
                                </MenuItem>
                            )}
                        </>
                    );
                })}
            </Menu>
        </div>
    );
};
export default SilderMenu;
