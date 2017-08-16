/**
 * Creates a new object by recursively evolving a shallow copy of `object`,
 * according to the `transformation` functions. All non-primitive properties
 * are copied by reference.
 *
 * A `transformation` function will not be invoked if its corresponding key
 * does not exist in the evolved object.
 *
 * @name evolve
 * @param {Object} transformations The object specifying transformation functions to apply
 *        to the object.
 * @param {Object} object The object to be transformed.
 * @return {Object} The transformed object.
 * @example
 *      var tomato  = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
 *      var transformations = {
 *        firstName: trim,
 *        lastName: trim, // Will not get invoked.
 *        data: {elapsed: add(1), remaining: add(-1)}
 *      };
 *      evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
 */
export default function evolve(transformations, object) {
    var result = {};
    var transformation, key, type;
    for (key in object) {
      transformation = transformations[key];
      type = typeof transformation;
      result[key] = type === 'function'                 ? transformation(object[key])
                  : transformation && type === 'object' ? evolve(transformation, object[key])
                                                        : object[key];
    }
    return result;
  }