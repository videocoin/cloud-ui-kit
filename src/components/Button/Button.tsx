import React, { ReactNode, MouseEvent } from 'react';
import cn from 'classnames';
import css from './Button.module.scss';

type ButtonTheme =
  | 'primary'
  | 'secondary'
  | 'white'
  | 'ghost-primary'
  | 'ghost-secondary';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
type ButtonType = 'submit' | 'button' | 'reset';

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

const Button = ({
  theme,
  size,
  type,
  href,
  isBlock,
  ...props
}: ButtonProps) => {
  const Comp = href ? 'a' : 'button';
  const classes = cn(
    css.root,
    css[`theme-${theme}`],
    css[`size-${size}`],
    isBlock && css.block,
  );
  return (
    <Comp type={type} {...href && { href }} className={classes} {...props} />
  );
};

Button.defaultProps = {
  theme: 'primary',
  size: 'md',
  type: 'button',
  href: '',
  disabled: false,
};

export default Button;
