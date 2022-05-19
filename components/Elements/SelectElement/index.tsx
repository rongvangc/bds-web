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
  Colors,
  MouseOrTouchEvent,
  OptionData,
  SelectProps,
  SelectRef,
} from '../../../utils/types';
import { motion } from 'framer-motion';
import { useDebounce, useMountEffect } from '../../Layouts/hooks';
import useOptions from './hooks/useOptions';
import { Input } from './Input';
import { Menu } from './Menu';
import Value from './Value';
import { selectVariant } from '../../../utils/animation';
import { CaretDropdown } from './CaretDropdown';

const SelectElement = forwardRef<SelectRef, SelectProps>(
  (
    {
      className = '',
      inputClass = '',
      colorIcon = Colors.primary,
      size = 'sm',
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

    const sizeStyle = size === 'sm' ? 'px-4 py-1.5' : 'px-4 py-2.5';
    const fontStyle = size === 'sm' ? 'text-sm' : '';

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
          : selectedOption?.description!,
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
        className={`select-wrapper ${fontStyle} ${className}`}
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
          <div className="value-wrapper relative z-0">
            <div
              className={`single-value absolute z-10 w-full overflow-hidden rounded-md ${inputClass}`}
            >
              <Value
                sizeStyle={sizeStyle}
                selectedOption={selectedOption}
                searchValue={inputValue}
                placeholder={placeholder}
                onFormatValue={onFormatValue}
              />
            </div>

            <Input
              sizeStyle={sizeStyle}
              className={inputClass}
              inputRef={inputRef}
              onBlur={handleOnInputBlur}
              onFocus={handleOnInputFocus}
              onChange={handleOnInputChange}
              inputValue={inputValue}
            />
            <div
              className={`absolute ${
                size === 'sm' ? 'right-2 top-2' : 'right-3 top-3'
              }`}
            >
              <CaretDropdown show={menuOpen} color={colorIcon} />
            </div>
          </div>
        </div>
        {menuOpen && (
          <motion.div
            initial="closed"
            animate={menuOpen ? 'open' : 'closed'}
            variants={selectVariant}
            className="relative z-10"
          >
            <Menu
              menuRef={menuRef}
              menuOptions={menuOptions}
              onClick={selectOption}
              onMouseDown={handleOnMouseDownEvent}
              onFormatDescription={onFormatDescription}
            />
          </motion.div>
        )}
      </div>
    );
  }
);

export default SelectElement;
