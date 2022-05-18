import React from 'react';
import Image from 'next/image';
import { LocationIcon, HomeIcon, MenuIcon } from '../../../icons';
import Badge from '../../../components/Elements/Badge';

const imageUrl =
  'https://file4.batdongsan.com.vn/crop/240x180/2022/05/11/20220511152802-1ac9.jpg';
const image1 =
  'https://file4.batdongsan.com.vn/2022/05/11/20220511134202-e179.jpg';
const image2 =
  'https://file4.batdongsan.com.vn/2022/05/11/20220511133755-f476.jpg';

type ProductItemType = {};

const ProductItem: React.FC<ProductItemType> = () => {
  return (
    <a
      className="mb-4 flex cursor-pointer overflow-hidden rounded-md shadow"
      href="./du-an"
    >
      <div className="relative !flex h-[248px] w-[240px] flex-col">
        <span className="product-image-gradient border-bottom-left-radius-[4px] absolute left-0 bottom-0 z-[1] h-[40px] w-full" />
        <span className="absolute bottom-4 right-6 z-10 flex font-semibold text-white">
          <MenuIcon color="white" />6
        </span>
        <Image
          src={imageUrl || '/default-product-image.png'}
          width={240}
          height={180}
          className="object-cover"
          alt=""
        />
        <div className="mt-0.5 flex justify-between	">
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
      <div className="product-item-content border-tertiary p-2">
        <div className="mb-2">
          <Badge text="Đã bán" />
        </div>

        <h3 className="text-md mb-2 font-semibold">
          Mega Royal City Đồng Xoài
        </h3>
        <p className="mb-1 flex items-center text-sm">
          <span className="font-semibold">10 triệu/m²</span>
          <span className="ml-4	font-semibold">6.64 ha</span>
          <span className="ml-4	font-semibold">525</span>
          <HomeIcon width={14} height={14} />
        </p>
        <p className="mb-1 flex items-center text-sm">
          <LocationIcon width={14} height={14} />
          <span className="ml-1">
            Phường Bình Thuận, Quận Hải Châu, Đà Nẵng.
          </span>
        </p>
        <p className="truncate-2-line mb-0 text-sm font-medium">
          Landmark Tower Đã Nẵng là dự án căn hộ cao cấp có vị trí đắc địa bên
          bờ sông Hàn, TP. Đà Nẵng. Dự án do Công ty CP Cosmo Housing làm chủ
          đầu tư, quy mô gồm 2 tòa tháp cao 31 và 39 tầng với hơn 400 căn hộ cao
          cấp. Landmark Tower Đà Nẵng được kỳ vọng sẽ trở thành công trình biểu
          tượng của Đà Nẵng.
        </p>
      </div>
    </a>
  );
};

export default ProductItem;
