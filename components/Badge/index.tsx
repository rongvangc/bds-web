import React from 'react';
import classname from 'classnames';

type BadgeProps = {
  text?: string;
  className?: string;
};

const Badge: React.FC<BadgeProps> = ({
  text = '',
  className = 'text-sm text-inherit bg-tertiary',
}) => {
  return (
    <span className={classname('auto mb-0 rounded-md px-2 py-1', className)}>
      {text}
    </span>
  );
};

export default Badge;
