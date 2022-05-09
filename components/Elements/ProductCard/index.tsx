import React from 'react';
import Image from 'next/image';
import { LocationIcon } from '../../../icons';

type ProductCardType = {};

const ProductCard: React.FC<ProductCardType> = () => {
  return (
    <div className="rounded-md shadow">
      <Image
        src="/default-product-image.png"
        width={300}
        height={200}
        objectFit="cover"
      />
      <div className="border-t-2 border-tertiary px-2 pt-1 pb-2">
        <h3 className="text-md mb-2 font-semibold">Tên sản phẩm</h3>
        <p className="mb-1 flex items-center text-sm">
          <LocationIcon width={14} height={14} />
          <span className="ml-1">1 tỷ500</span>
          <span className="ml-4">200m2</span>
        </p>
        <p className="mb-1 flex items-center text-sm">
          <LocationIcon width={14} height={14} />
          <span className="ml-1">Lê Hồng Phong, Bmt</span>
        </p>
        <div className="flex items-center justify-between text-xs">
          <p className="mb-0">20/06/2022</p>
          <p className="mb-0 rounded-md bg-tertiary px-2 py-1 text-white">
            Đã bán
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
