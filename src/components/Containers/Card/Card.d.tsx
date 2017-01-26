export type CardHeading = string | React.ReactNode;
export interface CardProps {
    heading?: CardHeading;
    children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
