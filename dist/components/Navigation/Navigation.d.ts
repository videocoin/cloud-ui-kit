import { ReactNode } from 'react';
interface NavigationProps {
    children: ReactNode;
    expanded?: boolean;
}
export declare const Navigation: {
    ({ children, expanded }: NavigationProps): JSX.Element;
    NavLink: ({ icon, active, to, label, ...props }: import("./NavLink").NavItemProps) => JSX.Element;
};
export {};
