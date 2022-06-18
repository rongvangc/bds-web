import type { NextPage } from 'next';
import Layout from '../../components/Layouts';
import Section from '../../components/Layouts/Section';
import {
  Input,
  SelectElement,
  FilterTabButton,
} from '../../components/Elements';

const data = [
  {
    id: '1',
    value: 'tat-ca',
    description: 'Tất cả nhà đất',
  },
  {
    id: '2',
    value: 'can-ho-chung-cu',
    description: 'Căn hộ chung cư',
  },
];

const tabData = [
  {
    value: 1,
    text: 'Bán',
  },
  {
    value: 2,
    text: 'Cho thuê',
  },
];

const CreateProduct: NextPage = () => {
  return (
    <Layout>
      <Section>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
            <p className="text-2xl font-semibold">Thông tin cơ bản</p>
            <p className="mb-4">
              Thông tin có dấu <span className="text-red">{'(*)'} </span>là bắt
              buộc, không đăng lại tin đã đăng trên www.batdongsan.com.vn.
            </p>
            <form className="">
              <div className={`mb-8 grid grid-cols-2 rounded border`}>
                {tabData.map((tab) => (
                  <FilterTabButton
                    onClick={() => {}}
                    key={tab.value}
                    value={tab.value}
                    text={tab.text}
                  />
                ))}
              </div>
              <p className="mb-2 font-semibold">Loại bất động sản *</p>
              <SelectElement
                className="mb-4 w-full"
                inputClass="rounded"
                placeholder="VD: Nhà riêng"
                options={data}
                size="sm"
                onOptionChange={() => {}}
              />
              <div className={`mb-4 grid grid-cols-2 gap-4`}>
                <div>
                  <p className="mb-2 font-semibold">Tỉnh, thành phố *</p>
                  <SelectElement
                    className="w-full"
                    inputClass="rounded"
                    placeholder="VD: Nhà riêng"
                    options={data}
                    size="sm"
                    onOptionChange={() => {}}
                  />
                </div>
                <div>
                  <p className="mb-2 font-semibold">Quận, huyện *</p>
                  <SelectElement
                    className="w-full"
                    inputClass="rounded"
                    placeholder="VD: Nhà riêng"
                    options={data}
                    size="sm"
                    onOptionChange={() => {}}
                  />
                </div>
              </div>
              <div className={`grid grid-cols-2 gap-4`}>
                <div>
                  <p className="mb-2 font-semibold">Phường, xã *</p>
                  <SelectElement
                    className="w-full"
                    inputClass="rounded"
                    placeholder="VD: Nhà riêng"
                    options={data}
                    size="sm"
                    onOptionChange={() => {}}
                  />
                </div>
                <div>
                  <p className="mb-2 font-semibold">Địa chỉ *</p>
                  <Input
                    id="address"
                    placeholder="Nhập địa chỉ cụ thể"
                    classNameContainer="mt-2"
                    // errorMessage="Vui lòng nhập địa chỉ."
                  />
                </div>
              </div>
              <p className="mb-2 font-semibold">Dự án *</p>
              <SelectElement
                className="w-full"
                inputClass="rounded"
                placeholder="VD: Nhà riêng"
                options={data}
                size="sm"
                onOptionChange={() => {}}
              />
            </form>
          </div>
          <div className="col-span-1"></div>
        </div>
      </Section>
    </Layout>
  );
};

export default CreateProduct;
