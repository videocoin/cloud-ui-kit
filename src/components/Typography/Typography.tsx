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

export type TypographyTheme = 'light' | 'dark' | 'white' | 'primary';

export interface TypographyProps {
  type?: TypographyType;
  theme?: TypographyTheme;
  tagName?: TypographyTag;
  children: ReactNode;
}

const Typography = ({
  tagName: Comp = 'div',
  type = 'body',
  theme = 'light',
  ...props
}: TypographyProps) => (
  <Comp className={cn(css.root, css[type], theme && css[theme])} {...props} />
);

Typography.defaultProps = {
  tagName: 'div',
  type: 'body',
  theme: 'light',
};

export default Typography;
