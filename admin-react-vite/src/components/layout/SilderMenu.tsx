import { Menu } from "@arco-design/web-react";
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
                                                <Link to={child.key}>
                                                    <MenuItem key={child.key}>
                                                        {child.icon}
                                                        {child.label}
                                                    </MenuItem>
                                                </Link>
                                            );
                                        }
                                    )}
                                </SubMenu>
                            ) : (
                                <Link to={item.key}>
                                    <MenuItem key={item.key}>
                                        <div></div>
                                        {item.icon}
                                        {item.label}
                                    </MenuItem>
                                </Link>
                            )}
                        </>
                    );
                })}
            </Menu>
        </div>
    );
};
export default SilderMenu;
