/**
 * equation for water volume is xend - xstart * the min height yend and ystart
 * start with outermost start and end, and move smaller height x inward
 */

function maxArea(height: number[]): number {
    let maxWater = 0;
    let start = 0;
    let end = height.length - 1;
    if (height.length < 2) return 0;

    while (start < end) {
        const water = (end - start) * Math.min(height[start], height[end]);
        maxWater = Math.max(water, maxWater);
        if (height[start] > height[end]) {
            end--;
        } else {
            start++;
        }
    }

    return maxWater;
};