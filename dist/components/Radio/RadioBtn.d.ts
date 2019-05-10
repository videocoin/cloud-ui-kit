import { ReactNode } from 'react';
export interface RadioBtnProps {
    value: string;
    disabled?: boolean;
    children: ReactNode | string;
}
export declare const RadioBtn: ({ value, children, disabled }: RadioBtnProps) => JSX.Element;
