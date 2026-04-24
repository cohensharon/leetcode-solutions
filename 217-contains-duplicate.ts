/**
 * Solution explanation: 
 * Add nums to set 
 */

function containsDuplicate(nums: number[]): boolean {
    const numSet: Set<number> = new Set();

    for (const n of nums) {
        if (numSet.has(n)) {
            return true;
        } else {
            numSet.add(n);
        }
    }

    return false;
};
