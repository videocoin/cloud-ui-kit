import { ReactNode } from 'react';
export declare type TypographyType = 'display1' | 'display2' | 'display3' | 'button' | 'caption' | 'smallBodyAlt' | 'smallBody' | 'bodyAlt' | 'body' | 'subtitleAlt' | 'subtitle' | 'smallTitle' | 'title';
export declare type TypographyTag = 'div' | 'span' | 'p';
export declare type TypographyTheme = 'light' | 'dark' | 'white' | 'primary' | 'custom';
export declare type TypographyAlign = 'inherit' | 'left' | 'center' | 'right' | 'justify';
export interface TypographyProps {
    type?: TypographyType;
    theme?: TypographyTheme;
    tagName?: TypographyTag;
    children: ReactNode;
    align?: TypographyAlign;
    className?: string;
}
export declare const Typography: {
    ({ tagName: Comp, type, theme, align, className, ...props }: TypographyProps): JSX.Element;
    defaultProps: {
        tagName: string;
        type: string;
        theme: string;
    };
};
