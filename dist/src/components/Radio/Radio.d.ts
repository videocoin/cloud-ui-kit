import { ChangeEvent, ReactNode } from 'react';
export interface RadioGroupProps {
    defaultSelected?: string;
    name: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    direction?: 'horizontal' | 'vertical';
    children: ReactNode;
}
export declare const RadioGroup: {
    ({ defaultSelected, name, onChange, disabled, children, direction, }: RadioGroupProps): JSX.Element;
    defaultProps: {
        direction: string;
        disabled: boolean;
    };
    RadioBtn: ({ value, children, disabled, activeClassname, }: import("./RadioBtn").RadioBtnProps) => JSX.Element;
};
