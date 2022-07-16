import { ConvertAddressType } from '@/utils/types';

type JSONResponse<T> = {
  data?: T;
  success: boolean;
  errors?: Array<{ message: string }>;
};

const URL = `${process.env.SERVER_URL}/province/`;

async function getProvinceList(): Promise<ConvertAddressType[]> {
  const response = await fetch(`${URL}`);

  const { data, errors }: JSONResponse<ConvertAddressType[]> =
    await response.json();

  if (response.ok) {
    const provinceList = data;
    if (provinceList) {
      return provinceList;
    } else {
      return Promise.reject(new Error('No province list'));
    }
  } else {
    // handle the errors
    const error = new Error(
      errors?.map((e) => e.message).join('\n') ?? 'unknown'
    );
    return Promise.reject(error);
  }
}

const provinceService = {
  getProvinceList,
};

export { provinceService };
