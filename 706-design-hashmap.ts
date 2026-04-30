/**
 * Solution explanation: 
 * Instead of boolean array, number array where -1 signifies value is not in the map
 * So index in array is key, value is value 
 * 
 */

class MyHashMap {
private data: number[];
constructor() {
    this.data = new Array(1_000_001).fill(-1);
}

put(key: number, value: number): void {
    this.data[key] = value;
}

get(key: number): number {
    return this.data[key]; // will be -1 if no value was added
}

remove(key: number): void {
    this.data[key] = -1;
}
}

/**
* Your MyHashMap object will be instantiated and called as such:
* var obj = new MyHashMap()
* obj.put(key,value)
* var param_2 = obj.get(key)
* obj.remove(key)
*/