export interface InputTextProps {
    placeholder?: string;
    type?: string;
    isSmall?: boolean;
    isReadOnly?: boolean;
    value?: string;
    onChange?: (...args: any[])=>any;
    onClick?: (...args: any[])=>any;
    onKeyDown?: (...args: any[])=>any;
}
export declare function InputText(props: InputTextProps): JSX.Element;
