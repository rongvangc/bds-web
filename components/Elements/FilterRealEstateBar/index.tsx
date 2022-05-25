import React, { HTMLAttributes, useCallback, useState } from 'react';
import IconList from '../../../icons';
import { isFunction } from '../../../utils/common';
import { DEFAULT_FILTER, REAL_ESTATE_OPTION } from '../../../utils/constants';
import {
  Colors,
  FilterKey,
  FilterRealEstateProps,
  OptionData,
} from '../../../utils/types';
import Button from '../Button';
import SelectElement from '../SelectElement';

const FilterRealEstateBar: React.FC<
  FilterRealEstateProps & Pick<HTMLAttributes<HTMLDivElement>, 'className'>
> = ({ option, className, onChange, onFilter }) => {
  const [currentTab, setCurrentTab] = useState<OptionData>(option[0]);
  const [hasFilter, setHasFilter] = useState<boolean>(false);
  const [clear, setClear] = useState<boolean>(false);
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

  const handleReset = useCallback(() => {
    setFilterOption(DEFAULT_FILTER);
    setHasFilter(false);
    setClear(true);
  }, []);

  const handleSwichTab = useCallback(
    (value: OptionData) => {
      setCurrentTab(value);
      onChange && onChange(value);
    },
    [onChange]
  );

  return (
    <div className={`flex w-auto items-center py-2 text-sm ${className}`}>
      <div className="mx-2 flex overflow-hidden rounded border border-primary text-center">
        {option?.map((tab) => (
          <a
            onClick={() => handleSwichTab(tab)}
            key={tab.value}
            className={`inline-block w-20 py-1 text-sm ${
              tab.value === currentTab?.value
                ? ' border-primary bg-primary text-white'
                : 'border-primary bg-white text-primary'
            }`}
          >
            <span>{tab.description}</span>
          </a>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Tìm kiếm địa điểm khu vực"
          className="outline-bg-none mr-2 w-48 rounded border px-2 py-1"
        />
      </div>
      <div className="mr-2 h-8 w-[1px] bg-gray" />
      <SelectElement
        inputClass="rounded"
        className="mr-2 w-44"
        placeholder="Tỉnh/Thành"
        options={REAL_ESTATE_OPTION}
        onOptionChange={handleFilterOption('province')}
        isClear={clear}
        size="xs"
      />
      <SelectElement
        inputClass="rounded"
        className="mr-2 w-32"
        placeholder="Quận/Huyện"
        options={REAL_ESTATE_OPTION}
        onOptionChange={handleFilterOption('district')}
        isClear={clear}
        size="xs"
      />
      <SelectElement
        inputClass="rounded"
        className="mr-2 w-32"
        placeholder="Phường/Xã"
        options={REAL_ESTATE_OPTION}
        onOptionChange={handleFilterOption('ward')}
        isClear={clear}
        size="xs"
      />
      <SelectElement
        inputClass="rounded"
        className="mr-2 w-32"
        placeholder="Đường/Phố"
        options={REAL_ESTATE_OPTION}
        onOptionChange={handleFilterOption('street')}
        isClear={clear}
        size="xs"
      />
      <SelectElement
        inputClass="rounded"
        className="mr-2 w-32"
        placeholder="Mức giá"
        options={REAL_ESTATE_OPTION}
        onOptionChange={handleFilterOption('price')}
        isClear={clear}
        size="xs"
      />
      <SelectElement
        inputClass="rounded"
        className="mr-2 w-32"
        placeholder="Hướng"
        options={REAL_ESTATE_OPTION}
        onOptionChange={handleFilterOption('direction')}
        isClear={clear}
        size="xs"
      />
      {!hasFilter && (
        <a className="mr-2 cursor-pointer rounded" onClick={handleReset}>
          <IconList type="refresh" size="md" color={Colors.primary} />
        </a>
      )}
      <div className="mr-2 h-8 w-[1px] bg-gray" />
      <Button
        icon="search"
        variant="primary"
        size="sm"
        className="rounded border-secondary bg-secondary"
      >
        Tìm kiếm
      </Button>
    </div>
  );
};

export default FilterRealEstateBar;
