import { FormEvent, ReactNode } from 'react';
export interface CheckboxProps {
    checked: boolean;
    onChange: (event: FormEvent<HTMLInputElement>) => void;
    children?: ReactNode;
}
export declare const Checkbox: ({ checked, onChange, children, ...props }: CheckboxProps) => JSX.Element;
