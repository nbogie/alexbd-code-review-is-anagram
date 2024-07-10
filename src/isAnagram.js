import { areSameLength } from "./areSameLength.js";
import { sortString } from "./sortString.js";

/** Takes two strings and checks if they are anagrams of each other
 * @param {string} string1
 * @param {string} string2
 * @returns {boolean} true if strings are anagrams of each other
 */
export function isAnagram(string1, string2) {
    let continueAnagramCheck = true;
    const lowerCaseSorted1 = sortString(string1);
    const lowerCaseSorted2 = sortString(string2);

    if (areSameLength(string1, string2)) {
        for (let i = 0; i < string1.length; i++) {
            if (
                lowerCaseSorted1[i] === lowerCaseSorted2[i] &&
                continueAnagramCheck === true
            ) {
                continueAnagramCheck = true;
            } else {
                return false;
            }
        }
    }
    if (areSameLength(string1, string2) && continueAnagramCheck === true) {
        return true;
    }
    return false;
}
