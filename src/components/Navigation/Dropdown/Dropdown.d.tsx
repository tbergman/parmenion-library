import * as React from 'react';
export interface DropdownProps {
    children: React.ReactNode;
    trigger: React.ReactNode;
    isRight?: boolean;
    isHover?: boolean;
}
export class Dropdown extends React.Component<DropdownProps, any>{
}
