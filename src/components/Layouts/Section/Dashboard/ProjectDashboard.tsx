import Table from 'src/components/Elements/Table';
import * as Yup from 'yup';
import React, { useMemo, useState, useReducer, useCallback } from 'react';
import { Formik, Field, Form, useFormik } from 'formik';
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
//
import {
  FilterRealEstateProps,
  OptionData,
  FilterKey,
  Colors,
} from '@/utils/types';
//
import {
  DEFAULT_FILTER,
  SALE_REAL_ESTATE_OPTION,
  PRICE_RANGE,
  DIRECTION,
} from '@/utils/constants';
//
import { calcLength } from 'framer-motion';
import { Console } from 'console';
import { convertDataAddress } from '@/utils/common';
import SelectElement from '../../../../components/Elements/SelectElement';
import { useFilterHome } from '../../../Layouts/hooks/useFilterHome';
import { TYPE_TAB_OPTION } from '@/utils/constants';
import { InputForm } from '@/components/Elements/InputForm';

const ProjectDashboard: React.FC = ({}) => {
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
  const { provinces, districts, streets, wards } = useFilterHome();
  const [filterOption, setFilterOption] =
    useState<Record<FilterKey, OptionData | null>>(DEFAULT_FILTER);
  const [types, setTypes] = useState<OptionData[]>(TYPE_TAB_OPTION); //type
  console.log('types', types);
  const [hasFilter, setHasFilter] = useState<boolean>(false);
  const [clear, setClear] = useState<boolean>(false);
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
  const handleChange = () => {
    set;
  };
  const handleFilterOption = useCallback(
    (key: FilterKey) => (data: OptionData) => {
      setHasFilter(true);
      setClear(false);
      setFilterOption({
        ...filterOption,
        [key]: data,
      });
    },
    [filterOption]
  );

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
              className="text-gray-500 w-full rounded-lg bg-gray px-4 py-2.5 outline-none"
              onChange={formik.handleChange}
              value={formik.values.title}
              required
            />
            <h2>h</h2>
          </div>
          <div>
            <input
              id="type"
              name="type"
              type="number"
              placeholder="Loại"
              className="text-gray-500 w-full rounded-lg bg-gray px-4 py-2.5 outline-none"
              onChange={formik.handleChange}
              value={formik.values.type}
              required
            />
            <p className="mb-4 text-left text-red">
              {formik.errors.type ?? ''}
            </p>
          </div>
          <div>
            <input // gia ban
              id="price"
              name="price"
              type="text"
              placeholder="Giá"
              className="text-gray-500 w-full rounded-lg bg-gray px-4 py-2.5 outline-none"
              onChange={formik.handleChange}
              value={formik.values.price}
              required
            />
            <p className="mb-4 text-left text-red">
              {formik.errors.price ?? ''}
            </p>
          </div>
          <div>
            <input // dien tich
              id="acreage"
              name="acreage"
              type="number"
              placeholder="Diện tích"
              className="text-gray-500 w-full rounded-lg bg-gray px-4 py-2.5 outline-none"
              onChange={formik.handleChange}
              value={formik.values.acreage}
              required
            />
            <p className="mb-4 text-left text-red">
              {formik.errors.acreage ?? ''}
            </p>
          </div>
          <div>
            <input // Số lầu
              id="floorNumber"
              name="floorNumber"
              type="number"
              placeholder="Số lầu"
              className="text-gray-500 w-full rounded-lg bg-gray px-4 py-2.5 outline-none"
              onChange={formik.handleChange}
              value={formik.values.floorNumber}
              required
            />
            <p className="mb-4 text-left text-red">
              {formik.errors.floorNumber ?? ''}
            </p>
          </div>
          <div>
            <input // Số phòng ngủ
              id="bedroomNumber"
              name="bedroomNumber"
              type="number"
              placeholder="Số phòng ngủ"
              className="text-gray-500 w-full rounded-lg bg-gray px-4 py-2.5 outline-none"
              onChange={formik.handleChange}
              value={formik.values.bedroomNumber}
              required
            />
            <p className="mb-4 text-left text-red">
              {formik.errors.bedroomNumber ?? ''}
            </p>
          </div>
          <div>
            <input // Đường trước nhà
              id="roadAhead"
              name="roadAhead"
              type="number"
              placeholder="Đường trước nhà"
              className="text-gray-500 w-full rounded-lg bg-gray px-4 py-2.5 outline-none"
              onChange={formik.handleChange}
              value={formik.values.roadAhead}
              required
            />
            <p className="mb-4 text-left text-red">
              {formik.errors.roadAhead ?? ''}
            </p>
          </div>
          <div>
            <input // Huong di
              id="roadAhead"
              name="roadAhead"
              type="number"
              placeholder="Hướng đi"
              className="text-gray-500 w-full rounded-lg bg-gray px-4 py-2.5 outline-none"
              onChange={formik.handleChange}
              value={formik.values.roadAhead}
              required
            />
            <p className="mb-4 text-left text-red">
              {formik.errors.roadAhead ?? ''}
            </p>
          </div>
          <div>
            <input // Trang thai
              id="status"
              name="status"
              type="number"
              placeholder="Trạng thái"
              className="text-gray-500 w-full rounded-lg bg-gray px-4 py-2.5 outline-none"
              onChange={formik.handleChange}
              value={formik.values.status}
              required
            />
            <p className="mb-4 text-left text-red">
              {formik.errors.status ?? ''}
            </p>
          </div>
          <div>
            <textarea // Mo ta
              id="description"
              name="description"
              placeholder="Mô tả"
              className="text-gray-500 w-full rounded-lg bg-gray px-4 py-2.5 outline-none"
              onChange={formik.handleChange}
              value={formik.values.description}
              required
            />
            <p className="mb-4 text-left text-red">
              {formik.errors.description ?? ''}
            </p>
          </div>
          <div>
            <textarea // Noi dung
              id="content"
              name="content"
              placeholder="Nội dung"
              className="text-gray-500 w-full rounded-lg bg-gray px-4 py-2.5 outline-none"
              onChange={formik.handleChange}
              value={formik.values.content}
              required
            />
            <p className="mb-4 text-left text-red">
              {formik.errors.content ?? ''}
            </p>
          </div>
          <div>
            <textarea // Dia chi
              id="address"
              name="address"
              placeholder="Địa chỉ"
              className="text-gray-500 w-full rounded-lg bg-gray px-4 py-2.5 outline-none"
              onChange={formik.handleChange}
              value={formik.values.address}
              required
            />
            <p className="mb-4 text-left text-red">
              {formik.errors.address ?? ''}
            </p>
          </div>
          <SelectElement
            inputClass="bg-transparent bg-gray placeholder-gray-500"
            placeholder="Đường"
            options={convertDataAddress(streets)}
            colorIcon={Colors.black}
            onOptionChange={handleFilterOption('street')}
            isClear={clear}
          />
          <SelectElement
            inputClass="bg-transparent bg-gray placeholder-gray-500"
            placeholder="Phường/Xã"
            options={convertDataAddress(wards)}
            colorIcon={Colors.black}
            onOptionChange={handleFilterOption('ward')}
            isClear={clear}
          />
          <SelectElement
            inputClass="bg-transparent bg-gray placeholder-gray-500"
            placeholder="Quận/Huyện"
            options={convertDataAddress(districts)}
            colorIcon={Colors.black}
            onOptionChange={handleFilterOption('district')}
            isClear={clear}
          />
          <SelectElement
            inputClass="bg-transparent bg-gray placeholder-gray-500"
            placeholder="Tỉnh/Thành Phố"
            options={convertDataAddress(provinces)}
            colorIcon={Colors.black}
            onOptionChange={handleFilterOption('province')}
            isClear={clear}
          />
          <SelectElement
            inputClass="bg-transparent bg-gray placeholder-gray-500"
            placeholder="Hạng mục"
            options={[]}
            colorIcon={Colors.black}
            isClear={clear}
          />
          <SelectElement
            inputClass="bg-transparent bg-gray placeholder-gray-500"
            placeholder="Người tạo"
            options={[]}
            colorIcon={Colors.black}
            isClear={clear}
          />
          <div>
            <InputForm
              id="previewImage"
              label="ẢNH"
              value={formik.values.previewImage}
              onChange={handleChange}
              type="upload"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
export default ProjectDashboard;
