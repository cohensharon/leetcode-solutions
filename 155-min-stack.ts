/**
 * Solution explanation: 
 * maintain 2 arrays -- one stack, and one which is the current min number at that point
 */

class MinStack {
    private stack: number[];
    private minStack: number[];
    constructor() {
        this.stack = new Array();
        this.minStack = new Array();
    }

    push(val: number): void {
        this.stack.push(val);
        if (this.minStack.length === 0) {
            this.minStack.push(val);
        } else { 
            const currMin = Math.min(this.minStack.at(-1), val);
            this.minStack.push(currMin);
        }
    }

    pop(): void {
        this.minStack.pop();
        this.stack.pop();
    }

    top(): number {
        return this.stack.at(-1);
    }

    getMin(): number {
        return this.minStack.at(-1);
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */