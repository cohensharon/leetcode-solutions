/**
 * Solution explanation: 
 * Boolean array of size 1000000  
 */

class MyHashSet {
    private data: boolean[];
    constructor() {
        this.data = new Array(1_000_001).fill(false);
    }

    add(key: number): void {
        this.data[key] = true;
    }

    remove(key: number): void {
        this.data[key] = false;
    }

    contains(key: number): boolean {
        return this.data[key];
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */