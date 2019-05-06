import React, { ReactNode } from 'react';
import cn from 'classnames';
import css from './index.module.scss';

export type GridItemsAlignment =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'stretch'
  | 'baseline';

export type GridContentAlignment =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around';

export type GridDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type GridJustification =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
export type GridWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type GridSpacing = 0 | 8 | 16 | 24 | 32 | 40;

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

const Grid = ({
  container,
  item,
  zeroMinWidth,
  spacing,
  direction,
  wrap,
  alignItems,
  alignContent,
  justify,
  xs,
  sm,
  md,
  lg,
  xl,
  children,
}: GridProps) => {
  const className = cn({
    [css.container]: container,
    [css.item]: item,
    [css.zeroMinWidth]: zeroMinWidth,
    [css[`spacing-xs-${String(spacing)}`]]: container && spacing !== 0,
    [css[`direction-xs-${String(direction)}`]]:
      direction !== Grid.defaultProps.direction,
    [css[`wrap-xs-${String(wrap)}`]]: wrap !== Grid.defaultProps.wrap,
    [css[`align-items-xs-${String(alignItems)}`]]:
      alignItems !== Grid.defaultProps.alignItems,
    [css[`align-content-xs-${String(alignContent)}`]]:
      alignContent !== Grid.defaultProps.alignContent,
    [css[`justify-xs-${String(justify)}`]]:
      justify !== Grid.defaultProps.justify,
    [css[`grid-xs-${String(xs)}`]]: xs !== false,
    [css[`grid-sm-${String(sm)}`]]: sm !== false,
    [css[`grid-md-${String(md)}`]]: md !== false,
    [css[`grid-lg-${String(lg)}`]]: lg !== false,
    [css[`grid-xl-${String(xl)}`]]: xl !== false,
  });
  return <div className={className}>{children}</div>;
};

Grid.propTypes = {};

Grid.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  component: 'div',
  container: false,
  direction: 'row',
  item: false,
  justify: 'flex-start',
  lg: false,
  md: false,
  sm: false,
  spacing: 0,
  wrap: 'wrap',
  xl: false,
  xs: false,
  zeroMinWidth: false,
};

export default Grid;
