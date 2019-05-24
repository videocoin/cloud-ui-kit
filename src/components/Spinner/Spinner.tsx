import React from 'react';
import css from './Spinner.module.scss';

export interface SpinnerProps {
  size: string;
}

export const Spinner = (props: SpinnerProps) => {
  return <div className={css.root} />;
};

Spinner.defaultProps = {
  size: 'md',
};
