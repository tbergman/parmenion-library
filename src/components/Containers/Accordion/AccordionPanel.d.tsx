import * as React from 'react';
export interface AccordionPanelProps {
    title: string;
    children: React.ReactNode;
    onClick?: (...args: any[])=>any;
    isOpen?: boolean;
    isRipple?: boolean;
}
export class AccordionPanel extends React.Component<AccordionPanelProps, any>{
}
