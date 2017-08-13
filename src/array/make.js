import isNil from '../validation/isNil';

/**
 * Wraps a value with an array.
 * @name makeArray
 * @param {*} val
 * @returns {[*]}
 * @example
 *  makeArray(1) // => [1]
 *  makeArray([1]) // => [1]
 *  makeArray(null) // => []
 */
export default function makeArray(val: any): any[] {
  if (isNil(val)) return [];
  return Array.isArray(val) ? val : [val];
};