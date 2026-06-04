
/**
 * 1d DP but only need to keep track of next1 and next2
 */

function rob(nums: number[]): number {
    let next1: number = 0;
    let next2: number = 0;

    for (let i = nums.length - 1; i >= 0; i--) {
        const robHouse = nums[i] + next2;
        const skipHouse = next1;

        const curr = Math.max(robHouse, skipHouse);

        next2 = next1;

        next1 = curr;
    }
    return next1;    
};