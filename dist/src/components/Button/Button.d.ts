import { ReactNode, MouseEvent } from 'react';
import { IconName } from '../Icon/Icon';
export declare type ButtonTheme = 'sunkissed' | 'violet-sky' | 'perfect-white' | 'minimal' | 'minimal-sunkissed';
export declare type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export declare type ButtonType = 'submit' | 'button' | 'reset';
export interface ButtonProps {
    theme?: ButtonTheme;
    size?: ButtonSize;
    type?: ButtonType;
    disabled?: boolean;
    href?: string;
    onClick?: (e: MouseEvent<any>) => void;
    children: ReactNode;
    block?: boolean;
    loading?: boolean;
    icon?: IconName;
    form?: string;
}
export declare const Button: {
    ({ theme, size, type, href, block, loading, children, icon, disabled, ...props }: ButtonProps): JSX.Element;
    defaultProps: {
        theme: string;
        size: string;
        type: string;
        href: string;
        disabled: boolean;
    };
};
