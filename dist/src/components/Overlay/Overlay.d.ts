import { ReactNode } from 'react';
export interface OverlayProps {
    children: ReactNode;
    onClick: () => void;
}
export declare const Overlay: ({ children, onClick }: OverlayProps) => JSX.Element;
