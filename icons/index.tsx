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
import { AppIcon } from './App';
import { ChatIcon } from './Chat';
import { ClockIcon } from './Clock';
import { ColumnIcon } from './Column';
import { ImageIcon } from './Image';
import { KeyIcon } from './Key';
import { LayoutIcon } from './Layout';
import { LoginIcon } from './Login';
import { LogoutIcon } from './Logout';
import { MapLocationIcon } from './MapLocation';
import { RowIcon } from './Row';

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
export * from './CaretDown';
export * from './CaretUp';
export * from './App';
export * from './Chat';
export * from './Clock';
export * from './Column';
export * from './Image';
export * from './Key';
export * from './Layout';
export * from './Login';
export * from './Logout';
export * from './MapLocation';
export * from './Row';

type IconListCmp = {
  type: IconListProps;
  size?: 'sm' | 'md';
  variant?: 'outline' | 'primary' | 'default';
  color?: Colors;
};

export const IconList: React.FC<IconListCmp> = ({
  type,
  size,
  variant = 'default',
  color,
}) => {
  const sizeIcon = size === 'sm' ? 16 : 24;
  const checkVariantColor = color
    ? color
    : variant === 'primary'
    ? Colors.white
    : Colors.primary;
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
    case 'app':
      return (
        <AppIcon width={sizeIcon} height={sizeIcon} color={checkVariantColor} />
      );
    case 'clock':
      return (
        <ClockIcon
          width={sizeIcon}
          height={sizeIcon}
          color={checkVariantColor}
        />
      );
    case 'column':
      return (
        <ColumnIcon
          width={sizeIcon}
          height={sizeIcon}
          color={checkVariantColor}
        />
      );
    case 'chat':
      return (
        <ChatIcon
          width={sizeIcon}
          height={sizeIcon}
          color={checkVariantColor}
        />
      );
    case 'image':
      return (
        <ImageIcon
          width={sizeIcon}
          height={sizeIcon}
          color={checkVariantColor}
        />
      );
    case 'layout':
      return (
        <LayoutIcon
          width={sizeIcon}
          height={sizeIcon}
          color={checkVariantColor}
        />
      );
    case 'login':
      return (
        <LoginIcon
          width={sizeIcon}
          height={sizeIcon}
          color={checkVariantColor}
        />
      );
    case 'logout':
      return (
        <LogoutIcon
          width={sizeIcon}
          height={sizeIcon}
          color={checkVariantColor}
        />
      );
    case 'row':
      return (
        <RowIcon width={sizeIcon} height={sizeIcon} color={checkVariantColor} />
      );
    case 'map-location':
      return (
        <MapLocationIcon
          width={sizeIcon}
          height={sizeIcon}
          color={checkVariantColor}
        />
      );
    case 'key':
      return (
        <KeyIcon width={sizeIcon} height={sizeIcon} color={checkVariantColor} />
      );
    default:
      return <></>;
  }
};

export default IconList;
