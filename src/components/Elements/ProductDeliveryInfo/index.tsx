import { memo } from 'react';

interface ProductDeliveryInfoProps {}

const ProductDeliveryInfo: React.FC<ProductDeliveryInfoProps> = ({}) => {
  return (
    <div className="mt-8">
      <div className="border-slate-200 mt-4 border-y py-4">
        <div className="flex gap-8">
          <div>
            <span className="note">Ngày đăng</span>
            <span className="sub-title-1">18/05/2022</span>
          </div>
          <div>
            <span className="note">Ngày hết hạn</span>
            <span className="sub-title-1">25/05/2022</span>
          </div>
          <div>
            <span className="note">Loại tin</span>
            <span className="sub-title-1">Tin thường</span>
          </div>
          <div>
            <span className="note">Mã tin</span>
            <span className="sub-title-1">33690254</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductDeliveryInfo);
