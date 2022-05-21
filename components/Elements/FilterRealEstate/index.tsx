import React, { HTMLAttributes, useCallback, useState } from 'react';
import { isFunction } from '../../../utils/common';
import { DEFAULT_FILTER, REAL_ESTATE_OPTION } from '../../../utils/constants';
import {
  Colors,
  FilterKey,
  FilterRealEstateProps,
  OptionData,
} from '../../../utils/types';
import SelectElement from '../SelectElement';

const FilterRealEstate: React.FC<
  FilterRealEstateProps & Pick<HTMLAttributes<HTMLDivElement>, 'className'>
> = ({ option, className, onChange, onFilter }) => {
  const [currentTab, setCurrentTab] = useState<OptionData>(option[0]);
  const [filterOption, setFilterOption] =
    useState<Record<FilterKey, OptionData | null>>(DEFAULT_FILTER);

  const handleFilterOption = useCallback(
    (key: FilterKey) => (data: OptionData) => {
      setFilterOption({
        ...filterOption,
        [key]: data,
      });
      isFunction(onFilter) &&
        onFilter({
          ...filterOption,
          [key]: data,
        });
    },
    [filterOption, onFilter]
  );

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
            options={REAL_ESTATE_OPTION}
            size="md"
            onOptionChange={handleFilterOption('type')}
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
            options={REAL_ESTATE_OPTION}
            colorIcon={Colors.white}
            onOptionChange={handleFilterOption('province')}
          />
          <SelectElement
            inputClass="bg-transparent text-white"
            placeholder="Quận/Huyện"
            options={REAL_ESTATE_OPTION}
            colorIcon={Colors.white}
            onOptionChange={handleFilterOption('district')}
          />
          <SelectElement
            inputClass="bg-transparent text-white"
            placeholder="Phường/Xã"
            options={REAL_ESTATE_OPTION}
            colorIcon={Colors.white}
            onOptionChange={handleFilterOption('ward')}
          />
          <SelectElement
            inputClass="bg-transparent text-white"
            placeholder="Đường/Phố"
            options={REAL_ESTATE_OPTION}
            colorIcon={Colors.white}
            onOptionChange={handleFilterOption('street')}
          />
          <SelectElement
            inputClass="bg-transparent text-white"
            placeholder="Mức giá"
            options={REAL_ESTATE_OPTION}
            colorIcon={Colors.white}
            onOptionChange={handleFilterOption('price')}
          />
          <SelectElement
            inputClass="bg-transparent text-white"
            placeholder="Hướng"
            options={REAL_ESTATE_OPTION}
            colorIcon={Colors.white}
            onOptionChange={handleFilterOption('direction')}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterRealEstate;
