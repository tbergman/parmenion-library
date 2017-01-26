import * as React from 'react';
export interface SelectProps {
    id?: string;
    placeholder?: string;
    isSmall?: boolean;
    isAutocomplete?: boolean;
    items: Object[];
}
export class Select extends React.Component<SelectProps, any>{
}
