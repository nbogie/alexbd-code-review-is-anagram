import isAnagram from "./isAnagram";

test("lower case strings which are anagrams", () => {
    expect(isAnagram("hello", "llohe")).toBe(true);
    expect(isAnagram("kjllo", "llojk")).toBe(true);
    expect(isAnagram("table", "elbta")).toBe(true);
    expect(isAnagram("house", "soehu")).toBe(true);
    expect(isAnagram("ground", "ndrogu")).toBe(true);
})

test("two lower case strings which are NOT anagrams", () => {
    expect(isAnagram("kllh", "hhjs")).toBe(false);
    expect(isAnagram("jkuh", "ooss")).toBe(false);
})

test("two strings which are anagrams and have different letter cases", () => {
    expect(isAnagram("AbdA", "adba")).toBe(true);
    expect(isAnagram("KpOo", "koop")).toBe(true);
})