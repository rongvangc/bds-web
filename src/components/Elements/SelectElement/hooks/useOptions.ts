import { isArrayWithLength, trimAndFormatFilterStr } from '@/utils/common';
import { OptionData } from '@/utils/types';
import { useEffect, useState } from 'react';

const useOptions = (
  options: OptionData[],
  debouncedInputValue: string,
  filterIgnoreCase: boolean,
  filterIgnoreAccents: boolean,
  selectedOption?: OptionData,
  acceptKey?: string[]
) => {
  const [menuOptions, setMenuOptions] = useState<OptionData[]>(options);

  const searchValue = debouncedInputValue;

  useEffect(() => {
    const normalizedSearch = trimAndFormatFilterStr(
      searchValue,
      filterIgnoreCase,
      filterIgnoreAccents
    );

    const normalizeOption = (option: string) =>
      trimAndFormatFilterStr(option, filterIgnoreCase, filterIgnoreAccents);

    const filterOptionByKey = options?.filter((option) =>
      Object.keys(option).some((key) =>
        acceptKey?.includes(key)
          ? normalizeOption(option[key])?.includes(normalizedSearch)
          : false
      )
    );

    const filterOption = options?.filter((option) =>
      option.value.includes(normalizedSearch)
    );

    setMenuOptions(
      isArrayWithLength(acceptKey) ? filterOptionByKey : filterOption
    );
  }, [
    acceptKey,
    filterIgnoreAccents,
    filterIgnoreCase,
    options,
    searchValue,
    selectedOption,
  ]);

  return {
    menuOptions,
  };
};

export default useOptions;
