import { Province } from '@/types/index';

type JSONResponse<T> = {
  data?: T;
  susccess: boolean;
  errors?: Array<{ message: string }>;
};

const URL = `${process.env.SERVER_URL}/province/`;

async function getProvinceList(): Promise<Province[]> {
  const response = await fetch(`${URL}`);

  const { data, errors }: JSONResponse<Province[]> = await response.json();

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
