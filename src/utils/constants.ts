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

export const imageMimeType = /image\/(png|jpg|jpeg)/i;

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
    description: 'Thỏa thuận',
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
    value: 'ban-tat-ca',
    description: 'Tất cả nhà đất',
  },
  {
    value: 'ban-can-ho-chung-cu',
    description: 'Căn hộ chung cư',
  },
  {
    value: 'ban-nha-rieng',
    description: 'Nhà riêng',
  },
  {
    value: 'ban-nha-biet-thu-lien-ke',
    description: 'Nhà biệt thự, liền kề',
  },
  {
    value: 'ban-nha-mat-pho',
    description: 'Nhà mặt phố',
  },
  {
    value: 'ban-shophouse-nha-pho-thuong-mai',
    description: 'Shophouse, nhà phố thương mại',
  },
  {
    value: 'ban-dat-nen-du-an',
    description: 'Đất nền dự án',
  },
  {
    value: 'ban-dat',
    description: 'Đất',
  },
  {
    value: 'ban-trang-trai-khu-nghi-duong',
    description: 'Trang trại khu nghỉ dưỡng',
  },
  {
    value: 'ban-condotel',
    description: 'Condotel',
  },
  {
    value: 'ban-nha-kho-xuong',
    description: 'Nhà kho, nhà xưởng',
  },
];

export const RENT_REAL_ESTATE_OPTION: OptionData[] = [
  {
    value: 'thue-tat-ca',
    description: 'Tất cả nhà đất',
  },
  {
    value: 'thue-can-ho-chung-cu',
    description: 'Căn hộ chung cư',
  },
  {
    value: 'thue-nha-rieng',
    description: 'Nhà riêng',
  },
  {
    value: 'thue-nha-mat-pho',
    description: 'Nhà mặt phố',
  },
  {
    value: 'thue-shophouse-nha-pho-thuong-mai',
    description: 'Shophouse, nhà phố thương mại',
  },
  {
    value: 'thue-nha-tro-phong-tro',
    description: 'Nhà trọ, phòng trọ',
  },
  {
    value: 'thue-van-phong',
    description: 'Văn phòng',
  },
  {
    value: 'thue-kho-xuong-nha-dat',
    description: 'Kho, xưởng, nhà đất',
  },
  {
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

export const POST_TYPE: OptionData[] = [
  {
    value: '1',
    description: 'Tin tức nổi bật',
  },
  {
    value: '2',
    description: 'Tin tức thị trường',
  },
  {
    value: '3',
    description: 'Phân tích - nhận định',
  },
  {
    value: '4',
    description: 'Thông tin quy hoạch',
  },
  {
    value: '5',
    description: 'Phong thuỷ',
  },
];
