import React from 'react';
import { FILTER_OPTION } from '../../../utils/constants';
import { OptionData } from '../../../utils/types';
import FilterRealEstate from '../../Elements/FilterRealEstate';

const FilterSection = () => {
  const handleChangeTab = (value: OptionData) => {
    console.log(value);
  };

  return (
    <div className="mx-auto w-[900px] pt-10">
      <FilterRealEstate option={FILTER_OPTION} onChange={handleChangeTab} />
    </div>
  );
};

export default FilterSection;
