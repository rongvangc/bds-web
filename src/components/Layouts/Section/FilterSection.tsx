import React from 'react';
import FilterRealEstate from '@/components/Elements/FilterRealEstate';
import { TYPE_TAB_OPTION } from '@/utils/constants';
import { useCommonStore } from '@/stores';
import { useFilterHome } from '../hooks/useFilterHome';

type FilterSectionProps = {};

const FilterSection: React.FC<FilterSectionProps> = () => {
  const { onChangeSearchValue, onChangeFilterOption, onChangeTabValue } =
    useCommonStore();

  const { provinces, districts, streets, wards } = useFilterHome();

  return (
    <div className="mx-auto w-[900px] pt-10">
      <FilterRealEstate
        provinces={provinces}
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
