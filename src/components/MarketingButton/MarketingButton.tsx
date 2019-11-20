import React, { ReactNode, MouseEvent } from 'react';
import cn from 'classnames';
import css from './MarketingButton.module.scss';
import { Icon } from '../Icon/Icon';

export type MarketingButtonTheme =
  | 'primary'
  | 'secondary'
  | 'link'
  | 'link-white';

export type MarketingButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type MarketingButtonType = 'submit' | 'button' | 'reset';

export interface MarketingButtonProps {
  theme?: MarketingButtonTheme;
  size?: MarketingButtonSize;
  type?: MarketingButtonType;
  disabled?: boolean;
  href?: string;
  onClick?: (e: MouseEvent<any>) => void;
  children: ReactNode;
  block?: boolean;
  loading?: boolean;
  form?: string;
}

export const MarketingButton = ({
  theme,
  size,
  type,
  href,
  block,
  loading,
  children,
  disabled,
  ...props
}: MarketingButtonProps) => {
  const Comp = href ? 'a' : 'button';
  const classes = cn(
    css.root,
    css[`theme-${theme}`],
    css[`size-${size}`],
    block && css.block,
    loading && css.loading,
  );
  const hasArrow = theme !== 'secondary';
  return (
    <div className={cn(css.wrap, block && css.block)}>
      <Comp
        type={type}
        {...(href && { href })}
        className={cn(classes, css.outer)}
        disabled={disabled || loading}
        {...props}
      >
        <span className={css.inner}>
          <span className={css.content}>{children}</span>
          {hasArrow && <Icon width={24} height={24} name="arrowRight" />}
        </span>
      </Comp>
    </div>
  );
};

MarketingButton.defaultProps = {
  theme: 'primary',
  size: 'md',
  type: 'button',
  href: '',
  disabled: false,
};
