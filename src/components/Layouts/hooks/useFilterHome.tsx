import { useCallback, useState } from 'react';
import { FilterKey, OptionData } from '@/utils/types';

export const useFilterHome = () => {
  const [normalizeDistrictList, setNormalizeDistrictList] =
    useState<OptionData[]>();
  const [normalizeWardList, setNormalizeWardList] = useState<OptionData[]>();
  const [normalizeStreetList, setNormalizeStreetList] =
    useState<OptionData[]>();

  // const { data: districtList } = useSWR(
  //   filterOption.province
  //     ? ['getDistrictByProvinceID', `${filterOption.province.id}`]
  //     : null,
  //   (...url) => districtService.getDistrictList(url[1])
  // );

  // const { data: wardList } = useSWR(
  //   filterOption.district && [
  //     'getWardListByDistrictID',
  //     `${filterOption.district.id}`,
  //   ],
  //   (...url) => wardService.getWardList(url[1])
  // );

  // const { data: streetList } = useSWR(
  //   filterOption.district && [
  //     'getStreetListByDistrictID',
  //     `/${filterOption.district.id}`,
  //   ],
  //   (...url) => streetService.getStreetList(url[1])
  // );

  // useEffect(() => {
  //   if (!districtList) return;

  //   const nDistrictList = districtList.reduce((arr, curr) => {
  //     const { _id, name, ...rest } = curr;

  //     arr.push({
  //       id: _id,
  //       value: name,
  //       description: name,
  //       ...rest,
  //     });
  //     return arr;
  //   }, [] as OptionData[]);

  //   setNormalizeDistrictList(nDistrictList);
  // }, [districtList]);

  // useEffect(() => {
  //   if (!wardList) return;

  //   const nWardList = wardList.reduce((arr, curr) => {
  //     const { _id, name, ...rest } = curr;

  //     arr.push({
  //       id: _id,
  //       value: name,
  //       description: name,
  //       ...rest,
  //     });
  //     return arr;
  //   }, [] as OptionData[]);

  //   setNormalizeWardList(nWardList);
  // }, [wardList]);

  // useEffect(() => {
  //   if (!streetList) return;

  //   const nStreetList = streetList.reduce((arr, curr) => {
  //     const { _id, name, ...rest } = curr;

  //     arr.push({
  //       id: _id,
  //       value: name,
  //       description: name,
  //       ...rest,
  //     });
  //     return arr;
  //   }, [] as OptionData[]);

  //   setNormalizeStreetList(nStreetList);
  // }, [streetList]);

  // const normalizeProvinceList = provinceList.reduce((arr, curr) => {
  //   const { _id, name, ...rest } = curr;

  //   arr.push({
  //     id: _id,
  //     value: _id,
  //     description: name,
  //     ...rest,
  //   });

  //   return arr;
  // }, [] as OptionData[]);

  const handleChangeTab = useCallback((value: OptionData) => {
    console.log(value);
  }, []);

  const handleSearchValue = useCallback((value: string) => {
    console.log(value);
  }, []);

  const handleFilterOption = useCallback(
    (data: Record<FilterKey, OptionData | null>) => {
      console.log(data);
    },
    []
  );

  return {
    handleChangeTab,
    handleSearchValue,
    handleFilterOption,
  };
};
