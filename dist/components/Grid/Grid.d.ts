import { ReactNode } from 'react';
export declare type GridItemsAlignment = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
export declare type GridContentAlignment = 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
export declare type GridDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export declare type GridJustification = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
export declare type GridWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export declare type GridSpacing = 0 | 8 | 16 | 24 | 32 | 40;
export interface GridProps {
    alignItems?: GridItemsAlignment;
    alignContent?: GridContentAlignment;
    direction?: GridDirection;
    justify?: GridJustification;
    spacing?: GridSpacing;
    wrap?: GridWrap;
    zeroMinWidth?: boolean;
    item?: boolean;
    container?: boolean;
    xs?: number | false;
    sm?: number | false;
    md?: number | false;
    lg?: number | false;
    xl?: number | false;
    children: ReactNode;
}
declare const Grid: {
    ({ container, item, zeroMinWidth, spacing, direction, wrap, alignItems, alignContent, justify, xs, sm, md, lg, xl, children, }: GridProps): JSX.Element;
    propTypes: {};
    defaultProps: {
        alignContent: string;
        alignItems: string;
        component: string;
        container: boolean;
        direction: string;
        item: boolean;
        justify: string;
        lg: boolean;
        md: boolean;
        sm: boolean;
        spacing: number;
        wrap: string;
        xl: boolean;
        xs: boolean;
        zeroMinWidth: boolean;
    };
};
export default Grid;
