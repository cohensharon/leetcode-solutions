/**
 * Solution explanation: 
 * Map of value to key in array, 
 * use array to get random index in o(1)
 * When remove, swap and remove end of array so it's o(1)
 */

class RandomizedSet {
    nums: number[]; // 
    indices: Map<number, number>; // map of value to index in array 
    constructor() {
        this.nums = [];
        this.indices = new Map<number, number>();
    }

    insert(val: number): boolean {
        const num = this.indices.get(val);

        if (num === undefined) {
            this.nums.push(val);
            this.indices.set(val, this.nums.length - 1); 
            return true;
        }
        return false;  
    }

    remove(val: number): boolean {
        // removes from set if present
        // true if item was present, false if not
        const index = this.indices.get(val);
        if (index === undefined) {
            return false 
        }

        this.nums[index] =  this.nums[this.nums.length - 1];
        this.nums.pop();
        this.indices.set(this.nums[index], index);
        this.indices.delete(val);
        return true;
    }

    getRandom(): number {
        // returns random element from the set 
        const index = Math.floor(Math.random() *this.nums.length);
        return this.nums[index];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */