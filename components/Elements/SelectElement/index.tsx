import React, {
  useCallback,
  useRef,
  useState,
  forwardRef,
  type Ref,
  type FormEvent,
  type FocusEvent,
  useEffect,
} from 'react';
import { isFunction, suppressEvent } from '../../../utils/common';
import {
  MouseOrTouchEvent,
  OptionData,
  SelectProps,
  SelectRef,
} from '../../../utils/types';
import { useDebounce, useMountEffect } from '../../Layouts/hooks';
import useOptions from './hooks/useOptions';
import Value from './Value';

const SelectElement = forwardRef<SelectRef, SelectProps>(
  (
    {
      options,
      autoFocus,
      initialValue,
      placeholder = 'Select option...',
      filterIgnoreCase = true,
      filterIgnoreAccents = true,
      inputDelay = 300,
      acceptKey,
      valueFormat,
      descriptionFormat,
      onInputBlur,
      onInputFocus,
      onInputChange,
    },
    ref: Ref<SelectRef>
  ) => {
    // Instance prop refs (primitive/function type)
    const menuOpenRef = useRef<boolean>(false);

    // DOM element refs
    const controlRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);

    // Local state values
    const [inputValue, setInputValue] = useState<string>('');
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<
      OptionData | undefined
    >(initialValue);

    // Custom hook abstraction that debounces search input value (opt-in)
    const debouncedInputValue = useDebounce<string>(inputValue, inputDelay);

    // Custom hook abstraction that handles the creation of menuOptions
    const { menuOptions } = useOptions(
      options,
      debouncedInputValue,
      filterIgnoreCase,
      filterIgnoreAccents,
      selectedOption,
      acceptKey
    );

    const blurInput = (): void => inputRef.current?.blur();
    const focusInput = (): void => inputRef.current?.focus();

    // Stop blur event on input
    const handleOnMouseDownEvent = (e: FormEvent<Element>): void => {
      suppressEvent(e);
      focusInput();
    };

    const selectOption = useCallback((option: OptionData): void => {
      blurInput();
      setSelectedOption(option);
      setInputValue('');
      setMenuOpen(false);
    }, []);

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
        setIsFocused(false);
        setMenuOpen(false);
        setInputValue('');
      },
      [onInputBlur]
    );

    const handleOnInputFocus = useCallback(
      (e: FocusEvent<HTMLInputElement>): void => {
        onInputFocus?.(e);
        setIsFocused(true);
      },
      [onInputFocus]
    );

    const handleOnInputChange = useCallback(
      (e: FormEvent<HTMLInputElement>): void => {
        const value = e.currentTarget.value;
        onInputChange?.(value);
        setInputValue(value);
        setMenuOpen(true);
      },
      [onInputChange]
    );

    const onFormatValue = useCallback(
      (): string =>
        isFunction(valueFormat) && selectedOption
          ? valueFormat(selectedOption)
          : selectedOption?.value!,
      [selectedOption, valueFormat]
    );

    const onFormatDescription = useCallback(
      (option: OptionData): string =>
        isFunction(descriptionFormat)
          ? descriptionFormat(option)
          : option.description!,
      [descriptionFormat]
    );

    /**
     * Write value of 'menuOpen' to ref object.
     * Prevent extraneous state update calls/rerenders.
     */
    useEffect(() => {
      menuOpenRef.current = menuOpen;
    }, [menuOpen]);

    /**
     * useMountEffect:
     * If autoFocus = true, focus the control following initial mount.
     */
    useMountEffect(() => {
      autoFocus && focusInput();
    });

    return (
      <div
        className="select-wrapper"
        id="id"
        aria-controls="id"
        aria-expanded={false}
      >
        <div
          className="control-wrapper"
          onTouchEnd={handleOnControlMouseDown}
          onMouseDown={handleOnControlMouseDown}
          ref={controlRef}
        >
          <div className="value-wrapper relative">
            <div className="single-value absolute">
              <Value
                searchValue={inputValue}
                placeholder={placeholder}
                onFormatValue={onFormatValue}
              />
            </div>

            <input
              ref={inputRef}
              onBlur={handleOnInputBlur}
              onFocus={handleOnInputFocus}
              onChange={handleOnInputChange}
              value={inputValue}
              className=""
            />
          </div>
        </div>
        {menuOpen && (
          <div className="menu" ref={menuRef}>
            {menuOptions?.map((item) => (
              <p
                onMouseDown={handleOnMouseDownEvent}
                onClick={() => selectOption(item)}
                key={item?.id}
                className="cursor-pointer"
              >
                {onFormatDescription(item)}
              </p>
            ))}
          </div>
        )}
      </div>
    );
  }
);

export default SelectElement;
