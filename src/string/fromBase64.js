/** @flow */

/**
 * decode a string from base64
 * @name fromBase64
 * @param {string} base64
 * @returns {string}
 * @example
 *
 */
export default function fromBase64(base64: string): string {
    return new Buffer(base64, 'base64').toString();
  };