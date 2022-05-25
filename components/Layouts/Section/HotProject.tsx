import React from 'react';
import { ProductType } from '../../../utils/types';
import Button from '../../Elements/Button';
import Heading from '../../Elements/Heading';
import ProductCard from '../../Elements/ProductCard';

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

const HotProject: React.FC = () => {
  return (
    <div>
      <Heading title="Dự án nổi bật" />

      <div className="grid grid-cols-4 gap-4">
        {mockProduct.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>

      <div className="flex items-center justify-center pt-6">
        <Button size="md" icon="caret-down" variant="outline">
          Xem thêm
        </Button>
      </div>
    </div>
  );
};

export default HotProject;
