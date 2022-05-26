import { memo } from 'react';

interface DetailContentProps {}

const DetailContent: React.FC<DetailContentProps> = ({}) => {
  return (
    <>
      <div className="mt-4">
        <h2 className="text-4xl font-medium leading-tight">
          Bán khuôn viên sẵn nhà sàn gỗ chắc chắn đất đẹp giá đẹp, thuộc Lương
          Sơn Hòa Bình
        </h2>
      </div>

      <div className="border-slate-200 mt-4 border-y py-4">
        <div className="flex gap-4">
          <div>
            <span className="note">Mức giá</span>
            <span className="sub-title-1">Thỏa thuận</span>
          </div>
          <div>
            <span className="note">Diện tích</span>
            <span className="sub-title-1">4625 m²</span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <span className="sub-title-1">Thông in mô tả</span>
        <div className="mt-4">
          - Lô đất có tổng DT 4625m2 có 400m2 đất ở, nằm giữa thủ phủ nghỉ
          <br />
          dưỡng của Lương Sơn, Hoà Bình. <br />
          - Trên đất có sẵn nhà sàn gỗ chắc chắn, có nhà xây nhỏ xinh.
          <br />- Khuôn viên được phủ xanh với nhiều loại cây xanh và cây ăn
          quả. <br />
          - Có hòn non bộ và bể bơi, ranh giới pháp lý rõ ràng. <br />
          - Thế đất thoải nhẹ được chủ nhân bày trí thiết kế rất hài hoà mang
          lại không gian xanh và phong thuỷ vô cùng ấm cúng và bình an. <br />
          - Cách HN chỉ 35km, TT Lương Sơn 3km, đường to thông thoáng.
          <br />
          - Đ/c: Cư Yên - Lương Sơn <br />
          - Hoà Bình. - Liên hệ để được tư vấn gặp chủ nhà vui tính và nhận về
          ngay lô đất đẹp này. <br />
          <div>Hotline: 0969622791</div>
        </div>
      </div>
    </>
  );
};

export default memo(DetailContent);
