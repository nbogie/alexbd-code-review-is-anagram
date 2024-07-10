import { areSameLength } from "./areSameLength";

/**
 *
 * @param {string[]} arr1
 * @param {string[]} arr2
 * @returns {boolean}
 */
export function areStringArraysIdentical(arr1, arr2) {
    if (!areSameLength(arr1, arr2)) {
        return false;
    }

    for (let index = 0; index < arr1.length; index++) {
        const charA = arr1[index];
        const charB = arr2[index];

        if (charA !== charB) {
            return false;
        }
    }

    return true;
}
