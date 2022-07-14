//#region import
import React, { HTMLAttributes, useCallback, useEffect, useState } from 'react';
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

import useSWR from 'swr';

import { districtService, wardService, streetService } from '@services/index';

//#endregion

const FilterRealEstate: React.FC<
  FilterRealEstateProps & Pick<HTMLAttributes<HTMLDivElement>, 'className'>
> = ({ provinceList, option, className, onChange, onFilter }) => {
  const [currentTab, setCurrentTab] = useState<OptionData>(option[0]!);
  const [hasFilter, setHasFilter] = useState<boolean>(false);
  const [clear, setClear] = useState<boolean>(false);
  const [filterOption, setFilterOption] =
    useState<Record<FilterKey, OptionData | null>>(DEFAULT_FILTER);

  const [normalizedistrictList, setNormalizeDistrictList] =
    useState<OptionData[]>();

  const [normalizeWardList, setNormalizeWardList] = useState<OptionData[]>();

  const [normalizeStreetList, setNormalizeStreetList] =
    useState<OptionData[]>();

  const { data: districtList } = useSWR(
    filterOption.province ? [`${filterOption.province.id}`] : null,
    (url) => districtService.getDistrictList(url)
  );

  const { data: wardList } = useSWR(
    filterOption.district ? [`${filterOption.district.id}`] : null,
    (url) => wardService.getWardList(url)
  );

  const { data: streetList } = useSWR(
    filterOption.district ? [`/${filterOption.district.id}`] : null,
    (url) => streetService.getStreetList(url)
  );

  useEffect(() => {
    if (!districtList) return;

    const nDistrictList = districtList.reduce((arr, curr) => {
      const { _id, name, ...rest } = curr;

      arr.push({
        id: _id,
        value: _id,
        description: name,
        ...rest,
      });
      return arr;
    }, [] as OptionData[]);

    setNormalizeDistrictList(nDistrictList);
  }, [districtList]);

  useEffect(() => {
    if (!wardList) return;

    const nWardList = wardList.reduce((arr, curr) => {
      const { _id, name, ...rest } = curr;

      arr.push({
        id: _id,
        value: _id,
        description: name,
        ...rest,
      });
      return arr;
    }, [] as OptionData[]);

    setNormalizeWardList(nWardList);
  }, [wardList]);

  useEffect(() => {
    if (!streetList) return;

    const nStreetList = streetList.reduce((arr, curr) => {
      const { _id, name, ...rest } = curr;

      arr.push({
        id: _id,
        value: _id,
        description: name,
        ...rest,
      });
      return arr;
    }, [] as OptionData[]);

    setNormalizeStreetList(nStreetList);
  }, [streetList]);

  const nProvinceList = provinceList.reduce((arr, curr) => {
    const { _id, name, ...rest } = curr;

    arr.push({
      id: _id,
      value: _id,
      description: name,
      ...rest,
    });

    return arr;
  }, [] as OptionData[]);

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

  const handleReset = useCallback(() => {
    setFilterOption(DEFAULT_FILTER);
    setHasFilter(false);
    setClear(true);
  }, []);

  const handleSwitchTab = useCallback(
    (value: OptionData) => {
      setCurrentTab(value);
      onChange && onChange(value);
    },
    [onChange]
  );

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
            placeholder="Tìm kiếm địa điểm khu vực"
            className="flex-1 rounded-tr-md rounded-br-md border border-l-0 px-4 py-2.5 outline-none"
          />
        </div>
        <div className="mx-auto grid max-w-[600px] grid-cols-3 gap-2 pt-4">
          <SelectElement
            inputClass="bg-transparent text-white"
            placeholder="Tỉnh/Thành"
            options={nProvinceList}
            colorIcon={Colors.white}
            onOptionChange={handleFilterOption('province')}
            isClear={clear}
          />
          <SelectElement
            inputClass="bg-transparent text-white"
            placeholder="Quận/Huyện"
            options={normalizedistrictList!}
            colorIcon={Colors.white}
            onOptionChange={handleFilterOption('district')}
            isClear={clear}
          />
          <SelectElement
            inputClass="bg-transparent text-white"
            placeholder="Phường/Xã"
            options={normalizeWardList!}
            colorIcon={Colors.white}
            onOptionChange={handleFilterOption('ward')}
            isClear={clear}
          />
          <SelectElement
            inputClass="bg-transparent text-white"
            placeholder="Đường/Phố"
            options={normalizeStreetList!}
            colorIcon={Colors.white}
            onOptionChange={handleFilterOption('street')}
            isClear={clear}
          />
          <SelectElement
            inputClass="bg-transparent text-white"
            placeholder="Mức giá"
            options={PRICE_RANGE}
            colorIcon={Colors.white}
            onOptionChange={handleFilterOption('price')}
            isClear={clear}
          />
          <SelectElement
            inputClass="bg-transparent text-white"
            placeholder="Hướng"
            options={DIRECTION}
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
