import Image from 'next/image';
import React from 'react';
import Button from '../../Elements/Button';
import Heading from '../../Elements/Heading';

const WhySection: React.FC = () => {
  return (
    <>
      <div className="flex items-center">
        <Heading title="tại sao nên chọn" />
        <div className="mb-1 ml-3">
          <Image
            src="/logo-color.png"
            width={140}
            height={40}
            objectFit="contain"
            alt=""
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="flex flex-col justify-between rounded-3xl border border-primary p-8">
          <div>
            <h3 className="left-bar relative mb-8 text-4xl font-bold uppercase text-primary">
              Đội ngũ <br />
              nhân sự
            </h3>
            <p className="mt-auto text-primary">
              Trải qua chặng đường dài trưởng thành và phát triển, chính những
              con người VERADO đã làm nên những giá trị tốt đẹp, đóng góp vào
              thành công của công ty hôm nay.
            </p>
          </div>

          <div>
            <Button
              icon="arrow-right"
              iconDirection="right"
              variant="primary"
              size="sm"
            >
              Xem chi tiết
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-between rounded-3xl border border-primary p-8">
          <div>
            <h3 className="left-bar relative mb-8 text-4xl font-bold uppercase text-primary">
              Tầm nhìn, sứ mệnh và giá trị cốt lõi
            </h3>
            <p className="mb-24 text-primary">
              {`VERADO đặt cho mình sứ mệnh "Mang đến phồn vinh và cuộc sống thịnh vượng", với tầm nhìn vươn xa, không ngưng đổi mới, sáng tạo để kiến tạo hệ sinh thái các sản phẩm dịch vụ đẳng cấp, góp phần nâng cao chất lượng cuộc sống của người Việt.`}
            </p>
          </div>

          <div>
            <Button
              icon="arrow-right"
              iconDirection="right"
              variant="primary"
              size="sm"
            >
              Xem chi tiết
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-between rounded-3xl border border-primary p-8">
          <div>
            <h3 className="left-bar relative mb-8 text-4xl font-bold uppercase   text-primary">
              Đối với khách hàng
            </h3>
            <p className="mb-24 text-primary">
              Tạo nên những sản phẩm, dịch vụ chất lượng tối ưu, mang lại sự hài
              lòng cho khách hàng mức độ cao nhất.
            </p>
          </div>

          <div>
            <Button
              icon="arrow-right"
              iconDirection="right"
              variant="primary"
              size="sm"
            >
              Xem chi tiết
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhySection;
