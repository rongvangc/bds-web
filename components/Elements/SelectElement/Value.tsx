import React from 'react';
import { OptionData } from '../../../utils/types';

interface ValueProps {
  sizeStyle?: string;
  selectedOption?: OptionData;
  searchValue?: string;
  placeholder?: string;
  onFormatValue: () => string;
}

const Value: React.FC<ValueProps> = ({
  sizeStyle,
  selectedOption,
  searchValue,
  placeholder,
  onFormatValue,
}) => {
  if (placeholder && !searchValue && !selectedOption)
    return <div className={`border ${sizeStyle}`}>{placeholder}</div>;

  if (searchValue) return <></>;

  return (
    <div className={`single-value w-full border ${sizeStyle}`}>
      {onFormatValue()}
    </div>
  );
};

export default Value;
