import React, { HTMLAttributes, useCallback, useState } from 'react';
import { OPTION_FILTER } from '../../../utils/constants';
import {
  Colors,
  FilterRealEstateProps,
  OptionData,
} from '../../../utils/types';
import SelectElement from '../SelectElement';

const FilterRealEstate: React.FC<
  FilterRealEstateProps & Pick<HTMLAttributes<HTMLDivElement>, 'className'>
> = ({ option, className, onChange }) => {
  const [currentTab, setCurrentTab] = useState<OptionData>(option[0] || null);

  const handleSwichTab = useCallback(
    (value: OptionData) => {
      setCurrentTab(value);
      onChange && onChange(value);
    },
    [onChange]
  );

  return (
    <div className={`${className}`}>
      <div className="text-center">
        {option?.map((tab) => (
          <a
            onClick={() => handleSwichTab(tab)}
            key={tab.value}
            className={`mr-2 inline-block cursor-pointer rounded-t-md border-[1.5px] py-2 px-4 pb-1 font-bold shadow-md ${
              tab.value === currentTab?.value
                ? ' border-primary bg-primary text-white'
                : 'border-primary bg-white text-primary'
            }`}
          >
            <span>{tab.description}</span>
          </a>
        ))}
      </div>
      <div className="rounded-lg bg-primary p-4 ">
        <div className="flex items-center align-middle">
          <SelectElement
            className="w-[250px]"
            inputClass="rounded-tr-none rounded-br-none"
            placeholder="Tìm kiếm"
            options={OPTION_FILTER}
            size="md"
          />
          <input
            type="text"
            placeholder="Tìm kiếm địa điểm khu vực"
            className="flex-1 rounded-tr-md rounded-br-md border border-l-0 px-4 py-2.5 outline-none"
          />
        </div>
        <div className="mx-auto grid max-w-[600px] grid-cols-3 gap-2 pt-4">
          <SelectElement
            inputClass="bg-transparent text-white"
            placeholder="Tỉnh/Thành"
            options={OPTION_FILTER}
            colorIcon={Colors.white}
          />
          <SelectElement
            inputClass="bg-transparent text-white"
            placeholder="Quận/Huyện"
            options={OPTION_FILTER}
            colorIcon={Colors.white}
          />
          <SelectElement
            inputClass="bg-transparent text-white"
            placeholder="Phường/Xã"
            options={OPTION_FILTER}
            colorIcon={Colors.white}
          />
          <SelectElement
            inputClass="bg-transparent text-white"
            placeholder="Đường/Phố"
            options={OPTION_FILTER}
            colorIcon={Colors.white}
          />
          <SelectElement
            inputClass="bg-transparent text-white"
            placeholder="Mức giá"
            options={OPTION_FILTER}
            colorIcon={Colors.white}
          />
          <SelectElement
            inputClass="bg-transparent text-white"
            placeholder="Hướng"
            options={OPTION_FILTER}
            colorIcon={Colors.white}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterRealEstate;
