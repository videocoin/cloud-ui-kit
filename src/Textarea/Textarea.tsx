import React, {
  FormEvent,
  FocusEvent,
  useRef,
  useState,
  useEffect,
  ReactNode,
  TextareaHTMLAttributes,
} from 'react';
import cn from 'classnames';
import TextareaAutosize from 'react-textarea-autosize';
import css from './Textarea.module.scss';
import { NotchedOutline } from './NotchedOutline';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  value: string;
  onChange?: (event: FormEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  error?: boolean;
  postfix?: () => ReactNode;
  children?: never;
  minRows?: number;
  maxRows?: number;
}

const Textarea = ({
  label,
  disabled,
  onFocus,
  onBlur,
  value,
  error = false,
  postfix,
  readOnly,
  ...props
}: TextareaProps) => {
  const labelRef = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = useState(false);
  const [labelWidth, setLabelWidth] = useState(0);
  const hasValue = value !== '';

  const onFocusHandler = (e: FocusEvent<HTMLTextAreaElement>): void => {
    if (readOnly) {
      return;
    }
    setFocused(true);
    onFocus && onFocus(e);
  };
  const onBlurHandler = (e: FocusEvent<HTMLTextAreaElement>): void => {
    setFocused(false);
    onBlur && onBlur(e);
  };

  const updateLabelWidth = () => {
    setLabelWidth(
      labelRef && labelRef.current && labelRef.current.offsetWidth > 0
        ? labelRef.current.offsetWidth * 0.75 + 22
        : 0,
    );
  };

  useEffect(() => {
    setTimeout(() => {
      updateLabelWidth();
    }, 3);
  }, []);

  const rootClasses = {
    [css.root]: true,
    [css.disabled]: disabled,
  };

  const inputClasses = {
    [css.input]: true,
    [css.active]: hasValue,
    [css.error]: error,
  };

  return (
    <label className={cn(rootClasses)}>
      <TextareaAutosize
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        className={cn(inputClasses)}
        disabled={disabled}
        value={value}
        readOnly={readOnly}
        {...props}
      />
      {label && (
        <div ref={labelRef} className={cn(css.label)}>
          {label}
        </div>
      )}
      <NotchedOutline
        error={error}
        notched={focused}
        filled={hasValue}
        labelWidth={labelWidth}
      />
      {postfix && <span className={css.postfix}>{postfix()}</span>}
    </label>
  );
};

Textarea.defaultProps = {
  disabled: false,
  error: false,
};

export default Textarea;
