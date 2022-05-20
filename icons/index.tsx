import { Colors, IconListProps } from '../utils/types';
import { EditIcon } from './Edit';
import { EditAltIcon } from './EditAlt';
import { EnvelopeIcon } from './Envelope';
import { EyeIcon } from './Eye';
import { EyeClosedIcon } from './EyeClosed';
import { HomeIcon } from './Home';
import { LocationIcon } from './Location';
import { MobileIcon } from './Mobile';
import { OtherHorizontalIcon } from './OtherHorizontal';
import { OtherVerticalIcon } from './OtherVertical';
import { SearchIcon } from './Search';
import { UserIcon } from './User';
import { UserPlusIcon } from './UserPlus';
import { MenuIcon } from './Menu';
import { AcreageIcon } from './Acreage';
import { CaretDownIcon } from './CaretDown';
import { CaretUpIcon } from './CaretUp';

export * from './User';
export * from './UserPlus';
export * from './Search';
export * from './Mobile';
export * from './Location';
export * from './Edit';
export * from './EditAlt';
export * from './Envelope';
export * from './Eye';
export * from './EyeClosed';
export * from './Home';
export * from './OtherVertical';
export * from './OtherHorizontal';
export * from './Warning';
export * from './Menu';
export * from './Acreage';

export const IconList = (
  type: IconListProps,
  size?: 'sm' | 'md',
  variant?: 'outline' | 'primary' | 'default'
) => {
  const sizeIcon = size === 'sm' ? 16 : 24;
  const checkVariantColor =
    variant === 'primary' ? Colors.white : Colors.primary;
  switch (type) {
    case 'location':
      return (
        <LocationIcon
          width={sizeIcon}
          height={sizeIcon}
          color={checkVariantColor}
        />
      );
    case 'mobile':
      return (
        <MobileIcon
          width={sizeIcon}
          height={sizeIcon}
          color={checkVariantColor}
        />
      );
    case 'search':
      return (
        <SearchIcon
          width={sizeIcon}
          height={sizeIcon}
          color={checkVariantColor}
        />
      );
    case 'user':
      return (
        <UserIcon
          width={sizeIcon}
          height={sizeIcon}
          color={checkVariantColor}
        />
      );
    case 'user-plus':
      return (
        <UserPlusIcon
          width={sizeIcon}
          height={sizeIcon}
          color={checkVariantColor}
        />
      );
    case 'user-plus':
      return (
        <UserPlusIcon
          width={sizeIcon}
          height={sizeIcon}
          color={checkVariantColor}
        />
      );
    case 'edit':
      return (
        <EditIcon
          width={sizeIcon}
          height={sizeIcon}
          color={checkVariantColor}
        />
      );
    case 'edit-alt':
      return (
        <EditAltIcon
          width={sizeIcon}
          height={sizeIcon}
          color={checkVariantColor}
        />
      );
    case 'envelope':
      return (
        <EnvelopeIcon
          width={sizeIcon}
          height={sizeIcon}
          color={checkVariantColor}
        />
      );
    case 'eye':
      return (
        <EyeIcon width={sizeIcon} height={sizeIcon} color={checkVariantColor} />
      );
    case 'eye-closed':
      return (
        <EyeClosedIcon
          width={sizeIcon}
          height={sizeIcon}
          color={checkVariantColor}
        />
      );
    case 'home':
      return (
        <HomeIcon
          width={sizeIcon}
          height={sizeIcon}
          color={checkVariantColor}
        />
      );
    case 'other-vertical':
      return (
        <OtherVerticalIcon
          width={sizeIcon}
          height={sizeIcon}
          color={checkVariantColor}
        />
      );
    case 'other-horizontal':
      return (
        <OtherHorizontalIcon
          width={sizeIcon}
          height={sizeIcon}
          color={checkVariantColor}
        />
      );
    case 'warning':
      return (
        <EyeClosedIcon
          width={sizeIcon}
          height={sizeIcon}
          color={checkVariantColor}
        />
      );
    case 'menu':
      return (
        <MenuIcon
          width={sizeIcon}
          height={sizeIcon}
          color={checkVariantColor}
        />
      );
    case 'acreage':
      return (
        <AcreageIcon
          width={sizeIcon}
          height={sizeIcon}
          color={checkVariantColor}
        />
      );
    case 'caret-up':
      return (
        <CaretUpIcon
          width={sizeIcon}
          height={sizeIcon}
          color={checkVariantColor}
        />
      );
    case 'caret-down':
      return (
        <CaretDownIcon
          width={sizeIcon}
          height={sizeIcon}
          color={checkVariantColor}
        />
      );
    default:
      return;
  }
};
