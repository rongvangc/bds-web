import React from 'react';
import Image from 'next/image';
import { LocationIcon, HomeIcon } from '../../../icons';

const imageUrl =
  'https://file4.batdongsan.com.vn/crop/118x84/2022/05/18/JGcIp0rf/20220518101955-f9cb.jpg';

type ProductPostItemType = {};

const ProductPostItem: React.FC<ProductPostItemType> = () => {
  return (
    <a
      className="mb-4 flex cursor-pointer overflow-hidden border-b border-gray py-[16px] last:border-0"
      href="./du-an"
    >
      <div className="relative !flex h-[90px] w-[120px] flex-col overflow-hidden rounded-md">
        <Image
          src={imageUrl || '/default-product-image.png'}
          width={120}
          height={90}
          className="object-cover"
          alt=""
        />
      </div>
      <div className="post-item-content relative ml-2 border-tertiary">
        <p className="mb-2 text-sm font-semibold line-clamp-3">
          Ra mắt câu lạc bộ đầu tư bất động sản Alpha Land
        </p>
        <span className="left- absolute bottom-0 text-xs">Hôm nay</span>
      </div>
    </a>
  );
};

export default ProductPostItem;
