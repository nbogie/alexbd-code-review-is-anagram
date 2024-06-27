/** Takes an input string and returns an array containing each letter from the original string in lower case and in alphabetical order
 * @param {string} string
 * @returns {string[]} returns an array of strings
 */
export default function sortString(string) {
    const stringAsArray = string.toLowerCase().split("");
    const sortedString = stringAsArray.sort();
    return sortedString;
}