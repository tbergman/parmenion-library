export interface FormProps {
  children?: any;
  horizontal?: boolean;
}

interface FormComponent extends React.ComponentClass<FormProps> {
  Field: typeof FormField;
  Group: typeof FormGroup;
  Row: typeof FormRow;
}

export declare const Form: FormComponent;

export interface FormFieldProps {
  children?: any;
  label?: string;
}

export interface FormRowProps {
  children?: any;
  divisions?: number;
}

export declare const FormField: React.StatelessComponent<FormFieldProps>;

export declare const FormGroup: React.StatelessComponent<FormFieldProps>;

export declare const FormRow: React.StatelessComponent<FormRowProps>;
