/**
 * Encode with lsit of word sizes, #, then all strings together
 * Decode by reconstructing sizes array, then loop through all words
 */

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if (strs.length === 0) return '';

        let sizes = [];
        let res = '';

        for (let s of strs) {
            sizes.push(s.length);
        }

        for (let sz of sizes) {
            res += sz + ',';
        }

        res += "#";
        for (let s of strs) {
            res += s;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (str.length === 0) return [];

        let sizes = [],
            res = [],
            i = 0;

        while (str[i] !== "#") {
            let cur = '';
            // get length of next word
            while (str[i] !== ',') {
                cur += str[i];
                i++;
            }
            sizes.push(parseInt(cur));
            i++;
        }
        i++; // skip #

        for (let sz of sizes) {
            res.push(str.slice(i, sz + i));
            i += sz;
        }
        return res;
    }
}
