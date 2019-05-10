import { ReactNode } from 'react';
export interface OverlayProps {
    active: boolean;
    children: ReactNode;
    onClick: () => void;
}
export declare const Overlay: ({ active, children, onClick }: OverlayProps) => JSX.Element;
