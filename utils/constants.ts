import { OptionData } from './types';

export const DEFAULT_FILTER = {
  type: null,
  province: null,
  district: null,
  ward: null,
  street: null,
  price: null,
  direction: null,
};

export const NAVIGATOR = [
  {
    name: 'Giới thiệu',
    path: '/gioi-thieu',
  },
  {
    name: 'Hỗ trợ',
    path: '/ho-tro',
  },
];

export const FILTER_OPTION: OptionData[] = [
  {
    id: '1',
    value: 'dat-ban',
    description: 'Nhà đất bán',
  },
  {
    id: '2',
    value: 'cho-thue',
    description: 'Nhà đất cho thuê',
  },
  {
    id: '3',
    value: 'du-an',
    description: 'Dự án',
  },
];

export const REAL_ESTATE_OPTION: OptionData[] = [
  {
    id: '1',
    value: 'tat-ca',
    description: 'Tất cả nhà đất',
  },
  {
    id: '2',
    value: 'can-ho-chung-cu',
    description: 'Căn hộ chung cư',
  },
  {
    id: '3',
    value: 'cac-loai-nha',
    description: 'Các loại nhà bán',
  },
  {
    id: '4',
    value: 'cac-loai-dat',
    description: 'Các loại đất bán',
  },
  {
    id: '5',
    value: 'trang-trai-khu-nghi-duong',
    description: 'Trang trại khu nghỉ dưỡng',
  },
  {
    id: '6',
    value: 'kho-nha-xuong',
    description: 'Kho, nhà xưởng',
  },
  {
    id: '7',
    value: 'loai-khac',
    description: 'Bất động sản khác',
  },
];

export const POST_OPTION_TAB: OptionData[] = [
  {
    id: '1',
    value: 'noi-bat',
    description: 'Tin tức nổi bật',
  },
  {
    id: '2',
    value: 'thi-truong',
    description: 'Tin tức thị trường',
  },
  {
    id: '3',
    value: 'phong-thuy',
    description: 'Phong thủy',
  },
];
