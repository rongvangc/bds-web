import { Column } from '@tanstack/react-table';

const Filter = ({ column }: { column: Column<any> }) => {
  const columnFilterValue = column.getFilterValue();

  return (
    <input
      type="text"
      value={(columnFilterValue ?? '') as string}
      onChange={(e) => column.setFilterValue(e.target.value)}
      placeholder={`Search...`}
      className="w-36 rounded border shadow"
    />
  );
};

export default Filter;
