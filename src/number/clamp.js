/**
 * Returns a number whose value is limited to the given range.
 *
 * @bit
 * @name clamp
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 * @example
 *  clamp(50, 5, 10) // => 5
 */
export default function clamp(value, min, max) {
    if (value < min) {
      return min;
    }
    if (value > max) {
      return max;
    }
    return value;
  }