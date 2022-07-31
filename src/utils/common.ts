import { FormEvent } from 'react';
import { ConvertAddressType, OptionData } from './types';

/**
 * @private
 *
 * Strips all diacritics from a string.
 * May not be supported by all legacy browsers (IE11 >=).
 */
const stripDiacritics = (val: string): string => {
  return val.normalize('NFD').replace(/\p{Diacritic}/gu, '');
};

export const isBoolean = (val: unknown): val is Boolean =>
  typeof val === 'boolean';
export const isFunction = (val: unknown): val is Function =>
  typeof val === 'function';
export const isArrayWithLength = (val: unknown): boolean =>
  Array.isArray(val) && !!val.length;
export const isPlainObject = (val: unknown): boolean =>
  val !== null && typeof val === 'object' && !Array.isArray(val);

/**
 * Call preventDefault() and stopPropagation() on event.
 */
export const suppressEvent = (e: FormEvent) => {
  e.preventDefault();
  e.stopPropagation();
};

export const stringVietnameseToSlug = (str: string) => {
  var from =
      'àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ',
    to =
      'aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy';
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(RegExp(from[i]!, 'gi'), to[i]!);
  }

  str = str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\-]/g, '-')
    .replace(/-+/g, '-');

  return str;
};

/**
 * Apply regex to string, and if the value is NOT case sensitive,
 * call .toLowerCase() and return result.
 */
export const trimAndFormatFilterStr = (
  value: string,
  filterIgnoreCase: boolean,
  filterIgnoreAccents: boolean
): string => {
  let trimVal = stringVietnameseToSlug(value.trim());

  if (filterIgnoreCase) {
    trimVal = trimVal.toLowerCase();
  }

  return filterIgnoreAccents ? stripDiacritics(trimVal) : trimVal;
};

export const convertDataAddress = (
  dataConvert?: ConvertAddressType[]
): OptionData[] => {
  if (!dataConvert) {
    return [];
  } else {
    const data = dataConvert.reduce((arr, curr) => {
      const { _id, name, ...rest } = curr;

      arr.push({
        id: _id,
        value: _id,
        description: name,
        ...rest,
      });

      return arr;
    }, [] as OptionData[]);

    return data;
  }
};
