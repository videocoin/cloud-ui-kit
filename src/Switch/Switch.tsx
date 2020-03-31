import React, {
  ChangeEventHandler,
  FormEvent,
  ReactNode,
  useState,
} from 'react';
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
  const [isChecked, setIsChecked] = useState(checked);
  const onChangeHandle: ChangeEventHandler<HTMLInputElement> = async (
    event,
  ) => {
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
      {children && <div className={css.label}>{children}</div>}
    </label>
  );
};

export default Switch;
