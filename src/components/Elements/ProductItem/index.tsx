import React from 'react';
import Image from 'next/image';
import Badge from '../../../components/Elements/Badge';
import IconList from '@/icons';
import { Colors } from '@/utils/types';
import LinkButton from '../LinkButton';

const imageUrl = '/demo/project.jpg';
const image1 = '/demo/project-2.jpg';
const image2 = '/demo/project-3.jpg';

type ProductItemType = {};

const ProductItem: React.FC<ProductItemType> = () => {
  return (
    <LinkButton
      className="mb-4 flex cursor-pointer overflow-hidden rounded-md shadow"
      href="/123"
    >
      <div className="relative !flex h-[248px] w-[240px] flex-col">
        <span className="product-image-gradient border-bottom-left-radius-[4px] absolute left-0 bottom-0 z-[1] h-[40px] w-full" />
        <span className="absolute bottom-4 right-6 z-10 flex font-semibold text-white">
          <IconList type="image" size="md" color={Colors.white} />6
        </span>
        <Image
          src={imageUrl || '/default-product-image.png'}
          width={240}
          height={180}
          className="object-cover"
          alt=""
        />
        <div className="mt-0.5 flex justify-between	gap-[2px]">
          <Image
            src={image1 || '/default-product-image.png'}
            width={119}
            height={66}
            className="object-cover"
            alt=""
          />
          <Image
            src={image2 || '/default-product-image.png'}
            width={119}
            height={66}
            className="object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="product-item-content ml-2 border-tertiary p-2">
        <div className="mb-2">
          <Badge text="Đã bán" />
        </div>

        <h3 className="text-md mb-2 font-semibold">
          Mega Royal City Đồng Xoài
        </h3>
        <p className="mb-1 flex items-center text-sm">
          <span className="font-semibold">10 triệu/m²</span>
          <span className="ml-4	font-semibold">6.64 ha</span>
          <span className="ml-4	font-semibold">525 m²</span>
        </p>
        <p className="mb-1 flex items-center text-sm font-semibold">
          <IconList type="location" />
          <span className="ml-1">
            Phường Bình Thuận, Quận Hải Châu, Đà Nẵng.
          </span>
        </p>
        <p className="mb-0 text-sm font-medium line-clamp-3">
          Landmark Tower Đã Nẵng là dự án căn hộ cao cấp có vị trí đắc địa bên
          bờ sông Hàn, TP. Đà Nẵng. Dự án do Công ty CP Cosmo Housing làm chủ
          đầu tư, quy mô gồm 2 tòa tháp cao 31 và 39 tầng với hơn 400 căn hộ cao
          cấp. Landmark Tower Đà Nẵng được kỳ vọng sẽ trở thành công trình biểu
          tượng của Đà Nẵng.
        </p>
      </div>
    </LinkButton>
  );
};

export default ProductItem;
