/** @flow */

/**
 * determines whether `val` reference is null or undefined.
 * @name isNil
 * @param {*} val
 * @returns {boolean}
 * @example
 *  isNil(null) // => true
 *  isNil('') // => true
 */
export default function isNil(val: any): boolean {
   return val === null || val === undefined;
};