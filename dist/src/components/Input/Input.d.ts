import { FormEvent, FocusEvent, InputHTMLAttributes, ReactNode } from 'react';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    value: string;
    onChange?: (event: FormEvent<HTMLInputElement>) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    error?: boolean;
    postfix?: () => ReactNode;
    children?: never;
}
export declare const Input: {
    ({ label, disabled, onFocus, onBlur, value, error, postfix, readOnly, ...props }: InputProps): JSX.Element;
    defaultProps: {
        disabled: boolean;
        error: boolean;
    };
};
