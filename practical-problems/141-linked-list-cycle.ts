function hasCycle(head: ListNode | null): boolean {
    if(!head) return false;

    let slow: ListNode = head;
    let fast: ListNode = head;

    // loop while fast and fast.next are not null
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) return true;
    }

    return false;
}