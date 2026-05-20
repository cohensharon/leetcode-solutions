/**
 * Solution explanation: 
 * Use array of set size 0, keep track of front and back indexes, and use
 * % to get location of index with wrap around 
 */

class MyCircularQueue {
    nums: number[];
    front: number;
    back: number;
    size: number;
    k: number;

    constructor(k: number) {
        this.nums = new Array(k).fill(-1);
        this.front = -1;
        this.back = -1;
        this.size = 0;
        this.k = k;
    }

    enQueue(value: number): boolean {
        if (this.isFull()) return false;

        if (this.isEmpty()) {
            this.front = 0;
            this.back = 0;
        } else {
            this.back = (this.back + 1) % this.k;
        }
        this.nums[this.back] = value;
        this.size++;
        return true;
    }

    deQueue(): boolean {
        if(this.isEmpty()) return false;

        if (this.size === 1) {
            this.front = -1;
            this.back = -1;
        } else {
            this.front = (this.front + 1) % this.k;
        }
        this.size--;
        return true;
    }

    Front(): number {
        const val = this.front === -1 ? -1 : this.nums[this.front];
        return val;
    }

    Rear(): number {
        const val = this.back === -1 ? -1 : this.nums[this.back];
        return val;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    isFull(): boolean {
        return this.size === this.k;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */