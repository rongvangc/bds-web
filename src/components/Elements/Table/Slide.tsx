import { Column, TableInstance } from '@tanstack/react-table';
import React, { useMemo } from 'react';

type SliderColumnFilterProps = {
  column: Column<any>;
  instance: TableInstance<any>;
};

const SliderColumnFilter: React.FC<SliderColumnFilterProps> = ({
  column,
  instance,
}) => {
  if (!instance) return <></>;
  const columnFilterValue = column.getFilterValue();

  const preFilteredRows = instance.getPreFilteredRowModel().rows;
  const preFilteredRowsValue =
    instance?.getPreFilteredRowModel()?.flatRows[0]?.getValue(column.id) || '';

  const preFilteredRowsLength =
    instance.getPreFilteredRowModel().flatRows.length;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [min, max] = useMemo(() => {
    let min = preFilteredRowsLength ? preFilteredRowsValue : 0;
    let max = preFilteredRowsLength ? preFilteredRowsValue : 0;
    preFilteredRows.forEach((row) => {
      min = Math.min(row.getValue(column.id), min);
      max = Math.max(row.getValue(column.id), max);
    });
    return [min, max];
  }, [column.id, preFilteredRows, preFilteredRowsLength, preFilteredRowsValue]);

  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        value={columnFilterValue || min}
        onChange={(e) => {
          column.setFilterValue(parseInt(e.target.value, 10));
        }}
      />
      <button onClick={() => column.setFilterValue(undefined)}>Off</button>
    </>
  );
};

export default SliderColumnFilter;
