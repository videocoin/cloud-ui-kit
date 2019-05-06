import React, { ReactNode, useContext } from 'react';
import css from './Radio.module.scss';
import { RadioContext } from './RadioContext';

export interface RadioBtnProps {
  value: string;
  disabled?: boolean;
  children: ReactNode | string;
}

const Radio = ({ value, children, disabled }: RadioBtnProps) => {
  const { selected, onChange, name, disabled: disabledGroup } = useContext(
    RadioContext,
  );

  return (
    <label className={css.root}>
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

export default Radio;
