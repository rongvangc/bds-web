/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    // domains: ['server.veradogroup.com'],
    // deviceSizes: [375, 640, 750, 1080, 1200],
    // formats: ['image/webp'],
    // minimumCacheTTL: 30
  },
  reactStrictMode: true,
  async rewrites() {
    const SALE_REAL_ESTATE_OPTION = [
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
    const RENT_REAL_ESTATE_OPTION = [
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
    const PJ_REAL_ESTATE_OPTION = [
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
    const mergeCategory = [
      ...RENT_REAL_ESTATE_OPTION,
      ...SALE_REAL_ESTATE_OPTION,
      ...PJ_REAL_ESTATE_OPTION,
    ];
    const customDestination = mergeCategory.map((option) => ({
      source: `/${option.value}`,
      destination: '/du-an',
    }));

    return customDestination;
  },
  env: {
    SERVER_URL: process.env.SERVER_PROD
  },
};

module.exports = nextConfig;
