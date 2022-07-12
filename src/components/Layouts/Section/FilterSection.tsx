import React, { useCallback } from 'react';
import { TYPE_TAB_OPTION } from '../../../utils/constants';
import { FilterKey, OptionData } from '../../../utils/types';
import FilterRealEstate from '../../Elements/FilterRealEstate';

import { Province } from '@/types';

type FilterSectionProps = {
  provinceList: Province[];
};

const FilterSection = (props: FilterSectionProps) => {
  const handleChangeTab = (value: OptionData) => {
    console.log(value);
  };

  const handleFilterOption = useCallback(
    (data: Record<FilterKey, OptionData | null>) => {
      console.log(data);
    },
    []
  );

  return (
    <div className="mx-auto w-[900px] pt-10">
      <FilterRealEstate
        {...props}
        option={TYPE_TAB_OPTION}
        onChange={handleChangeTab}
        onFilter={handleFilterOption}
      />
    </div>
  );
};

export default FilterSection;
