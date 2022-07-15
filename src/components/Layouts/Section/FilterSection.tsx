import React from 'react';
import { ConvertAddressType } from '@/utils/types';
import FilterRealEstate from '@/components/Elements/FilterRealEstate';
import { TYPE_TAB_OPTION } from '@/utils/constants';
import { useFilterHome } from '../hooks/useFilterHome';

type FilterSectionProps = {
  provinceList: ConvertAddressType[];
};

const FilterSection: React.FC<FilterSectionProps> = ({ provinceList }) => {
  const { handleChangeTab, handleFilterOption, handleSearchValue } =
    useFilterHome();

  console.log(provinceList);

  return (
    <div className="mx-auto w-[900px] pt-10">
      <FilterRealEstate
        provinceList={provinceList}
        option={TYPE_TAB_OPTION}
        onChange={handleChangeTab}
        onSearch={handleSearchValue}
        onFilter={handleFilterOption}
      />
    </div>
  );
};

export default FilterSection;
