/**
 * Returns a Promise resolved with the values associated with the specified fields in the hash stored at key.
 * @name getData
 * @param {RedisClient} cache -
 * @param {string} key - hash stored at key
 * @param {(string | string[])} fields
 * @returns {Promise.<string[]>} list of values associated with the given fields, in the same order as they are requested.
 *
 */
export default (cache, key, fields) => new Promise((res,rej) =>
cache.hmget(key, fields, (err, reply) => err ? rej(err) : res(reply)));