import { ReactNode } from 'react';
export interface RadioBtnProps {
    value: string;
    disabled?: boolean;
    children: ReactNode | string;
}
declare const Radio: ({ value, children, disabled }: RadioBtnProps) => JSX.Element;
export default Radio;
