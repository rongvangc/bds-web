import { useCommonStore } from '@/stores';
import { districtService, streetService, wardService } from '@/services';
import useSWR from 'swr';

export const useFilterHome = () => {
  const { filterOption } = useCommonStore();

  const { data: districts } = useSWR(
    filterOption.province && [
      'getDistrictByProvinceID',
      `${filterOption.province.id}`,
    ],
    (...url) => districtService.getDistrictList(url[1])
  );

  const { data: wards } = useSWR(
    filterOption.district && [
      'getWardListByDistrictID',
      `${filterOption.district.id}`,
    ],
    (...url) => wardService.getWardList(url[1])
  );

  const { data: streets } = useSWR(
    filterOption.district && [
      'getStreetListByDistrictID',
      `/${filterOption.district.id}`,
    ],
    (...url) => streetService.getStreetList(url[1])
  );

  return {
    districts,
    wards,
    streets,
  };
};
