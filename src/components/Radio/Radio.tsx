import * as React from 'react';
import cn from 'classnames';
import { RadioContextProvider } from './RadioContext';
import { useState } from 'react';
import css from './Radio.module.scss';

interface RadioGroupInterface {
  defaultSelected?: string;
  name: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  direction?: 'horizontal' | 'vertical';
}

const RadioGroup: React.FC<RadioGroupInterface> = ({
  defaultSelected,
  name,
  onChange,
  disabled = false,
  children,
  direction = 'vertical',
}) => {
  const [selected, setSelected] = useState(defaultSelected);
  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const prevSelected = selected;
    setSelected(e.target.value);
    try {
      onChange(e.target.value);
    } catch (e) {
      setSelected(prevSelected);
      throw e;
    }
  };

  return (
    <RadioContextProvider
      value={{ name, selected, onChange: onChangeHandle, disabled }}
    >
      <div className={cn(css.group, css[direction])}>{children}</div>
    </RadioContextProvider>
  );
};

RadioGroup.defaultProps = {
  direction: 'vertical',
  disabled: false,
};

export default RadioGroup;
