/**
 * Solution explanation: 
 * Map of key, to [timestamp, value]
 * get does binary search for timestamp, and return the corresponding value
 */

class TimeMap {
    private values: Map<string, [number, string][]>
    constructor() {
        this.values = new Map<string, [number, string][]>();
    }

    set(key: string, value: string, timestamp: number): void {
        const list = this.values.get(key);
        if (list) {
            list.push([timestamp, value]);
        } else {
            this.values.set(key, [[timestamp, value]])
        }
    }

    get(key: string, timestamp: number): string {
        const list = this.values.get(key);
        if (!list) return "";

        let left = 0;
        let right = list.length - 1;
        let result = "";

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const [time, value] = list[mid];

            if (time <= timestamp) {
                result = value;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
