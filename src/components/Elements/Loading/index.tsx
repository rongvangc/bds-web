import React from 'react';
import Image from 'next/image';

interface LoadingProps {
  loading?: boolean;
  showLogo?: boolean;
  isFull?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ loading, showLogo, isFull }) => {
  return loading ? (
    <div
      className={`${
        isFull
          ? 'fixed z-50 flex h-full w-full flex-col items-center justify-center bg-gray/50'
          : ''
      }`}
    >
      <div className={`loader inline-block`}></div>
      {showLogo && (
        <div className="mt-1">
          <Image
            src="/logo-color.png"
            width={140}
            height={40}
            objectFit="contain"
            alt=""
          />
        </div>
      )}
    </div>
  ) : null;
};

export default Loading;
