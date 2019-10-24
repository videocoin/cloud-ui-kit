import React from 'react';
import cn from 'classnames';
import css from './Spinner.module.scss';

export interface SpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  type?: 'fixed' | 'inline';
}

export const Spinner = ({ type = 'fixed', size = 'md' }: SpinnerProps) => {
  const classes = cn(css.root, css[type], css[size]);
  return <div className={classes} />;
};

Spinner.defaultProps = {
  size: 'md',
};
