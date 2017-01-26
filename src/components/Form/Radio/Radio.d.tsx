export interface RadioProps {
    children: React.ReactNode;
    id?: string;
    name?: string;
    value: string;
    isSmall?: boolean;
    isInline?: boolean;
    isRipple?: boolean;
    status?: number;
}
export declare function Radio(props: RadioProps): JSX.Element;
