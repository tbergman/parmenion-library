export interface MenuItemProps {
    children: React.ReactNode;
    href?: string;
    to?: string;
    icon?: React.ReactNode;
    description?: string;
    isActive?: boolean;
    isRipple?: boolean;
}
export declare function MenuItem(props: MenuItemProps): JSX.Element;
export declare function Menu(): JSX.Element;
