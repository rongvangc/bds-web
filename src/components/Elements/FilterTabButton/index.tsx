import { memo } from 'react';

interface FilterTabButtonProps {
  value?: any;
  text?: string;
  selected?: boolean;
  onClick: (value: any) => void;
}

const FilterTabButton: React.FC<FilterTabButtonProps> = ({
  text,
  value,
  selected,
  onClick,
}) => {
  return (
    <div
      className={`flex h-[32px]	cursor-pointer items-center justify-center border-r bg-white last:border-r-0 hover:!bg-gray ${
        selected && '!bg-gray'
      }`}
      onClick={() => onClick(value)}
    >
      {text}
    </div>
  );
};

export default memo(FilterTabButton);
