export interface ModalProps {
    isOpen?: boolean;
    /**
     * Fired when user presses on the close button in the corner of the modal
     */
    onClose?: (...args: any[])=>any;
    title?: string;
    /**
     * Primary button which will be shown in the bottom right of the modal
     */
    primaryButton?: React.ReactNode;
    /**
     * `SpacedNode[]` Array of other buttons which will be shown in the bottom left.
     */
    buttons?: React.ReactNode[];
    /**
     * Inner contents of the modal
     */
    children?: React.ReactNode;
}
export declare function Modal(props: ModalProps): JSX.Element;
