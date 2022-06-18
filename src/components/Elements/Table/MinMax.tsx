import React from 'react';
import { Column, TableInstance } from '@tanstack/react-table';

type MinMaxProps = {
  column: Column<any>;
  instance: TableInstance<any>;
};

const MinMax: React.FC<MinMaxProps> = ({ column, instance }) => {
  const firstValue = instance
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  if (typeof firstValue !== 'number') return <></>;

  return (
    <div className="flex space-x-2">
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[0] ?? ''}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            e.target.value,
            old?.[1],
          ])
        }
        placeholder={`Min`}
        className="w-24 rounded border shadow"
      />
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[1] ?? ''}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            old?.[0],
            e.target.value,
          ])
        }
        placeholder={`Max`}
        className="w-24 rounded border shadow"
      />
    </div>
  );
};

export default MinMax;
