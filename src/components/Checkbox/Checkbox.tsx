import React, { ChangeEventHandler, ReactNode, useState } from 'react';
import css from './Checkbox.module.scss';

export interface CheckboxProps {
  defaultChecked: boolean;
  onChange: (checked: boolean) => void;
  children: ReactNode;
}

const Checkbox = ({ defaultChecked, onChange, children }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const onChangeHandle: ChangeEventHandler<HTMLInputElement> = async e => {
    const { currentTarget } = e;
    setIsChecked(currentTarget.checked);
    try {
      await onChange(currentTarget.checked);
    } catch (e) {
      setIsChecked(!currentTarget.checked);
      throw e;
    }
  };
  return (
    <label className={css.root}>
      <input
        className={css.input}
        type="checkbox"
        checked={isChecked}
        onChange={onChangeHandle}
      />
      <div className={css.checkbox} />
      <div className={css.label}>{children}</div>
    </label>
  );
};

export default Checkbox;
