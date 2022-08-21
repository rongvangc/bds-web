import React, { useMemo, useState, useReducer, useCallback } from 'react';
import { Formik, Field, Form, useFormik } from 'formik';
import Table from 'src/components/Elements/Table';
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
import * as Yup from 'yup';
import { calcLength } from 'framer-motion';
import { Console } from 'console';

const ProjectDashboard: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const handleToggleButton = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return open ? (
    <div>
      <CreateProject />
    </div>
  ) : (
    <div className="p-4">Project</div>
  );
};
const CreateProject = ({ data = {} }) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      address: '',
      ward: '',
      district: '',
      province: '',
      street: '',
      type: '',
      category: '',
      price: '',
      acreage: '',
      floorNumber: '',
      bedroomNumber: '',
      roadAhead: '',
      direction: '',
      previewImage: '',
      imageList: '',
      owner: '',
      status: '',
      description: '',
      content: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Vui lòng nhập tiêu đề!'),
      address: Yup.number().required('Vui lòng nhập địa chỉ!'),
      ward: Yup.string().required('Vui lòng nhập khu vực !'),
    }),
  });
  console.log(JSON.stringify(data) === '{}');
  return (
    <div className="p-4">
      <h1 className="mb-8 text-lg">
        {JSON.stringify(data) === '{}' ? 'Thêm dự án mới' : 'Chỉnh Sửa Dự Án'}
      </h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid md:gap-2 md:gap-2 lg:grid-cols-3 lg:grid-cols-3">
          <div>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Tiêu đề"
              className="w-full rounded-lg bg-gray px-4 py-2.5 text-primary outline-none"
              onChange={formik.handleChange}
              value={formik.values.title}
              required
            />
            <h2>h</h2>
          </div>
          <div>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="Địa chỉ"
              className="w-full rounded-lg bg-gray px-4 py-2.5 text-primary outline-none"
              onChange={formik.handleChange}
              value={formik.values.address}
              required
            />
            <p className="mb-4 text-left text-red">
              {formik.errors.address ?? ''}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ProjectDashboard;
