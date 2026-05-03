/**
 * Solution explanation: 
 * with singly linked list, use function to return node before index as helper
 */

class LLNode {
    val: number;
    next: LLNode | null;
    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}

class MyLinkedList {
    head: LLNode | null;
    tail: LLNode | null;
    listSize: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.listSize = 0;
    }

    private findNodeBeforeIndex(index: number): LLNode | null {
        if (index >= this.listSize) return null;

        const dummy = new LLNode(0);
        dummy.next = this.head;

        let current = dummy;

        for (let i = 0; i < index; i++) {
            current = current.next!;
        }
        return current;
    }

    get(index: number): number {
        if (index < 0 || index >= this.listSize) return -1;

        const before = this.findNodeBeforeIndex(index);
        return before.next?.val ?? -1;
    }

    addAtHead(val: number): void {
        const node = new LLNode(val);
        node.next = this.head;
        this.head = node;
        if (this.head.next === null) {
            this.tail = this.head;
        }
        this.listSize++;
    }

    addAtTail(val: number): void {
        const node = new LLNode(val);

        if (this.tail) {
            this.tail.next = node;
            this.tail = this.tail.next;
        } else {
            this.head = node;
            this.tail = node;
        }
        this.listSize++;
    }

    addAtIndex(index: number, val: number): void {
        if (index > this.listSize) return;
        if (index <= 0) {
            this.addAtHead(val);
        } else if (index == this.listSize) {
            this.addAtTail(val);
        } else {
            const before = this.findNodeBeforeIndex(index);
            const tmp = before.next;
            const newNode = new LLNode(val);
            before.next = newNode;
            newNode.next = tmp;
            if (index === 0) {
                this.head = newNode;
            }
            this.listSize++;
        }
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.listSize) return;
        const before = this.findNodeBeforeIndex(index)!;

        if (this.listSize === 1) {
            this.head = null;
            this.tail = null;
        } else {
            before.next = before.next!.next;
            if (index === 0) {
            this.head = before.next;
            }
            if (index === this.listSize - 1) {
            this.tail = before;
            }
        }
        this.listSize--;
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */