import React, { useCallback } from 'react';

type DefaultColumnFilterProps = {
  column: {
    filterValue: string;
    preFilteredRows: any[];
    setFilter: (e: any) => void;
  };
};

export const DefaultColumnFilter: React.FC<DefaultColumnFilterProps> = ({
  column: { filterValue, preFilteredRows, setFilter },
}) => {
  // Define a default UI for filtering
  const count = preFilteredRows.length;

  const handleChangeInput = useCallback(
    (e: any) => setFilter(e.target.value || undefined),
    [setFilter]
  );

  return (
    <input
      value={filterValue}
      onChange={handleChangeInput}
      placeholder={`Search ${count} records...`}
    />
  );
};
