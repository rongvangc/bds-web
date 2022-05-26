import { memo } from 'react';
import Button from '../Button';

interface BoxInforOwnerProps {}

const BoxInforOwner: React.FC<BoxInforOwnerProps> = ({}) => {
  return (
    <div className="box text-center">
      <span className="avatar">H</span>
      <span className="note mt-2">Được đăng bởi</span>
      <span className="sub-title-2">Hà Hùng</span>
      <span>Xem thêm 6 tin khác</span>

      <div className="group-button align-center mt-8 flex flex-col text-center">
        <Button
          variant="primary"
          size="md"
          className="rounded border-[#007c80] bg-[#007c80] p-6"
        >
          0123456789
        </Button>

        <Button
          variant="primary"
          size="md"
          className="mt-4 rounded border-[#007c80] bg-[#fff] p-6"
          colorText="text-black"
        >
          Gửi Email
        </Button>

        <Button
          variant="primary"
          size="md"
          className="mt-4 rounded border-[#007c80] bg-[#fff] p-6"
          colorText="text-black"
        >
          Yêu cầu liên hệ lại
        </Button>
      </div>
    </div>
  );
};

export default memo(BoxInforOwner);
