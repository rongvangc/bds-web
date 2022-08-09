import React, { useState, useCallback } from 'react';
import { RowSelectionState, SortingState } from '@tanstack/react-table';
import Button from '@/components/Elements/Button';
import View from './View';
import Create from './Create';

const PostDashboard: React.FC = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [open, setOpen] = useState<boolean>(false);

  const handleToggleButton = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return open ? (
    <Create />
  ) : (
    <>
      <Button variant="primary" onClick={handleToggleButton}>
        Tạo bài viết
      </Button>
      <View
        sorting={sorting}
        rowSelection={rowSelection}
        setSorting={setSorting}
        setRowSelection={setRowSelection}
      />
    </>
  );
};

export default PostDashboard;
