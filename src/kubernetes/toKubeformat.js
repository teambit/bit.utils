/**
 * Convert bit id to acceptable kubernetes job name
 * @param {String} bitId
 * @returns String
 * 
 */
export default function toKubeformat(bitId) {
    return `${bitId}`.replace(new RegExp('/', 'g'), '.').replace('@', '.');
};