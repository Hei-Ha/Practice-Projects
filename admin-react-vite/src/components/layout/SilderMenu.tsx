import { Menu, Tooltip } from "@arco-design/web-react";
import { Link } from "react-router";
import { MenusList } from "@src/menus/menus";
import { MenuItemType } from "@src/types/common";

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

export const SilderMenu = () => {
    return (
        <div>
            <Menu
                style={{ width: 200, height: "100%" }}
                hasCollapseButton={false}
                defaultOpenKeys={["0"]}
                defaultSelectedKeys={["0_1"]}>
                <Link to={"/"}>
                    <div className="logo">Hei-Ha</div>
                </Link>
                {MenusList.map((item: MenuItemType) => {
                    return (
                        <div key={item.path}>
                            {item.children ? (
                                <SubMenu
                                    key={item.path}
                                    title={
                                        <>
                                            {item.icon}
                                            {item.label}
                                        </>
                                    }>
                                    {item.children?.map(
                                        (child: MenuItemType) => {
                                            return (
                                                <Tooltip position="rt" content={child.title || ''} key={`${item.path}/${child.path}`}>
                                                    <Link
                                                        to={`${item.path}/${child.path}`}>
                                                        <MenuItem
                                                            key={`${item.path}/${child.path}`}>
                                                            {child.icon}
                                                            {child.label}
                                                        </MenuItem>
                                                    </Link>
                                                </Tooltip>
                                            );
                                        }
                                    )}
                                </SubMenu>
                            ) : (
                                <Tooltip position="rt" content={item.title || ''} key={item.path}>
                                    <Link
                                        to={item.path}>
                                        <MenuItem key={item.path}>
                                            <div></div>
                                            {item.icon}
                                            {item.label}
                                        </MenuItem>
                                    </Link> 
                                </Tooltip>
                            )}
                        </div>
                    );
                })}
            </Menu>
        </div>
    );
};
export default SilderMenu;
