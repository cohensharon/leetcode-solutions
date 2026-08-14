/**
 * dynamic programming -- build array 
 *  this step is always i - 1 + i - 2
 */

function climbStairs(n: number): number {
    const steps: number[] = [];
    steps[0] = 0;
    steps[1] = 1;
    steps[2] = 2;

    for (let i = 3; i <= n; i++) {
        steps.push(steps[i-1] + steps[i-2]);
    }
    return steps[n];
};