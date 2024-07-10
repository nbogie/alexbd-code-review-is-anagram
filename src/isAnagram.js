import { sortAndLowerCaseString } from "./sortAndLowerCaseString.js";

/** Takes two strings and checks if they are anagrams of each other
 * @param {string} string1
 * @param {string} string2
 * @returns {boolean} true if strings are anagrams of each other
 */
export function isAnagram(string1, string2) {
    const lowerCaseSorted1 = sortAndLowerCaseString(string1);
    const lowerCaseSorted2 = sortAndLowerCaseString(string2);
    return lowerCaseSorted1 === lowerCaseSorted2;
}
