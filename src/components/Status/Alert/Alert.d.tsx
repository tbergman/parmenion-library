export interface AlertProps {
    title?: string;
    icon?: React.ReactNode;
    status?: number;
    hasArrow?: boolean;
    isSmall?: boolean;
    children: React.ReactNode;
}
export declare function Alert(props: AlertProps): JSX.Element;
