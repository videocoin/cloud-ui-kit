import React, { ReactNode } from 'react';
import cn from 'classnames';
import css from './Typography.module.scss';

export type TypographyType =
  | 'display1'
  | 'display2'
  | 'display3'
  | 'display4'
  | 'button'
  | 'caption'
  | 'smallBodyThin'
  | 'smallBody'
  | 'bodyThin'
  | 'body'
  | 'subtitleCaps'
  | 'subtitleThin'
  | 'subtitle'
  | 'smallTitle'
  | 'title'
  | 'tiny';

export type TypographyTag = 'div' | 'span' | 'p';

export type TypographyTheme =
  | 'light'
  | 'dark'
  | 'white'
  | 'sunkissed'
  | 'custom';
export type TypographyWeight = 'thin' | 'normal' | 'medium' | 'bold' | '600';
export type TypographyAlign =
  | 'inherit'
  | 'left'
  | 'center'
  | 'right'
  | 'justify';

type TextOpacity = 'medium' | 'drift' | 'full';

export interface TypographyProps {
  type?: TypographyType;
  theme?: TypographyTheme;
  tagName?: TypographyTag;
  children: ReactNode;
  align?: TypographyAlign;
  className?: string;
  weight?: TypographyWeight;
  opacity?: TextOpacity;
}

const Typography = ({
  tagName: Comp = 'div',
  type = 'bodyThin',
  theme = 'light',
  align = 'inherit',
  weight,
  className,
  opacity = 'full',
  ...props
}: TypographyProps) => {
  const classes = cn(
    css.root,
    css[type],
    css[theme],
    css[`align-${align}`],
    css[`weight-${weight}`],
    css[`opacity-${opacity}`],
    className,
  );
  return <Comp className={classes} {...props} />;
};

export default Typography;
