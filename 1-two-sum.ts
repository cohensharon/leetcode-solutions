/**
 * Solution explanation: 
 * Map to hold value -> index of seen number, for every number check if
 * w ehave key that sums to target
 */

function twoSum(nums: number[], target: number): number[] {
    // map of number -> index
    const m = new Map<number, number>();

    for(let i = 0; i < nums.length; i++) {
        const subtract = target - nums[i];
        if (m.has(subtract)) {
            return [m.get(subtract), i];
        }

        m.set(nums[i], i);
    }
};