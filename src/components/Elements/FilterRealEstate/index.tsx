//#region import
import React, { FormEvent, HTMLAttributes, useCallback, useState } from 'react';
import IconList from '@/icons';
import {
  DEFAULT_FILTER,
  SALE_REAL_ESTATE_OPTION,
  PRICE_RANGE,
  DIRECTION,
} from '@/utils/constants';
import {
  FilterRealEstateProps,
  OptionData,
  FilterKey,
  Colors,
} from '@/utils/types';
import { isFunction } from 'formik';
import SelectElement from '../SelectElement';
import { convertDataAddress } from '@/utils/common';
import Button from '../Button';

const FilterRealEstate: React.FC<
  FilterRealEstateProps & Pick<HTMLAttributes<HTMLDivElement>, 'className'>
> = ({
  provinces,
  districts,
  streets,
  wards,
  option,
  className,
  onChange,
  onFilter,
  onSearch,
}) => {
  const [currentTab, setCurrentTab] = useState<OptionData>(option[0]!);
  const [hasFilter, setHasFilter] = useState<boolean>(false);
  const [clear, setClear] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const [filterOption, setFilterOption] =
    useState<Record<FilterKey, OptionData | null>>(DEFAULT_FILTER);

  const handleFilterOption = useCallback(
    (key: FilterKey) => (data: OptionData) => {
      setHasFilter(true);
      setClear(false);
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

  const handleSwitchTab = useCallback(
    (value: OptionData) => {
      setCurrentTab(value);
      onChange && onChange(value);
    },
    [onChange]
  );

  const handleSearchValue = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      setSearchValue(e.currentTarget.value);
      onSearch && onSearch(value);
    },
    [onSearch]
  );

  const handleReset = useCallback(() => {
    setFilterOption(DEFAULT_FILTER);
    setHasFilter(false);
    setClear(true);
  }, []);

  return (
    <div className={`${className || ''}`}>
      <div className="-mb-[1px] text-center">
        {option?.map((tab) => (
          <a
            onClick={() => handleSwitchTab(tab)}
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
      <div className="relative rounded-lg bg-primary p-4">
        <div className="flex items-center align-middle">
          <SelectElement
            className="w-[250px]"
            inputClass="rounded-tr-none rounded-br-none"
            placeholder="Tìm kiếm"
            options={SALE_REAL_ESTATE_OPTION}
            size="md"
            onOptionChange={handleFilterOption('type')}
            isClear={clear}
          />
          <input
            type="text"
            value={searchValue}
            placeholder="Tìm kiếm địa điểm khu vực"
            className="flex-1 rounded-tr-md rounded-br-md border border-l-0 px-4 py-2.5 outline-none"
            onChange={handleSearchValue}
          />
          <div className="absolute right-8">
            <Button
              variant="primary"
              size="sm"
              className="border-secondary bg-secondary shadow-md"
            >
              Tìm kiếm
            </Button>
          </div>
        </div>
        <div className="mx-auto grid max-w-[600px] grid-cols-3 gap-2 pt-4">
          <SelectElement
            inputClass="bg-transparent text-white"
            placeholder="Tỉnh/Thành"
            options={convertDataAddress(provinces)}
            acceptKey={['description', 'value']}
            colorIcon={Colors.white}
            onOptionChange={handleFilterOption('province')}
            isClear={clear}
          />
          <SelectElement
            inputClass="bg-transparent text-white"
            placeholder="Quận/Huyện"
            options={convertDataAddress(districts)}
            acceptKey={['description', 'value']}
            colorIcon={Colors.white}
            onOptionChange={handleFilterOption('district')}
            isClear={clear}
          />
          <SelectElement
            inputClass="bg-transparent text-white"
            placeholder="Phường/Xã"
            options={convertDataAddress(wards)}
            acceptKey={['description', 'value']}
            colorIcon={Colors.white}
            onOptionChange={handleFilterOption('ward')}
            isClear={clear}
          />
          <SelectElement
            inputClass="bg-transparent text-white"
            placeholder="Đường/Phố"
            options={convertDataAddress(streets)}
            acceptKey={['description', 'value']}
            colorIcon={Colors.white}
            onOptionChange={handleFilterOption('street')}
            isClear={clear}
          />
          <SelectElement
            inputClass="bg-transparent text-white"
            placeholder="Mức giá"
            options={PRICE_RANGE}
            acceptKey={['description', 'value']}
            colorIcon={Colors.white}
            onOptionChange={handleFilterOption('price')}
            isClear={clear}
          />
          <SelectElement
            inputClass="bg-transparent text-white"
            placeholder="Hướng"
            options={DIRECTION}
            acceptKey={['description', 'value']}
            colorIcon={Colors.white}
            onOptionChange={handleFilterOption('direction')}
            isClear={clear}
          />
        </div>
        {hasFilter && (
          <a
            className="absolute bottom-2 right-2 z-0 cursor-pointer rounded-md border border-white bg-white"
            onClick={handleReset}
          >
            <IconList type="refresh" size="md" color={Colors.primary} />
          </a>
        )}
      </div>
    </div>
  );
};

export default FilterRealEstate;
