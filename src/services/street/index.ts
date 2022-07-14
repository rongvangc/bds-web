import { Street } from '@/types/index';

type JSONResponse<T> = {
  data?: T;
  susccess: boolean;
  errors?: Array<{ message: string }>;
};

const URL = `${process.env.SERVER_URL}/street/`;

async function getStreetList(url: string): Promise<Street[]> {
  const response = await fetch(`${URL}${url}`);

  const { data, errors }: JSONResponse<Street[]> = await response.json();

  if (response.ok) {
    const streetList = data;
    if (streetList) {
      return streetList;
    } else {
      return Promise.reject(new Error(`No street list with ${url}`));
    }
  } else {
    // handle the errors
    const error = new Error(
      errors?.map((e) => e.message).join('\n') ?? 'unknown'
    );
    return Promise.reject(error);
  }
}

const streetService = {
  getStreetList,
};

export { streetService };
