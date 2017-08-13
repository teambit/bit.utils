/** @flow */

/**
 * Returns the first element of an array.
 * @name first
 * @param {[]} array
 * @returns {*|null} first element of given array
 * @example
 *   first([1, 2, 3]) // => 1
 *   first(['a', 'b', 'c']) // => 'a'
 */
export default function first(array: any[]): ?any {
  if (array && array[0]) return array[0];
  return null;
};