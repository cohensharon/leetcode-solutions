/**
 * Solution explanation: 
 * Helper function with minimum and maximum to bound the values node in 
 * this subtree can be
 */

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function isValidBST(root: TreeNode | null): boolean {
    
    function helper(node: TreeNode | null, min: number, max: number): boolean {
        if (node === null) return true;
        if (node.val <= min || node.val >= max) return false;

        // this is max of left subtree, and min of right subtree
        const leftValid = helper(node.left, min, node.val);
        const rightValid = helper(node.right, node.val, max);
        return leftValid && rightValid;
    }
    return helper(root, -Infinity, Infinity);
};


