import { memo } from 'react';
import SliderFreemode from '../SliderFreemode';
import ProductCard from '../ProductCard';
import { ProductType } from 'utils/types';

const mockProduct: ProductType[] = [
  {
    id: '1',
    name: 'Bán biệt thự nghĩ dưỡng ơ quận 2',
    price: '4.2 tỷ',
    acreage: 200,
    address: 'Thủ Đức, Sài Gòn',
    date: new Date(),
    url: '/123',
    status: 'Chưa bán',
  },
  {
    id: '2',
    name: 'Bán biệt West Lake Goft ra giỏ hàng đẹp',
    price: 'Thỏa thuận',
    acreage: 200,
    address: 'Long An',
    date: new Date(),
    url: '/123',
    status: 'Đã bán',
    isHot: true,
  },
  {
    id: '3',
    name: 'Biệt thự song song độc lập, có hồ bơi riêng',
    price: '6.2 tỷ',
    acreage: 200,
    address: 'Thủ Đức, Sài Gòn',
    date: new Date(),
    url: '/123',
    status: 'Chưa bán',
  },
  {
    id: '4',
    name: 'Bán biệt thự nghĩ dưỡng ơ quận 3',
    price: '4.2 tỷ',
    acreage: 200,
    address: 'Thủ Đức, Sài Gòn',
    date: new Date(),
    url: '/123',
    status: 'Đã bán',
  },
];

const RealEstateRecommend = () => {
  return (
    <div className="mt-8">
      <span className="sub-title-1">Bất động sản dành cho bạn</span>

      <div className="mt-4">
        <SliderFreemode
          children={mockProduct.map((item: any) => (
            <ProductCard key={item.id} {...item} />
          ))}
        />
      </div>
    </div>
  );
};

export default memo(RealEstateRecommend);
