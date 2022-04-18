import React from 'react';

type IconButtonProps = {
  onClick: () => void;
  variant?: 'outline' | 'primary';
  className?: string;
};

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  className,
  children,
}) => {
  return (
    <button
      className={`h-32px w-32px flex items-center justify-center rounded-full bg-white ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
