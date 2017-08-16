/** @flow */
import compose from './compose';
/**
 * compose functions from left to right
 * @name pipe
 * @param {Array<function>} functions
 * @returns {function}
 * @example
 *  pipe(func1, func2, func3)(val) === func3(func2(func3(val)))
 */
module.exports = function pipe() {
  return compose(arguments.reverse());
};