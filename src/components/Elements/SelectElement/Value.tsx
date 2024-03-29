import React from 'react';
import { OptionData } from '../../../utils/types';

interface ValueProps {
  sizeStyle?: string;
  selectedOption?: OptionData;
  searchValue?: string;
  placeholder?: string;
  disabled?: boolean;
  onFormatValue: () => string;
}

const Value: React.FC<ValueProps> = ({
  sizeStyle,
  selectedOption,
  searchValue,
  placeholder,
  disabled,
  onFormatValue,
}) => {
  if (placeholder && !searchValue && !selectedOption)
    return <div className={`truncate border ${sizeStyle}`}>{placeholder}</div>;

  if (searchValue) return <></>;

  return (
    <div className={`single-value w-full truncate border ${sizeStyle}`}>
      {!disabled && onFormatValue()}
    </div>
  );
};

export default Value;
