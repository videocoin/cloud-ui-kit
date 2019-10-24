import { ReactNode } from 'react';
export interface ModalProps {
    header?: () => ReactNode;
    children: ReactNode;
}
export declare const Modal: ({ header, children }: ModalProps) => JSX.Element;
