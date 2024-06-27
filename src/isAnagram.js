/** Takes two strings and checks if they are anagrams of each other
 * @param {string} string1
 * @param {string} string2
 * @returns {boolean} true if strings are anagrams of each other
 */
export default function isAnagram(string1, string2) {
    let anagramCheck = true;
    const lowerCaseSorted1 = sortString(string1);
    const lowerCaseSorted2 = sortString(string2);
    if (isSameLength(string1, string2)) {
        for (let i = 0; i < string1.length; i++) {
            if (lowerCaseSorted1[i] === lowerCaseSorted2[i] && anagramCheck === true) {
                anagramCheck = true
            }
            else {
                return false;
            }
        }
    }
    if (isSameLength(string1, string2) && anagramCheck === true) {
        return true;
    }
    return false;
}

function isSameLength(string1, string2) {
    return string1.length === string2.length;
}

function sortString(string) {
    const stringAsArray = string.toLowerCase().split("");
    const sortedString = stringAsArray.sort();
    return sortedString
}