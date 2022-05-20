import React, { HTMLAttributes } from 'react';
import { IconList } from '../../../icons';
import { IconListProps } from '../../../utils/types';

type IconButtonProps = {
  onClick?: () => void;
  icon?: IconListProps;
  size?: 'sm' | 'md';
  variant?: 'outline' | 'primary' | 'default';
  className?: string & Pick<HTMLAttributes<HTMLElement>, 'className'>;
};

const ButtonElement: React.FC<IconButtonProps> = ({
  onClick,
  icon = '',
  variant = 'default',
  size = 'md',
  className,
  children,
}) => {
  const checkSize =
    size === 'sm' ? 'h-[28px] text-sm pr-2 pl-2' : 'h-[40px] pr-6 pl-4';

  const variantType =
    variant === 'primary'
      ? `${checkSize} text-white border-primary bg-primary`
      : variant === 'outline'
      ? `${checkSize} text-primary border`
      : `${checkSize} text-primary border-transparent`;

  return (
    <button
      className={`${variantType} ${className} flex items-center ${
        size === 'sm' ? 'rounded-md' : 'rounded-lg'
      } border font-medium outline-none`}
      onClick={onClick}
    >
      <span className={size === 'sm' ? 'pr-1' : 'pr-2'}>
        <IconList type={icon} size={size} variant={variant} />
      </span>
      <p>{children}</p>
    </button>
  );
};

export default ButtonElement;
