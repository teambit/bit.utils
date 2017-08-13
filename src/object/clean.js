/** @flow */
import forEach from './forEach';

/**
 * Cleans all object's properties that contains a falsy value 
 * and returns a new object without them.
 * @name clean
 * @param {object} obj object to clean
 * @returns {object}
 * @example new cleaned object
 *  clean({ foo: null, bar: 'foo' }) // => { bar: 'foo' }
 */
export default function clean(obj: {[any]: any}): {[any]: any} {
  const newObj = {};

  forEach(obj, (val, key) => {
    if (!val) return;
    newObj[key] = val;
  });

  return newObj;
};