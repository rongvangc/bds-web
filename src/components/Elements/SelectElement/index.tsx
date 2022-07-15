import React, {
  useCallback,
  useRef,
  useState,
  forwardRef,
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
import {
  useCallbackRef,
  useDebounce,
  useMountEffect,
  useUpdateEffect,
} from '../../hooks';
import useOptions from './hooks/useOptions';
import { Input } from './Input';
import { Menu } from './Menu';
import Value from './Value';
import { CaretDropdown } from './CaretDropdown';
import { selectVariant } from '@/utils/animation';

const SelectElement = forwardRef<SelectRef, SelectProps>(
  ({
    className = '',
    inputClass = '',
    colorIcon = Colors.primary,
    size = 'sm',
    options,
    autoFocus,
    initialValue,
    placeholder = 'Select option...',
    filterIgnoreCase = true,
    filterIgnoreAccents = false,
    inputDelay = 300,
    acceptKey,
    isClear = false,
    disabled = false,
    valueFormat,
    descriptionFormat,
    onInputBlur,
    onInputFocus,
    onInputChange,
    onOptionChange,
    onSearchChange,
  }) => {
    // Instance prop refs (primitive/function type)
    const menuOpenRef = useRef<boolean>(false);
    const onChangeEventValue = useRef<boolean>(false);
    const onSearchChangeIsFunc = useRef<boolean>(isFunction(onSearchChange));
    const onOptionChangeIsFunc = useRef<boolean>(isFunction(onOptionChange));

    const sizeStyle =
      size === 'sm'
        ? 'pl-4 py-1.5 pr-8'
        : size === 'xs'
        ? 'pl-2 py-1 pr-4'
        : 'pl-4 py-2.5 pr-8';
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

    const onSearchChangeRef = useCallbackRef(onSearchChange);
    const onOptionChangeRef = useCallbackRef(onOptionChange);

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
      if (disabled) return;

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
        onChangeEventValue.current = true;
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
     * Execute every render - these ref boolean flags are used to determine if functions
     * ..are defined inside of a callback wrapper returned from 'useCallbackRef' custom hook
     */
    useEffect(() => {
      onSearchChangeIsFunc.current = isFunction(onSearchChange);
      onOptionChangeIsFunc.current = isFunction(onOptionChange);
    });

    /**
     * If 'onSearchChange' function is defined, run as callback when the stateful debouncedInputValue
     * updates check if onChangeEventValue ref is set true, which indicates the inputValue change was triggered by input change event
     */
    useEffect(() => {
      const { current: isFunc } = onSearchChangeIsFunc;

      if (isFunc && onChangeEventValue.current) {
        onChangeEventValue.current = false;
        onSearchChangeRef(debouncedInputValue);
      }
    }, [onSearchChangeRef, debouncedInputValue]);

    /**
     * useUpdateEffect:
     * Handle passing 'selectedOption' value(s) to onOptionChange callback function prop (if defined)
     */
    useUpdateEffect(() => {
      const { current: isFunc } = onOptionChangeIsFunc;

      if (isFunc) {
        selectedOption && onOptionChangeRef(selectedOption);
      }
    }, [onOptionChangeRef, selectedOption]);

    /**
     * Write value of 'menuOpen' to ref object.
     * Prevent extraneous state update calls/rerenders.
     */
    useEffect(() => {
      menuOpenRef.current = menuOpen;
    }, [menuOpen]);

    /**
     * Set default value when has Clear
     */
    useEffect(() => {
      isClear && setSelectedOption(initialValue);
    }, [initialValue, isClear]);

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
              className={`single-value pointer-events-auto absolute z-10 w-full overflow-hidden rounded-md ${inputClass} ${
                disabled
                  ? 'pointer-events-none cursor-not-allowed bg-gray/50'
                  : ''
              }`}
            >
              <Value
                sizeStyle={sizeStyle}
                selectedOption={selectedOption}
                searchValue={inputValue}
                placeholder={placeholder}
                onFormatValue={onFormatValue}
                disabled={disabled}
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
              disabled={disabled}
            />
            <div
              className={`absolute ${
                size === 'sm'
                  ? 'right-2 top-1.5'
                  : size === 'xs'
                  ? 'right-1 top-1'
                  : 'right-3 top-3'
              }`}
            >
              <CaretDropdown show={menuOpen} color={colorIcon} />
            </div>
          </div>
        </div>
        {menuOpen && !disabled && (
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
