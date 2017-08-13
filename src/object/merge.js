/**
 * Merges multiple objects into one
 * @name merge
 * @param {type} name
 * @returns {type}
 * @example
 * const o1 = { a: 1 };
 * const o2 = { b: 2 };
 * const o3 = { c: 3 };
 *
 * const obj = merge(o1, o2, o3);
 * console.log(obj); // { a: 1, b: 2, c: 3 }
 * console.log(o1);  // { a: 1 } does not mutate objects
 */
export default function merge(): Object {
  return Object.assign({}, ...arguments);
}