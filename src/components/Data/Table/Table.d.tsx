export interface TableProps {
    isLight?: boolean;
    isHover?: boolean;
    isStriped?: boolean;
    breakpoint?: number;
    children: React.ReactNode;
}
export declare function Table(props: TableProps): JSX.Element;
