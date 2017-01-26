export type ButtonType = any | 1 | 2 | 3 | 4;
export interface ButtonProps {
    type?: ButtonType;
    isSmall?: boolean;
    isBlock?: boolean;
    isDisabled?: boolean;
    isRipple?: boolean;
    onClick?: (...args: any[])=>any;
    href?: string;
    to?: string;
    icon?: React.ReactNode;
    iconRight?: boolean;
    children: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
