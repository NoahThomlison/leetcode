/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var getIntersectionNode = function(headA, headB) {
    let cloneA = headA
    let cloneB = headB
    while(headA !== headB){
        if(!headA.next && !headB.next) return null
        headA = (headA.next ? headA.next : cloneB)
        headB = (headB.next ? headB.next : cloneA)
        
    }
    return(headA)

};