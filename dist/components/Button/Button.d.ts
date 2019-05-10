import { ReactNode, MouseEvent } from 'react';
declare type ButtonTheme = 'primary' | 'secondary' | 'white' | 'ghost-primary' | 'ghost-secondary';
declare type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
declare type ButtonType = 'submit' | 'button' | 'reset';
export interface ButtonProps {
    theme?: ButtonTheme;
    size?: ButtonSize;
    type?: ButtonType;
    disabled?: boolean;
    href?: string;
    onClick?: (e: MouseEvent<any>) => void;
    children: ReactNode;
    isBlock?: boolean;
}
declare const Button: {
    ({ theme, size, type, href, isBlock, ...props }: ButtonProps): JSX.Element;
    defaultProps: {
        theme: string;
        size: string;
        type: string;
        href: string;
        disabled: boolean;
    };
};
export default Button;
