//@ts-check
import { areStringArraysIdentical } from "./areStringArraysIdentical";
import { sortString } from "./sortString";

/** Takes two strings and checks if they are anagrams of each other
 * @param {string} string1
 * @param {string} string2
 * @returns {boolean} true if strings are anagrams of each other
 */
export default function isAnagram(string1, string2) {
    const lowerCaseSorted1 = sortString(string1);
    const lowerCaseSorted2 = sortString(string2);

    return areStringArraysIdentical(lowerCaseSorted1, lowerCaseSorted2);
}
