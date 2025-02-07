import React, {
  ChangeEvent,
  ChangeEventHandler,
  ReactNode,
  useState,
} from 'react';
import cn from 'classnames';
import { RadioContextProvider } from './RadioContext';
import { RadioBtn } from './RadioBtn';
import css from './Radio.module.scss';

export interface RadioGroupProps {
  defaultSelected?: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  direction?: 'horizontal' | 'vertical';
  children: ReactNode;
}

const RadioGroup = ({
  defaultSelected,
  name,
  onChange,
  disabled = false,
  children,
  direction = 'vertical',
}: RadioGroupProps) => {
  const [selected, setSelected] = useState(defaultSelected);
  const onChangeHandle: ChangeEventHandler<HTMLInputElement> = event => {
    const prevSelected = selected;
    setSelected(event.target.value);
    try {
      onChange(event);
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
export default RadioGroup;
