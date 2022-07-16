import { memo } from 'react';

interface KeyWordsProps {}

const KeyWords: React.FC<KeyWordsProps> = ({}) => {
  return (
    <div className="mt-8">
      <span className="sub-title-1">Tìm kiếm theo từ khóa</span>

      <div className="mt-4 flex">
        <span className="tag flex-none">Bán đất xã Cư Yên</span>
        <span className="tag flex-none">Bán đất xã Cư Yên Lương Sơn</span>
      </div>
    </div>
  );
};

export default memo(KeyWords);
