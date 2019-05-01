import * as React from 'react';
import { useState } from 'react';
import css from './Checkbox.module.scss';

interface Checkbox {
  defaultChecked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<Checkbox> = ({
  defaultChecked,
  onChange,
  children,
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const onChangeHandle = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ): Promise<any> => {
    const { target } = e;
    setIsChecked(target.checked);
    try {
      await onChange(target.checked);
    } catch (e) {
      setIsChecked(!target.checked);
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

Checkbox.defaultProps = {
  defaultChecked: false,
};

export default Checkbox;
