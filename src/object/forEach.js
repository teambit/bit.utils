/** @flow */
export type CbFn = (val: any, key: string|number) => void;

/**
 * Invoke a function for every key within given object or array.
 * @name forEach
 * @param {object} obj object or array to iterate 
 * @param {function} cb callback function to invoke
 * @example 
 *  forEach({ a: 1, b: 2, c: 3 }, (val, key) => console.log(key, val));
 *  // => a 1 b 2 c 3
 */
export default function forEach(obj: {[string|number]: any}, cb: CbFn) {
  const keys = Object.keys(obj);
  keys.forEach(key => cb(obj[key], key));
};