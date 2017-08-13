/** @flow */

/**
 * cleans the first occurence of `char` from `str` reference.
 * @name cleanChar
 * @param {string} str string to perform cleaning on.
 * @param {string} char character to clean from string
 * @returns {string} cleaned string.
 * @example
 *  cleanChar('hello', 'h') // => 'ello'
 */
export default function cleanChar(str: string, char: string): string {
    return str.replace(char, '');
  };