import IconList from '@/icons';
import { TableInstance } from '@tanstack/react-table';
import React from 'react';
import Filter from './Filter';

const Table = ({ instance }: { instance: TableInstance<any> }) => {
  return (
    <div className="p-2">
      <div className="h-2" />
      {/* {instance.getFlatHeaders().map(
        (header) =>
          header.id === 'firstName' && (
            <div>
              <Filter column={header.column} />
            </div>
          )
      )} */}
      <table>
        <thead>
          {instance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div>
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'cursor-pointer select-none'
                              : '',
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {{
                            asc: '🔼 ',
                            desc: '🔽 ',
                          }[header.column.getIsSorted() as string] ?? null}
                          {header.renderHeader()}
                        </div>

                        {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} />
                          </div>
                        ) : null}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {instance.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return <td key={cell.id}>{cell.renderCell()}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="h-2" />
      <div className="flex items-center gap-2">
        <button
          className="rounded border p-1"
          onClick={() => instance.setPageIndex(0)}
          disabled={!instance.getCanPreviousPage()}
        >
          {'🔚'}
        </button>
        <button
          className="rounded border p-1"
          onClick={() => instance.previousPage()}
          disabled={!instance.getCanPreviousPage()}
        >
          <IconList type="arrow-left" size="md" />
        </button>
        <button
          className="rounded border p-1"
          onClick={() => instance.nextPage()}
          disabled={!instance.getCanNextPage()}
        >
          <IconList type="arrow-right" size="md" />
        </button>
        <button
          className="rounded border p-1"
          onClick={() => instance.setPageIndex(instance.getPageCount() - 1)}
          disabled={!instance.getCanNextPage()}
        >
          {'🔜'}
        </button>
        <span className="flex items-center gap-1">
          <div>Trang</div>
          <strong>
            {instance.getState().pagination.pageIndex + 1} của{' '}
            {instance.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Đi đến trang:
          <input
            type="number"
            defaultValue={instance.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              instance.setPageIndex(page);
            }}
            className="w-16 rounded border p-1"
          />
        </span>
        <select
          className="formSelect"
          value={instance.getState().pagination.pageSize}
          onChange={(e) => {
            instance.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Hiển thị {pageSize}
            </option>
          ))}
        </select>
        <div className="ml-auto">{instance.getRowModel().rows.length} Hàng</div>
      </div>
    </div>
  );
};

export default Table;
