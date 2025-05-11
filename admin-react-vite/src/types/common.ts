export interface MenuItemType {
    label: string;
    key: string;
    icon?: React.ReactNode;
    children?: MenuItemType[];
}