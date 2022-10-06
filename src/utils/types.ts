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
  | 'app'
  | 'chat'
  | 'column'
  | 'clock'
  | 'key'
  | 'image'
  | 'login'
  | 'layout'
  | 'logout'
  | 'map-location'
  | 'row'
  | 'refresh'
  | 'calendar'
  | 'arrow-left'
  | 'arrow-right'
  | 'facebook'
  | 'expand'
  | 'collapse'
  | 'phone'
  | 'document'
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
  gray = '#cecece',
  lightGray = 'rgba(242,242,242,0.5)',
}

export type FilterRealEstateProps = {
  provinces?: ConvertAddressType[];
  districts?: ConvertAddressType[];
  streets?: ConvertAddressType[];
  wards?: ConvertAddressType[];
  option: OptionData[];
  onSearch: (value: string) => void;
  onChange?: (value: OptionData) => void;
  onFilter?: (data: Record<FilterKey, OptionData | null>) => void;
};

export type NavigatorMenu = {
  name: string;
  path: string;
  options?: OptionData[];
};

export type OptionData = {
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

export type PostType = {
  title: string;
  description?: string;
  postType: OptionData;
  content: string;
  previewImage: string;
  url?: string;
  date?: Date;
};

export type ProductType = {
  id: string;
  name: string;
  price: string;
  acreage: number;
  address: string;
  date?: Date;
  url?: string;
  status?: string;
  isHot?: boolean;
};

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
  isClear?: boolean;
  disabled?: boolean;
  inputDelay?: number;
  acceptKey?: string[];
  className?: string & Pick<HTMLAttributes<HTMLElement>, 'className'>;
  inputClass?: string & Pick<HTMLAttributes<HTMLElement>, 'className'>;
  id?: string;
  size?: 'sm' | 'md' | 'xs';
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

export type FilterKey =
  | 'type'
  | 'province'
  | 'district'
  | 'ward'
  | 'street'
  | 'price'
  | 'direction';

export type ConvertAddressType = {
  _id: string;
  name: string;
  parentID: string;
} & Record<string, any>;
