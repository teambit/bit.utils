/**
 * Returns a Promise resolved with the values associated with the specified fields in the hash stored at key.
 * @name setData
 * @param {RedisClient} cache -
 * @param {string} key - hash stored at key
 * @param {(string | string[])} fields
 * @returns {Promise.<string[]>} list of values associated with the given fields, in the same order as they are requested.
 *
 */
export default (cache, key, ...fieldValueArray ) => new Promise((res,rej) =>
cache.hmset(key, fieldValueArray, (err, reply) => err ? rej(err) : res(reply)));