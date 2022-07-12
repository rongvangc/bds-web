import { Ward } from '@/types/index';

type JSONResponse<T> = {
  data?: T;
  susccess: boolean;
  errors?: Array<{ message: string }>;
};

const URL = `${process.env.SERVER_PROD}/api/v1/ward`;

async function getWardList(url: string): Promise<Ward[]> {
  const response = await fetch(`${URL}/${url}`);

  const { data, errors }: JSONResponse<Ward[]> = await response.json();

  if (response.ok) {
    const wardList = data;
    if (wardList) {
      return wardList;
    } else {
      return Promise.reject(new Error(`No ward list with ${url}`));
    }
  } else {
    // handle the errors
    const error = new Error(
      errors?.map((e) => e.message).join('\n') ?? 'unknown'
    );
    return Promise.reject(error);
  }
}

const wardService = {
  getWardList,
};

export { wardService };
