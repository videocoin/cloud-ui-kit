import { ReactNode, MouseEvent } from 'react';
export declare type MarketingButtonTheme = 'primary' | 'secondary' | 'link' | 'link-white';
export declare type MarketingButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export declare type MarketingButtonType = 'submit' | 'button' | 'reset';
export interface MarketingButtonProps {
    theme?: MarketingButtonTheme;
    size?: MarketingButtonSize;
    type?: MarketingButtonType;
    disabled?: boolean;
    href?: string;
    onClick?: (e: MouseEvent<any>) => void;
    children: ReactNode;
    block?: boolean;
    loading?: boolean;
    form?: string;
}
export declare const MarketingButton: {
    ({ theme, size, type, href, block, loading, children, disabled, ...props }: MarketingButtonProps): JSX.Element;
    defaultProps: {
        theme: string;
        size: string;
        type: string;
        href: string;
        disabled: boolean;
    };
};
