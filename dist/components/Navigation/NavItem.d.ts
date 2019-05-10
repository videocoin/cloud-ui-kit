import { ComponentClass, ReactNode } from 'react';
import { IconName } from '../Icon/Icon';
export interface NavItemProps {
    children?: ReactNode;
    icon: IconName;
    active?: boolean;
    component: ComponentClass<any>;
}
export declare const NavItem: ({ children, icon, active, component, ...props }: NavItemProps) => JSX.Element;
