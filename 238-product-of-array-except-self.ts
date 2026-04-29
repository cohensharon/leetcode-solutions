/**
 * Solution explanation: 
 * Run front -- multiply by product of all numbers before
 * run back -- multiply by product of all numbers after 
 */

function productExceptSelf(nums: number[]): number[] {
    const res = [];
    let product = 1;
    for (let i = 0; i < nums.length; i++) {
        res.push(product);
        product *= nums[i];
    }

    product = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= product;
        product *= nums[i];
    }

    return res;
};