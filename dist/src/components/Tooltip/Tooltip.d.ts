import { ReactNode } from 'react';
import './styles.scss';
export interface TooltipProps {
    id: string;
    type: 'warning';
    children: ReactNode;
}
export declare const Tooltip: ({ id, type, children }: TooltipProps) => JSX.Element;
