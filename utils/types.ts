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
