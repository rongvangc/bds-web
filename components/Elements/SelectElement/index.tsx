import React, {
  useCallback,
  useRef,
  useState,
  forwardRef,
  useMemo,
  type Ref,
  type FormEvent,
  type FocusEvent,
  useEffect,
} from 'react';
import { normalizeValue, suppressEvent } from '../../../utils/common';
import {
  FunctionDefaults,
  MouseOrTouchEvent,
  OptionLabelCallback,
  OptionValueCallback,
  RenderLabelCallback,
  SelectProps,
  SelectRef,
} from '../../../utils/types';

const SelectElement = forwardRef<SelectRef, SelectProps>(
  (
    {
      initialValue,
      options,
      onInputBlur,
      onInputFocus,
      onInputChange,
      getOptionLabel,
      getOptionValue,
      renderOptionLabel,
    },
    ref: Ref<SelectRef>
  ) => {
    const onChangeEventValue = useRef<boolean>(false);
    const menuOpenRef = useRef<boolean>(false);
    const controlRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);

    // Local state values
    const [inputValue, setInputValue] = useState<string>('');
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const blurInput = (): void => inputRef.current?.blur();
    const focusInput = (): void => inputRef.current?.focus();

    // Memoized callback functions referencing optional function properties on Select.tsx
    const getOptionLabelFn = useMemo<OptionLabelCallback>(
      () => getOptionLabel || FunctionDefaults.OPTION_LABEL,
      [getOptionLabel]
    );
    const getOptionValueFn = useMemo<OptionValueCallback>(
      () => getOptionValue || FunctionDefaults.OPTION_VALUE,
      [getOptionValue]
    );
    const renderOptionLabelFn = useMemo<RenderLabelCallback>(
      () => renderOptionLabel || getOptionLabelFn,
      [renderOptionLabel, getOptionLabelFn]
    );

    const [selectedOption, setSelectedOption] = useState<any[]>(() =>
      normalizeValue(initialValue, getOptionValueFn, getOptionLabelFn)
    );

    const handleOnMouseDownEvent = (e: FormEvent<Element>): void => {
      suppressEvent(e);
      focusInput();
    };

    const selectOption = useCallback(
      (option: any, isSelected?: boolean): void => {
        console.log(option);
        setSelectedOption([option]);
        setMenuOpen(false);
      },
      []
    );

    const openMenuAndFocusOption = useCallback((): void => {
      setMenuOpen(true);
    }, []);

    const handleOnControlMouseDown = (
      e: MouseOrTouchEvent<HTMLElement>
    ): void => {
      if (!isFocused) focusInput();

      const isNotInput = (e.target as HTMLElement).nodeName !== 'INPUT';

      if (!menuOpen) {
        openMenuAndFocusOption();
      } else if (isNotInput) {
        setMenuOpen(false);
        setInputValue('');
      }

      if (isNotInput) e.preventDefault();
    };

    const handleOnInputBlur = useCallback(
      (e: FocusEvent<HTMLInputElement>): void => {
        onInputBlur?.(e);
        console.log('blur');
        setIsFocused(false);
        setMenuOpen(false);
        setInputValue('');
      },
      [onInputBlur]
    );

    const handleOnInputFocus = useCallback(
      (e: FocusEvent<HTMLInputElement>): void => {
        console.log('focus');
        onInputFocus?.(e);
        setIsFocused(true);
      },
      [onInputFocus]
    );

    const handleOnInputChange = useCallback(
      (e: FormEvent<HTMLInputElement>): void => {
        onChangeEventValue.current = true;
        onInputChange?.(e.currentTarget.value);
        setInputValue(e.currentTarget.value);
        setMenuOpen(true);
      },
      [onInputChange]
    );

    /**
     * Write value of 'menuOpen' to ref object.
     * Prevent extraneous state update calls/rerenders.
     */
    useEffect(() => {
      menuOpenRef.current = menuOpen;
    }, [menuOpen]);

    return (
      <div
        className="select-wrapper"
        id="id"
        aria-controls="id"
        aria-expanded={false}
        onKeyDown={() => {}}
      >
        <div
          className="control-wrapper"
          onTouchEnd={handleOnControlMouseDown}
          onMouseDown={handleOnControlMouseDown}
          ref={controlRef}
        >
          <div className="value-wrapper">
            <div className="single-value">{selectedOption?.[0]?.city}</div>
            <input
              ref={inputRef}
              onBlur={handleOnInputBlur}
              onFocus={handleOnInputFocus}
              onChange={handleOnInputChange}
              value={inputValue}
            />
          </div>
        </div>
        {menuOpen && (
          <div className="menu" ref={menuRef}>
            {options?.map((item) => (
              <p
                onMouseDown={handleOnMouseDownEvent}
                onClick={() => selectOption(item)}
                key={item?.id}
                className="cursor-pointer"
              >
                {item?.city}
              </p>
            ))}
          </div>
        )}
      </div>
    );
  }
);

export default SelectElement;
