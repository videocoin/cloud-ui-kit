import { ReactNode } from 'react';
export interface RadioBtnProps {
    value: string;
    disabled?: boolean;
    children: ReactNode | string;
    activeClassname?: string;
}
export declare const RadioBtn: ({ value, children, disabled, activeClassname, }: RadioBtnProps) => JSX.Element;
