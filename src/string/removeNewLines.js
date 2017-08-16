/** @flow */

/**
 * remove all new lines from a string (do not mutate the string but return new instance)
 * @name removeNewLines
 * @param {string} str
 * @returns {string}
 */
export default function removeNewLines(str: string) {
    return str.replace(/(\n)/gm, '');
  };