import { District } from '@/types/index';
import { streetService } from '../street';
import { wardService } from '../ward';

type JSONResponse<T> = {
  data?: T;
  susccess: boolean;
  errors?: Array<{ message: string }>;
};

const URL = `${process.env.SERVER_URL}/district/`;

async function getDistrictList(url: string): Promise<District[]> {
  const response = await fetch(`${URL}${url}`);

  const { data, errors }: JSONResponse<District[]> = await response.json();

  if (response.ok) {
    const districtList = data;
    if (districtList) {
      return districtList;
    } else {
      return Promise.reject(new Error(`No district list with ${url}`));
    }
  } else {
    // handle the errors
    const error = new Error(
      errors?.map((e) => e.message).join('\n') ?? 'unknown'
    );
    return Promise.reject(error);
  }
}

const getWardsAndStreetsByDistrictID = async (districtID: string) => {
  return await Promise.all([
    wardService.getWardList(districtID),
    streetService.getStreetList(districtID),
  ]);
};

const districtService = {
  getDistrictList,
  getWardsAndStreetsByDistrictID,
};

export { districtService };
