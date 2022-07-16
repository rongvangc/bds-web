import React from 'react';
import { ConvertAddressType } from '@/utils/types';
import FilterRealEstate from '@/components/Elements/FilterRealEstate';
import { TYPE_TAB_OPTION } from '@/utils/constants';
import { useCommonStore } from '@/stores';
import { useFilterHome } from '../hooks/useFilterHome';

type FilterSectionProps = {
  provinceList: ConvertAddressType[];
};

const FilterSection: React.FC<FilterSectionProps> = ({ provinceList }) => {
  const { onChangeSearchValue, onChangeFilterOption, onChangeTabValue } =
    useCommonStore();

  const { districts, streets, wards } = useFilterHome();

  return (
    <div className="mx-auto w-[900px] pt-10">
      <FilterRealEstate
        provinces={provinceList}
        districts={districts}
        wards={wards}
        streets={streets}
        option={TYPE_TAB_OPTION}
        onChange={onChangeTabValue}
        onSearch={onChangeSearchValue}
        onFilter={onChangeFilterOption}
      />
    </div>
  );
};

export default FilterSection;
