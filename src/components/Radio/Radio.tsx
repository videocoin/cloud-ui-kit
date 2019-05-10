import React, { ChangeEventHandler, ReactNode, useState } from 'react';
import cn from 'classnames';
import { RadioContextProvider } from './RadioContext';
import { RadioBtn } from './RadioBtn';
import css from './Radio.module.scss';

export interface RadioGroupProps {
  defaultSelected?: string;
  name: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  direction?: 'horizontal' | 'vertical';
  children: ReactNode;
}

export const RadioGroup = ({
  defaultSelected,
  name,
  onChange,
  disabled = false,
  children,
  direction = 'vertical',
}: RadioGroupProps) => {
  const [selected, setSelected] = useState(defaultSelected);
  const onChangeHandle: ChangeEventHandler<HTMLInputElement> = e => {
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

RadioGroup.RadioBtn = RadioBtn;
