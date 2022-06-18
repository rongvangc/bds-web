import React, { useMemo, useState, useReducer } from 'react';
import {
  createTable,
  PaginationState,
  RowSelectionState,
  SortingState,
} from '@tanstack/react-table';
import { makeData, Person } from 'src/components/Elements/Table/makeData';
import Table from 'src/components/Elements/Table';

let table = createTable().setRowType<Person>();

const PostDashboard: React.FC = () => {
  const rerender = useReducer(() => ({}), {})[1];

  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const columns = useMemo(
    () => [
      table.createDataColumn('firstName', {
        id: 'firstName',
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
        enableColumnFilter: false,
      }),
      table.createDataColumn('lastName', {
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
        enableColumnFilter: false,
      }),
      table.createDataColumn('age', {
        cell: (info) => info.getValue(),
        header: () => <span>Age</span>,
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

  return (
    <>
      <Table
        {...{
          data,
          sorting,
          rowSelection,
          columns,
          pagination,
          setPagination,
          setSorting,
          setRowSelection,
        }}
      />
      <hr />
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
