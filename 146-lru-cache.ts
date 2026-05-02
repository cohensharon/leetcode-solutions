/**
 * Solution explanation: 
 * Map of number to node, and linked list of nodes
 * Linked list is in order of least recently used to most recently used
 */

class CacheNode {
    key: number;
    value: number;
    next: CacheNode | null;
    prev: CacheNode | null;

    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    private map: Map<number, CacheNode>;
    private head: CacheNode | null;
    private tail: CacheNode | null;
    private capacity: number;
    
    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map<number, CacheNode>();
        this.head = null;
        this.tail = null;
    }

    get(key: number): number {
        const node = this.map.get(key);

        if (!node) return -1;
        this.moveToTail(node);

        return node.value;
    }

    put(key: number, value: number): void {
        // if key exist, it becomes MRU and return it
        const node = this.map.get(key);
        if(node) {
            node.value = value;
            this.moveToTail(node);
            return;
        }

        // key doesn't exist, add to tail
        const newNode = new CacheNode(key, value);
        this.map.set(key, newNode);
        this.addToTail(newNode);

        // if size is more than capacity, remove head 
        if (this.map.size > this.capacity) {
            this.removeHead();
        }
    }

    private moveToTail(node: CacheNode): void {
        if (this.tail === node) return;

        this.removeNode(node);
        this.addToTail(node);
    }

    private addToTail(node: CacheNode): void {
        if (!this.tail) {
            this.head = node;
            this.tail = node;
            return;
        }

        node.prev = this.tail;
        node.next = null;
        this.tail.next = node;
        this.tail = node;
    }

    private removeNode(node: CacheNode): void {
        const p = node.prev;
        const n = node.next;

        if (p) {
            p.next = n;
        } else {
            // node is head
            this.head = n;
        }

        if (n) {
            n.prev = p;
        } else {
            // node is tail
            this.tail = p;
        }

        node.prev = null;
        node.next = null;
    }

    private removeHead(): void {
        if (!this.head) return;
        const oldHead = this.head;
        this.removeNode(oldHead);
        this.map.delete(oldHead.key);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */