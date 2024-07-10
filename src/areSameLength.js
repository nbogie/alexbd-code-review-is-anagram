/** Takes two strings (or arrays) and checks if they are the same length
 * @param {string|any[]} stringOrArray1
 * @param {string|any[]} stringOrArray2
 * @returns {boolean} true if inputs are same length
 */
export function areSameLength(stringOrArray1, stringOrArray2) {
    return stringOrArray1.length === stringOrArray2.length;
}
