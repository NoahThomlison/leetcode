/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {  
    let dfs = (node) => {
        if(!node){
            return(0)
        }
        let a = dfs(node.left)
        let b = dfs(node.right)
        return (a > b ? a + 1 : b + 1)
    }
    
    return(dfs(root))
};