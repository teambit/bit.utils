/**
 * Returns the results of applying the iteratee to each element of the object.
 * @name map
 * @param {object} object
 * @param {function(val, key)} iteratee
 * @returns {object}
 * @example
 * const newObj = mapObject({ start: 5, end: 12 }, function(val, key) {
 *   return val + 5;
 * });
 * console.log(newObj) //  { start: 10, end: 17 }
 */
export default function(obj, iteratee) {
    var keys = Object.keys(obj),
        length = keys.length,
        results = {};
    for (var index = 0; index < length; index++) {
      var currentKey = keys[index];
      results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
    }
  
    return results;
  };