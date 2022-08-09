import React, { RefObject, FocusEvent, FormEvent, HTMLAttributes } from 'react';

interface InputProps {
  inputRef: RefObject<any>;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
  onFocus: (e: FocusEvent<HTMLInputElement>) => void;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
  inputValue: string;
  className?: string & Pick<HTMLAttributes<HTMLElement>, 'className'>;
  sizeStyle?: string;
  id?: string;
  disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({
  id,
  inputRef,
  sizeStyle,
  inputValue,
  className,
  disabled,
  onBlur,
  onFocus,
  onChange,
}) => {
  return (
    <input
      id={id}
      name={id}
      ref={inputRef}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
      value={inputValue}
      disabled={disabled}
      className={`z-10 w-full rounded-md border outline-none ${sizeStyle} ${className}`}
    />
  );
};
