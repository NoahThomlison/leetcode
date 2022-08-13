/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let array = []
    while(head !== null){
        array.push(head.val)
        head = head.next
    }
    let arrayString = array.toString()
    let reverseString = array.reverse().toString()
    console.log(arrayString, reverseString)
    return(arrayString === reverseString ? true : false)
};