import React from 'react';
import Image from 'next/image';
import { IconList } from '../../../icons';
import LinkButton from '../LinkButton';
import { ProductType } from '../../../utils/types';
import moment from 'moment';

type ProductCardType = {} & ProductType;

const ProductCard: React.FC<ProductCardType> = ({
  name,
  acreage,
  address,
  price,
  date,
  isHot,
  status,
  url = '/',
}) => {
  return (
    <LinkButton href={url}>
      <div className="rounded-lg pb-1 shadow">
        <div className="relative rounded-tr-lg rounded-tl-lg">
          {isHot && <div className="ribbon">Giá tốt</div>}
          <div className="relative overflow-hidden rounded-tr-lg rounded-tl-lg">
            <Image
              src="/default-product-image.png"
              width={300}
              height={200}
              layout="responsive"
              objectFit="cover"
              alt=""
            />
          </div>
        </div>
        <div className="rounded-br-lg rounded-bl-lg border-t-2 border-tertiary bg-white px-2 pt-1 pb-2">
          <h3 className="text-md truncate-2-line mb-2 h-[50px] !border-0 !bg-transparent !p-0 font-semibold">
            {name}
          </h3>
          <p className="mb-1 flex items-center text-sm">
            <IconList type="location" size="sm" />
            <span className="ml-1">{price}</span>
            <span className="ml-4">{acreage}</span>
          </p>
          <p className="mb-1 flex items-center text-sm">
            <IconList type="edit" size="sm" />
            <span className="ml-1">{address}</span>
          </p>
          <div className="flex items-center justify-between text-sm">
            <p className="flex items-center ">
              <IconList type="envelope" size="sm" />
              <span className="ml-1 text-xs">
                {moment(date).format('DD/MM/YYYY')}
              </span>
            </p>
            <p className="mb-0 rounded-md bg-tertiary px-2 py-1 text-white">
              {status}
            </p>
          </div>
        </div>
      </div>
    </LinkButton>
  );
};

export default ProductCard;
