import React, { FormEvent, ReactNode } from 'react';
import css from './Switch.module.scss';

export interface SwitchProps {
  checked: boolean;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
  children?: ReactNode;
}

const Switch = ({
  checked = false,
  onChange,
  children,
  ...props
}: SwitchProps) => {
  return (
    <label className={css.root}>
      <input
        className={css.input}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <div className={css.checkbox}>
        <div className={css.handle} />
      </div>
      {children && <div className={css.label}>{children}</div>}
    </label>
  );
};

export default Switch;
