import React from 'react';
import cn from 'classnames';
import css from './Input.module.scss';

export interface NotchedOutlineProps {
  notched: boolean;
  labelWidth: number;
  filled: boolean;
  error: boolean;
  children?: never;
}

export const NotchedOutline = ({
  notched,
  labelWidth,
  filled,
  error,
}: NotchedOutlineProps) => {
  const classes = {
    [css.outline]: true,
    [css.notched]: notched,
    [css.error]: error,
  };
  return (
    <div className={cn(classes)}>
      <div className={css.leading} />
      <div
        className={css.notch}
        style={{ width: notched || filled ? labelWidth : 0 }}
      />
      <div className={css.trailing} />
    </div>
  );
};
