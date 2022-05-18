import React from 'react';

interface ValueProps {
  searchValue?: string;
  placeholder?: string;
  onFormatValue: () => string;
}

const Value: React.FC<ValueProps> = ({
  searchValue,
  placeholder,
  onFormatValue,
}) => {
  if (placeholder && !searchValue) return <div>{placeholder}</div>;

  if (searchValue) return <></>;

  return <div className="single-value">{onFormatValue()}</div>;
};

export default Value;
