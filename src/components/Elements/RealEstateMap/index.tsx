import { memo } from 'react';

const RealEstateMap = () => {
  return (
    <div className="mt-8">
      <span className="sub-title-1">Xem trên bản đồ</span>
      <div className="mt-8 bg-red p-16"></div>
      <div className="from-sky-500 to-indigo-500 h-14 bg-gradient-to-r"></div>
    </div>
  );
};

export default memo(RealEstateMap);
