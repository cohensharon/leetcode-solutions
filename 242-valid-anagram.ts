/**
 * Solution explanation:
 * create map of s, loop through t and remove from map,
 * then check if map is empty
 */

function isAnagram(s: string, t: string): boolean {
    const charMap = new Map<string, number>();

    for (const char of s) {
        const val = charMap.get(char) || 0;
        charMap.set(char, val + 1);
    }

    for (const char of t) {
        const val = charMap.get(char);
        if (val === undefined) return false;

        if (val === 1) {
            charMap.delete(char);
        } else {
            charMap.set(char, val - 1);
        }
    }
    return charMap.size === 0;
};