import React, { ReactNode } from 'react';
import cn from 'classnames';
import css from './Typography.module.scss';

export type TypographyType =
  | 'display1'
  | 'display2'
  | 'display3'
  | 'button'
  | 'caption'
  | 'smallBodyAlt'
  | 'smallBody'
  | 'bodyAlt'
  | 'body'
  | 'subtitleAlt'
  | 'subtitle'
  | 'smallTitle'
  | 'title';

export type TypographyTag = 'div' | 'span' | 'p';

export type TypographyTheme = 'light' | 'dark' | 'white' | 'primary' | 'custom';

export type TypographyAlign =
  | 'inherit'
  | 'left'
  | 'center'
  | 'right'
  | 'justify';

export interface TypographyProps {
  type?: TypographyType;
  theme?: TypographyTheme;
  tagName?: TypographyTag;
  children: ReactNode;
  align?: TypographyAlign;
  className?: string;
}

export const Typography = ({
  tagName: Comp = 'div',
  type = 'body',
  theme = 'light',
  align = 'inherit',
  className,
  ...props
}: TypographyProps) => {
  const classes = cn(
    css.root,
    css[type],
    css[theme],
    css[`align-${align}`],
    className,
  );
  return <Comp className={classes} {...props} />;
};

Typography.defaultProps = {
  tagName: 'div',
  type: 'body',
  theme: 'light',
};
