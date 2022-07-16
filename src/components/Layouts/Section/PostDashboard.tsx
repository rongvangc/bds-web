import React, { useMemo, useState, useReducer, useCallback } from 'react';
import {
  createTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  RowSelectionState,
  SortingState,
  useTableInstance,
} from '@tanstack/react-table';
import { makeData, Person } from 'src/components/Elements/Table/makeData';
import Table from 'src/components/Elements/Table';
import IndeterminateCheckbox from '@/components/Elements/Table/Checkbox';
import Button from '@/components/Elements/Button';

let table = createTable().setRowType<Person>();

const PostDashboard: React.FC = () => {
  const rerender = useReducer(() => ({}), {})[1];
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [open, setOpen] = useState<boolean>(false);

  const handleToggleButton = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const columns = useMemo(
    () => [
      table.createDataColumn('firstName', {
        id: 'firstName',
        cell: (info) => info.getValue(),
        header: () => <span>First Name</span>,
      }),
      table.createDataColumn('lastName', {
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
      }),
      table.createDataColumn('age', {
        cell: (info) => info.getValue(),
        header: () => <span>Age</span>,
        enableColumnFilter: false,
      }),
      table.createDataColumn('visits', {
        cell: (info) => info.getValue(),
        header: () => <span>Visits</span>,
        enableColumnFilter: false,
      }),
      table.createDataColumn('status', {
        cell: (info) => info.getValue(),
        header: 'Status',
        enableColumnFilter: false,
      }),
      table.createDataColumn('progress', {
        cell: (info) => info.getValue(),
        header: 'Profile Progress',
        enableColumnFilter: false,
      }),
    ],
    []
  );

  const [data, setData] = useState(() => makeData(100000));
  const refreshData = () => setData(() => makeData(100000));

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
    pageCount: undefined, // allows the table to calculate the page count for us via instance.getPageCount()
    // If we wanted to control the pageCount, we could provide it here (eg. if we were doing server-side pagination)
  });

  const instance = useTableInstance(table, {
    data,
    columns: [
      {
        id: 'select',
        header: () => (
          <></>
          // <IndeterminateCheckbox
          //   {...{
          //     checked: instance.getIsAllRowsSelected(),
          //     indeterminate: instance.getIsSomeRowsSelected(),
          //     onChange: instance.getToggleAllRowsSelectedHandler(),
          //   }}
          // />
        ),
        cell: ({ row }) => (
          <div className="px-1">
            <IndeterminateCheckbox
              {...{
                id: row.id,
                checked: row.getIsSelected(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
        ),
      },
      ...columns,
      {
        id: 'action',
        header: () => (
          <>
            <span>Action</span>
          </>
        ),
        cell: ({ row }) => {
          console.log(row.original);
          return (
            <div className="px-1">
              <button>Edit </button>
              <button>Delete</button>
            </div>
          );
        },
      },
    ],
    state: {
      pagination,
      sorting,
      rowSelection,
    },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return open ? (
    <div>123</div>
  ) : (
    <>
      <div className="px-2">
        <Button variant="primary" onClick={handleToggleButton}>
          Tạo bài viết
        </Button>
      </div>
      <Table instance={instance} />
      <div>
        <button onClick={() => rerender()}>Force Rerender</button>
      </div>
      <div>
        <button onClick={() => refreshData()}>Refresh Data</button>
      </div>
      <pre>
        {JSON.stringify(
          {
            rowSelection,
            sorting,
            pagination,
          },
          null,
          2
        )}
      </pre>
    </>
  );
};

export default PostDashboard;
