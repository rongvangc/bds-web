import type {
  ReactNode,
  MouseEvent,
  TouchEvent,
  EventHandler,
  FocusEventHandler,
} from 'react';

export type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

export type IconListProps =
  | 'location'
  | 'user'
  | 'user-plus'
  | 'mobile'
  | 'search'
  | 'envelope'
  | 'edit'
  | 'edit-alt'
  | 'envelope'
  | 'eye'
  | 'eye-closed'
  | 'envelope'
  | 'home'
  | 'other-vertical'
  | 'other-horizontal'
  | 'warning'
  | 'menu'
  | 'acreage'
  | 'caret-down'
  | 'caret-up'
  | '';

export enum Colors {
  transparent = 'transparent',
  current = 'currentColor',
  primary = '#12004f',
  secondary = '#e04946',
  tertiary = '#37a5e5',
  red = '#c2525c',
  green = '#3d8860',
  lightRed = '#e3aaad',
  lightGreen = '#a7d1bb',
  white = '#ffffff',
  black = '#484848',
}

export type FilterRealEstateProps = {
  option: OptionData[];
  onChange?: (value: OptionData) => void;
};

export type OptionData = any;

export type MenuOption = Readonly<{
  label: string | number;
  value: string | number;
  data: OptionData;
  isDisabled: boolean;
  isSelected: boolean;
}>;

export type SelectRef = Readonly<{
  empty: boolean;
  menuOpen: boolean;
  blur: () => void;
  focus: () => void;
  clearValue: () => void;
  toggleMenu: (state?: boolean) => void;
  setValue: (option?: OptionData) => void;
}>;

export type SelectProps = Readonly<{
  options: OptionData[];
  initialValue?: OptionData | OptionData[];
  placeholder?: string;
  getOptionLabel?: OptionLabelCallback;
  getOptionValue?: OptionValueCallback;
  renderOptionLabel?: (data: OptionData) => ReactNode;
  onInputChange?: (value?: string) => any;
  onInputFocus?: FocusEventHandler<HTMLInputElement>;
  onInputBlur?: FocusEventHandler<HTMLInputElement>;
}>;

export type CallbackFunction = (...args: any[]) => any;
export type OptionValueCallback = (data: OptionData) => string | number;
export type OptionLabelCallback = OptionValueCallback;
export type RenderLabelCallback = (data: OptionData) => ReactNode;
export type OptionFilterCallback = (option: MenuOption) => string;
export type OptionDisabledCallback = (data: OptionData) => boolean;
export type MouseOrTouchEvent<T = Element> = MouseEvent<T> | TouchEvent<T>;
export type MouseOrTouchEventHandler<T = Element> = EventHandler<
  MouseOrTouchEvent<T>
>;

export const FunctionDefaults = {
  OPTION_LABEL: (({ label }) => label) as OptionLabelCallback,
  OPTION_VALUE: (({ value }) => value) as OptionValueCallback,
  OPTION_IS_DISABLED: (({ isDisabled }) =>
    !!isDisabled) as OptionDisabledCallback,
  OPTION_FILTER: (({ label }) =>
    typeof label === 'string' ? label : `${label}`) as OptionFilterCallback,
};
