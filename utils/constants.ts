import { NavigatorMenu, OptionData } from './types';

export const DEFAULT_FILTER = {
  type: null,
  province: null,
  district: null,
  ward: null,
  street: null,
  price: null,
  direction: null,
};

/**
 * @Format
 * * Doing url with same format below
 * !url: {TYPE_TAB_OPTION}-{SALE_REAL_ESTATE_OPTION}-{address}-{wards}-{districs}/{project-name}
 */

export const TYPE_TAB_OPTION: OptionData[] = [
  {
    id: '1',
    value: 'ban',
    description: 'Nhà đất bán',
  },
  {
    id: '2',
    value: 'thue',
    description: 'Nhà đất cho thuê',
  },
  {
    id: '3',
    value: 'du-an',
    description: 'Dự án',
  },
];

export const TYPE_TAB_BAR_OPTION: OptionData[] = [
  {
    id: '1',
    value: 'ban',
    description: 'Bán',
  },
  {
    id: '2',
    value: 'thue',
    description: 'Cho thuê',
  },
];

export const SALE_REAL_ESTATE_OPTION: OptionData[] = [
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
    value: 'nha-rieng',
    description: 'Nhà riêng',
  },
  {
    id: '4',
    value: 'nha-biet-thu-lien-ke',
    description: 'Nhà biệt thự, liền kề',
  },
  {
    id: '5',
    value: 'nha-mat-pho',
    description: 'Nhà mặt phố',
  },
  {
    id: '6',
    value: 'shophouse-nha-pho-thuong-mai',
    description: 'Shophouse, nhà phố thương mại',
  },
  {
    id: '7',
    value: 'dat-nen-du-an',
    description: 'Đất nền dự án',
  },
  {
    id: '8',
    value: 'dat',
    description: 'Đất',
  },
  {
    id: '9',
    value: 'trang-trai-khu-nghi-duong',
    description: 'Trang trại khu nghỉ dưỡng',
  },
  {
    id: '10',
    value: 'condotel',
    description: 'Condotel',
  },
  {
    id: '11',
    value: 'nha-kho-xuong',
    description: 'Nhà kho, nhà xưởng',
  },
];

export const RENT_REAL_ESTATE_OPTION: OptionData[] = [
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
    value: 'nha-rieng',
    description: 'Nhà riêng',
  },
  {
    id: '4',
    value: 'nha-mat-pho',
    description: 'Nhà mặt phố',
  },
  {
    id: '5',
    value: 'shophouse-nha-pho-thuong-mai',
    description: 'Shophouse, nhà phố thương mại',
  },
  {
    id: '6',
    value: 'nha-tro-phong-tro',
    description: 'Nhà trọ, phòng trọ',
  },
  {
    id: '7',
    value: 'van-phong',
    description: 'Văn phòng',
  },
  {
    id: '8',
    value: 'kho-xuong-nha-dat',
    description: 'Kho, xưởng, nhà đất',
  },
  {
    id: '9',
    value: 'nha-kho-xuong',
    description: 'Nhà kho, nhà xưởng',
  },
];

export const PJ_REAL_ESTATE_OPTION: OptionData[] = [
  {
    id: '1',
    value: 'buon-ma-thuot',
    description: 'Buôn Ma Thuột',
  },
  {
    id: '2',
    value: 'trung-tam-thuong-mai',
    description: 'Trung tâm phương mại',
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

export const NAVIGATOR: NavigatorMenu[] = [
  {
    name: 'Nhà đất bán',
    path: '/nha-dat-ban',
    options: SALE_REAL_ESTATE_OPTION,
  },
  {
    name: 'Nhà đất cho thuê',
    path: '/nha-dat-thue',
    options: RENT_REAL_ESTATE_OPTION,
  },
  {
    name: 'Giới thiệu',
    path: '/gioi-thieu',
  },
  {
    name: 'Hỗ trợ',
    path: '/ho-tro',
  },
];
