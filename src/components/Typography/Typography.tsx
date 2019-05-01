import * as React from 'react';
import cn from 'classnames';
import css from './Typography.module.scss';

type TypographyType =
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

type TypographyTag = 'div' | 'span' | 'p';

type TypographyTheme = 'light' | 'dark' | 'white' | 'primary';

interface Typography {
  type?: TypographyType;
  theme?: TypographyTheme;
  tagName?: TypographyTag;
}

const Typography: React.FC<Typography> = ({
  tagName: Comp = 'div',
  type = 'body',
  theme = 'light',
  ...props
}) => <Comp className={cn(css.root, css[type], css[theme])} {...props} />;

Typography.defaultProps = {
  tagName: 'div',
  type: 'body',
  theme: 'light',
};

export default Typography;
