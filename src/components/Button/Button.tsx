import * as React from 'react';
import cn from 'classnames';
import css from './Button.module.scss';

const styleKey = (key: string): string => (css as any)[key];

type ButtonTheme = 'primary' | 'secondary' | 'white';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
interface Button {
  theme?: ButtonTheme;
  size?: ButtonSize;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  href?: string;
  onClick: (props: any) => void;
}

const Button: React.FC<Button> = ({ theme, size, type, href, ...props }) => {
  const Comp = href ? 'a' : 'button';
  return (
    <Comp
      type={type}
      {...href && { href }}
      className={cn(
        css.root,
        styleKey(`theme-${theme}`),
        styleKey(`size-${size}`),
      )}
      {...props}
    />
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
