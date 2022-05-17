import { FormEvent } from 'react';
import { OptionLabelCallback, OptionValueCallback } from './types';

const DIACRITICS_REG_EXP = /[\u0300-\u036f]/g;

/**
 * @private
 *
 * Strips all diacritics from a string.
 * May not be supported by all legacy browsers (IE11 >=).
 */
const stripDiacritics = (val: string): string => {
  return val.normalize('NFD').replace(DIACRITICS_REG_EXP, '');
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

/**
 * Apply regex to string, and if the value is NOT case sensitive,
 * call .toLowerCase() and return result.
 */
export const trimAndFormatFilterStr = (
  value: string,
  filterIgnoreCase: boolean,
  filterIgnoreAccents: boolean
): string => {
  let trimVal = value.trim();
  if (filterIgnoreCase) {
    trimVal = trimVal.toLowerCase();
  }

  return !filterIgnoreAccents ? trimVal : stripDiacritics(trimVal);
};

/**
 * Parses an object or an array of objects into output of SelectedOption[].
 */
export const normalizeValue = (
  value: any,
  getOptionValue: OptionValueCallback,
  getOptionLabel: OptionLabelCallback
): any[] => {
  const initValues = Array.isArray(value)
    ? value
    : isPlainObject(value)
    ? [value]
    : [];

  if (!isArrayWithLength(initValues)) {
    return initValues;
  }

  return initValues.map((data: any) => ({
    data,
    value: getOptionValue(data),
    label: getOptionLabel(data),
  }));
};
