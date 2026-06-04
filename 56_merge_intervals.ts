/**
 * Solution explanation: 
 *  put first interval in result array
 * For each interval -- if start <= end of interval, merge by replacing end of result interval
 * if start > end of current interval, just push this interval to result array
 */

function merge(intervals: number[][]): number[][] {
    if (intervals.length < 1) return [];
    const result: number[][] = [];

    // sort the intervals
    intervals.sort((a, b) => a[0] - b[0]);
    result.push(intervals[0]);

    for (let i = 1; i < intervals.length; i++) {
        // value of end of last result interval
        const lastEnd = result[result.length - 1][1];
        const currentStart = intervals[i][0], currentEnd = intervals[i][1];
        if (currentStart <= lastEnd) {
            result[result.length - 1][1] = Math.max(currentEnd, lastEnd);
        } else {
            result.push(intervals[i]);
        }
    }
    return result;
};