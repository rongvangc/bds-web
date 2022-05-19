import type {
  MouseEvent,
  TouchEvent,
  EventHandler,
  FocusEventHandler,
  HTMLAttributes,
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

export type OptionData = {
  id: string;
  value: string;
  description?: string;
  icon?: IconListProps;
  active?: boolean;
} & Record<string, any>;

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
  autoFocus?: boolean;
  colorIcon?: Colors;
  initialValue?: OptionData;
  placeholder?: string;
  filterIgnoreCase?: boolean;
  filterIgnoreAccents?: boolean;
  inputDelay?: number;
  acceptKey?: string[];
  className?: string & Pick<HTMLAttributes<HTMLElement>, 'className'>;
  inputClass?: string & Pick<HTMLAttributes<HTMLElement>, 'className'>;
  size?: 'sm' | 'md';
  valueFormat?: (data: OptionData) => string;
  descriptionFormat?: (data: OptionData) => string;
  onInputChange?: (value?: string) => any;
  onInputFocus?: FocusEventHandler<HTMLInputElement>;
  onInputBlur?: FocusEventHandler<HTMLInputElement>;
  onSearchChange?: (value?: string) => any;
  onOptionChange?: (data: OptionData) => any;
}>;

export type CallbackFunction = (...args: any[]) => any;
export type MouseOrTouchEvent<T = Element> = MouseEvent<T> | TouchEvent<T>;
export type MouseOrTouchEventHandler<T = Element> = EventHandler<
  MouseOrTouchEvent<T>
>;
