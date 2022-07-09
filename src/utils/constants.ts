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

export const PAGE_SIZE = [10, 20, 30, 40, 50];

/**
 * @PriceRange
 * * Doing url with same format below
 */
export const DIRECTION: OptionData[] = [
  {
    id: '1',
    value: 'dong',
    description: 'Đông',
  },
  {
    id: '2',
    value: 'tay',
    description: 'Tây',
  },
  {
    id: '3',
    value: 'nam',
    description: 'Nam',
  },
  {
    id: '4',
    value: 'bac',
    description: 'Bắc',
  },
  {
    id: '5',
    value: 'dong-bac',
    description: 'Đông bắc',
  },
  {
    id: '6',
    value: 'tay-bac',
    description: 'Tây bắc',
  },
  {
    id: '7',
    value: 'tay-nam',
    description: 'Tây nam',
  },
  {
    id: '8',
    value: 'dong-nam',
    description: 'Đông nam',
  },
];

/**
 * @PriceRange
 * * Doing url with same format below
 */
export const PRICE_RANGE: OptionData[] = [
  {
    id: '1',
    value: '500',
    description: '< 500 triệu',
  },
  {
    id: '2',
    value: '500-800',
    description: '500 - 800 triệu',
  },
  {
    id: '3',
    value: '800-1b',
    description: '800 triệu - 1 tỷ',
  },
  {
    id: '4',
    value: '800-1b',
    description: '800 triệu - 1 tỷ',
  },
  {
    id: '5',
    value: '1b-2b',
    description: '800 triệu - 1 tỷ',
  },
  {
    id: '6',
    value: '1b-2b',
    description: '1 tỷ - 2 tỷ',
  },
  {
    id: '7',
    value: '2b-3b',
    description: '2 tỷ - 3 tỷ',
  },
  {
    id: '8',
    value: '3b-5b',
    description: '3 tỷ - 5 tỷ',
  },
  {
    id: '9',
    value: '5b-7b',
    description: '5 tỷ - 7 tỷ',
  },
  {
    id: '10',
    value: '7b-10b',
    description: '7 tỷ - 10 tỷ',
  },
  {
    id: '11',
    value: '10b-20b',
    description: '10 tỷ - 20 tỷ',
  },
  {
    id: '12',
    value: '20b-30b',
    description: '20 tỷ - 30 tỷ',
  },
  {
    id: '13',
    value: '30b-40b',
    description: '30 tỷ - 40 tỷ',
  },
  {
    id: '14',
    value: '40b-60b',
    description: '40 tỷ - 60 tỷ',
  },
  {
    id: '15',
    value: '60b',
    description: '> 60 tỷ',
  },
  {
    id: '16',
    value: 'deal',
    description: 'Thoả thuận',
  },
];

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
    value: 'ban-tat-ca',
    description: 'Tất cả nhà đất',
  },
  {
    id: '2',
    value: 'ban-can-ho-chung-cu',
    description: 'Căn hộ chung cư',
  },
  {
    id: '3',
    value: 'ban-nha-rieng',
    description: 'Nhà riêng',
  },
  {
    id: '4',
    value: 'ban-nha-biet-thu-lien-ke',
    description: 'Nhà biệt thự, liền kề',
  },
  {
    id: '5',
    value: 'ban-nha-mat-pho',
    description: 'Nhà mặt phố',
  },
  {
    id: '6',
    value: 'ban-shophouse-nha-pho-thuong-mai',
    description: 'Shophouse, nhà phố thương mại',
  },
  {
    id: '7',
    value: 'ban-dat-nen-du-an',
    description: 'Đất nền dự án',
  },
  {
    id: '8',
    value: 'ban-dat',
    description: 'Đất',
  },
  {
    id: '9',
    value: 'ban-trang-trai-khu-nghi-duong',
    description: 'Trang trại khu nghỉ dưỡng',
  },
  {
    id: '10',
    value: 'ban-condotel',
    description: 'Condotel',
  },
  {
    id: '11',
    value: 'ban-nha-kho-xuong',
    description: 'Nhà kho, nhà xưởng',
  },
];

export const RENT_REAL_ESTATE_OPTION: OptionData[] = [
  {
    id: '1',
    value: 'thue-tat-ca',
    description: 'Tất cả nhà đất',
  },
  {
    id: '2',
    value: 'thue-can-ho-chung-cu',
    description: 'Căn hộ chung cư',
  },
  {
    id: '3',
    value: 'thue-nha-rieng',
    description: 'Nhà riêng',
  },
  {
    id: '4',
    value: 'thue-nha-mat-pho',
    description: 'Nhà mặt phố',
  },
  {
    id: '5',
    value: 'thue-shophouse-nha-pho-thuong-mai',
    description: 'Shophouse, nhà phố thương mại',
  },
  {
    id: '6',
    value: 'thue-nha-tro-phong-tro',
    description: 'Nhà trọ, phòng trọ',
  },
  {
    id: '7',
    value: 'thue-van-phong',
    description: 'Văn phòng',
  },
  {
    id: '8',
    value: 'thue-kho-xuong-nha-dat',
    description: 'Kho, xưởng, nhà đất',
  },
  {
    id: '9',
    value: 'thue-nha-kho-xuong',
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
    path: `/${SALE_REAL_ESTATE_OPTION[0]?.value}`,
    options: SALE_REAL_ESTATE_OPTION,
  },
  {
    name: 'Nhà đất cho thuê',
    path: `/${RENT_REAL_ESTATE_OPTION[0]?.value}`,
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
