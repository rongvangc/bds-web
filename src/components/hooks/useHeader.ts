import { useCallback } from 'react';
import { FilterKey, OptionData } from '../../utils/types';

export const useHeader = () => {
  const handleChangeTab = (value: OptionData) => {
    console.log(value);
  };

  const handleFilterOption = useCallback(
    (data: Record<FilterKey, OptionData | null>) => {
      console.log(data);
    },
    []
  );

  return {
    handleChangeTab,
    handleFilterOption,
  };
};
