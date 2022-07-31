import { faker } from '@faker-js/faker';

export type Post = {
  title: string;
  description: string;
  postType: 1 | 2 | 3 | 4;
  content: string;
  previewImage: string;
  images: string[];
  subRows?: Post[];
};

const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPost = (): Post => {
  return {
    title: faker.company.companyName(),
    description: faker.company.companyName(),
    postType: faker.helpers.shuffle<Post['postType']>([1, 2, 3, 4])[0]!,
    content: faker.company.companyName(),
    previewImage: faker.internet.avatar(),
    images: [
      faker.internet.avatar(),
      faker.internet.avatar(),
      faker.internet.avatar(),
    ],
  };
};

export const makeDataPost = (...lens: number[]) => {
  const makeDataLevel = (depth = 0): Post[] => {
    const len = lens[depth]!;
    return range(len).map((): Post => {
      return {
        ...newPost(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
};
