import { ReactNode } from 'react';
import { IconName } from '../Icon/Icon';
export interface FieldActionProps {
    color: 'orange' | 'violet' | 'pink' | 'green' | 'grey' | 'white';
    icon: IconName;
    children?: ReactNode;
    className?: string;
}
export declare const FieldAction: ({ color, icon, children, className, }: FieldActionProps) => JSX.Element;
