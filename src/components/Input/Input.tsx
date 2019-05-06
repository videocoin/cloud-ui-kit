import React, {
  FormEvent,
  FocusEvent,
  InputHTMLAttributes,
  useRef,
  useState,
  useEffect,
} from 'react';
import cn from 'classnames';
import css from './Input.module.scss';
import NotchedOutline from './NotchedOutline';
import Icon from '../Icon/Icon';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: string;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input = ({
  label,
  disabled,
  onFocus,
  onBlur,
  value,
  error,
  ...props
}: InputProps) => {
  const labelRef = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = useState(Boolean(value));
  const [labelWidth, setLabelWidth] = useState(0);

  const onFocusHandler = (e: FocusEvent<HTMLInputElement>): void => {
    setFocused(true);
    onFocus && onFocus(e);
  };
  const onBlurHandler = (e: FocusEvent<HTMLInputElement>): void => {
    setFocused(false);
    onBlur && onBlur(e);
  };

  useEffect(() => {
    setLabelWidth(
      labelRef && labelRef.current && labelRef.current.offsetWidth > 0
        ? labelRef.current.offsetWidth * 0.75 + 22
        : 0,
    );
  }, []);

  const rootClasses = {
    [css.root]: true,
    [css.disabled]: disabled,
  };

  const inputClasses = {
    [css.input]: true,
    [css.active]: Boolean(value),
    [css.error]: Boolean(error),
  };

  return (
    <label className={cn(rootClasses)}>
      <input
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        className={cn(inputClasses)}
        disabled={disabled}
        value={value}
        {...props}
      />
      {label && (
        <div ref={labelRef} className={cn(css.label)}>
          {label}
        </div>
      )}
      <NotchedOutline
        error={Boolean(error)}
        notched={focused}
        filled={Boolean(value)}
        labelWidth={labelWidth}
      />
      {error && (
        <div className={css.errorIcon}>
          <Icon name="warn" />
        </div>
      )}
    </label>
  );
};

Input.defaultProps = {
  disabled: false,
};

export default Input;
