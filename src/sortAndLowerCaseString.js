/** Takes an input string and returns an array containing each letter
 * from the original string in lower case and in alphabetical order
 * @param {string} inputString
 * @returns {string} new string, based on sorted content of inputString
 */
export function sortAndLowerCaseString(inputString) {
    const stringAsArray = inputString.toLowerCase().split("");
    const sortedStrings = stringAsArray.sort();
    return sortedStrings.join("");
}
