import { isAnagram } from "./isAnagram.js";

{
    const word1 = "ground";
    const word2 = "ndrogu";
    console.log({
        word1,
        word2,
        result: isAnagram(word1, word2),
    });
}
{
    const word1 = "potato";
    const word2 = "tomato";
    console.log({
        word1,
        word2,
        result: isAnagram(word1, word2),
    });
}
