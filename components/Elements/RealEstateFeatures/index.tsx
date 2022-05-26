import { memo } from 'react';

interface RealEstateFeaturesProps {}

const RealEstateFeatures: React.FC<RealEstateFeaturesProps> = ({}) => {
  return (
    <div className="mt-6 grid grid-cols-2 gap-6">
      <div className="col-span-1">
        <div className="flex flex-col divide-y divide-y">
          <div></div>
          <div className="grid grid-cols-2 gap-6 py-4">
            <span className="sub-title-2">Diện tích</span>
            <div>4625 m²</div>
          </div>
          <div className="grid grid-cols-2 gap-6 py-4">
            <span className="sub-title-2">Đường vào</span>
            <span>5m</span>
          </div>
          <div></div>
        </div>
      </div>

      <div className="col-span-1">
        <div className="flex flex-col divide-y divide-y">
          <div></div>
          <div className="grid grid-cols-2 gap-6 py-4">
            <span className="sub-title-2">Mức giá</span>
            <span>Thỏa thuận</span>
          </div>
          <div className="grid grid-cols-2 gap-6 py-4">
            <span className="sub-title-2">Pháp lý</span>
            <span>Sổ đỏ/ Sổ hồng</span>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default memo(RealEstateFeatures);
