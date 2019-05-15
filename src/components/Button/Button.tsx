import React, { ReactNode, MouseEvent } from 'react';
import cn from 'classnames';
import css from './Button.module.scss';
import { Icon, IconName } from '../Icon/Icon';

export type ButtonTheme =
  | 'sunkissed'
  | 'violet-sky'
  | 'perfect-white'
  | 'minimal'
  | 'minimal-sunkissed';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonType = 'submit' | 'button' | 'reset';

export interface ButtonProps {
  theme?: ButtonTheme;
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
  href?: string;
  onClick?: (e: MouseEvent<any>) => void;
  children: ReactNode;
  block?: boolean;
  loading?: boolean;
  icon?: IconName;
  form?: string;
}

export const Button = ({
  theme,
  size,
  type,
  href,
  block,
  loading,
  children,
  icon,
  disabled,
  ...props
}: ButtonProps) => {
  const Comp = href ? 'a' : 'button';
  const classes = cn(
    css.root,
    css[`theme-${theme}`],
    css[`size-${size}`],
    block && css.block,
    loading && css.loading,
  );
  return (
    <div className={cn(css.wrap, block && css.block)}>
      <Comp
        type={type}
        {...href && { href }}
        className={classes}
        disabled={disabled || loading}
        {...props}
      >
        <span className={css.inner}>
          {icon && <Icon width={24} height={24} name={icon} />}
          {children}
        </span>
      </Comp>
      {loading && <div className={css.loadingBar} />}
    </div>
  );
};

Button.defaultProps = {
  theme: 'sunkissed',
  size: 'md',
  type: 'button',
  href: '',
  disabled: false,
};
