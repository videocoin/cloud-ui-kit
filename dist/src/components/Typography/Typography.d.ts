import { ReactNode } from 'react';
export declare type TypographyType = 'display1' | 'display2' | 'display3' | 'display4' | 'button' | 'caption' | 'smallBodyThin' | 'smallBody' | 'bodyThin' | 'body' | 'subtitleCaps' | 'subtitleThin' | 'subtitle' | 'smallTitle' | 'title' | 'tiny';
export declare type TypographyTag = 'div' | 'span' | 'p';
export declare type TypographyTheme = 'light' | 'dark' | 'white' | 'sunkissed' | 'custom';
export declare type TypographyWeight = 'thin' | 'normal' | 'medium' | 'bold';
export declare type TypographyAlign = 'inherit' | 'left' | 'center' | 'right' | 'justify';
export interface TypographyProps {
    type?: TypographyType;
    theme?: TypographyTheme;
    tagName?: TypographyTag;
    children: ReactNode;
    align?: TypographyAlign;
    className?: string;
    weight?: TypographyWeight;
}
export declare const Typography: ({ tagName: Comp, type, theme, align, weight, className, ...props }: TypographyProps) => JSX.Element;
