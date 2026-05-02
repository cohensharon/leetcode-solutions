/**
 * Solution explanation: 
 * Move fast pointer n nodes, then move slow and fast until fast is at end, and remove the slow.next node 
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(0);
    dummy.next = head;

    let fast: ListNode | null = dummy;
    for (let i = 0; i < n; i++) {
        fast = fast?.next;
    }

    let slow = dummy;
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next?.next;
    return dummy.next;
};