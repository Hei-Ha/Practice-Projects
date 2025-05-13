export interface MenuItemType {
    label: string;
    path: string;
    icon?: React.ReactNode;
    children?: MenuItemType[];
}