/// <reference types="react" />
export interface Option {
    value: string | number;
    label: string;
}
export interface SelectProps {
    options: Option[];
    onChange: (value: Option) => void;
    onBlur?: (value: Option) => void;
    name?: string;
    placeholder?: string;
    value: Option | null;
    isDisabled?: boolean;
}
export declare const Select: ({ onChange, options, ...selectProps }: SelectProps) => JSX.Element;
