import * as React from 'react';
import css from './Radio.module.scss';
import { RadioContext } from './RadioContext';
import { useContext } from 'react';

interface RadioBtn {
  value: string;
  disabled?: boolean;
}

const Radio: React.FC<RadioBtn> = ({ value, children, disabled }) => {
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

Radio.defaultProps = {};

export default Radio;
