import React, {
  ChangeEventHandler,
  FormEvent,
  ReactNode,
  useState,
} from 'react';
import css from './Checkbox.module.scss';

export interface CheckboxProps {
  checked: boolean;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
  children: ReactNode;
}

export const Checkbox = ({
  checked = false,
  onChange,
  children,
  ...props
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);
  const onChangeHandle: ChangeEventHandler<HTMLInputElement> = async event => {
    const { currentTarget } = event;
    setIsChecked(currentTarget.checked);
    try {
      await onChange(event);
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
        {...props}
      />
      <div className={css.checkbox} />
      <div className={css.label}>{children}</div>
    </label>
  );
};
