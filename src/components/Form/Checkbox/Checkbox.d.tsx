export interface CheckboxProps {
    children: React.ReactNode;
    id?: string;
    name?: string;
    value?: string;
    isSmall?: boolean;
    isInline?: boolean;
    isRipple?: boolean;
    status?: number;
    checked?: boolean;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
