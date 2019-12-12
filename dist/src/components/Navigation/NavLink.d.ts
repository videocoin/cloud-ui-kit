/// <reference types="react" />
import { IconName } from '../Icon/Icon';
export interface NavItemProps {
    children?: never;
    icon: IconName;
    active?: boolean;
    to: string;
    label: string;
}
export declare const NavLink: ({ icon, active, to, label, ...props }: NavItemProps) => JSX.Element;
