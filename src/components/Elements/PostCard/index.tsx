import React, { MouseEvent } from 'react';
import Image from 'next/image';
import { IconList } from '../../../icons';
import LinkButton from '../LinkButton';
import moment from 'moment';
import { Colors } from '../../../utils/types';

type PostCardType = {
  title: string;
  thumbnail?: string;
  url?: string;
  date?: Date;
  isTextOnly?: boolean;
  onMouseEnter?: (e: MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (e: MouseEvent<HTMLDivElement>) => void;
};

const PostCard: React.FC<PostCardType> = ({
  title,
  thumbnail,
  date,
  url = '/',
  isTextOnly = false,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <LinkButton href={url}>
      {!isTextOnly ? (
        <div
          className="relative pb-4"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="overflow-hidden rounded-lg shadow">
            <Image
              src={thumbnail || '/default-product-image.png'}
              width={400}
              height={250}
              layout="responsive"
              objectFit="fill"
              alt=""
            />
          </div>
          <h3 className="my-2 min-h-[60px] rounded-none !border-0 !bg-transparent text-xl font-bold">
            {title}
          </h3>
          <div className="flex items-center">
            <IconList type="edit" size="sm" color={Colors.black} />
            <p className="ml-2 text-black/70">
              {moment(date).format('[ngày] DD-MM')}
            </p>
          </div>
        </div>
      ) : (
        <div className="border-b border-gray">
          <h3
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="truncate-2-line my-2 !flex !h-[40px] items-center rounded-none !border-0 !bg-transparent"
          >
            {title}
          </h3>
        </div>
      )}
    </LinkButton>
  );
};

export default PostCard;
