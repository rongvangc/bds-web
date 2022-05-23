import React, { HTMLAttributes } from 'react';
import { IconList } from '../../../icons';
import { IconListProps } from '../../../utils/types';
import LinkButton from '../LinkButton';

type IconButtonProps = {
  onClick?: () => void;
  icon?: IconListProps;
  iconDirection?: 'left' | 'right';
  size?: 'sm' | 'md';
  variant?: 'outline' | 'primary' | 'default';
  url?: string;
  className?: string & Pick<HTMLAttributes<HTMLElement>, 'className'>;
};

const ButtonElement: React.FC<IconButtonProps> = ({
  onClick,
  icon = '',
  variant = 'default',
  size = 'md',
  className,
  url,
  iconDirection = 'left',
  children,
}) => {
  const isRightDirection = iconDirection === 'right';
  const isSmallSize = size === 'sm';

  const checkSize = isSmallSize
    ? `h-[28px] text-sm pr-2 pl-2`
    : `h-[40px] ${isRightDirection ? 'pr-4 pl-6' : 'pr-6 pl-4'}`;

  const variantType =
    variant === 'primary'
      ? `${checkSize} text-white border-primary bg-primary`
      : variant === 'outline'
      ? `${checkSize} text-primary bg-white border`
      : `${checkSize} text-primary border-transparent`;

  const button = () => (
    <button
      className={`${variantType} ${
        isRightDirection ? 'flex-row-reverse' : ''
      } flex items-center ${
        isSmallSize ? 'rounded-md' : 'rounded-lg'
      } border font-medium outline-none ${className}`}
      onClick={onClick}
    >
      <span
        className={`${isRightDirection ? 'pl-1' : 'pr-1'} ${
          isSmallSize ? 'pt-0' : 'pt-0.5'
        }`}
      >
        <IconList type={icon} size={size} variant={variant} />
      </span>
      <p>{children}</p>
    </button>
  );

  if (!url) return button();

  return <LinkButton href={url}>{button()}</LinkButton>;
};

export default ButtonElement;
