/** @flow */

/**
 * compose functions into one function from right to left
 * @name compose
 * @param {Array<function>} functions
 * @returns {function}
 * @example
 *
 */
export default function compose() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
};