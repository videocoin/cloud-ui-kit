import React, { ReactNode, useContext } from 'react';
import cn from 'classnames';
import css from './Radio.module.scss';
import { RadioContext } from './RadioContext';

export interface RadioBtnProps {
  value: string;
  disabled?: boolean;
  children: ReactNode | string;
  activeClassname?: string;
}

export const RadioBtn = ({
  value,
  children,
  disabled,
  activeClassname = '',
}: RadioBtnProps) => {
  const { selected, onChange, name, disabled: disabledGroup } = useContext(
    RadioContext,
  );

  const classes = cn(
    css.root,
    disabled && css.disabled,
    selected === value && activeClassname,
  );
  return (
    <label className={classes}>
      <input
        type="radio"
        value={value}
        disabled={disabled || disabledGroup}
        className={css.input}
        name={name}
        checked={selected === value}
        onChange={onChange}
      />
      <div className={css.radiobox} />
      {children ? <div className={css.label}>{children}</div> : null}
    </label>
  );
};
