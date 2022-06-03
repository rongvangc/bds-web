import Table from 'components/Elements/Table';
import {
  filterGreaterThan,
  makeData,
  roundedMedian,
} from 'components/Elements/Table/helper';
import { NumberRangeColumnFilter } from 'components/Elements/Table/NumberRangeColumnFilter';
import { SelectColumnFilter } from 'components/Elements/Table/SelectColumnFilter';
import { SliderColumnFilter } from 'components/Elements/Table/SliderColumnFilter';
import React, { useEffect, useMemo, useRef, useState } from 'react';

const PostDashboard: React.FC = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
            // Use a two-stage aggregator here to first
            // count the total rows being aggregated,
            // then sum any of those counts if they are
            // aggregated further
            aggregate: 'count',
            Aggregated: ({ value }: { value: string }) => `${value} Names`,
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
            // Use our custom `fuzzyText` filter on this column
            filter: 'fuzzyText',
            // Use another two-stage aggregator here to
            // first count the UNIQUE values from the rows
            // being aggregated, then sum those counts if
            // they are aggregated further
            aggregate: 'uniqueCount',
            Aggregated: ({ value }: { value: string }) =>
              `${value} Unique Names`,
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
            Filter: SliderColumnFilter,
            filter: 'equals',
            // Aggregate the average age of visitors
            aggregate: 'average',
            Aggregated: ({ value }: { value: string }) => `${value} (avg)`,
          },
          {
            Header: 'Visits',
            accessor: 'visits',
            Filter: NumberRangeColumnFilter,
            filter: 'between',
            // Aggregate the sum of all visits
            aggregate: 'sum',
            Aggregated: ({ value }: { value: string }) => `${value} (total)`,
          },
          {
            Header: 'Status',
            accessor: 'status',
            Filter: SelectColumnFilter,
            filter: 'includes',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
            Filter: SliderColumnFilter,
            filter: filterGreaterThan,
            // Use our custom roundedMedian aggregator
            aggregate: roundedMedian,
            Aggregated: ({ value }: { value: string }) => `${value} (med)`,
          },
        ],
      },
    ],
    []
  );

  const [data, setData] = useState(() => makeData(10000));
  const [originalData] = useState(data);

  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.
  const skipResetRef = useRef(false);

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  const updateMyData = (
    rowIndex: number,
    columnId: string,
    value: string | number
  ) => {
    // We also turn on the flag to not reset the page
    skipResetRef.current = true;
    setData((old: any) =>
      old.map((row: any, index: any) => {
        if (index === rowIndex) {
          return {
            ...row,
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  // After data changes, we turn the flag back off
  // so that if data actually changes when we're not
  // editing it, the page is reset
  useEffect(() => {
    skipResetRef.current = false;
  }, [data]);

  // Let's add a data resetter/randomizer to help
  // illustrate that flow...
  const resetData = () => {
    // Don't reset the page when we do this
    skipResetRef.current = true;
    setData(originalData);
  };

  return (
    <>
      <button onClick={resetData}>Reset Data</button>
      <Table
        columns={columns}
        data={data}
        updateMyData={updateMyData}
        skipReset={skipResetRef.current}
      />
    </>
  );
};

export default PostDashboard;
